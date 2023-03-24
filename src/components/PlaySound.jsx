import React, { useState } from "react";

const PlaySound = (soundFile) => {
  const [audio] = useState(new Audio(`${soundFile}.mp3`));

  const handleClick = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={handleClick}>Click me to play a sound</button>
    </div>
  );
};

export default PlaySound;
