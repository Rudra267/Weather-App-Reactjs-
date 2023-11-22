import React, { useState } from "react";
import {
  UilSearch,
  UilLocationPoint,
  UilCelsius,
  UilFahrenheit,
} from "@iconscout/react-unicons";

import { toast } from "react-toastify";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handelSearchClick = () =>{
    if(city != "") setQuery({q: city})
  }

  const handelUnitsChange = (e) =>{
    const selectedUnit = e.currentTarget.name;
    if(units != selectedUnit){
      setUnits(selectedUnit)}

  }


  const handelLocationClick = () =>{
    if(navigator.geolocation){
      toast.info('Featching user Location..')
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success('Location fetched')
        let lat = position.coords.latitude
        let lon = position.coords.longitude

setQuery({lat,lon})

      })
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex felx-row w-3/4 items-center justify-center space-x-4">
        <input
        value={city}
        onChange={(e)=>setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search your city...."
          className="text-xl font-light p-2 w-full focus:outline-none shadow-xl capitalize placeholder:lowercase"
        />
        <UilSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handelSearchClick}
        />
        <UilLocationPoint
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handelLocationClick}
        />
        <div className="flex felx-row w-1/4 items-center justify-center">
          <button
            name="metric"
            className="text-xl font-light hover:scale-125 transition ease-out"
            onClick={handelUnitsChange}
          >
            <UilFahrenheit />
          </button>
          {/* <p className='font-bold'>|</p> */}
          <button
            name="imperial"
            className="text-xl font-light hover:scale-125 transition ease-out"
            onClick={handelUnitsChange}
          >
            <UilCelsius />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
