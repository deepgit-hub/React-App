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
    else
    {
        return(
            <div className="card">Course Not available</div>
        );
    }

}



export default Course;