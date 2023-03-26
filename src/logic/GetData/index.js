export const GetData = async function (q) {
  const res = await fetch(`http://localhost:3000/localData`);
  const data = await res.json();
  return data;
};

//http://api.weatherapi.com/v1/forecast.json?key=d34fc733e0414ba887a102840232303&q=${q}&days=7&aqi=no&alerts=no
