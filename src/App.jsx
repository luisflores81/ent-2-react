import { useState } from 'react'
import './App.css'
import WeatherBox from './Components/WeatherBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{backgroundImage: 'url("https://i.blogs.es/3fd5a4/jumpstory-download20220511-143520/1366_2000.jpg")'}}>
      <WeatherBox/>
    </div>
  )
}

export default App
