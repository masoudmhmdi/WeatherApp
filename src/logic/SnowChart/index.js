import { Chart } from 'chart.js/auto';
export const SnowChart = (data) => {
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
        labels: data.forecast.forecastday.map(
          (row) => row.date.split('-')[1] + '-' + row.date.split('-')[2]
        ),
        datasets: [
          {
            label: 'Chance of snow',
            data: data.forecast.forecastday.map(
              (row) => row.day.daily_chance_of_snow
            ),
          },
        ],
      },
    });
  })();
};
