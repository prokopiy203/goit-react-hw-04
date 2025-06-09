import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.backdrop}>
      <BeatLoader aria-label="Loading Spinner" color="white" />
    </div>
  );
}

export default Loader;
