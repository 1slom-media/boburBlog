import { createContext,useState } from "react";

export const FilterContext=createContext();

export const FilterProvider=({children})=>{
    const[search,setSearch]=useState('');

    return <FilterContext.Provider value={{search,setSearch}}>{children}</FilterContext.Provider>
}