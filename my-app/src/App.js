
import { useState, useEffect} from 'react'
import { format } from 'date-fns';
import TimeView from './components/TimeView/';
import app from './app.module.css'



function App() {
const [time, setTime] = useState(new Date())

  useEffect (() => {
  const interval = setInterval (() => {
   setTime(new Date())
  }, 1000)

  return () => clearInterval(interval)
}, [])

const hours = time.getHours()
const minutes = time.getMinutes()
const seconds = time.getSeconds()

const timeString = `${hours}:${minutes}:${seconds}`

const dateTime = format(new Date(2023, 9, 8), 'MM/dd/yyyy')

 return (
     
    <div>
       <h1  className={app.wrapper}>
       <TimeView value={timeString} />
       <TimeView value={dateTime} />
       </h1>
    </div>
       
   ) 
  
}

export default App;
