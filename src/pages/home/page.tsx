import React from "react";
import NewsFeed from "../../components/NewsFeed";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 mt-16 ">
        <NewsFeed />
      </div>
      <div className="flex items-center  justify-center">
        <div className="flex justify-center items-center mb-5">
          <Link to="/newslist">
            <button className="bg-[#B80433] p-4 text-center text-white rounded-md">
              Upload
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
