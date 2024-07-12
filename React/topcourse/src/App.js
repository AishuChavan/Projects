import React from "react";
import { toast } from "react-toastify";
import {apiUrl,filterData} from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { useEffect,useState} from "react";

function App () {
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      
      setCourses(output.data);
      console.log("printing output");
      //console.log(output);
      console.log(courses);
    }
    catch(e){
      toast.error("Network me koi dikhat hai");
     // console.log("error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);


  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;


