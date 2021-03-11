import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Layout from "../src/components/Layout";

const StyledPage = styled.div`
  ${"" /* background-color: yellow; */}
  margin: 10rem 25rem;
`;

const GlobalData = styled.div`
  display: flex;
  justify-content: center;
  border-radius: var(--border-radius);
  background-color: #cdeb8b;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 20px;
  }
`;

const Home = () => {
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

  console.log(data);

  return (
    <Layout>
      <StyledPage>
        <GlobalData>
          <div>
            <span>{data.OWID_WRL && data.OWID_WRL.data.slice(-1)[0].total_vaccinations}</span>
            <p>vaccines administered around the world</p>
          </div>
          <div>
            <span>
              {data.OWID_WRL && data.OWID_WRL.data.slice(-2)[0].people_vaccinated_per_hundred + "%"}
            </span>
            <p>of the global population received at least 1 dose of vaccine</p>
          </div>
        </GlobalData>
      </StyledPage>
    </Layout>
  );
};

export default Home;
