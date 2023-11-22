
import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempDetails from './components/TempDetails';
import Forecast from './components/Forecast';
import getFormattingWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


const [query,setQuery] = useState({q:'Kharar'})
const [units,setUnits] = useState('metric')
const [weather,setWeather] = useState(null)


useEffect(()=>{
  const feachWeather = async () =>{
     const message = query.q ? query.q : 'current location.'

toast.info('Featching weather for' +" "+ message)

    await getFormattingWeatherData({...query,units}).then(data=>{
      toast.success(`Successfully fetched weather for ${data.name}, ${data.country}` )
      setWeather(data);
    });
    
  };

  feachWeather();
},[query,units])





const formatBackground = () =>{
  if(!weather) return "from-cyan-700 to-blue-700"
  const threshold = units === 'metric' ? 20 : 60

  if (weather.temp <= threshold) return "from-cyan-700 to-blue-700"

  return "from-yellow-700 to-orange-700"
}


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradiant-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}>
   <TopButtons setQuery={setQuery}/>
<Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

{weather && (
  <div>

<TimeAndLocation weather={weather}/>
<TempDetails weather={weather}/>
<Forecast title="Hourly Forecast" items={weather.hourly}/>
<Forecast title="Daily Forecast" items={weather.daily}/>
  </div>
)}
       
       <ToastContainer autoClose={3000} theme='colored' newestOnTop={true}/>

    </div>
  );
}

export default App;
