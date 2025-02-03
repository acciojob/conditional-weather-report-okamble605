import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay"

const App = () =>{

  const [data,setData]= React.useState(null);

  React.useEffect(()=>{

                  setData({ temperature: 25, conditions: "Sunny"})
  },[])
    return (
      <div>
          {data&& <WeatherDisplay data={data}/>}
      </div>
  )
}
export default App
