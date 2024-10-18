"use client";
import React from "react";
import Typical from "react-typical";

export const Banner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full md:w-1/3 text-left">
        <h1 className="text-3xl uppercase">Hi, I am Linh</h1>
        <Typical
          steps={[
            "I am a Full Stack!",
            2000,
            "I am a Designer",
            2000,
            "I am a Mobile Developer",
            2000,
          ]}
          loop={Infinity}
          wrapper="span"
        />
      </div>

      
    </div>
  );
};
