import Button from "../../../../common/Button.jsx";
import Input from "../../../../common/Input.jsx";
import "../SearchBar/searchBarStyles.css";

function SearchBar() {
  return (
    <div className="searchCtn">
      <div className="searchBody">
        <Input />
        <Button buttonText="Search" />
      </div>
    </div>
  );
}

export default SearchBar;
