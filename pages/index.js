import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../src/components/Layout";

export default function Home() {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await axios
      .get("https://covid.ourworldindata.org/data/owid-covid-data.json")
      .catch((error) => {
        console.log("Error: ", error);
      });

    if (response && response.data) setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  // total vaccinari global
  // console.log(data.OWID_WRL.data.slice(-2)[0].total_vaccinations);

  // procent populatia globala a facut minim un vaccin
  // console.log(data.OWID_WRL.data.slice(-2)[0].people_vaccinated_per_hundred);

  // procentaj din populatie fully vaccinated per tara (2 doze)
  // console.log(data.ROU.data.slice(-2)[0].people_fully_vaccinated_per_hundred);

  // vaccinari noi per tara
  // console.log(data.ROU.data.slice(-2)[0].new_vaccinations);

  // vaccinari totale per tara
  // console.log(data.ROU.data.slice(-2)[0].people_fully_vaccinated + data.ROU.data.slice(-2)[0].people_vaccinated

  //Sursa: https://ourworldindata.org/ - Our World in Data

  return (
    <Layout>
      <div>{data.OWID_WRL && data.OWID_WRL.data.slice(-1)[0].total_vaccinations}</div>
      <div>{data.ROU && data.ROU.data.slice(-2)[0].new_vaccinations}</div>
    </Layout>
  );
}
