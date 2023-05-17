import React from "react";

const HologramImage = () => {
  return (
    <div className="relative">
      <div className="perspective-3d w-80 h-80">
        <div className="transform translateZ(-100px)">

        <img
          src="/assets/profileImg.png"
          alt="Holo"
          className="rounded-full h-80 w-80"
        />
        </div>
      </div>
      <div className="w-80 h-80 absolute inset-0 bg-gradient-to-br from-green-800 via-green-500 to-green-200 rounded-full mix-blend-multipy opacity-50 shadow-xl shadow-white"></div>
    </div>

  );
};

export default HologramImage;
