// import { useState } from "react";
// import { Button, Layout } from "antd";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
// import { theme } from "antd"; // Ensure this path matches your project structure

// import ReactApexChart from "react-apexcharts"; //Apex Chart

// import Logo from "./sidebarcomponents/Logo";
// import MenuList from "./sidebarcomponents/MenuList";
// import ToggleThemeButton from "./sidebarcomponents/ToggleThemeButton";

// const { Header, Content, Footer, Sider } = Layout;

// function App() {

//   const [darkTheme, setDarkTheme] = useState(true);
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleTheme = () => {
//     setDarkTheme(!darkTheme);
//   };

//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   const [chartOptions] = useState({
//     series: [44, 55, 41, 17, 15],
//     chart: {
//       width: 380,
//       type: 'donut',
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: 'bottom',
//           },
//         },
//       },
//     ],
//   });

//   const [series, setSeries] = useState([
//     {
//       name: "PRODUCT A",
//       data: [44, 55, 41, 67, 22, 43],
//     },
//     {
//       name: "PRODUCT B",
//       data: [13, 23, 20, 8, 13, 27],
//     },
//     {
//       name: "PRODUCT C",
//       data: [11, 17, 15, 15, 21, 14],
//     },
//     {
//       name: "PRODUCT D",
//       data: [21, 7, 25, 13, 22, 8],
//     },
//   ]);

//   const [options, setOptions] = useState({
//     chart: {
//       type: "bar",
//       height: 350,
//       stacked: true,
//       toolbar: {
//         show: true,
//       },
//       zoom: {
//         enabled: true,
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           legend: {
//             position: "bottom",
//             offsetX: -10,
//             offsetY: 0,
//           },
//         },
//       },
//     ],
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         borderRadius: 10,
//         borderRadiusApplication: "end", // 'around', 'end'
//         borderRadiusWhenStacked: "last", // 'all', 'last'
//         dataLabels: {
//           total: {
//             enabled: true,
//             style: {
//               fontSize: "13px",
//               fontWeight: 900,
//             },
//           },
//         },
//       },
//     },
//     xaxis: {
//       type: "datetime",
//       categories: [
//         "01/01/2011 GMT",
//         "01/02/2011 GMT",
//         "01/03/2011 GMT",
//         "01/04/2011 GMT",
//         "01/05/2011 GMT",
//         "01/06/2011 GMT",
//       ],
//     },
//     legend: {
//       position: "right",
//       offsetY: 40,
//     },
//     fill: {
//       opacity: 1,
//     },
//   });
//   return (
//     <>
//       <Layout>
//         <Sider
//           hasSider
//           collapsed={collapsed}
//           collapsible
//           trigger={null}
//           theme={darkTheme ? "dark" : "light"}
//           className="sidebar"
//           // style={{
//           //   overflow: 'auto',
//           //   height: '100vh',
//           //   position: 'fixed',
//           //   left: 0,
//           //   top: 0,
//           //   bottom: 0,
//           // }}
//         >
//           <Logo />
//           <MenuList darkTheme={darkTheme} />
//           <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
//         </Sider>

//         <Layout>
//           <Header style={{ padding: 0, background: colorBgContainer }}>
//             <Button
//               className="toggle"
//               onClick={() => setCollapsed(!collapsed)}
//               type="text"
//               icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             />
//           </Header>

//           <Layout>
//             <Content>
//               <div className="d-flex">
//                 {/* chart side   */}
//                 <div className="chart-card">
//                   <div className="dashboard-card-analytics">
//                     <div className="card-analytics">
//                       <div>
//                         <div className="card-analytics__title">
//                           Total Customers <i>icon</i>
//                           <h3>₹41,455</h3>
//                           <div className="d-flex justify-content-between">
//                             <p>190 Order</p>
//                             <i>icon</i>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card-analytics">
//                       <div className="card-analytics__title">
//                         Total Sale<i>icon</i>
//                         <h3>₹41,455</h3>
//                         <div className="d-flex justify-content-between">
//                           <p>190 Order</p>
//                           <i>icon</i>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card-analytics">
//                       <div className="card-analytics__title">
//                         Profit <i>icon</i>
//                         <h3>₹41,455</h3>
//                         <div className="d-flex justify-content-between">
//                           <p>190 Order</p>
//                           <i>icon</i>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card-analytics">
//                       <div className="card-analytics__title">
//                         Expense <i>icon</i>
//                         <h3>₹41,455</h3>
//                         <div className="d-flex justify-content-between">
//                           <p>190 Order</p>
//                           <i>icon</i>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="charts-graph">
//                     <div>
//                       <div id="chart">
//                         <ReactApexChart
//                           options={options}
//                           series={series}
//                           type="bar"
//                           height={350}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* notice side  */}
//                 <div className="notice-side">
//                   <div>
//                     <div className="supplier-hub">
//                       <div id="chart">
//                         <ReactApexChart
//                           options={options}
//                           series={options.series}
//                           type="donut"
//                           width={options.chart.width}
//                         />
//                       </div>
//                     </div>
//                     <div className="supplier-hub"></div>
//                   </div>
//                 </div>
//               </div>
//             </Content>
//             <Footer style={{ textAlign: "center" }}>
//               Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
//             </Footer>
//           </Layout>
//         </Layout>
//       </Layout>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import { Button, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { theme } from "antd"; // Ensure this path matches your project structure

import ReactApexChart from "react-apexcharts"; // Apex Chart

import Logo from "./sidebarcomponents/Logo";
import MenuList from "./sidebarcomponents/MenuList";
import ToggleThemeButton from "./sidebarcomponents/ToggleThemeButton";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [barChartOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  });

  const [barChartSeries] = useState([
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "PRODUCT C",
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: "PRODUCT D",
      data: [21, 7, 25, 13, 22, 8],
    },
  ]);

  const [donutChartOptions] = useState({
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 300,
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <>
      <Layout>
        <Sider
          hasSider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
          className="sidebar"
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          <Layout>
            <Content>
              <div className="d-flex">
                {/* chart side */}
                <div className="chart-card">
                  <div className="dashboard-card-analytics">
                    <div className="card-analytics">
                      <div>
                        <div className="card-analytics__title">
                          Total Customers <i>icon</i>
                          <h3>₹41,455</h3>
                          <div className="d-flex justify-content-between">
                            <p>190 Order</p>
                            <i>icon</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-analytics">
                      <div className="card-analytics__title">
                        Total Sale<i>icon</i>
                        <h3>₹41,455</h3>
                        <div className="d-flex justify-content-between">
                          <p>190 Order</p>
                          <i>icon</i>
                        </div>
                      </div>
                    </div>
                    <div className="card-analytics">
                      <div className="card-analytics__title">
                        Profit <i>icon</i>
                        <h3>₹41,455</h3>
                        <div className="d-flex justify-content-between">
                          <p>190 Order</p>
                          <i>icon</i>
                        </div>
                      </div>
                    </div>
                    <div className="card-analytics">
                      <div className="card-analytics__title">
                        Expense <i>icon</i>
                        <h3>₹41,455</h3>
                        <div className="d-flex justify-content-between">
                          <p>190 Order</p>
                          <i>icon</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="charts-graph">
                    <div>
                      <div id="bar-chart">
                        <ReactApexChart
                          options={barChartOptions}
                          series={barChartSeries}
                          type="bar"
                          height={350}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* notice side */}
                <div className="notice-side">
                  <div>
                    <div className="supplier-hub"></div>
                    <div className="supplier-hub">
                      {" "}
                      <div id="donut-chart">
                        <ReactApexChart
                          options={donutChartOptions}
                          series={donutChartOptions.series}
                          type="donut"
                          width={donutChartOptions.chart.width}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;