import "./styles/previousAndNextBtn.scss";

export const PreviousAndNextBtn = () => {
  const handlePrevious = () => {
    console.log("previous page");
  };

  const handleNext = () => {
    console.log("next page");
  };

  return (
    <div className="wrapper-btns">
      <button className="previous-btn" onClick={handlePrevious}>
        &larr;
      </button>
      <button className="next-btn" onClick={handleNext}>
        &rarr;
      </button>
    </div>
  );
};
