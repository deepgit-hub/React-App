function Course({name, description, image, date, show,num, isPremium}) {
    
    return (
        <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{date}</p>
            <p>{num}</p>
            
        </div>
    );
    
    

}



export default Course;