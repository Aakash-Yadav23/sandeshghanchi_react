"use client"
import React, { useState } from "react";
import OrganisationFeed from "../../components/OrganisationFeed";
import { Link } from "react-router-dom";

const Organization = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className="organization w-full flex flex-col bg-gray-100 ">
       <h1 className="text-5xl font-medium text-[#B80433] mt-10 pl-10 bg-gray-100 mb-10">
        Social Institution
      </h1>
      <div className="flex flex-col content-center items-center">
     <OrganisationFeed/>
     <OrganisationFeed/>
     <OrganisationFeed/>
     </div>
     <div className="flex justify-center items-center mb-5 mt-4">
      <Link to="/organisationlist">
        <button className="bg-[#B80433] p-3 text-center text-white rounded-md">
          Upload
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Organization;
