import { useState, useEffect } from 'react'
import './index.css'
import countryDataApi from './services/countries'

const Display = ({ countryData }) => {
  if (typeof countryData === 'string') {
    return <p>{countryData}</p>;
  }
  if (Array.isArray(countryData) && countryData.every(item => typeof item === 'string')) {
    return (
      <ul>
        {countryData.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    );
  }
  if (Array.isArray(countryData) && countryData.every(item => typeof item === 'object')) {
    const renderLanguages = (languages) => (
      Object.entries(languages).map(([code, name], index) => (
        <li key={index}>{name}</li>
      ))
    );
    return countryData.map((data, index) => (
      <div key={index}>
        <h2>{data.name.common} ({data.name.official})</h2>
        <p>Capital: {data.capital[0]}</p>
        <p>Area: {data.area}</p>
        <p>Population: {data.population.toLocaleString()}</p>
        <p>Region: {data.region} - {data.subregion}</p>
        <ul>
          {renderLanguages(data.languages)}
        </ul>
        <img src={data.flags.png} alt={`Flag of ${data.name.common}`} />
      </div>
    ));
  }
  return <p>Invalid data format</p>;
};



const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [searchResult,setSearchResult] = useState('');
  // Fetch data on component mount and store it in the countries state variable
  useEffect(()=>{
    if (countriesData.length===0){
      countryDataApi.getAllCountries().then(response => {         
        setCountriesData(response.data)    
      })
    }
    
  },[])

  const searchInputFilter = (value) => {
    if (value.length === 0) {
      setSearchResult('');
    } else {
      const filteredCountries = countriesData.filter(element =>
        element.name['common'].toLowerCase().includes(value.toLowerCase())
      );
  
      if (filteredCountries.length > 10) {
        setSearchResult('Too many Matches Specify Another Filter');
      } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
        setSearchResult(filteredCountries.map(element => element.name['common']));
        console.log(filteredCountries);
        console.log("Returned 9" + value);
      } else if (filteredCountries.length === 1) {
        console.log("Returned 1" + value);
        countryDataApi.getCountryInfo(filteredCountries[0].name['common']).then(response => {
          setSearchResult([response.data]);
        });
      }
    }
  };
  

  return (
    <div>
      <p>find countries <input onChange={(event)=>searchInputFilter(event.target.value)}></input></p>
      <Display countryData={searchResult}></Display>
    </div>
  )
}


export default App