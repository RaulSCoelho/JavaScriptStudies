import React from 'react';
import { useSelector } from 'react-redux';

const Video = () => {
  const { activeModule, activeLesson } = useSelector((state) => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '40pt' }}>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>
  );
};

export default Video;
