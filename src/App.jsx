import './App.css'
import NavBar from './NavBar';
import Course from './Course';

function App() {
  

  return (
    <>             //We are using React Fragment here to wrap multiple components
    <NavBar />    //We are calling the NavBar component here
    <Course />     //We are calling the Course component here
    </>   
  );
}

export default App
