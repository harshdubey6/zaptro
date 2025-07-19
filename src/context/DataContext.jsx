import { createContext, useState } from "react";
import axios from "axios";
export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
     const [data ,setData] = useState("")

     //fetch all the api products
     const fetchAllProducts = async()=>{
          try {
               const res = await axios.get("https://fakestoreapi.in/api/products?limit=150");
               const productData = res.data.products
               setData(productData);
          } catch (error) {
               console.log("Error fetching products:", error);
               
          }
     }
     return ( <DataContext.Provider value={{data,setData,fetchAllProducts}}>
          {children}
     </DataContext.Provider>
     )
}   

