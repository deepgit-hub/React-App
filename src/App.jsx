import './App.css'
import Course from './Course';
import photo1 from './assets/Deepak.png'
import  photo2 from './assets/Deepak1.jpg'
import  photo3 from './assets/Deepak2.png'

function App() {
  

  return (
    <>             
   
    
    <Course num = "1" name="Speech 1" description ="About Soft Skills"  image={photo1} date="2026-07-01" show={true} />
    <Course num = "2" name = "Speech 2" description = "About Coding" image={photo2} date="2026-07-02"  show={true} />
    <Course num = "3" name="Speech 3" description = "About Public Speaking"  image={photo3} date="2026-07-03" show={true} />    
    
    </>   
  );
  }
  

export default App
