import React from "react";

const MyContext = React.createContext()
const MyProvider = MyContext.Provider;

export{
    MyContext,
    MyProvider
}