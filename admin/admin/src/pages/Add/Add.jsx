import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'
import axios from "axios"
import { toast } from 'react-toastify';



const Add = ({url}) => {
 
    const [image,setImage]=useState(false)
    const[data,setData]=useState(
        {
            name:"",
            description:"",
            price:"",
            category:"salad"
        }
    )
    const onchangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({ ...data,[name]:value}))
    }
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
       try{ const response=await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
                name:"",
            description:"",
            price:"",
            category:"salad"

            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }catch (error) {
        console.error("There was an error submitting the form!", error);
        toast.error("There was an error submitting the form!");
    }}
  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className='add-image-upload flex-col'>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])}type='file' id='image' hidden required/>
            </div>
            <div className='add-product-name flex-col'>
                <p> add product name</p>
                <input name='name' onChange={onchangeHandler} value={data.name}  type='text' />
            </div>
            <div className='add-product-description'>
                <p>Product description</p>
                <textarea name='description' placeholder='add product description'  onChange={onchangeHandler} value={data.description}/>
            </div>
            <div className='category'>
                <p>Product category</p>
                <select  onChange={onchangeHandler} name='category' >
                    <option value="salad">salad</option>
                    <option value="rolls">rolls</option>
                    <option value="deserts">deserts</option>
                    <option value="sandwich">sandwich</option>
                    <option value="cake">cake</option>
                    <option value="pure veg">pure veg</option>
                    <option value="pasta">pasta</option>
                    <option value="noodles">noodles</option>
                </select>
            </div>
            <div className='add-price flex-col'>
                <p>product price</p>
                <input  onChange={onchangeHandler} value={data.price} type='Number'  name='price' placeholder='$20'/>
                
            </div >
            <div className='add-btn'>
            <button type='submit' className='add-b'>ADD</button>
            </div>
        </form>
      
    </div>
  )
}

export default Add
