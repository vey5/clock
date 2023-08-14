import styles from './styles.module.css'

const TimeView = (props) => {
    return ( <div className={styles.text}>
          {props.value} 
    </div>
    )
}

export default TimeView;