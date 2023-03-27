export const RenderHourMobileCard = function (hourArr) {
  let timeNow = new Date().getHours();
  console.log(timeNow);
  let allCard = ``;

  hourArr.forEach((hour) => {
    let time = hour.time.split(' ')[1].replace(':00', '');
    if (time >= timeNow) {
      if (time == timeNow) {
        let oneDay = `<div
        class=" min-w-[90px]  shadow shadow-gray-400 dark:shadow-none  rounded-3xl dark:bg-secondary bg-info md:flex flex-col justify-around items-center"
        >
        <div class="w-[50px] mx-auto text-center border-b pb-1 border-gray-400"> <h4>${time}</h4>
        </div>
        <img class=" mx-auto" src="${hour.condition.icon}" alt="" />
        <p class="text-center">${hour.temp_c}°</p>
        </div>`;
        allCard += oneDay;
      } else {
        let oneDay = `<div
        class=" min-w-[90px]  shadow shadow-gray-400 dark:shadow-none  rounded-3xl dark:bg-secondary bg-gray-200 md:flex flex-col justify-around items-center"
        >
        <div class="w-[50px] mx-auto text-center border-b pb-1 border-gray-400"> <h4>${time}</h4>
        </div>
        <img class=" mx-auto" src="${hour.condition.icon}" alt="" />
        <p class="text-center">${hour.temp_c}°</p>
        </div>`;
        allCard += oneDay;
      }
    }
  });
  return allCard;
};
