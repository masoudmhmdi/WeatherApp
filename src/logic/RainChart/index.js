import { Chart } from 'chart.js/auto';
export const RainChart = (data) => {
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
        labels: data.forecast.forecastday.map(
          (row) => row.date.split('-')[1] + '-' + row.date.split('-')[2]
        ),
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
};
