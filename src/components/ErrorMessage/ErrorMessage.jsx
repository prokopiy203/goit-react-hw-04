import css from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return (
    <div>
      <p className={css.ErrorMessage}>{message}</p>
    </div>
  );
}

export default ErrorMessage;
