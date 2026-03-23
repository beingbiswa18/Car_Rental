import React, { useState } from 'react'
import Title from '../../components/owner/Title';
import { assets } from '../../assets/assets';


const AddCar = () => {
  const [image, setImage]=useState(null);
  const [car,setCar]=useState({
    brand:'',
    model:'',
    year:0,
    priceperday:0,
    category:'',
    transmission:'',
    fuel_type:'',
    seating_capacity:0,
    location:'',
    description:'',

  })
  const onSubmitHandler = async(e)=>{
    e.preventDefault()
  }
const currency=import.meta.env.VITE_CURRENCY

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>

      <Title title="Add new car" subTitle="Fill in details to list a new car" />
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image? URL.createObjectURL(image): assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
            <input type="file" id='car-image' accept='image/*' hidden onChange={e=>setImage(e.target.files[0])}/>
          </label>
          <p className='text-sm text-gray-500'>Upload the picture of your car</p>
        </div>
        
        <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
             <label >Brand</label>
             <input type="text" placeholder='eg:BMW,Mercedes,Audi...' required className='px-3 py-2 mt-1 border borderColor rounded-md outline-none' value={car.brand} onChange={e=>setCar({...car,brand: e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type="text" placeholder='eg:X5, E-class , M4...' required className='px-3 py-2 mt-1 border borderColor rounded-md outline-none' value={car.model} onChange={e=>setCar({...car,model: e.target.value})}/>
          </div>
        </div>
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
           <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type="text" placeholder='2025' required className='px-3 py-2 mt-1 border borderColor rounded-md outline-none' value={car.year} onChange={e=>setCar({...car,year: e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label>Daily price({currency})</label>
            <input type="text" placeholder='100' required className='px-3 py-2 mt-1 border borderColor rounded-md outline-none' value={car.priceperday} onChange={e=>setCar({...car,priceperday: e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select onChange={e=>setCar({...car, category:e.target.value})} value={car.category} className='px-3 mt-1 border border-bordercolor rounded-md outline-none'>
              <option value="">Select a car category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
            
          </div>
        </div>
        {/* car transmission and fuel type*/ }
        <div className='grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <select onChange={e=>setCar({...car, transmission:e.target.value})} value={car.transmission} className='px-3 mt-1 border border-bordercolor rounded-md outline-none'>
              <option value="">Select a transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
              <option value="semi-automatic">semi-automatic</option>
            </select>
            
          </div>
          <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <select onChange={e=>setCar({...car, fuel_type:e.target.value})} value={car.fuel_type} className='px-3 mt-1 border border-bordercolor rounded-md outline-none'>
              <option value="">Select a fuel type</option>
              <option value="Gas">Gas</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            
          </div>
          <div className='flex flex-col w-full'>
            <label>Seating capacity</label>
            <input type="text" placeholder='4' required className='px-3 py-2 mt-1 border borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e=>setCar({...car,seating_capacity: e.target.value})}/>
          </div>

        </div>
        {/*car location */}
        <div className='flex flex-col w-full'>
            <label>Location</label>
            <select onChange={e=>setCar({...car, location:e.target.value})} value={car.location} className='px-3 mt-1 border border-bordercolor rounded-md outline-none'>
              <option value="">Select a location</option>
              <option value="New York">New York</option>
              <option value="Los Angles">Los Angles</option>
              <option value="Houston">Houston</option>
              <option value="Chicago">Chicago</option>
              
            </select>
        </div>
        {/** car description */}
        <div className='flex flex-col w-full'>
            <label>Description</label>
            <textarea rows={5} placeholder='Describe about your car ' required className='px-3 py-2 mt-1 border borderColor rounded-md outline-none' value={car.description} onChange={e=>setCar({...car,description: e.target.value})}></textarea>
          </div>

          <button className='flex-items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
            <img src={assets.tick_icon} alt="" />List your car
            
          </button>
      </form>
      
    </div>
  )
}

export default AddCar
