import React, { useState } from 'react';
import './styling/AudiosandVideos.css';

const mp3Files = [
  'https://example.com/audio1.mp3',
  'https://example.com/audio2.mp3',
  'https://example.com/audio3.mp3',
  'https://example.com/audio4.mp3',
  'https://example.com/audio5.mp3',
  'https://example.com/audio6.mp3',
  'https://example.com/audio7.mp3',
  'https://example.com/audio8.mp3',
  'https://example.com/audio9.mp3',
];

const videoFiles = [
  'https://example.com/video1.mp4',
  'https://example.com/video2.mp4',
  'https://example.com/video3.mp4',
  'https://example.com/video4.mp4',
  'https://example.com/video5.mp4',
  'https://example.com/video6.mp4',
  'https://example.com/video7.mp4',
  'https://example.com/video8.mp4',
  'https://example.com/video9.mp4',
];

function AudioList(props) {
  const { mp3Files } = props;

  return (
    <div className="audio-list">
      {mp3Files.map((mp3File, index) => (
        <div key={index} className="audio-item">
          <h3>Audio {index + 1}</h3>
          <audio controls>
            <source src={mp3File} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
}

function VideoList(props) {
  const { videoFiles } = props;

  return (
    <div className="video-list">
      {videoFiles.map((videoFile, index) => (
        <div key={index} className="video-item">
          <h3>Video {index + 1}</h3>
          <video controls>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
      ))}
    </div>
  );
}

function AudiosandVideos() {
  const [activeTab, setActiveTab] = useState('audio');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="audios-and-videos-container">
      {activeTab === 'audio' && <h2>Audio</h2>}
      {activeTab === 'video' && <h2>Video</h2>}
      <div className="audios-and-videos-tabs">
        <button onClick={() => handleTabClick('audio')} className={activeTab === 'audio' ? 'active' : ''}>Audio</button>
        <button onClick={() => handleTabClick('video')} className={activeTab === 'video' ? 'active' : ''}>Video</button>
      </div>
      {activeTab === 'audio' && <AudioList mp3Files={mp3Files} />}
      {activeTab === 'video' && <VideoList videoFiles={videoFiles} />}
    </div>
  );
}

export default AudiosandVideos;