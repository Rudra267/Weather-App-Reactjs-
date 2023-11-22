import React from 'react'
import {UilArrowUp,UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';

const TempDetails = ({weather:{details, icon, temp, temp_min, temp_max,sunrise,sunset,speed, humidity, feels_like, timezone}}) => {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-400'>{details}</div>
      <div className='flex flex-row items-center justify-between py-3'>
        <img src={iconUrlFromCode(icon)} alt="" className='' />
        <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
        <div className='flex flex-col space-y-2'>

            <div className='flex font-light text-center justify-center text-sm'>
                <UilTemperature Size={18} className="mr-1"/>
                Real fell:
                <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
            </div>

            <div className='flex font-light text-center justify-center text-sm'>
                <UilTear Size={18} className="mr-1"/>
                Humidity:
                <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
            </div>

            <div className='flex font-light text-center justify-center text-sm'>
                <UilWind Size={18} className="mr-1"/>
                Wind:
                <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
            </div>

            {/* <div className='flex font-light text-center justify-center text-sm'>
                <UilTemperature Size={18} className="mr-1"/>
                Real fell:
                <span className='font-medium ml-1'>34°</span>
            </div>
 */}

        </div>
      </div>
<div className='flex flex-row justify-center items-center space-x-2 text-sm py-3'>
    <UilSun/>
    <p className='font-light'>
        Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span>
    </p>

    <UilSunset/>
    <p className='font-light'>
        Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone,"hh:mm a")}</span>
    </p>

    <UilArrowUp/>
    <p className='font-light'>
        High: <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
    </p>

    <UilArrowDown/>
    <p className='font-light'>
        Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
    </p>
</div>

    </div>
  )
}

export default TempDetails
