import React from "react";

const ImageContainer = ({
  image,
  userSelect,
  setUserSelect,
  users,
  setAnimation,
  animation,
}) => {
  const userPrev = () => {
    setUserSelect(userSelect >= users.length - 1 ? 0 : userSelect + 1);
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  };
  const userNext = () => {
    setUserSelect(userSelect <= 0 ? users.length - 1 : userSelect - 1);
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  };
  return (
    <div className="image__container">
      <img
        src={`/images/${image}`}
        alt=""
        className={animation ? "animationImg" : null}
      />
      <div className="navigation__buttons">
        <button className="prev__btn" onClick={userPrev}></button>
        <button className="next__btn" onClick={userNext}></button>
      </div>
    </div>
  );
};

export default ImageContainer;
