import React from "react";

const ImageContainer = ({ image, userSelect, setUserSelect, users }) => {
  return (
    <div className="image__container">
      <img src={`/images/${image}`} alt="" />
      <div className="navigation__buttons">
        <button
          className="prev__btn"
          onClick={() =>
            setUserSelect(userSelect >= users.length - 1 ? 0 : userSelect + 1)
          }
        ></button>
        <button
          className="next__btn"
          onClick={() =>
            setUserSelect(userSelect <= 0 ? users.length - 1 : userSelect - 1)
          }
        ></button>
      </div>
    </div>
  );
};

export default ImageContainer;
