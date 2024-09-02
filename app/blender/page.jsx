import React from "react";

const page = () => {
  return (
    <div className="bg-hero  w-full h-screen padding">
      <h1 className="text-6xl">Blender </h1>
      <video width="520" height="340" controls preload="none">
        <source src="/blender.avi" type="video/avi" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default page;
