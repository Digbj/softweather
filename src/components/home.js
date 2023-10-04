import logo from "./pic/logo.png";
import { useState } from "react";
import axios from "axios";
const Weather = () => {
  const [inp, setInp] = useState("");
  const [data, setData] = useState([]);
    const[msg,setMsg]=useState("")
  const dataFetch = async () => {
    try {
        
      const response =
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=31c5f46fe63195c406d9a07933aa09e0
                `);
                if (response.status === 200) {
                    setData(response.data);
                    setMsg("");
                    console.log(data);
                  } else {
                    setMsg("Invalid Input");
                  }
      
    } catch (error) {
      console.error("Error:", error);
    }
  };
  let sunrise = new Date(data?.sys?.sunrise * 1000).toLocaleString();
  let sunr = sunrise.split(",");

  let sunset = new Date(data?.sys?.sunset * 1000).toLocaleString();
  let suns = sunset.split(",");
//   console.log(sunr);
  return (
    <div className="container">
      <div className="nav">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="title">The Weather App</div>
        <div className="cont">Contact Us</div>
      </div>
      <div className="main">
        <div>
          <input
            placeholder="Enter City Name"
            onBlur={(e) => {
              setInp(e.target.value);
            }}
          />
          <button onClick={dataFetch}>Search</button>
        </div>

        <div className="rep">
          <>
            {msg?<p>{msg}</p>: <><h2>{data?.name}</h2>
            <p className="temp">{Math.floor(data?.main?.temp - +273.15)} °C</p>
            <div className="time">
              <p>Sunrise:{sunr[1]}</p>
              <p>Sunset:{suns[1]}</p>
            </div></>}
         
          </>
        </div>
      </div>
    </div>
  );
};
export default Weather;
