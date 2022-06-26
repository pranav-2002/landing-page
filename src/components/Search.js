import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <div className="course">
        <div className="course__content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
            alt="search icon"
            width="25px"
          />
          <input type="text" placeholder="Course Name" />
        </div>
        <button>Search</button>
      </div>
      <div className="popular">
        <div className="popular__right">
          <img
            src="https://icones.pro/wp-content/uploads/2021/05/icone-oeil-beurre-violet.png"
            alt="eye icon"
            width="22px"
          />
          <h4>Popular Courses</h4>
        </div>
        <div className="popular__dropdown">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/small-monochrome-icon/drop-down-arrow-4.png"
            alt="dropdown"
            width="12px"
            style={{ marginRight: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
