function Course({name, description, image,id,rating}) {
    
    return (
    name &&  <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <h4>{rating}</h4>
            
            
        </div>
    );
    
    

}



export default Course;