function Course({name, description, image, date, show,id,}) {
    
    return (
    name &&  <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <p>{description}</p>
            
            <p>{id}</p>
            
        </div>
    );
    
    

}



export default Course;