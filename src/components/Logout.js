import React from "react";
import { AppButton } from "../styled/Button,styled";
import { useAppContext } from "../global/Session";
import axios from "axios";

const Logout = () => {
  const { userHasAuthenticated } = useAppContext();
  const baseURL = process.env.REACT_APP_API;

  const signOut = () => {
    axios({
      method: "Get",
      withCredentials: true,
      url: `${baseURL}/users/logout`,
    }).then((res) => {
      userHasAuthenticated(false);
    });
  };

  return (
    <>
      <h3>Come back soon!</h3>

      <AppButton
        bg="#292929"
        bcolor="#fff"
        color="#fff"
        className="newUserBttn"
        type="submit"
        id="submituser"
        onClick={signOut}
      >
        Sign Out!
      </AppButton>
    </>
  );
};

export default Logout;
