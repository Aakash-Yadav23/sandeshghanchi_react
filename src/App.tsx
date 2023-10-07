import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";


import Home from "./pages/home/page";
import User from "./pages/user/page";
import SignupPage from "./pages/signup/page";
import Services from "./pages/services/page";
import LoginPage from "./pages/login/page";
import About from "./pages/about/page";
import Achievements from "./pages/achievements/page";
import AchievementList from "./pages/achievementlist/page";
import BrideList from "./pages/bridelist/page";
import Community from "./pages/community/page";
import CommunityList from "./pages/communitylist/page";
import GroomList from "./pages/groomlist/page";
import Magazine from "./pages/magazine/page";
import MagazineList from "./pages/magazinelist/page";
import Marriage from "./pages/marriage/page";
import NewsList from "./pages/newslist/page";
import Organization from "./pages/organization/page";
import OrganisationList from "./pages/organisationlist/page";
import ServiceList from "./pages/servicelist/page";
import Summary from "./pages/summary/page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/action/UserAction";
import Loader from "./components/loader/Loader";
import { getAllNewsAction } from "./redux/action/NewsAction";
import EditNews from "./pages/edit/page";

function App() {
  const { isAuthenticated, loading, user } = useSelector((state:any) => state?.user)
  // const dispatch: Dispatch<any> = useDispatch();
  // const { loading:newLoading, error, News } = useSelector((state:any) => {
  //   return state.news;
  // });
  useEffect(()=>{
    store.dispatch(loadUser());


  },[])
 if (loading) {
  return <Loader/>
 }
  return (
    <>
      <Router>
          <div className="relative w-full">
            <Navbar />
          </div>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/:keyword" element={<Home/>} />
          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievementlist" element={<AchievementList />} />
          <Route path="/bridelist" element={<BrideList />} />
          <Route path="/community" element={<Community />} />
          <Route path="/communitylist" element={<CommunityList />} />
          <Route path="/groomlist" element={<GroomList />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/magazinelist" element={<MagazineList />} />
          <Route path="/marriage" element={<Marriage />} />
          <Route path="/newsList" element={<NewsList />} />
          <Route path="/edit/:id" element={<EditNews />} />

          <Route path="/organization" element={<Organization />} />
          <Route path="/organizationlist" element={<OrganisationList />} />
          <Route path="/servicelist" element={<ServiceList />} />
          <Route path="/summary" element={<Summary />} />

          <Route path="/" element={<Home />} />
        </Routes>
          <div className="relative footer w-full m-auto">
            <Footer />
          </div>
      </Router>
    </>
  );
}

export default App;
