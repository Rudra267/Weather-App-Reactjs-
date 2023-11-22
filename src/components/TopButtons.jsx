import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id:1,
            title:"Delhi"
        },
        {
            id:2,
            title:"Kolkata"
        },
        {
            id:3,
            title:"Mumbai"
        },
        {
            id:4,
            title:"Odisha"
        },
        {
            id:5,
            title:"Hyderabad"
        },
    ]
  return (
    <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
      <button key={city.id} className="text-black text-lg font-medium" onClick={()=>setQuery({q:city.title})}>{city.title}</button>
    ))}
  </div>
  )
    }
export default TopButtons;
