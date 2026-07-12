function Course({name, description, image,id,rating}) {
    function thanks()
    {
        console.log("Thank You!!!")
    }
    return (
    name &&  <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <h4>{rating}</h4>
            <button onClick={thanks}>Good</button>
            
        </div>
    );
    
    

}



export default Course;