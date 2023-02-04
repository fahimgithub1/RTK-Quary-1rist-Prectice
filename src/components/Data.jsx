// import { useState } from "react";
import { Fragment } from "react";
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
    <Fragment>
      <div>
        <h1> Apple Products </h1>

        <div className="row"> 
          {
            singleProductData.products.map((item)=>(
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
            ))
          }
        </div>
      </div>

      <div>
        <h1> All Products With out Apple</h1>

        <div className="row"> 

          {allProductsData.products.map((item)=>{
            if(item.brand  != 'Apple'){
                return(
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
        })}

        </div>
      </div>
    </ Fragment>
  )
};
