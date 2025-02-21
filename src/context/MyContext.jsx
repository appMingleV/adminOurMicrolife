import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

const MyContextProvider = (props) => {
  const navigate = useNavigate();
  const API_BASE_URL_NODE = import.meta.env.VITE_BASE_URL_NODE;
  const [allNewMlmUser, setAllNewMlmUser] = useState([]);
  const [singleNewMlmUser, setSingleNewMlmUser] = useState([]);

  const getNewMlmUser = () => {
    axios
      .get(`${API_BASE_URL_NODE}api/admin/newMLMUser`)
      .then((response) => {
        console.log(response);
        setAllNewMlmUser(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSingleNewMlmUser = (id) => {
    axios
      .get(`${API_BASE_URL_NODE}api/admin/mlmuser/${id}`)
      .then((response) => {
        console.log(response);
        setSingleNewMlmUser(response?.data?.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const value = {
    navigate,
    API_BASE_URL_NODE,
    allNewMlmUser,
    getNewMlmUser,

    singleNewMlmUser,
    getSingleNewMlmUser,
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};

export default MyContextProvider;
