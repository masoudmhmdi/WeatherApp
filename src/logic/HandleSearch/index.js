import { HomePage } from '../../screen/HomePage';
import { GetData } from '../GetData';

export const HandleSearch = (e) => {
  let inputVal = e.target.value;
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${inputVal}&limit=1&appid=650021ec376175c119a8422efdb7907e`
  )
    .then((res) => res.json())
    .then((data) => {
      const loc = `${data[0].lat},${data[0].lon}`;
      document.body.innerHTML = '';
      HomePage(loc);
    });
};
window.HandleSearch = HandleSearch;
