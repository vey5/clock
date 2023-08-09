import { format } from 'date-fns';
import styles from './styles.module.css'
import { useState, useEffect} from 'react'  
  <header className ={styles.header}>


  </header>
  
const Сlock = () => {
 const [time, setTime] = useState(new Date())
  useEffect (() => {
  const interval = setInterval (() => {
   setTime(new Date())
  }, 1000)
  return () => clearInterval(interval)
}, [])

 const date = format(new Date(2023, 8, 8), 'MM/dd/yyyy')
  

const hours = time.getHours()
const minutes = time.getMinutes()
const seconds = time.getSeconds()

const timeString = `${hours}:${minutes}:${seconds}`
  
  
  return  <div className = {styles.Clock}>
        <p className = {styles.date}>{date}</p>
       <h1 className = {styles.time}>{timeString}</h1>
  </div>
  
};

  

  
  

export default Сlock;