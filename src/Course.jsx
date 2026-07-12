function Course({name, image,id,rating}) {
    function thanks(num , event)
    {
        console.log(name,"Thank You!!! ",num)
        console.log(event)
    }
    return (
    name &&  <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <h4>{rating}</h4>
            <button onClick={(event)=>thanks(20,event)}>Good</button>
            
        </div>
    );
    
    

}



export default Course;