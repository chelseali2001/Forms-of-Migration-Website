import React, { useState, useEffect } from 'react';
// import { getAllVideos, getAllAudios } from './Frontend/Boundary/DatabaseGateway'; /* uncomment this when merged with backend repo */
import './styling/AudiosandVideos.css';


function AudioList(props) {
  const [allAudios, setallAudios] = useState([]);
  const USE_EFFECT_ONLY_ON_MOUNT = Array.from([])

  // useEffect(() => {
  //   getAllAudios((audioList) => {
  //     if(audioList === null) {
  //       return
  //     }
  //     setallAudios(audioList)
  //   })
  // }, USE_EFFECT_ONLY_ON_MOUNT);

  // uncomment above useEffect when merged with backend repo

  // Test data - TODO: remove this and uncomment above useEffect
  useEffect(() => {
    setallAudios([
      'https://example.com/audio1.mp3',
      'https://example.com/audio2.mp3',
      'https://example.com/audio3.mp3',
      'https://example.com/audio4.mp3',
      'https://example.com/audio5.mp3',
      'https://example.com/audio6.mp3',
      'https://example.com/audio7.mp3',
      'https://example.com/audio8.mp3',
      'https://example.com/audio9.mp3',
    ])
  }, USE_EFFECT_ONLY_ON_MOUNT);

  return (
    <div className="audio-list">
      {allAudios.map((anAudio, index) => (
        <div key={index} className="audio-item">
          <h3>Audio {index + 1}</h3>
          <audio controls>
            <source src={anAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
}

function VideoList(props) {
  const [allVideos, setallVideos] = useState([]);
  const USE_EFFECT_ONLY_ON_MOUNT = Array.from([])

  // useEffect(() => {
  //   getAllVideos((videoList) => {
  //     if(videoList === null) {
  //       return
  //     }
  //     setallVideos(videoList)
  //   })
  // }, USE_EFFECT_ONLY_ON_MOUNT);

  // uncomment above useEffect when merged with backend repo

  // Test data - TODO: remove this and uncomment above useEffect
  useEffect(() => {
    setallVideos([
      'https://example.com/video1.mp4',
      'https://example.com/video2.mp4',
      'https://example.com/video3.mp4',
      'https://example.com/video4.mp4',
      'https://example.com/video5.mp4',
      'https://example.com/video6.mp4',
      'https://example.com/video7.mp4',
      'https://example.com/video8.mp4',
      'https://example.com/video9.mp4',
    ])
  }, USE_EFFECT_ONLY_ON_MOUNT);

  return (
    <div className="video-list">
      {allVideos.map((aVideo, index) => (
        <div key={index} className="video-item">
          <h3>Video {index + 1}</h3>
          <video controls>
            <source src={aVideo} type="video/mp4" />
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
      {activeTab === 'audio' && <AudioList />}
      {activeTab === 'video' && <VideoList />}
    </div>
  );
}

export default AudiosandVideos;