import { useState, useEffect } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState(null);

  const getloadData = async () => {
    const response = await fetch("http://localhost:5000/api/weather");
    const data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getloadData();
  }, []);

  return (
    <div className="Container">
      <header className="container"></header>
      <nav className="container">
        <div className="row align-items-center py-2"></div>
        <div className="py-2">
          <div className="text-center">
            <button
              id="btnGet"
              type="button"
              onClick={getloadData}
              className="btn btn-primary mb-3"
            >
              Get Weather
            </button>
          </div>
        </div>
      </nav>
      <main className="container">
        {weather != null && (
          <div className="weather row gx-2">
            <div className="col">
              <div className="card" id="weathercard">
                <h3 className="card-title">Weather Label</h3>
                <h5 className="card-title p-2">City: {weather.city.name}</h5>

                <div className="card-body">
                  <p className="card-text">
                    <strong>description: </strong>
                    {weather.list[1].weather[0].description}{" "}
                  </p>
                  <p className="card-text">
                    Icon:{" "}
                    <img
                      src={` http://openweathermap.org/img/wn/${weather.list[1].weather[0].icon}@4x.png`}
                      alt="wthr img"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Weather;
