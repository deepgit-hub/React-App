
const course1 = "React";
function Course(props) {
    return (
        <div className="card">
            <img src={props.image} alt="Deepak" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}
export default Course;