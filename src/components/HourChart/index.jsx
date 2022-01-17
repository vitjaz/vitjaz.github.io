

const options = {
  responsive: true,
  layout: {
    padding: 20
  },
  spanGaps: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: "Прогноз на ближайший час",
      color: "#1d2c50",
      font: {
        family: "Inter",
        size: 20,
        weight: 'bold',
        lineHeight: 1.1,
    },
  },
}};

 //  Функция отрисовки графика
  //  const drawChart = (arr) => {
    
  //   let arrMinutelyLocalTime = [];
  //   let arrMinutelyTemp = [];
  //   let arrMinutelySnow = [];
  //   let arrMinutelyLiquid = [];

  //   arr.forEach(item => {
  //     arrMinutelyLocalTime.push(new Date(item.timestamp_local).toLocaleTimeString());
  //     arrMinutelyTemp.push(item.temp);
  //     arrMinutelySnow.push(Math.round(item.snow));
  //     arrMinutelyLiquid.push((item.precip).toFixed(2));
  //   })

  //   console.log(arrMinutelyTemp, arrMinutelyLocalTime, arrMinutelySnow, arrMinutelyLiquid);

  //   //  Если график уже создан - разрушаем его
  //   if(window.myChart instanceof Chart)
  //   {
  //       window.myChart.destroy();
  //   }

  //   // Рисуем новый график
  //   const ctx = document.getElementById('myChart');
  //   window.myChart = new Chart(ctx, {
  //             type: 'line',
  //             data: {
  //               labels: arrMinutelyLocalTime,
  //               datasets: [{
  //                 label: `Температура (C)`, 
  //                 data: arrMinutelyTemp,
  //                 backgroundColor: [
  //                   'rgba(123, 223, 132, 0.2)',
  //                 ],
  //                 borderColor: [
  //                   'rgba(123, 223, 132, 1)',
  //                 ],
  //                 borderWidth: 3,
  //                 fill: true,
  //                 tension: 0.4
  //               },
  //               {
  //                 label: 'Снегопад (мм/ч)', 
  //                 data: arrMinutelySnow,
  //                 backgroundColor: [
  //                   'rgba(255, 99, 132, 0.2)',
  //                 ],
  //                 borderColor: [
  //                   'rgba(255, 99, 132, 1)',
  //                 ],
  //                 borderWidth: 3,
  //                 fill: true,
  //                 tension: 0.4
  //               },
  //               {
  //                 label: 'Жидкие осадки (мм/ч)', 
  //                 data: arrMinutelyLiquid,
  //                 backgroundColor: [
  //                   'rgba(0, 0, 255, 0.2)',
  //                 ],
  //                 borderColor: [
  //                   'rgba(0, 0, 255, 1)',
  //                 ],
  //                 borderWidth: 3,
  //                 fill: true,
  //                 tension: 0.4
  //               },
              
  //             ]
  //             },
  //             options: {
  //               layout: {
  //                     padding: 20
  //                 },
  //                 spanGaps: true,
  //               responsive: true,
  //               plugins: {
  //                 title: {
  //                   display: true,
  //                   text: "Прогноз на ближайший час",
  //                   color: "#1d2c50",
  //                   font: {
  //                     family: "Inter",
  //                     size: 20,
  //                     weight: 'bold',
  //                     lineHeight: 1.1,
  //                   }
  //                 },
  //               },
  //               scales: {
  //                 x: {
  //                 display: true,
  //                 title: {
  //                   display: true,
  //                   text: 'Время',
  //                   color: "#000",
  //                   font: {
  //                      family: "Inter",
  //                      weight: "bold",
  //                      size: 14
  //                   }
  //                 }
  //               },
  //                 y: {
  //                   display: true,
  //                   title: {
  //                    display: true,
  //                     text: 'Значения',
  //                     color: "#000",
  //                     font: {
  //                       family: "Inter",
  //                       weight: "bold",
  //                       size: 14
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           });
  // };


function HourChart({arr}) {
  return (
    <div>
      <canvas id="myChart"></canvas>
    </div>
  )
}

export default HourChart
