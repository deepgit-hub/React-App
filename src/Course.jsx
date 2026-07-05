import Dee from './assets/Deepak.png'
const course1 = "React";
function Course(props) {
    return (
        <div className="card">
            <img src={props.image}  />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

Course.defaultProps = {
    name: "Default Course",
    description: "This is a default course description.",
    image : Dee
}


export default Course;