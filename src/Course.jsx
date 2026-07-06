import PropTypes, { number } from 'prop-types';
function Course({name, description, image, date, show,num}) {
    if (show)
    {
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
    else
    {
        return(
            <div className="card">Course Not available</div>
        );
    }

}

Course.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    show: PropTypes.bool,
    num : PropTypes.number
}

export default Course;