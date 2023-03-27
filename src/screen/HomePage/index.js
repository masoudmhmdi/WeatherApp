import { GetData } from '../../logic/GetData';
import { HandleMood } from '../../logic/HandleMood';
import { RenderDaysMobileCard } from '../../logic/RenderDaysCard';
import { RenderHourMobileCard } from '../../logic/RenderHourCard';
import { HandleSearch } from '../../logic/HandleSearch';
import { RenderDesktopDaysCard } from '../../logic/RenderDesktopDaysCard';
import { Chart } from 'chart.js/auto';

export const HomePage = async function (location = '35.6892523,51.3896004') {
  const body = document.body;
  let nav = `<nav class="w-full flex justify-between items-center">
  <div class="hidden md:flex justify-center items-center gap-1">
    <svg
      width="24"
      height="46"
      viewBox="0 0 35 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 0C7.85094 0 0 6.97253 0 15.5396C0 19.6196 2.00266 25.0452 5.95219 31.6663C9.12406 36.9823 12.7936 41.7895 14.7022 44.1813C15.0247 44.59 15.4464 44.9224 15.933 45.1515C16.4197 45.3806 16.9577 45.5 17.5033 45.5C18.0489 45.5 18.5869 45.3806 19.0735 45.1515C19.5602 44.9224 19.9819 44.59 20.3044 44.1813C22.2097 41.7895 25.8825 36.9823 29.0544 31.6663C32.9973 25.0473 35 19.6216 35 15.5396C35 6.97253 27.1491 0 17.5 0ZM17.5 22.7508C16.1155 22.7508 14.7622 22.3696 13.611 21.6554C12.4599 20.9411 11.5627 19.9259 11.0328 18.7381C10.503 17.5504 10.3644 16.2434 10.6345 14.9825C10.9046 13.7215 11.5713 12.5633 12.5503 11.6542C13.5292 10.7452 14.7765 10.1261 16.1344 9.87526C17.4922 9.62445 18.8997 9.75318 20.1788 10.2452C21.4579 10.7372 22.5511 11.5703 23.3203 12.6393C24.0895 13.7082 24.5 14.965 24.5 16.2506C24.498 17.974 23.7598 19.6263 22.4475 20.8449C21.1352 22.0635 19.3559 22.749 17.5 22.7508Z"
        fill="#B9B8B9"
      />
    </svg>
    <p id="locationName" class="text-gray-500 text-lg dark:text-colorText"></p>
  </div>
  <div
    class="w-1/2 bg-gray-200 shadow shadow-gray-400 dark:shadow-none dark:bg-secondary rounded-full h-[40px] flex items-center px-1"
  >
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2187 19.0625C9.66739 19.0625 8.15088 18.6025 6.86099 17.7406C5.57109 16.8788 4.56574 15.6537 3.97206 14.2204C3.37838 12.7872 3.22305 11.21 3.52571 9.68851C3.82836 8.16698 4.5754 6.76936 5.67237 5.67239C6.76934 4.57542 8.16697 3.82838 9.6885 3.52572C11.21 3.22306 12.7872 3.3784 14.2204 3.97208C15.6536 4.56575 16.8787 5.57111 17.7406 6.861C18.6025 8.1509 19.0625 9.66741 19.0625 11.2188C19.0625 12.2488 18.8596 13.2688 18.4654 14.2204C18.0712 15.1721 17.4934 16.0368 16.7651 16.7651C16.0368 17.4935 15.1721 18.0713 14.2204 18.4654C13.2687 18.8596 12.2487 19.0625 11.2187 19.0625ZM11.2187 4.94792C9.98261 4.94792 8.77424 5.31448 7.74642 6.00124C6.71862 6.68799 5.91754 7.66412 5.4445 8.80615C4.97145 9.94819 4.84767 11.2048 5.08883 12.4172C5.32999 13.6296 5.92525 14.7432 6.79932 15.6173C7.6734 16.4914 8.78704 17.0867 9.99942 17.3278C11.2118 17.569 12.4684 17.4452 13.6105 16.9722C14.7525 16.4991 15.7286 15.698 16.4154 14.6702C17.1022 13.6424 17.4687 12.4341 17.4687 11.1979C17.4687 9.54031 16.8103 7.95061 15.6381 6.7785C14.466 5.6064 12.8764 4.94792 11.2187 4.94792Z"
        fill="#B9B8B9"
      />
      <path
        d="M20.8333 21.6146C20.7307 21.615 20.629 21.595 20.5342 21.5556C20.4394 21.5164 20.3533 21.4585 20.2812 21.3854L15.9792 17.0833C15.8411 16.9352 15.766 16.7393 15.7696 16.5369C15.7731 16.3345 15.8552 16.1415 15.9983 15.9982C16.1415 15.8551 16.3346 15.7731 16.537 15.7696C16.7394 15.7661 16.9352 15.8412 17.0833 15.9792L21.3854 20.2813C21.5317 20.4277 21.6138 20.6263 21.6138 20.8333C21.6138 21.0403 21.5317 21.2389 21.3854 21.3854C21.3133 21.4585 21.2273 21.5164 21.1325 21.5556C21.0377 21.595 20.9359 21.615 20.8333 21.6146Z"
        fill="#B9B8B9"
      />
    </svg>
    <input
      type="text"
      class="w-full h-full bg-transparent outline-none"
      placeholder="Search City..."
      onblur="HandleSearch(event)"
    />
  </div>
  <label
    class="switch relative w-[80px] h-[40px] shadow shadow-gray-400 dark:shadow-none rounded-full bg-gray-200 dark:bg-secondary border dark:border-colorText flex justify-between items-center"
  >
    <svg
      class="z-20 absolute right-2 checked:left-0"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4C9.74632 4 9.50302 3.89922 9.32364 3.71984C9.14425 3.54046 9.04348 3.29716 9.04348 3.04348V0.956522C9.04348 0.702836 9.14425 0.459541 9.32364 0.280159C9.50302 0.100776 9.74632 0 10 0C10.2537 0 10.497 0.100776 10.6764 0.280159C10.8557 0.459541 10.9565 0.702836 10.9565 0.956522V3.04348C10.9565 3.29716 10.8557 3.54046 10.6764 3.71984C10.497 3.89922 10.2537 4 10 4ZM10 20C9.74632 20 9.50302 19.8992 9.32364 19.7198C9.14425 19.5405 9.04348 19.2972 9.04348 19.0435V16.9565C9.04348 16.7028 9.14425 16.4595 9.32364 16.2802C9.50302 16.1008 9.74632 16 10 16C10.2537 16 10.497 16.1008 10.6764 16.2802C10.8557 16.4595 10.9565 16.7028 10.9565 16.9565V19.0435C10.9565 19.2972 10.8557 19.5405 10.6764 19.7198C10.497 19.8992 10.2537 20 10 20ZM14.9191 6.03739C14.73 6.03737 14.5451 5.98127 14.3878 5.87619C14.2306 5.77112 14.108 5.62177 14.0356 5.44704C13.9632 5.27231 13.9442 5.08003 13.9811 4.89452C14.0179 4.70901 14.1089 4.53858 14.2426 4.40478L15.7183 2.92913C15.8984 2.75365 16.1405 2.65619 16.392 2.65784C16.6435 2.6595 16.8842 2.76014 17.062 2.93798C17.2399 3.11582 17.3405 3.35655 17.3422 3.60804C17.3438 3.85954 17.2464 4.10157 17.0709 4.28174L15.5952 5.75739C15.5065 5.84629 15.4011 5.91678 15.2851 5.96483C15.1691 6.01288 15.0447 6.03754 14.9191 6.03739ZM3.60522 17.3513C3.41603 17.3513 3.23109 17.2952 3.0738 17.19C2.91651 17.0849 2.79393 16.9355 2.72156 16.7607C2.64919 16.5859 2.63028 16.3935 2.66723 16.208C2.70418 16.0224 2.79532 15.852 2.92913 15.7183L4.40478 14.2426C4.49317 14.1519 4.59869 14.0796 4.71524 14.03C4.83178 13.9803 4.95703 13.9543 5.0837 13.9535C5.21037 13.9527 5.33594 13.977 5.45313 14.0251C5.57032 14.0732 5.67679 14.1441 5.76636 14.2336C5.85593 14.3232 5.92682 14.4297 5.97491 14.5469C6.023 14.6641 6.04733 14.7896 6.0465 14.9163C6.04566 15.043 6.01968 15.1682 5.97005 15.2848C5.92042 15.4013 5.84813 15.5068 5.75739 15.5952L4.28174 17.0709C4.19301 17.1599 4.08756 17.2305 3.97146 17.2786C3.85536 17.3267 3.7309 17.3514 3.60522 17.3513ZM19.0435 10.9565H16.9565C16.7028 10.9565 16.4595 10.8557 16.2802 10.6764C16.1008 10.497 16 10.2537 16 10C16 9.74632 16.1008 9.50302 16.2802 9.32364C16.4595 9.14425 16.7028 9.04348 16.9565 9.04348H19.0435C19.2972 9.04348 19.5405 9.14425 19.7198 9.32364C19.8992 9.50302 20 9.74632 20 10C20 10.2537 19.8992 10.497 19.7198 10.6764C19.5405 10.8557 19.2972 10.9565 19.0435 10.9565ZM3.04348 10.9565H0.956522C0.702836 10.9565 0.459541 10.8557 0.280159 10.6764C0.100776 10.497 0 10.2537 0 10C0 9.74632 0.100776 9.50302 0.280159 9.32364C0.459541 9.14425 0.702836 9.04348 0.956522 9.04348H3.04348C3.29716 9.04348 3.54046 9.14425 3.71984 9.32364C3.89922 9.50302 4 9.74632 4 10C4 10.2537 3.89922 10.497 3.71984 10.6764C3.54046 10.8557 3.29716 10.9565 3.04348 10.9565ZM16.3948 17.3513C16.2691 17.3514 16.1446 17.3267 16.0285 17.2786C15.9124 17.2305 15.807 17.1599 15.7183 17.0709L14.2426 15.5952C14.0671 15.4151 13.9697 15.173 13.9713 14.9215C13.973 14.67 14.0736 14.4293 14.2515 14.2515C14.4293 14.0736 14.67 13.973 14.9215 13.9713C15.173 13.9697 15.4151 14.0671 15.5952 14.2426L17.0709 15.7183C17.2047 15.852 17.2958 16.0224 17.3328 16.208C17.3697 16.3935 17.3508 16.5859 17.2784 16.7607C17.2061 16.9355 17.0835 17.0849 16.9262 17.19C16.7689 17.2952 16.584 17.3513 16.3948 17.3513ZM5.08087 6.03739C4.95528 6.03764 4.83088 6.01302 4.71484 5.96497C4.5988 5.91691 4.49343 5.84636 4.40478 5.75739L2.92913 4.28174C2.75365 4.10157 2.65619 3.85954 2.65784 3.60804C2.6595 3.35655 2.76014 3.11582 2.93798 2.93798C3.11582 2.76014 3.35655 2.6595 3.60804 2.65784C3.85954 2.65619 4.10157 2.75365 4.28174 2.92913L5.75739 4.40478C5.89108 4.53858 5.9821 4.70901 6.01895 4.89452C6.05579 5.08003 6.03682 5.27231 5.96441 5.44704C5.89201 5.62177 5.76942 5.77112 5.61216 5.87619C5.4549 5.98127 5.27001 6.03737 5.08087 6.03739ZM10 14.4348C9.12288 14.4348 8.26546 14.1747 7.53617 13.6874C6.80687 13.2001 6.23845 12.5075 5.90279 11.6971C5.56714 10.8868 5.47931 9.99508 5.65043 9.13482C5.82155 8.27455 6.24392 7.48435 6.86414 6.86414C7.48435 6.24392 8.27455 5.82155 9.13482 5.65043C9.99508 5.47931 10.8868 5.56714 11.6971 5.90279C12.5075 6.23845 13.2001 6.80687 13.6874 7.53617C14.1747 8.26546 14.4348 9.12288 14.4348 10C14.4334 11.1758 13.9657 12.303 13.1343 13.1343C12.303 13.9657 11.1758 14.4334 10 14.4348Z"
        fill="#B9B8B9"
      />
    </svg>

    <svg
      class="z-20 absolute left-2 moon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="moon"
        d="M20 9.64291C20 12.3898 18.9088 15.0241 16.9665 16.9665C15.0241 18.9088 12.3898 20 9.64291 20C5.44651 20 1.68403 17.5893 0.0594858 13.8567C0.00215347 13.7252 -0.014227 13.5794 0.0124791 13.4384C0.0391851 13.2974 0.107739 13.1677 0.209209 13.0663C0.310678 12.9648 0.440358 12.8963 0.58135 12.8696C0.722343 12.8428 0.86811 12.8592 0.999659 12.9166C1.98358 13.3451 3.24384 13.5715 4.64294 13.5715C9.56613 13.5715 13.5715 9.56613 13.5715 4.64294C13.5715 3.24384 13.3451 1.98358 12.9166 0.99966C12.8592 0.868111 12.8428 0.722343 12.8695 0.58135C12.8963 0.440359 12.9648 0.310678 13.0663 0.209209C13.1677 0.107738 13.2974 0.0391846 13.4384 0.0124798C13.5794 -0.0142269 13.7252 0.0021534 13.8567 0.0594845C17.5893 1.68403 20 5.44651 20 9.64291Z"
        fill="black"
      />
    </svg>
    <input id="checkbox" type="checkbox" class="w-0 h-0 opacity-0" />
    <span
      class="slider absolute cursor-pointer top-0 right-0 left-0 bottom-0"
    ></span>
  </label>
</nav>`;
  body.innerHTML = nav;

  const data = await GetData(location);
  let date = data.location.localtime.split(' ')[0];
  let locationName = document.getElementById('locationName');
  locationName.innerHTML = `${data.location.name},${data.location.country}`;

  let main = `
  <main class="w-full mt-2 flex">
   <div class="w-full lg:w-3/4">
   <section>
   <div class="w-full flex items-start justify-center flex-col md:hidden">
     <h1 class="dark:text-white text-xl">${data.location.name}</h1>
     <p class="text-xs">${date}</p>
   </div>
   <div class="w-full flex">
     <div class="w-1/2 flex flex-col justify-center items-center">
       <h2 class="text-[70px] h-[82px] dark:text-white font-semibold">
        ${data.current.temp_c}°
       </h2>
       <p>${data.current.condition.text}</p>
     </div>
     <div class="w-1/2 flex justify-center items-center">
       <img class="w-[150px]" src="${data.current.condition.icon}" alt="" />
     </div>
   </div>
 </section>
 <section
   class="w-full mt-2 rounded-[30px] bg-gray-200 shadow shadow-gray-400 dark:shadow-none dark:bg-secondary h-[120px] flex"
 >
   <div class="w-1/3 h-full flex flex-col justify-center items-center">
     <img src="./src/assets/imgs/wind-pngrepo-com 1.png" />
     <p class="text-gray-700 dark:text-white">${data.current.wind_kph} km/h</p>
     <p class="text-xs dark:text-colorText text-gray-500">Wind</p>
   </div>
   <div class="w-1/3 h-full flex flex-col justify-center items-center">
     <img src="./src/assets/imgs/water-pngrepo-com 2.png" />
     <p class="text-gray-700 dark:text-white">${data.current.humidity}%</p>
     <p class="text-xs dark:text-colorText text-gray-500">humidity</p>
   </div>
   <div class="w-1/3 h-full flex flex-col justify-center items-center">
     <img
       src="./src/assets/imgs/umbrella-with-rain-drops-pngrepo-com 1.png"
     />
     <p class="text-gray-700 dark:text-white">${data.current.precip_mm}mm</p>
     <p class="text-xs dark:text-colorText text-gray-500">precip</p>
   </div>
 </section>
 <section class="flex flex-col gap-4">
   <div class="mt-8">
     <div>
       <h2 class="text-xl">Today</h2>
       <div class="w-full overflow-x-scroll flex justify-around gap-2 mt-1 scrollbar-hide py-2  sm:p-1">
         ${RenderHourMobileCard(data.forecast.forecastday[0].hour)}
       </div>
     </div>
   </div>
   <div class="mt-8">
     <div>
       <h2 class="text-xl">Next7 days</h2>
       <div class="w-full py-2 overflow-x-auto flex gap-2 justify-around mt-1 mb-4">

         ${RenderDesktopDaysCard(data.forecast.forecastday)}
       </div>
     </div>
   </div>
 </section>
   </div>


    <div class='w-0  lg:w-1/4 flex flex-col gap-8'>
      <div class="w-full"><canvas id="acquisitions"></canvas></div>
      <div class="w-full"><canvas id="chanceOfSnow"></canvas></div>
    </div>
  </main>`;
  body.innerHTML += main;

  (async function () {
    new Chart(document.getElementById('acquisitions'), {
      type: 'line',
      options: {
        elements: {
          line: {
            borderColor: '#BBD8EC',
          },
        },
      },
      data: {
        labels: data.forecast.forecastday.map((row) => row.date.split('-')[2]),
        datasets: [
          {
            label: 'Chance of rain',
            data: data.forecast.forecastday.map(
              (row) => row.day.daily_chance_of_rain
            ),
          },
        ],
      },
    });
  })();
  (async function () {
    new Chart(document.getElementById('chanceOfSnow'), {
      type: 'line',
      options: {
        elements: {
          line: {
            borderColor: '#BBD8EC',
          },
        },
      },
      data: {
        labels: data.forecast.forecastday.map((row) => row.date.split('-')[2]),
        datasets: [
          {
            label: 'Chance of rain',
            data: data.forecast.forecastday.map(
              (row) => row.day.daily_chance_of_snow
            ),
          },
        ],
      },
    });
  })();

  HandleMood();
};
//
