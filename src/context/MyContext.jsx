import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

const MyContextProvider = (props) => {
  const navigate = useNavigate();
  const API_BASE_URL_NODE = import.meta.env.VITE_BASE_URL_NODE;
  const [allNewMlmUser, setAllNewMlmUser] = useState([]);
  const [singleNewMlmUser, setSingleNewMlmUser] = useState([]);


  console.log(API_BASE_URL_NODE,"======================>>>>>>>")

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



  const [allOder,setAllOrder]=useState(null)
  const getAllOrder=async()=>{
   await axios.get(`https://api.ourmicrolife.com/api/admin/eco/orders`)
   .then((response)=>{
        console.log(response)
   }) 
   .catch((error)=>{
       console.log(error)
   })   

  }

  

  const value = {
    navigate,
    API_BASE_URL_NODE,
    allNewMlmUser,
    getNewMlmUser,

    singleNewMlmUser,
    getSingleNewMlmUser,
    getAllOrder
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};

export default MyContextProvider;
