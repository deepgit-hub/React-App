import styles from './Course.module.css';
const couse1 = "React";

function Course() {
    return (
        <div className={styles.card}>
            <img src="" alt="" />
            <h3>{couse1}</h3>
            <p>This is Deepak  Course</p>
        </div>
    );
}
export default Course;