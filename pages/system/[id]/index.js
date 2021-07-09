import React, { useState } from "react";

import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";

import HighchartsReact from "highcharts-react-official";

import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const system = ({ system }) => {
  const [chartOptions, setChartOptions] = useState(system);

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{id}</h1>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log("context :", context);
  const res = await fetch(`${server}/api/systems/${context.params.id}`);

  const system = await res.json();
  console.log(
    "system************************************************************************ :",
    system
  );

  return {
    props: {
      system,
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/systems`);

//   const systems = await res.json();
//   // console.log('systems :', systems);

//   const ids = systems.data.map((system) => system.type.name);
//   const paths = ids.map((id) => ({
//     params: { id: id.toString().toLowerCase().replace(/\s/g, "-") },
//   }));
//   console.log("paths :", paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default system;
