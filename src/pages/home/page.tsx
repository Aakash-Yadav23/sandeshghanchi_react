import React, { useEffect } from "react";
import NewsFeed from "../../components/NewsFeed";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { getAllNewsAction } from "../../redux/action/NewsAction";
import { AnyAction } from "redux";


const Home = () => {
  const { loading, News } = useSelector((state: any) => state?.news);
  let { keyword } = useParams(); // Ensure keyword is a string

  console.log("seafch",keyword)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        dispatch(getAllNewsAction(keyword) as unknown as AnyAction);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [dispatch, keyword]);
  if (loading) {
    return <Loader />;
  }
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
