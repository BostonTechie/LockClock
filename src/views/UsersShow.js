import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Card,
  Item,
  Chip,
  Container,
  styled,
  Box,
  Paper,
  Grid,
  Typography,
  LinearProgress,
} from "@mui/material";
import { Link, Navigate, useNavigate, Switch } from "react-router-dom";

const UsersShow = () => {
  const baseURL = process.env.REACT_APP_API;
  const [userView, setUserView] = useState([]);

  const retrieveUser = async () => {
    const url = `${baseURL}/users`;
    const userData = await axios.get(url, { withCredentials: true });
    setUserView(userData.data.data);
  };

  useEffect(() => {
    retrieveUser();
  }, []);

  const userDisplay = userView?.map((q) => {
    return (
      <div key={q.id}>
        {" "}
        <Link to={`/user/${q.id}`}>
          {" "}
          id: {q.id} email: {q.email} password:{q.password}
        </Link>{" "}
      </div>
    );
  });

  return <div>{userDisplay}</div>;
};

export default UsersShow;
