import React, { useEffect } from "react";
import Img from "../../public/engineer.jpeg";

import { BsShare } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsNewsAction } from "../../redux/action/NewsAction";
import { AnyAction } from "redux";


interface summaryProps {
  title: String,
  description: String,
  img: String,
  location: String,
}

const Summary: React.FC = () => {
const {id}=useParams();
  const {loading,NewsDetails} = useSelector((state:any) => state?.newsDetails)

  const dispatch=useDispatch();

  useEffect(()=>{
    if (id) {
      
      dispatch(detailsNewsAction(id) as unknown as AnyAction)
    }
  },[])

const  {title, description, img, location} = NewsDetails as summaryProps;

  return (
    <>
      <div className="bg-[#C01D47] h-[50vh] flex justify-center items-center w-full">
        <h1 className="text-5xl text-white text-center relative -top-7  ">
          {NewsDetails?.title}
        </h1>{" "}
      </div>
      <div className="bg-[#EEEEEF] ">
        <div className="w-9/12 mx-auto p-4">
          {/* <!-- Responsive img Container --> */}
          <div className="w-full mx-auto -top-32 relative">
            <img
              src={NewsDetails?.image?.url}
              alt="img"
              className="w-full h-auto block mx-auto"
            />
          </div>

          {/* <!-- Icons --> */}
          <div className="flex justify-between mt-4 relative -top-28">
            <div className="flex items-center text-[#EC5D82]">
              <MdOutlineLocationOn size="20" />
              <span className="">{NewsDetails?.location}</span>
            </div>
            <div className="flex items-center text-[#EC5D82]">
              <span className=" pr-2">Share</span>
              <BsShare size="20" />
            </div>
          </div>

          {/* <!-- Content Div --> */}
          <div className="mt-4 relative -top-28">
            {/* <!-- Place your content here --> */}{" "}
            <p>{NewsDetails?.description}</p>
          </div>

          {/* <!-- Two Images with Responsive Layout --> */}
          <div className="mt-4 flex gap-4 justify-between relative -top-28">
            <div className="w-1/2">
              {
           NewsDetails?.images?.map((img: any, index: number) => (
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
      </div>
    </>
  );
};

export default Summary;
