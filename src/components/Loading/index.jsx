import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const loading = useSelector((state) => state.loading);
  if (loading) return <div className="spin-loading">Loading</div>;
};

export default Loading;
