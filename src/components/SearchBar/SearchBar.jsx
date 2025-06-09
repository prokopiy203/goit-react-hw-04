import { CiSearch } from "react-icons/ci";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.input;
    if (!value.trim()) {
      return toast.error("This didn't work.");
    }
    onSearch(value);
    e.target.reset();
  };

  return (
    <div className={css.boxSearch}>
      <form onSubmit={handleSubmit} className={css.inputBox}>
        <input
          className={css.input}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.buttonSearch}>
          <CiSearch className={css.svgSearch} />
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SearchBar;
