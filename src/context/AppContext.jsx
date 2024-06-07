// steps for CONTEXT API: 1) create context, 2) Provider and 3) consumer
// CONTEXT API and useContext are different, context api ko consumer wala part lai sajilo banauna useContext hook use gareko ho

import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const Intro = {
        firstName: "Loremm",
        lastName: "Ipsuum",
    };

    const [services, setServices] = useState([]);

    // functions to get services
    const getData = async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setServices(data);
        }catch(error){
            console.log(error)
        }
    };

    useEffect(()=>{
        getData('https://fakestoreapi.com/products');
    },[])

    // useEffect(()=>{
    //     console.log(services);
    // },[services])

    return < AppContext.Provider value={{...Intro, services}}>
        {children}
    </ AppContext.Provider >
}

export const useGlobalAppContext = ()=>{
    return useContext(AppContext);
}