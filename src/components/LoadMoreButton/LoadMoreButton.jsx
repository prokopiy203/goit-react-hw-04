import css from "./LoadMoreButton.module.css";

function LoadMoreButton({ onClick }) {
  return (
    <div className={css.buttonBox}>
      <button className={css.buttonMore} onClick={onClick} type="button">
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
