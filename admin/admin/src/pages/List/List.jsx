import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import './List.css'
import { toast } from 'react-toastify'

const List = ({url}) => {
 
  const [list,setlist]=useState([])
  const fetchlist=async()=>{
  const response=await axios.get(`${url}/api/food/listfood`)
  if(response.data.success){
    setlist(response.data.data);

  }
  else{
    toast.error("error");
  }
  }
  useEffect(()=>{
    fetchlist();
  },[])
  const removefood=async(foodid)=>{
    const response=await axios.post(`${url}/api/food/remove`,{id:foodid})
    if(response.data.success){
      toast.success("food removed")
    }
    else{
      toast.error("there was an error")
    }
    await fetchlist();
  }

  return (
    <div className='list add flex-col'>
      <p>all foods list</p>
 <div className='list-table'>
    <div className='list-table-format title'>
      <b>Image</b>
      <b>Name</b>
      <b>Category</b>
      <b>Price</b>
      <b>Action</b>
     
   
      
    </div>
    {list.map((item,index)=>{
      return(
       <div Key={index} className='list-table-format'>
       <img src={`${url}/images/`+item.image}/>
       <p>{item.name}</p>
       <p>{item.category}</p>
       <p>{item.price}</p>
       <p onClick={()=>removefood(item._id)}className='cusor'>X</p>

       </div>
      )
    })}
    </div>
    </div>
  )
}

export default List
