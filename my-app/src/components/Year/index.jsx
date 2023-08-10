import styles from './styles.module.css'
import { format } from 'date-fns';



const Year = () => {
const dateTime = format(new Date(2023, 9, 8), 'MM/dd/yyyy')


 return  <div>
    <h1 className={styles.dateTime}>{dateTime}</h1>
    </div>
}

export default Year; 

