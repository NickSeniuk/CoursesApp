import Button from "../../common/Button";
import "../EmptyCourseList/emptyCourseListStyles.css";

function EmptyCourseList() {
  return (
    <div className="empty-course-list">
      <div className="empty-course-listBody">
        <h1>Course list is empty</h1>
        <p>Add New Course button to add your first course</p>
        <Button buttonText="Add new course" />
      </div>
    </div>
  );
}

export default EmptyCourseList;
