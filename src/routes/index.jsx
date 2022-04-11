import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "../pages/TodoPage/TodoPage";
import FollowersPage from "../pages/FollowersPage/FollowersPage";

const SetupRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/followers" element={<FollowersPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouters;
