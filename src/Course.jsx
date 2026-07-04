import Deepak from './assets/Deepak.png'
const course1 = "React";
function Course(props) {
    return (
        <div className="card">
            <img src={Deepak} alt="Deepak img" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}
export default Course;