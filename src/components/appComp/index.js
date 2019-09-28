import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "../Header";
import appreducer from "../../state/reducer/appreducer";
import { MyProvider } from "../../state/store/provider";
import AppContanier from "./appAction";

const initialState = {
    myname:null
};



const App = () => {
  const [state, dispatch] = useReducer(appreducer, initialState);

  useEffect(() => {
    dispatch({
        type: "CODE_SUCCESS",
        payload: 'Happy Codding'
      });
  }, []);



  const { myname } = state;

  return (
    <div className="App">
      <MyProvider value={{state,dispatch}}>
      <Header text="HOOKED" />
      <p className="App-intro">Hello Guys</p>
        <b>{myname}</b>
      <div className="movies">
        <AppContanier />
      </div>
        </MyProvider>
    </div>
  );
};

export default App;
