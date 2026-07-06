function Course() {
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