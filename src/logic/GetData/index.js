export const GetData = async function (q) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=d34fc733e0414ba887a102840232303&q=${q}&days=7&aqi=no&alerts=no`
  );
  const data = await res.json();
  return data;
};
