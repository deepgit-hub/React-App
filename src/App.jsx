import './App.css'
import Course from './Course';
import Deepak from './assets/Deepak.png'

function App() {
  

  return (
    <>             
    
    <Course name="Math" description ="Mathematics course"  image={Deepak}/>
    <Course name ="Physics" description = "Physics course" />
    <Course name="Chemistry" description = "Chemistry course" />    
    
    </>   
  );
}

export default App
