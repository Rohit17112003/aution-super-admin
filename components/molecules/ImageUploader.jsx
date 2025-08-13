"use client";

import { useState, useRef } from "react";

const SimpleImageUploader = ({ height = "9rem", width = "100%" }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return; 

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; 
      }
    };

    reader.readAsDataURL(file);
  };

  const handleDelete = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className="relative rounded-lg flex items-center justify-center bg-light overflow-hidden cursor-pointer"
        style={{ height, width }}
        onClick={() => {
          if (!image) {
            fileInputRef.current?.click();
          }
        }}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {!image ? (
          <div className="text-center select-none z-0">
            <i className="ri-image-line text-2xl text-gray-500" />
            <p className="text-sm text-gray-500">Click or drag to upload</p>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <button
              type="button"
              onClick={handleDelete}
              className="absolute top-1 right-1 z-10 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              <i className="ri-close-line text-sm" />
            </button>
            <img
              src={image}
              alt="Uploaded preview"
              className="object-contain w-full h-full rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleImageUploader;
