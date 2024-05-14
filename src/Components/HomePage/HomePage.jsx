import React from "react";
import { Grid, Hidden } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import TwitDetails from "../TwitDetails/TwitDetails";

const HomePage = () => {
  return (
    <div>
      <h5>Note: This is a static version of the app.</h5>
      <Grid container className="px-5 lg:px-36 justify-between">
        {/* First item for medium and larger screens */}
        <Grid item xs={0} md={2.5} lg={2.5} className="hidden lg:block w-full relative">
          <Navigation />
        </Grid>
        
        {/* Second item for all screen sizes */}
        <Grid item xs={12} md={6} lg={6} className="px-5 lg:px-9 w-full relative">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/home" element={<HomeSection />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/twit/:id" element={<TwitDetails />} />
          </Routes>
        </Grid>
        
        {/* Third item for medium and larger screens */}
        <Grid item xs={0} md={3} lg={3} className="hidden lg:block w-full relative">
          <RightPart />
        </Grid>
        
        {/* Hidden on small screens, visible on medium and larger screens */}
        <Hidden xsUp>
          <Grid item xs={0} md={2.5} lg={2.5} className="w-full relative">
            <Navigation />
          </Grid>
          <Grid item xs={0} md={3} lg={3} className="w-full relative">
            <RightPart />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default HomePage;
