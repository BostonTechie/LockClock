import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {
    
const baseURL = 'http://localhost:8000'
const [userView, setUserView] = useState('')

const retrieveUser = async () => {
  const url = `${baseURL}/get`
  const userData = await axios.get(url)
  setUserView(userData.data)

}
    
useEffect(() => {
  retrieveUser()
}, [])





return (
    
  <div>hello</div>
)
}

export default Home