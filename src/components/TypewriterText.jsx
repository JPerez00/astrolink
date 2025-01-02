// src/components/TypewriterText.jsx
import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterText() {
  return (
    <div className="text-xl text-zinc-700 dark:text-zinc-300 h-6 font-medium">
      <Typewriter
        options={{
          strings: [
            "Software developer 💻",
            "Writer 🖋",
            "Photographer 📸"
          ],
          autoStart: true,
          loop: true,
          delay: 55,
          deleteSpeed: 35
        }}
      />
    </div>
  );
}

export default TypewriterText;
