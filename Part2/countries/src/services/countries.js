import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAllCountries = () => {
  return axios.get(`${baseUrl}/all`)
}

const getCountryInfo = (name) => {
    return axios.get(`${baseUrl}/name/${name}`)
  }


export default {getAllCountries,getCountryInfo}