import { useState, useEffect } from 'react'
import './styles.css'

const WearCity = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const APIKEY = 'b8e76533d49342768241dd6ce39ca8e7'

  //fUNCION PARA OBTENER EL CLIMA ACTUAL
  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error))
  }




  //fUNCION PARA OBTENER EL PRONOSTICO DEL CLIMA A 5 DIAS CADA 3 HORAS
  const getForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => setForecast(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (city) {
      getForecast()
    }
  }, [city])

  console.log(weather)
  console.log(forecast)
  return (
    <div className='appContent'>
      <div>
        <div className='headerContainer'>
          <h1>My Weather App</h1>

          <input
            type="text"
            placeholder="Enter city name"
            onBlur={(e) => setCity(e.target.value)}//onBlur es un evento que se ejecuta cuando el usuario sale del input
          />
          <button
            onClick={getWeather}
          >
            Search
          </button>
          {weather && (
            <div>
              <h2>Weather in: {weather.name}</h2>
              <h3>{weather.main.temp}°C</h3>
              <h4>{weather.weather[0].description}</h4>
            </div>
          )}
        </div>

        <hr />
        <div>
          {forecast && (
            <>
              <h2>Forecast</h2>
              <div className='container'>
                <div className='card'>
                  {forecast.list.slice(0, 8).map((item, index) => (
                    <div key={index} className="iner">
                      <h3>{item.dt_txt}</h3>
                      <div className='weather-container'>
                        <img className='img-Card' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                        <h4>{item.main.temp}°C</h4>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(8, 16).map((item, index) => (
                    <div key={index} className="iner">
                      <h3>{item.dt_txt}</h3>
                      <div className='weather-container'>
                        <img className='img-Card' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                        <h4>{item.main.temp}°C</h4>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(16, 24).map((item, index) => (
                    <div key={index} className="iner">
                      <h3>{item.dt_txt}</h3>
                      <div className='weather-container'>
                        <img className='img-Card' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                        <h4>{item.main.temp}°C</h4>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(24, 32).map((item, index) => (
                    <div key={index} className="iner">
                      <h3>{item.dt_txt}</h3>
                      <div className='weather-container'>
                        <img className='img-Card' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                        <h4>{item.main.temp}°C</h4>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(32, 40).map((item, index) => (
                    <div key={index} className="iner">
                      <h3>{item.dt_txt}</h3>
                      <div className='weather-container'>
                        <img className='img-Card' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                        <h4>{item.main.temp}°C</h4>
                      </div>
                      
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className='firma'>
        <h2>Wendy Carmona</h2>
      </div>
      </div>
    </div>
  )
}

export default WearCity