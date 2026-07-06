function Course({name, description, image, date, show}) {
    if (show)
    {
    return (
        <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{date}</p>
        </div>
    );
    }
    return null;

}



export default Course;