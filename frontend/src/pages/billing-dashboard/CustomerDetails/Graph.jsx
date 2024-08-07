// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

// const DynamicChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Daily Customer Visits',
//         data: [],
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75,192,192,0.6)',
//         hoverBorderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post('http://localhost:5000/api/customer-visits');
//         const data = response.data;

//         if (!Array.isArray(data)) {
//           console.error('Expected an array of data:', data);
//           return;
//         }

//         const labels = data.map(item => item.date || 'Unknown Date');
//         const values = data.map(item => item.totalCustomers || 0);

//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Daily Customer Visits',
//               data: values,
//               backgroundColor: 'rgba(75,192,192,0.4)',
//               borderColor: 'rgba(75,192,192,1)',
//               borderWidth: 1,
//               hoverBackgroundColor: 'rgba(75,192,192,0.6)',
//               hoverBorderColor: 'rgba(75,192,192,1)',
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Error fetching data', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Dynamic Chart</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default DynamicChart;



// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

// const DynamicChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Daily Customer Visits',
//         data: [],
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75,192,192,0.6)',
//         hoverBorderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/customer-visits');
//         const data = response.data;

//         if (!Array.isArray(data)) {
//           console.error('Expected an array of data:', data);
//           return;
//         }

//         const labels = data.map(item => item.date || 'Unknown Date');
//         const values = data.map(item => item.totalCustomers || 0);

//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Daily Customer Visits',
//               data: values,
//               backgroundColor: 'rgba(75,192,192,0.4)',
//               borderColor: 'rgba(75,192,192,1)',
//               borderWidth: 1,
//               hoverBackgroundColor: 'rgba(75,192,192,0.6)',
//               hoverBorderColor: 'rgba(75,192,192,1)',
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Error fetching data', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handlePostData = async () => {
//     const dataToSend = [
//       { date: '2024-07-30', totalCustomers: 100 },
//       { date: '2024-07-31', totalCustomers: 150 },
//     ];

//     try {
//       const response = await axios.post('http://localhost:5000/api/customer-visits', dataToSend);
//       console.log(response.data.message);
//     } catch (error) {
//       console.error('Error posting data', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Dynamic Chart</h2>
//       <Line data={chartData} />
//       <button onClick={handlePostData}>Submit Data</button>
//     </div>
//   );
// };

// export default DynamicChart;


// frontend/src/ApexChartComponent.js
import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import axios from 'axios';

const ApexChartComponent = () => {
    const [data, setData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last',
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customer-visits');
        const data = response.data;

        const seriesData = [
          {
            name: 'PRODUCT A',
            data: data.map(item => item.totalCustomers) // Adjust this to fit your data
          }
        ];

        const categories = data.map(item => item.date);

        setChartData({
          series: seriesData,
          options: {
            ...chartData.options,
            xaxis: {
              categories: categories
            }
          }
        });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("fetching");
//         const response = await axios.get('http://localhost:8080/api/billingpage/billingview');
//         console.log("fetched", response.data);

//         const rawData = response.data.billing;

//         // Ensure rawData is an array
//         if (Array.isArray(rawData)) {
//           const indexedData = rawData.map((record, index) => ({
//             ...record,
//             index: index + 1, // start index from 1
//           }));

//           setData(indexedData);

//           // Calculate the total amount
//           const total = rawData.reduce((sum, record) => sum + parseFloat(record.grandTotal || 0), 0);
//           setTotalAmount(total);
//         } else {
//           console.error('Fetched data is not an array:', rawData);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

  const handlePostData = async () => {
    const dataToSend = [
      { date: '2024-07-30', totalCustomers: 100 },
      { date: '2024-07-31', totalCustomers: 150 },
      { date: '2024-08-01', totalCustomers: 30 },
      { date: '2024-08-02', totalCustomers: 170 },
      { date: '2024-08-03', totalCustomers: 10 },
      { date: '2024-08-04', totalCustomers: 160 },
      { date: '2024-08-05', totalCustomers: 200 },

    ];

    try {
      const response = await axios.post('http://localhost:5000/api/customer-visits', dataToSend);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error posting data', error);
    }
  };

  return (
    <div>
      <h2>Apex Chart</h2>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={400}
      />
      {/* <button onClick={handlePostData}>Submit Data</button> */}
    </div>
  );
};

export default ApexChartComponent;