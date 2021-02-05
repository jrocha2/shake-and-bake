import React from 'react';
import ImageGrid from '../components/imageGrid';
import HeaderBar from '../components/headerBar';

export default function MainPage() {

  return (
    <div style={{ flexGrow: 1 }}>
      <HeaderBar />
      <ImageGrid />
    </div>
  );
}