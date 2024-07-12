import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [products,setProducts] = useState([]); 
  async function fetchProductData()
  {
    setLoading(true);

    try{
      const res=await fetch(API_URL);
      const data=await res.json();

      setProducts(data);
    }
    catch(error)
    {
      console.log("error");
     
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading?<Spinner/>:
        products.length>0?
        ( <div>
          {
            products.map( (product) => (
              <Product key={product.id} product={product}/>
            ))
          }
          </div>
        ):
        ( <div>
            <p>No Data Found</p>
          </div>)
      }
    </div>
  );
};

export default Home;
