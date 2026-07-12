function Course({name, image,id,rating}) {
    function thanks(num)
    {
        console.log(name,"Thank You!!! ",num)
        console.log(event)
    }
    return (
    name &&  <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <h4>{rating}</h4>
            <button onClick={()=>thanks(20)}>Good</button>
            
        </div>
    );
    
    

}



export default Course;