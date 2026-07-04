import Deepak from './Deepak.png';
const course1 = "React";
function Course() {
    return (
        <div className="card">
            <img src="{Deepak}" alt="Deepak img" />
            <h3>{course1}</h3>
            <p>This is Deepak  Course</p>
        </div>
    );
}
export default Course;