import React, { Dispatch, useState } from "react";
import MarriageData from "../../components/MarriageData";
import Input from "../../components/inputs/Input";
import Upload from "../../components/inputs/Upload";
import { useDispatch } from "react-redux";
import { createMarraigeAction } from "../../redux/action/MarriageAction";
const Marriage = () => {
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mulNiwas, setMulNiwas] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [education, setEducation] = useState('');
  const [businessLetter, setBusinessLetter] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dispatch: Dispatch<any> = useDispatch();


  console.log('selectedmgae',selectedImage)


  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setSelectedImage(result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const handleUpload=()=>{
    const MarriageData={
      name:fullName,
    }
dispatch(createMarraigeAction(MarriageData))
  }
  return (
    <div className=" text-red-600 w-full mb-5 ">
      <MarriageData />

      <br />
      <div className="form flex flex-col gap-[30px] items-center md:items-start px-[25px] md:flex-row  justify-between">
        <div className="inputs flex flex-col gap-[15px] w-full md:w-[70%]">
          <span>Personal Details</span>

          <Input
            placeholder="Full Name"
            primary
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            placeholder="Father Name"
            primary
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
          <Input
            placeholder="Mul Niwas"
            primary
            value={mulNiwas}
            onChange={(e) => setMulNiwas(e.target.value)}
          />
          <Input
            placeholder="Place of birth"
            primary
            value={placeOfBirth}
            onChange={(e) => setPlaceOfBirth(e.target.value)}
          />
          <Input
            placeholder="Education"
            primary
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          <Input
            placeholder="Business Letter"
            primary
            value={businessLetter}
            onChange={(e) => setBusinessLetter(e.target.value)}
          />
          <Input
            placeholder="E-mail Address"
            primary
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <Input
            placeholder="Mobile Number"
            primary
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Input
            placeholder="Phone Number"
            primary
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <textarea
            className="rounded-[8px]
            outline-blue-500
            p-[15px]
            w-full 
            border
            resize-none"
            placeholder="Address"
            cols={10}
            rows={5}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <textarea
            className="rounded-[8px]
     outline-blue-500
     p-[15px]
    w-full 
    border
    resize-none
    "
            placeholder="Address"
            cols={10}
            rows={5}
          />
          <br />
          <button className="bg-[#B80433] text-white p-3 w-[100px] rounded-full">
            upload
          </button>
        </div>

        <div className="md:mt-[38px] uploads h-fit shadow-md">
          <Upload selectedImage={selectedImage} handleImageChange={handleImageChange} />
        </div>

        <br />
        <div>
          {/* <button className="bg-[#B80433] text-white   p-1">Upload</button> */}
        </div>
      </div>
    </div>
  );
};

export default Marriage;
