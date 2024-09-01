"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "blender",
    description:
      " I have Created many models in blender , this include Character modeling, Exterior design, interior design, props, etc",
    link: "/blender",
    image: "/blender.png",
  },
  {
    id: 2,
    title: "Illustrator",
    description:
      " I have created many illustrator work on logos, banner, menu design, thumbnails,etc",
    link: "/",
    image: "/illustrator.png",
  },
  {
    id: 3,
    title: "Maya",
    description:
      " I have created Many models in maya they are all basic like designing interior, exterior, etc",
    link: "/",
    image: "/maya.png",
  },
  {
    id: 4,
    title: "Unity",
    description:
      " I have Created game assets as well as an 2d and 3d game in unity include the animation and virtual scripting",
    link: "/",
    image: "/unity.png",
  },
];

const FullscreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden rounded-3xl mt-10">
      {carouselItems.map((item, index) => (
        <Link key={item.id} href={item.link} passHref>
          <div
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 " />{" "}
            {/* Overlay for better text visibility */}
            <div className="z-10">
              <h2 className="text-4xl font-bold text-white z-10">
                {item.title}
              </h2>
              <h2 className="text-xl text-white z-10">{item.description}</h2>
            </div>
          </div>
        </Link>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default FullscreenCarousel;
