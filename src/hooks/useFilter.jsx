import { useContext } from "react";
import { FilterContext } from "../contexts/filter-context";

export const useFilter=()=>{
    const {search,setSearch}=useContext(FilterContext);

    return {search,setSearch};

}