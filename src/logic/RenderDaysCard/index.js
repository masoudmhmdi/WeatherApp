export const RenderDaysMobileCard = function (daysArr) {
  let allDays = ``;
  daysArr.forEach((day) => {
    let oneDay = `<div
        class="min-w-[110px] w-[12%] shadow shadow-gray-400 dark:shadow-none  rounded-lg dark:bg-secondary bg-gray-200 flex flex-col justify-around items-center"
      >
        <h4>${day.date}</h4>
        <img src="${day.day.condition.icon}" alt="" />
        <p class="text-center">${day.day.condition.text}</p>
        <p>${day.day.avgtemp_c}°</p>
      </div>`;
    allDays += oneDay;
  });
  return allDays;
};
