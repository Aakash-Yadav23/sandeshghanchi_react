import React, { Dispatch, useEffect, useState } from "react";
import Img from "../public/engineer.jpeg";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { data } from "../data/NewsData";
import { AiFillEdit } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Loader from "./loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { deleteNewsAction } from "../redux/action/NewsAction";
// import { deleteNewsAction } from "../redux/action/NewsAction";


interface NewsData {
  title: string;
  description: string;
  location: string;
  img: string;
}

const NewsFeed: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [price, setPrice] = useState([0, 25000]);
  // const [category, setCategory] = useState("");
  

  // const { title, description, location, img } = data as NewsData;
  const { loading, News } = useSelector((state: any) => state?.news);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [openTab, setOpenTab] = useState(1);

  const TopNews = News?.filter((value:any) => {
    return value.category === 'टॉप न्यूज़';
  });
  const SocialNews = News?.filter((value:any) => {
    return value.category === 'सामाजिक';
  });

  const ReligiousNews = News?.filter((value:any) => {
    return value.category === 'धार्मिक';
  });
  const SectionNews = News?.filter((value:any) => {
    return value.category === 'शेक्शनिक';
  });
  const OtherNews = News?.filter((value:any) => {
    return value.category === 'अन्य';
  });
  const handleDelete=(id:any)=>{
    dispatch(deleteNewsAction(id))
    
  }
  useEffect(()=>{

    console.log('Top',TopNews)
  },[deleteNewsAction])
  if (loading) {
    return <Loader />;
  }
  
  return (
    <>
      <div className="home justify-center  flex flex-col  items-center">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-5 ml-10">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 text-white bg-[hsl(344,96%,37%)] rounded-full active"
            aria-current="page"
            onClick={() => setOpenTab(1)}

          >
            टॉप न्यूज़
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(2)}
            >
            सामाजिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(3)}
            >
            धार्मिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(4)}
            >
            शेक्शनिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(5)}
            >
            अन्य
          </a>
        </li>
      </ul>
        <div className="pt-6 pb-12">
        
          {TopNews?.map((news:any, index:number) => (
            <div key={news._id} className={openTab === 1 ? "block" : "hidden"}>
              <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                <div
                  v-for="card in cards"
                  className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow  mt-4 w-100 mx-2"
                >
                  <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <div>
                      <Link to={`/summary/${news._id}`}  className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                        {news?.title}
                      </Link>
                      <Link to={`/summary/${news._id}`} className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                        {news.description}
                      </Link>
                    </div>
                    <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                      <span className="flex text-[#EC5D82] text-md">
                       
                        <MdOutlineLocationOn size={20} /> {news.location}
                      </span>
                      <span className="flex text-[#EC5D82]">
                        <BsShare size={20} />{" "}
                        <span className="text-md ml-1">शेयर</span>
                      </span>
                    </div>
                  </div>
                  <div className="h-auto  md:w-1/2">
                    <img
                      className="inset-0 h-full w-full object-cover object-center"
                      src={news?.image?.url}
                      alt="News_feed_img"
                    />
                  </div>
                  {/*   drop-drop Starts*/}
                  <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                    <div className="dropdown">
                      <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">
                          <AiFillEdit />
                        </span>
                      </button>
                      <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                        <Link to={`/edit/${news?._id}`}  className="">
                          <a
                            className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Edit
                          </a>
                        </Link>
                        <button className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={(e)=>handleDelete(news?._id)}>
                       
                            Delete
                      
                        </button>
                      </ul>
                    </div>
                  </div>
                  {/*   drop-drop end*/}
                </div>
              </div>

              {/* <!--/ card--> */}
            </div>
          ))}
        </div>

        <div className="pt-6 pb-12">
        
        {SocialNews?.map((news:any, index:number) => (
       <div key={news._id} className={openTab === 2 ? "block" : "hidden"}>
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div
                v-for="card in cards"
                className="flex flex-col md:flex-row overflow-hidden
                                      bg-white rounded-lg shadow  mt-4 w-100 mx-2"
              >
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <div>
                    <Link to={`/summary/${news._id}`}  className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                      {news?.title}
                    </Link>
                    <Link to={`/summary/${news._id}`}  className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                      {news.description}
                    </Link>
                  </div>
                  <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                    <span className="flex text-[#EC5D82] text-md">
                      {" "}
                      <MdOutlineLocationOn size={20} /> {news.location}
                    </span>
                    <span className="flex text-[#EC5D82]">
                      <BsShare size={20} />{" "}
                      <span className="text-md ml-1">शेयर</span>
                    </span>
                  </div>
                </div>
                <div className="h-auto  md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src={news?.image?.url}
                    alt="News_feed_img"
                  />
                </div>
                {/*   drop-drop Starts*/}
                <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                  <div className="dropdown">
                    <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                      <span className="mr-1">
                        <AiFillEdit />
                      </span>
                    </button>
                    <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                      <Link to={`/edit/${news?._id}`}  className="">
                        <a
                          className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Edit
                        </a>
                      </Link>
                      <li onClick={(e)=>handleDelete(news?._id)} className="">
                        <a
                          className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*   drop-drop end*/}
              </div>
            </div>

            {/* <!--/ card--> */}
          </div>
        ))}
      </div>

      <div className="pt-6 pb-12">
        
        {ReligiousNews?.map((news:any, index:number) => (
         <Link to={`/summary/${news._id}`} key={news._id} className={openTab === 3 ? "block" : "hidden"}>
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div
                v-for="card in cards"
                className="flex flex-col md:flex-row overflow-hidden
                                      bg-white rounded-lg shadow  mt-4 w-100 mx-2"
              >
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <div>
                    <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                      {news?.title}
                    </h1>
                    <p className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                      {news.description}
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                    <span className="flex text-[#EC5D82] text-md">
                  
                      <MdOutlineLocationOn size={20} /> {news.location}
                    </span>
                    <span className="flex text-[#EC5D82]">
                      <BsShare size={20} />{" "}
                      <span className="text-md ml-1">शेयर</span>
                    </span>
                  </div>
                </div>
                <div className="h-auto  md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src={news?.image?.url}
                    alt="News_feed_img"
                  />
                </div>
                {/*   drop-drop Starts*/}
                <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                  <div className="dropdown">
                    <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                      <span className="mr-1">
                        <AiFillEdit />
                      </span>
                    </button>
                    <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                      <Link to={`/edit/${news?._id}`}  className="">
                        <a
                          className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Edit
                        </a>
                      </Link>
                      <li onClick={(e)=>handleDelete(news?._id)} className="">
                        <a
                          className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*   drop-drop end*/}
              </div>
            </div>

            {/* <!--/ card--> */}
          </Link>
        ))}
      </div>


      <div className="pt-6 pb-12">
        
        {SectionNews?.map((news:any, index:number) => (
        <Link to={`/summary/${news._id}`} key={news._id} className={openTab === 4 ? "block" : "hidden"}>
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div
                v-for="card in cards"
                className="flex flex-col md:flex-row overflow-hidden
                                      bg-white rounded-lg shadow  mt-4 w-100 mx-2"
              >
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <div>
                    <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                      {news?.title}
                    </h1>
                    <p className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                      {news?.description}
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                    <span className="flex text-[#EC5D82] text-md">
                  
                      <MdOutlineLocationOn size={20} /> {news?.location}
                    </span>
                    <span className="flex text-[#EC5D82]">
                      <BsShare size={20} />{" "}
                      <span className="text-md ml-1">शेयर</span>
                    </span>
                  </div>
                </div>
                <div className="h-auto  md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src={news?.image?.url}
                    alt="News_feed_img"
                  />
                </div>
                {/*   drop-drop Starts*/}
                <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                  <div className="dropdown">
                    <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                      <span className="mr-1">
                        <AiFillEdit />
                      </span>
                    </button>
                    <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                      <Link to={`/edit/${news?._id}`}  className="">
                        <a
                          className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Edit
                        </a>
                      </Link>
                      <li onClick={(e)=>handleDelete(news?._id)} className="">
                        <a
                          className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*   drop-drop end*/}
              </div>
            </div>

            {/* <!--/ card--> */}
          </Link>
        ))}
      </div>

      <div className="pt-6 pb-12">
        
        {OtherNews?.map((news:any, index:number) => (
          <Link to={`/summary/${news._id}`} key={news._id} className={openTab === 5 ? "block" : "hidden"}>
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div
                v-for="card in cards"
                className="flex flex-col md:flex-row overflow-hidden
                                      bg-white rounded-lg shadow  mt-4 w-100 mx-2"
              >
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <div>
                    <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                      {news?.title}
                    </h1>
                    <p className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                      {news.description}
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                    <span className="flex text-[#EC5D82] text-md">
                      {" "}
                      <MdOutlineLocationOn size={20} /> {news.location}
                    </span>
                    <span className="flex text-[#EC5D82]">
                      <BsShare size={20} />{" "}
                      <span className="text-md ml-1">शेयर</span>
                    </span>
                  </div>
                </div>
                <div className="h-auto  md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src={news?.image?.url}
                    alt="News_feed_img"
                  />
                </div>
                {/*   drop-drop Starts*/}
                <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                  <div className="dropdown">
                    <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                      <span className="mr-1">
                        <AiFillEdit />
                      </span>
                    </button>
                    <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                      <Link to={`/edit/${news?._id}`}  className="">
                        <a
                          className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Edit
                        </a>
                      </Link>
                      <li onClick={(e)=>handleDelete(news?._id)} className="">
                        <a
                          className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*   drop-drop end*/}
              </div>
            </div>

            {/* <!--/ card--> */}
          </Link>
        ))}
      </div>


        {/* </div> */}
      </div>
    </>
  );
};

export default NewsFeed;