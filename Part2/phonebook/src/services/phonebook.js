import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deletePhone = (id) =>{
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePhone = (id,newData) =>{
   return axios.put(`${baseUrl}/${id}`, newData)
}

export default { 
  getAll, 
  create,deletePhone,updatePhone 
}