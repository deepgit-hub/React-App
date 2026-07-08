import Course from './Course';
import photo1 from './assets/Deepak.png'
import  photo2 from './assets/Deepak1.jpg'
import  photo3 from './assets/Deepak2.png'
function CourseList()
{
    
        const courses = [
            {
                
            },
            {
                id : 2,
                name : " Speech 2" ,
                description : "About Coding",
                image : photo2 ,
                date : "2026-07-02" 
            },
            {
                id : 3,
                name : " Speech 3" ,
                description : "About Public Speaking",
                image : photo3 ,
                date : "2026-07-03" 
            }
        ]
        const coursesList = courses.map((course) => 
        <Course  key = {course.id} image={course.image} name={course.name} description ={course.description}   date={course.date} num ={course.num}  />)
       return(
        <>
      {coursesList}
      </>
      );
}

export default CourseList;