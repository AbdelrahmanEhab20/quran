'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Video Player Component for Surah Al-Baqarah
const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime] = useState(0);
    const { t, dir } = useLanguage();

    const iframeRef = useRef<HTMLIFrameElement>(null);

    // YouTube video ID for Surah Al-Baqarah
    const videoId = "dQw4w9WgXcQ"; // This should be replaced with actual Quran video ID

    const togglePlay = () => {
        if (iframeRef.current) {
            // Send message to YouTube iframe to play/pause
            const message = isPlaying ? 'pauseVideo' : 'playVideo';
            iframeRef.current.contentWindow?.postMessage(
                JSON.stringify({ event: 'command', func: message, args: [] }),
                '*'
            );
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage(
                JSON.stringify({ event: 'command', func: 'setVolume', args: [newVolume * 100] }),
                '*'
            );
        }
        if (newVolume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
    };

    const toggleMute = () => {
        if (iframeRef.current) {
            if (isMuted) {
                iframeRef.current.contentWindow?.postMessage(
                    JSON.stringify({ event: 'command', func: 'setVolume', args: [volume * 100] }),
                    '*'
                );
                setIsMuted(false);
            } else {
                iframeRef.current.contentWindow?.postMessage(
                    JSON.stringify({ event: 'command', func: 'setVolume', args: [0] }),
                    '*'
                );
                setIsMuted(true);
            }
        }
    };

    const skipForward = () => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage(
                JSON.stringify({ event: 'command', func: 'seekTo', args: [currentTime + 30] }),
                '*'
            );
        }
    };

    const skipBackward = () => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage(
                JSON.stringify({ event: 'command', func: 'seekTo', args: [Math.max(currentTime - 30, 0)] }),
                '*'
            );
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="max-w-4xl mx-auto" dir={dir}>
            {/* YouTube Video Player */}
            <div className="relative mb-6">
                <iframe
                    ref={iframeRef}
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&modestbranding=1&showinfo=0`}
                    title={t.videoPlayer.title}
                    className="w-full rounded-xl shadow-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                {/* Video Overlay Controls */}
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl flex items-center justify-center pointer-events-none">
                    <button
                        onClick={togglePlay}
                        className="p-8 rounded-full bg-white bg-opacity-90 shadow-2xl hover:bg-opacity-100 transition-all duration-300 hover:scale-110 pointer-events-auto"
                    >
                        {isPlaying ? (
                            <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Player Controls */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg">
                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="w-full h-4 bg-gray-200 rounded-full relative overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-300 w-0">
                            {/* Progress will be updated via YouTube API */}
                        </div>
                    </div>
                    <div className="flex justify-between text-sm text-green-600 mt-2 font-medium">
                        <span>{formatTime(currentTime)}</span>
                        <span>Loading...</span>
                    </div>
                </div>

                {/* Main Controls */}
                <div className="flex items-center justify-center space-x-8 mb-6">
                    <button
                        onClick={skipBackward}
                        className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-green-100"
                        title={t.videoPlayer.skipBackward}
                    >
                        <svg className="w-7 h-7 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4z" />
                            <path d="M4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                        </svg>
                    </button>

                    <button
                        onClick={togglePlay}
                        className="p-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 transform hover:rotate-3"
                    >
                        {isPlaying ? (
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={skipForward}
                        className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-green-100"
                        title={t.videoPlayer.skipForward}
                    >
                        <svg className="w-7 h-7 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2a1 1 0 00-1.6.8v6a1 1 0 001.6.8l5.334-4z" />
                            <path d="M19.933 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 7.2v6a1 1 0 001.6.8l5.334-4z" />
                        </svg>
                    </button>
                </div>

                {/* Volume Control */}
                <div className="flex items-center justify-center space-x-4">
                    <button
                        onClick={toggleMute}
                        className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-green-100"
                        title={isMuted ? t.videoPlayer.unmute : t.videoPlayer.mute}
                    >
                        {isMuted || volume === 0 ? (
                            <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                <path d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                            </svg>
                        ) : volume < 0.5 ? (
                            <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        )}
                    </button>

                    <div className="relative">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-28 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            title={t.videoPlayer.volume}
                        />
                    </div>
                </div>

                {/* Status */}
                <div className="text-center mt-6">
                    <p className="text-sm text-green-600 font-medium">
                        {isPlaying ? (
                            <span className="flex items-center justify-center space-x-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                <span>{t.videoPlayer.nowPlaying}</span>
                            </span>
                        ) : (
                            <span className="text-green-500">{t.videoPlayer.readyToPlay}</span>
                        )}
                    </p>
                </div>
            </div>

            {/* Video Source Info */}
            <div className="text-center mt-4">
                <p className="text-xs text-gray-500">
                    {t.videoPlayer.videoSource}
                </p>
            </div>
        </div>
    );
};

export default VideoPlayer;
