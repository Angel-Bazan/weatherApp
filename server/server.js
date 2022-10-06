import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import fetch from 'node-fetch'

config();
const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});




// app.get('/api/weather', (req, res) => {
//   const url=`https://api.openweathermap.org/data/2.5/weather?q={cityname}&APPID=${process.env.REACT_APP_API}&units=metric`; 
//   fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     res.send(data);
//   });
// });

const cities = ["santa ana", "irvine", "Los Angeles", "new york", "tokyo", "austin", "las vegas", "new orleans", "seattle", "miami", "paris", "dubai", "madrid", "milan", "honolulu"]
// create the get request
app.get("/api/weather", (req,res) => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  const apiKey = process.env.REACT_APP_API;
  const params = new URLSearchParams({
      q: city,
      APPID: apiKey,
      units: "imperial",
  });
  const url = `https://api.openweathermap.org/data/2.5/forecast?${params}`; 
  console.log(url);
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
       res.send(data);
   })
   .catch((err) => {
       console.log(err);
   });
});


// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
