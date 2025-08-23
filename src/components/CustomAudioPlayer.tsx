'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAudioUrl } from '@/config/audio';
import {
    IoPlay,
    IoPause,
    IoPlaySkipBack,
    IoPlaySkipForward,
    IoVolumeHigh,
    IoVolumeMedium,
    IoVolumeLow,
    IoVolumeMute,
    IoCheckmarkCircle
} from 'react-icons/io5';

const CustomAudioPlayer = () => {
    const { t, dir } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const [isBackgroundMode, setIsBackgroundMode] = useState(false);



    const audioRef = useRef<HTMLAudioElement>(null);
    const volumeSliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => {
            if (audio.duration && !isNaN(audio.duration)) {
                setDuration(audio.duration);
            }
        };
        const handleLoadedData = () => {
            updateDuration();
        };
        const handleCanPlay = () => {
            updateDuration();
        };
        const handleEnded = () => {
            setIsPlaying(false);
            // Auto-restart the audio after it finishes
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                    setIsPlaying(true);
                }
            }, 1000);
        };

        // Prevent audio from stopping due to volume changes
        const handleVolumeChange = () => {
            // This ensures volume changes don't interrupt playback
        };

        // Enable background audio for mobile
        const enableBackgroundAudio = () => {
            if ('mediaSession' in navigator) {
                navigator.mediaSession.setActionHandler('play', () => {
                    togglePlay();
                });
                navigator.mediaSession.setActionHandler('pause', () => {
                    togglePlay();
                });
                navigator.mediaSession.setActionHandler('stop', () => {
                    if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current.currentTime = 0;
                        setIsPlaying(false);
                    }
                });
                navigator.mediaSession.setActionHandler('seekbackward', () => {
                    skipBackward();
                });
                navigator.mediaSession.setActionHandler('seekforward', () => {
                    skipForward();
                });
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('loadeddata', handleLoadedData);
        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('volumechange', handleVolumeChange);

        // Set initial volume
        audio.volume = volume;

        // Force load metadata
        audio.load();

        // Enable background audio
        enableBackgroundAudio();

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('loadeddata', handleLoadedData);
            audio.removeEventListener('canplay', handleCanPlay);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('volumechange', handleVolumeChange);
        };
    }, [volume]);

    // Close volume slider when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            // Handle click outside if needed in the future
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const togglePlay = useCallback(async () => {
        if (audioRef.current) {
            try {
                if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                    // Update media session
                    if ('mediaSession' in navigator) {
                        navigator.mediaSession.playbackState = 'paused';
                    }
                } else {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    // Update media session
                    if ('mediaSession' in navigator) {
                        navigator.mediaSession.playbackState = 'playing';
                    }
                }
            } catch (error) {
                console.error('Error playing audio:', error);
            }
        }
    }, [isPlaying]);

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setIsMuted(false);
        if (audioRef.current) {
            // Preserve current playback state
            const wasPlaying = !audioRef.current.paused;
            audioRef.current.volume = newVolume;

            // Ensure audio continues playing if it was playing before
            if (wasPlaying && audioRef.current.paused) {
                audioRef.current.play().catch(console.error);
            }
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            // Preserve current playback state
            const wasPlaying = !audioRef.current.paused;

            if (isMuted) {
                audioRef.current.volume = volume;
                setIsMuted(false);
            } else {
                audioRef.current.volume = 0;
                setIsMuted(true);
            }

            // Ensure audio continues playing if it was playing before
            if (wasPlaying && audioRef.current.paused) {
                audioRef.current.play().catch(console.error);
            }
        }
    };

    const skipForward = useCallback(() => {
        if (audioRef.current && duration > 0) {
            const newTime = Math.min(currentTime + 30, duration);
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }, [currentTime, duration]);

    const skipBackward = useCallback(() => {
        if (audioRef.current) {
            const newTime = Math.max(currentTime - 30, 0);
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }, [currentTime]);

    const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audioRef.current) return;

        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const progressBarWidth = rect.width;
        const clickPercentage = clickX / progressBarWidth;
        const newTime = clickPercentage * duration;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time: number) => {
        if (isNaN(time) || time === 0) return '0:00';
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };



    // Keyboard controls for audio
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!audioRef.current) return;

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    skipBackward();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    skipForward();
                    break;
                case ' ':
                    e.preventDefault();
                    togglePlay();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currentTime, duration, skipBackward, skipForward, togglePlay]);

    // Handle background/foreground state for mobile
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsBackgroundMode(true);
                // Update media session when app goes to background
                if ('mediaSession' in navigator && audioRef.current) {
                    navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
                }
            } else {
                setIsBackgroundMode(false);
            }
        };

        const handlePageShow = () => {
            setIsBackgroundMode(false);
        };

        const handlePageHide = () => {
            setIsBackgroundMode(true);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('pageshow', handlePageShow);
        window.addEventListener('pagehide', handlePageHide);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('pageshow', handlePageShow);
            window.removeEventListener('pagehide', handlePageHide);
        };
    }, [isPlaying]);

    const getVolumeIcon = () => {
        if (isMuted || volume === 0) return <IoVolumeMute className="w-6 h-6" />;
        if (volume < 0.3) return <IoVolumeLow className="w-6 h-6" />;
        if (volume < 0.7) return <IoVolumeMedium className="w-6 h-6" />;
        return <IoVolumeHigh className="w-6 h-6" />;
    };

    return (
        <div className="relative max-w-5xl mx-auto">


            {/* Main Player Container */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-green-200 overflow-hidden relative">
                {/* Header Section */}
                <div className="relative p-4 sm:p-6 lg:p-8 text-center border-b-2 border-green-200 overflow-hidden">
                    {/* Header Background Image */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80"></div>
                        <Image
                            src="/QuranImageForVideo.jpg"
                            alt="Quran Background"
                            fill
                            className="object-cover opacity-40"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center mb-4 gap-3 sm:gap-4 relative z-10">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-xl">
                            <IoCheckmarkCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                                {t.videoPlayer.title}
                            </h3>
                            <p className="text-sm sm:text-base text-green-100 font-medium drop-shadow-md">
                                {t.videoPlayer.videoSource}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Audio Controls */}
                <div className="p-4 sm:p-6 lg:p-8">
                    {/* Progress Bar */}
                    <div className="mb-6 sm:mb-8">
                        <div className="relative">
                            <div
                                className="w-full h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner cursor-pointer relative"
                                onClick={handleProgressBarClick}
                            >
                                <div
                                    className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-100 ease-out relative"
                                    style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                                >
                                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full shadow-lg border-2 border-green-500 ${dir === 'rtl' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`}></div>
                                </div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max={duration || 0}
                                value={currentTime}
                                onChange={handleSeek}
                                className="absolute inset-0 w-full h-3 sm:h-4 opacity-0 cursor-pointer z-10"
                                style={{ cursor: 'pointer' }}
                                dir={dir}
                            />
                            <div className={`flex justify-between text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 font-medium ${dir === 'rtl' ? 'flex-row-reverse' : 'justify-between'}`}>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-500 mb-1">{dir === 'rtl' ? 'الوقت الحالي' : 'Current'}</span>
                                    <span className="font-mono text-lg">{formatTime(currentTime)}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-500 mb-1">{dir === 'rtl' ? 'المدة الكلية' : 'Total'}</span>
                                    <span className="font-mono text-lg">{formatTime(duration)}</span>
                                </div>
                            </div>




                        </div>
                    </div>

                    {/* Main Controls */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <button
                            onClick={skipBackward}
                            className="p-3 sm:p-4 text-green-600 hover:text-green-800 transition-all duration-200 hover:scale-110 rounded-full hover:bg-green-50"
                            title={t.videoPlayer.skipBackward}
                        >
                            <IoPlaySkipBack className={`w-6 h-6 sm:w-8 sm:h-8 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                        </button>

                        <button
                            onClick={togglePlay}
                            className="p-4 sm:p-6 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl transform hover:rotate-3"
                            title={isPlaying ? t.videoPlayer.pause : t.videoPlayer.play}
                        >
                            {isPlaying ? (
                                <IoPause className="w-8 h-8 sm:w-10 sm:h-10" />
                            ) : (
                                <IoPlay className="w-8 h-8 sm:w-10 sm:h-10" />
                            )}
                        </button>

                        <button
                            onClick={skipForward}
                            className="p-3 sm:p-4 text-green-600 hover:text-green-800 transition-all duration-200 hover:scale-110 rounded-full hover:bg-green-50"
                            title={t.videoPlayer.skipForward}
                        >
                            <IoPlaySkipForward className={`w-6 h-6 sm:w-8 sm:h-8 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {/* Volume and Status */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Volume Control */}
                        <div className="flex items-center gap-3" ref={volumeSliderRef}>
                            <button
                                onClick={toggleMute}
                                className="p-2 sm:p-3 text-green-600 hover:text-green-800 transition-colors duration-200 rounded-lg hover:bg-green-50"
                                title={isMuted ? t.videoPlayer.unmute : t.videoPlayer.mute}
                            >
                                {getVolumeIcon()}
                            </button>

                            <div className="relative group">
                                <div className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={isMuted ? 0 : volume}
                                        onChange={handleVolumeChange}
                                        className="w-20 sm:w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                        style={{
                                            background: dir === 'rtl'
                                                ? `linear-gradient(to left, #10b981 0%, #10b981 ${(isMuted ? 0 : volume) * 100}%, #e5e7eb ${(isMuted ? 0 : volume) * 100}%, #e5e7eb 100%)`
                                                : `linear-gradient(to right, #10b981 0%, #10b981 ${(isMuted ? 0 : volume) * 100}%, #e5e7eb ${(isMuted ? 0 : volume) * 100}%, #e5e7eb 100%)`
                                        }}
                                        title="Volume"
                                        dir={dir}
                                    />
                                    <span className="text-xs text-gray-500 font-medium hidden sm:block">
                                        {Math.round((isMuted ? 0 : volume) * 100)}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-50 text-green-700 rounded-full">
                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                            <span className="text-xs sm:text-sm font-medium">
                                {isPlaying ? t.videoPlayer.nowPlaying : t.videoPlayer.readyToPlay}
                            </span>
                            {isBackgroundMode && (
                                <div className="flex items-center gap-1 ml-2 pl-2 border-l border-green-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-blue-600 font-medium">Background</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src={getAudioUrl('surahAlBaqarah')}
                preload="metadata"
                playsInline
                webkit-playsinline="true"
                onLoadedMetadata={() => {
                    if (audioRef.current) {
                        audioRef.current.volume = volume;
                        setDuration(audioRef.current.duration);

                        // Set media session metadata for background playback
                        if ('mediaSession' in navigator) {
                            navigator.mediaSession.metadata = new MediaMetadata({
                                title: 'Surah Al-Baqarah - الشيخ محمود خليل الحصري',
                                artist: 'Holy Quran Online',
                                album: 'القرآن الكريم',
                                artwork: [
                                    { src: '/quran.png', sizes: '512x512', type: 'image/png' }
                                ]
                            });
                        }
                    }
                }}
                onLoadedData={() => {
                    if (audioRef.current) {
                        setDuration(audioRef.current.duration);
                    }
                }}
                onCanPlay={() => {
                    if (audioRef.current) {
                        setDuration(audioRef.current.duration);
                    }
                }}
                onError={(e) => {
                    console.error('Audio error:', e);
                }}
            />

        </div>
    );
};

export default CustomAudioPlayer;
