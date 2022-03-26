import React from 'react'


const Home = () => {
    
const baseURL = 'http://localhost:8000'


fetch(`${baseURL}/get`)
    .then(res => res.json())
    .then(data =>console.log(data))
    

  return (
    <div>Home</div>
  )
}

export default Home