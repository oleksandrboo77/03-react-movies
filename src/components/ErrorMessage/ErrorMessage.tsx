import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.error}>
      <p className={css.text}>There was an error, please try again...</p>
    </div>
  );
}
