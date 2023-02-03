// import { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";

export const Data = () => {
  // const [allData, setAllData] = useState("");

  const {
    data: allProductsData,
    isLoading,
  } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("iphone");

  console.log(allProductsData);
  console.log(singleProductData);


  if (isLoading) return <h1> Loading...</h1>


  return (
    <div className="row"> 
      {
        allProductsData.products.map((item)=>
         <div className="col-6" id={item.id}>
          <div>
            <img src={item.images[0]} alt="" />
            <title>{item.title}</title>
            <h3>Price : {item.price}</h3>
            <p> 
              <b>Description : </b> 
              <br /> 
              {item.description.slice(0,50)}</p>
          </div>
         </div>
        )
      }

    </div>
  )
};
