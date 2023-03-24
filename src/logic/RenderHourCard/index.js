export const RenderHourMobileCard = function (hourArr) {
  let allCard = ``;
  hourArr.forEach((hour) => {
    let time = hour.time.split(' ')[1];
    console.log(time);
    let card = `<div class="min-w-[110px] w-[12%]  rounded-lg dark:bg-secondary bg-gray-200 flex flex-col justify-around items-center">
    <h4>${time}</h4>
    <img src="${hour.condition.icon}" alt="" />
    <p>${hour.temp_c}°</p>
  </div>;`;
    allCard += card;
  });
  return allCard;
};
