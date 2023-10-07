// HomeForm.tsx
import React, { useState } from "react";
import Upload from "./inputs/Upload";
import Input from "./inputs/Input";
import { useDispatch } from "react-redux";
import { createEpatrika } from "../redux/action/EpatrikaAction";
import { AnyAction } from "redux";
import { createNewsAction } from "../redux/action/NewsAction";

const HomeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const [selectedImages, setSelectedImages] = useState<string[]>([]);


  const dispatch = useDispatch();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  
  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }
  
  const onLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const imageUrls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            
            imageUrls.push(reader.result as string);
            setSelectedImages(imageUrls);
          }
        };

        reader.readAsDataURL(files[i]);
      }
    }
  };
console.log('cate',category)
  const handleUpload = () => {
    if (title || description || location || selectedImages.length > 0) {
      const newsdata={
      title,
      description,
      location,
      category,
     
      images:selectedImages
    }
      dispatch(createNewsAction(newsdata) as unknown as AnyAction);
    }
  }

  return (
    <div className="form flex flex-col gap-[30px] items-center md:items-start px-[25px] md:flex-row  justify-between mb-5">
      <div className="inputs flex flex-col gap-[15px] w-full md:w-[70%]">
        <span>Home Details</span>

        <select name="cars" value={category} id="cars" onChange={(e)=>setCategory(e.target.value)}>
  <option value="टॉप न्यूज़">टॉप न्यूज़</option>
  <option value="सामाजिक">सामाजिक</option>
  <option value="धार्मिक">धार्मिक</option>

  <option value="शेक्शनिक">शेक्शनिक</option>
  <option value="अन्य">अन्य</option>
</select>
        <Input placeholder="Title" primary value={title} onChange={onTitleChange} />
        <Input placeholder="Description" primary value={description} onChange={onDescriptionChange} />
        <Input placeholder="Location" primary value={location} onChange={onLocationChange} />

        <br />
        <button className="bg-[#B80433] text-white p-3 w-[100px] rounded-full" onClick={handleUpload}>
          Upload
        </button>
      </div>

      <div className="md:mt-[38px] uploads h-fit shadow-md">
      {selectedImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Preview ${index}`} className="preview-image" />
        ))}

        {/* Input for selecting images */}
        <input type="file" accept="image/*" onChange={handleImageChange} multiple />
    
        {/* <Upload selectedImage={selectedImages} handleImageChange={handleImageChange} /> */}
      </div>
    </div>
  );
};

export default HomeForm;
