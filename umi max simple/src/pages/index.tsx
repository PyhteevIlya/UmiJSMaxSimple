import { Line, Pie } from "@ant-design/charts";
import request from "@/utils/request";
import React from "react";


export default function HomePage() {
  const [dataLine, setDataLine] = React.useState([]);
  const [dataPie, setDataPie] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // setLoading(true);

  request('https://localhost:7051/Chart/GetLineChart').then(result => {
    console.log(result);
    setDataLine(result);
  });

  request('https://localhost:7051/Chart/GetPieChart').then(result => {
    console.log(result);
    setDataPie(result);
  });

},[]);
  
  // const dataLine = [
  //   { year: '1991', value: 3 },
  //   { year: '1992', value: 4 },
  //   { year: '1993', value: 3.5 },
  //   { year: '1994', value: 5 },
  //   { year: '1995', value: 4.9 },
  //   { year: '1996', value: 6 },
  //   { year: '1997', value: 7 },
  //   { year: '1998', value: 9 },
  //   { year: '1999', value: 13 },
  // ];

  const configLineChart = {
    data: dataLine,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  // const dataPie = [
  //   {
  //     type: '分类一',
  //     value: 27,
  //   },
  //   {
  //     type: '分类二',
  //     value: 25,
  //   },
  //   {
  //     type: '分类三',
  //     value: 18,
  //   },
  //   {
  //     type: '分类四',
  //     value: 15,
  //   },
  //   {
  //     type: '分类五',
  //     value: 10,
  //   },
  //   {
  //     type: '其他',
  //     value: 5,
  //   },
  // ];
  const configPieChart = {
    appendPadding: 10,
    data: dataPie,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <div>
      <h2>Yay! Welcome to umi! Token: {localStorage.getItem('token')}</h2>
      <p>

      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
        <div>
        <Line {...configLineChart} />
        </div>

        <div>
        <Pie {...configPieChart} />
        </div>
      </p>
    </div>
  );
}
