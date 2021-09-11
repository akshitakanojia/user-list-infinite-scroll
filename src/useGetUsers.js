import axios from "axios"
import { useState, useEffect } from "react"

const useGetUsers = (pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: 'https://randomuser.me/api',
      params: { seed:'random',results:210,page: pageNumber }
    }).then(response => {
      setUsers(prevUsers => {
        return [...prevUsers, ...response.data.results.map(user =>{
          return {
            id:user.login.uuid,
            name:user.name,
            picture:user.picture}})]
      })
      setLoading(false)
    }).catch(e => {
      setError(true)
    })
  }, [pageNumber])

  return { loading, error, users }
}

export default useGetUsers