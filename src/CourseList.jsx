import Course from './Course';
import photo1 from './assets/Deepak.png'
import  photo2 from './assets/Deepak1.jpg'
import  photo3 from './assets/Deepak2.png'
function CourseList()
{
    
        const courses = [
            {
                id : 1,
                name : " Speech 1" ,
                description : "About Soft Skills",
                image : photo1 ,
                

            },
            {
                id : 2,
                name : " Speech 2" ,
                description : "About Coding",
                image : photo2 ,
               
            },
            {
                id : 3,
                name : " Speech 3" ,
                description : "About Public Speaking",
                image : photo3 ,
                
                
            }   
        ]
        courses.sort((a,b) => a.rating - b.rating);
        const bestspeech = courses.filter((course)=>course.rating>=3)
        const coursesList = bestspeech.map((course) => 
        <Course  key = {course.id}  image={course.image} name={course.name} description ={course.description}   rating={course.rating}  />)
       return(
        <>
      {coursesList}
      </>
      );
}

export default CourseList;