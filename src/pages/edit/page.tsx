import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/inputs/Input";
import {
  createNewsAction,
  detailsNewsAction,
  updateNewsAction,
} from "../../redux/action/NewsAction";
import { AnyAction } from "redux";
import { useParams } from "react-router-dom";

const EditNews = () => {
  const { id } = useParams();
  const { loading, NewsDetails } = useSelector(
    (state: any) => state?.newsDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(detailsNewsAction(id) as unknown as AnyAction);
    }
  }, [id]);

  const [title, setTitle] = useState(NewsDetails?.title || "");
  const [description, setDescription] = useState(
    NewsDetails?.description || ""
  );
  const [location, setLocation] = useState(NewsDetails?.location || "");
  const [category, setCategory] = useState(NewsDetails?.category || "");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>(NewsDetails?.images || []);

  console.log("news", NewsDetails);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const onLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

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

  const handleImageDelete = (index: number) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  const handleUpload = () => {
    if (title || description || location || selectedImages.length > 0) {
      const updatedData = {
        title,
        description,
        location,
        category,
        images: selectedImages,
      };
      if (id) {
        dispatch(updateNewsAction(id, updatedData) as unknown as AnyAction);
      }
      // Dispatch the create news action
    }
  };

  return (
    <div className="relative text-red-600 w-full">
      <div className="form flex flex-col gap-[30px] items-center md:items-start px-[25px] md:flex-row justify-between mb-5">
        <div className="inputs flex flex-col gap-[15px] w-full md:w-[70%]">
          <span>Home Details</span>
          <select
            name="category"
            value={category}
            required

            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="टॉप न्यूज़">टॉप न्यूज़</option>
            <option value="सामाजिक">सामाजिक</option>
            <option value="धार्मिक">धार्मिक</option>
            <option value="शेक्शनिक">शेक्शनिक</option>
            <option value="अन्य">अन्य</option>
          </select>
            
          <Input required placeholder="Title" value={title} onChange={onTitleChange} />
          <Input
            placeholder="Description"
            value={description}
            onChange={onDescriptionChange}
            required
          />
          <Input
            placeholder="Location"
            value={location}
            required

            onChange={onLocationChange}
          />
          <br />
          <button
            className="bg-[#B80433] text-white p-3 w-[100px] rounded-full"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>

        <div className="md:mt-[38px] uploads h-fit shadow-md">
          {selectedImages.map((imageUrl, index) => (
            <div key={index} className="preview-image-container">
              <img
                src={imageUrl}
                alt={`Preview ${index}`}
                className="preview-image"
              />
              <button onClick={() => handleImageDelete(index)}>Delete</button>
            </div>
          ))}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            required
          />
        </div>
        <div className="md:mt-[38px] uploads h-fit shadow-md">
          {NewsDetails?.images?.map((img: any, index: number) => (
            <img
              key={index}
              src={img?.url}
              alt={`Preview ${index}`}
              className="preview-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditNews;
