function Course({name, description, image,id}) {
    
    return (
    name &&  <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <p>{description}</p>
            
            
            
        </div>
    );
    
    

}



export default Course;