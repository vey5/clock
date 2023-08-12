import Clock from './components/Clock'
import Year from './components/Year'
import app from './app.module.css'
function App() {
  return (
    <div className={app.wrapper}>
     <><Clock />
     <Year /></> 
    </div>
    
      
    
  );
}

export default App;
