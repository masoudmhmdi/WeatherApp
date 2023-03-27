export const RenderDesktopDaysCard = (dataArr) => {
  const a = new Date();
  const getWeekday = () =>
    [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][a.getDay()];
  let allCard = ``;
  dataArr.forEach((day, index) => {
    if (index === 0) {
      let htmlDt = `<div
    class=" min-w-[180px] w-[180px] overflow-hidden shadow shadow-gray-400 dark:shadow-none bg-info  rounded-3xl flex flex-col justify-around items-center"
  >
    <div class="w-full h-10 p-4 bg-[#ADCADE] p-1 flex justify-between items-center ">
    <h4 class="text-black font-semibold">${getWeekday()}</h4>
    <h4 class="text-black font-semibold">11:42 PM</h4>
    </div>
    <div class="w-full bg-transparent flex items-center justify-around">
    <h2 class="text-3xl font-bold text-black ">20°</h2>
    <img src="http://cdn.weatherapi.com/weather/64x64/day/116.png" alt="" />
    </div>
    <div class='w-full flex flex-wrap px-4 pb-4'>
    <p class='w-1/2 opacity-70 dark:text-black text-xs '>asjkldfh</p>
    <p class='w-1/2 opacity-70 dark:text-black text-xs '>asjkldfh</p>
    <p class='w-1/2 opacity-70 dark:text-black text-xs '>asjkldfh</p>
    <p class='w-1/2 opacity-70 dark:text-black text-xs '>asjkldfh</p>
    <p class='w-1/2 opacity-70 dark:text-black text-xs '>asjkldfh</p>
    <p class='w-1/2 opacity-70 dark:text-black text-xs '>asjkldfh</p>
    </div>
  </div>`;
      allCard += htmlDt;
    } else {
      let oneDay = `<div
        class=" min-w-[90px] flex items-stretch shadow shadow-gray-400 dark:shadow-none  rounded-3xl dark:bg-secondary bg-gray-200 md:flex flex-col justify-center
         items-center"
      >
       <div class="w-[50px] text-center mx-auto border-b pb-1 border-gray-400"> <h4>${
         day.date.split('-')[2]
       }</h4></div>
        <img src="${day.day.condition.icon}" alt="" />
        <p class='text-center'>${day.day.avgtemp_c}°</p>
      </div>`;
      allCard += oneDay;
    }
  });

  return allCard;
};
