import React from 'react';

interface BackgroundImageProps {
  imageUrl: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl }) => {
  const styles: React.CSSProperties = {
    background: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Adjust height as needed
  };

  return (
    <div style={styles}>
      {/* Your content goes here */}
      <h1>Hello, This is your background image</h1>
    </div>
  );
};

export default BackgroundImage;