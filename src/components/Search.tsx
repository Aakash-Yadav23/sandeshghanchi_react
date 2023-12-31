import React from "react";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
// import {FiSearch} from 'react-icons/fi'
// import {FiSearch} from 'react-icons/fi'
// import {FiSearch} from 'react-icons/fi'
// import {FiSearch} from 'react-icons/fi'
// import {FiSearch} from 'react-icons/fi'

const Search = () => {
  return (
    <div className="min-w-[250x] w-full md:w-full md:max-w-[800px] flex items-center bg-white m-auto shadow-md  active:outline-blue-600 shadow-gray-400  rounded-md overflow-hidden">
     <Link to="/communitylist">
       <div className="h-full bg-red-600 text-white p-5 cursor-pointer">
        <FiSearch />
      </div>
      </Link>
      <input
        type="text"
        placeholder="नाम या स्थान खोजें"
        className="px-[15px] outline-none w-full"
      />
      <div className="location text-red-500 text-[20px] flex items-center gap-[10px] pr-[25px]">
        <MdLocationPin size={25} />
        <span>भारत</span>
      </div>
    </div>
  );
};

export default Search;
