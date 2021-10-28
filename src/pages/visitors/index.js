import "./index.css";
import { useState } from "react";
import { visitors } from "../../data/visitors";
import Chart from "react-apexcharts";
import { Doughnut } from "react-chartjs-2";
import { ReactComponent as Approve } from "../../assets/images/approve.svg";
import { ReactComponent as Decline } from "../../assets/images/decline.svg";

import { NumberCard } from "../../components/NumberCard";
export const VisitorsPage = () => {
  const chart1data = {
    // labels: ["one", "two", "three"],
    datasets: [
      {
        data: [45, 20, 35],
        backgroundColor: ["#685BFF", "#b7b7ed", "#7266FF"],
        borderColor: "transparent",
        borderWidth: 10,
        hoverOffset: 4,
        borderRadius: 20,
        spacing: 5,
        width: 40,
        weight: 100,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    legend: {
      display: true,
    },
  };
  const chart2data = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  const tableData = [
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      date: "10-03-21  4:00 PM",
      attendance: "Check-in",
      action: "Action",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      date: "10-03-21  4:00 PM",
      attendance: "Check-in",
      action: "Action",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      date: "10-03-21  4:00 PM",
      attendance: "Check-in",
      action: "Action",
    },
  ];
  return (
    <section>
      <div className="number-card-container container-div">
        {visitors.map((visitor, index) => (
          <NumberCard
            key={index}
            number={visitor.number}
            title={visitor.title}
            color={visitor.color}
            background={visitor.background}
          />
        ))}
      </div>
      <div className="charts-container">
        <div className="container-div pie-container">
          <Doughnut data={chart1data} options={options} />
          <p className="pie-total">5,824,213</p>
        </div>
        <div
          className="container-div"
          style={{
            width: "100%",
          }}
        >
          <Chart
            options={chart2data.options}
            series={chart2data.series}
            type="area"
            height={350}
          />
        </div>
      </div>
      <table>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Purpose</th>
          <th>Status</th>
          <th>Request Date</th>
          <th>Attendance</th>
          <th>Action</th>
        </tr>

        {tableData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.purpose}</td>
            <td>{data.status}</td>
            <td>{data.date}</td>
            <td>{data.attendance}</td>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Approve className="rounded-icon" />
              <Decline className="rounded-icon" />
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
};
