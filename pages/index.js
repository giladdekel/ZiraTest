import { server } from '../config'

import SystemsList2 from "../components/SystemsList2";


import React, { useState } from "react";

import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";

import HighchartsReact from "highcharts-react-official";




if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}


export default function Home({ systems }) {
// console.log("systems.data :", systems.data);


  return (
    <div>
      <SystemsList2 systems={systems} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/systems`)
  const systems = await res.json();
  // console.log("systems :", systems);

  return {
    props: {
      systems,
    },
  };
}








// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
