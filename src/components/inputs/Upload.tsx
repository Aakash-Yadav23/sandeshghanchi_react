// Upload.tsx
import React from "react";
import { FcUpload } from "react-icons/fc";
import img from "../../public/profile.jpg";

const Upload = (props:any) => {
  const { selectedImage, handleImageChange } = props;

  return (
    <div className="relative flex flex-col items-center overflow-hidden w-[250px] h-[300px] bg-gray-100 rounded-md">
      <div className="image-show-here absolute inset-0 flex justify-center items-center">
        {!selectedImage && <img src={img} alt="Uploaded Preview" />}

        {selectedImage && typeof selectedImage !== "string" && (
          selectedImage.map((image:any, index:any) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Uploaded Preview ${index}`}
              className="h-full w-full object-cover"
            />
          ))
        )}
      </div>

      <div className="absolute bottom-[15px] w-full gap-[10px] flex items-center flex-col">
        <label className="w-[40px] cursor-pointer shadow-md flex items-center justify-center p-[10px] bg-white rounded-full">
          <FcUpload size={20} />
          <input
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            type="file"
            accept="image/*"
            onChange={(event) => handleImageChange(event)}
            multiple // Allow multiple image selection
          />
        </label>
        <span className="text-center text-white text-sm">Upload your photo</span>
      </div>
    </div>
  );
};

export default Upload;
