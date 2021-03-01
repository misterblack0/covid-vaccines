import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    axios
      .get("https://covid.ourworldindata.org/data/owid-covid-data.json")
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [3000]);

  console.log(data);

  // total vaccinari global
  // console.log(data.OWID_WRL.data.slice(-1)[0].total_vaccinations);

  // procent populatia globala a facut minim un vaccin
  // console.log(data.OWID_WRL.data.slice(-1)[0].people_vaccinated_per_hundred);

  // procentaj din populatie fully vaccinated per tara (2 doze)
  // console.log(data.ROU.data.slice(-1)[0].people_fully_vaccinated_per_hundred);

  // vaccinari noi per tara
  // console.log(data.ROU.data.slice(-1)[0].new_vaccinations);

  // vaccinari totale per tara
  // console.log(data.ROU.data.slice(-1)[0].people_fully_vaccinated + data.ROU.data.slice(-1)[0].people_vaccinated

  //Sursa: https://ourworldindata.org/ - Our World in Data

  return <div></div>;
}
