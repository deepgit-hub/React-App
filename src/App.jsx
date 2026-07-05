import './App.css'
import Course from './Course';
import photo1 from './assets/Deepak.png'
import  photo2 from './assets/Deepak1.jpg'
import  photo3 from './assets/Deepak2.png'

function App() {
  

  return (
    <>             
    
    <Course name="Math" description ="Mathematics course"  image={photo1}/>
    <Course  description = "Physics course" />
    <Course name="Chemistry" description = "Chemistry course"  image={photo3}/>    
    
    </>   
  );
}

export default App
