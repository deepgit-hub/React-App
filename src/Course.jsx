import { useState } from "react";

function Course({name, image,id,rating}) {
    const [contribute,setContribute] = useState(false);
    function thanks(num)
    {
        console.log(name,"Thank You for Contribution ",num)
        setContribute(true);
    }
    return (
    name &&  <div className="card">
            <img src={image}  />
            <h3>{name}</h3>
            <h4>{rating}</h4>
            <button onClick={()=>thanks(20)}>Contribute</button>
            <p>{contribute ? "Thanks for your contributon " : "Contri Please"}</p>
            
        </div>
    );
    
    

}



export default Course;