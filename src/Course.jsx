import Dee from './assets/Deepak.png'
const course1 = "React";
function Course({
    name = "Deepak",
    description = "This is a React course",
    image = Dee,
    date = "2026-07-01"
}) {
    return (
        <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{date}</p>
        </div>
    );
}



export default Course;