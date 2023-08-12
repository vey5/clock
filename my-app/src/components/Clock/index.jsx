import styles from './styles.module.css'
import { useState, useEffect} from 'react'  
  


  
  
const Сlock = () => {
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
  
  return  <div>
       <h1 className={styles.Clock}>{timeString}</h1>
  </div>
  
};

  export default Сlock;