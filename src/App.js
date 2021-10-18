import './App.css';
import corona from './img/corona.jpeg';
import recovered from './img/recovered.jpeg';
import deaths from './img/deaths.jpeg';

import InfoBox from './components/InfoBox'
import TableData from './components/Table'
import {sortedData} from './util'
import React,
 {useState, useEffect} from 'react'
import {FormControl, Select, MenuItem,} from '@mui/material'

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("WorldWide");
  const [countryInfo, setcountryInfo] = useState()
  const [tableData, setTableData] = useState()

  useEffect(()=> {

    fetch("https://disease.sh/v3/covid-19/all")
    .then(res => res.json())
    .then(data => {
      setcountryInfo(data)
    })

  },[])

  useEffect(()=> {
    const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
          .then(response =>  response.json())
          .then(data => {
            const countries = data.map(country => ({
                name: country.country,
                value: country.countryInfo.iso2,
                key: country.countryInfo._id

              }));
              const sortData = sortedData(data);
              setTableData(sortData)
              setCountries(countries)
            });
          }
          getCountriesData()
  },[])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value
    setCountry(countryCode)
    
    const url = countryCode === "worldwide" 
    ? "https://disease.sh/v3/covid-19/all" 
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then(res  => res.json())
    .then(data => {
      setcountryInfo(data)
      console.log(countryInfo)
    })
}
  return (
    <div className="App">
      <h1 className="project-title" style={{padding: '20px'}}> 
      <i class="fas fa-virus"></i>
      <span className="title-focus" style={{padding: '20px'}}>Covid-19</span> Tracker</h1>
      <div className="app-header" style={{padding: '20px'}}>
      <div className="app-section">
      <FormControl className="app-dropdown" fullWidth>
        <Select variant="outlined" value={country} onChange={onCountryChange} placeholder="Select Countries">
        <MenuItem value="worldwide">WorldWide</MenuItem>
          {countries.map(country => (
            <MenuItem value={country.value}> {country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      </div>
     <section className="hero-section">
      {countryInfo && <div className="app-left">

            <InfoBox img={corona} title="Corona Virus" cases={countryInfo.todayCases} total={countryInfo.cases}/>
            <InfoBox img={recovered} title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
            <InfoBox  img={deaths} title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
      </div>}
      <div className="app-right">
      <h1 className="sec-title">Live <span className="cases">cases by Country </span> </h1>
            <TableData countries={tableData}/>
      </div>
      </section>

    </div>
  );

}

export default App;
