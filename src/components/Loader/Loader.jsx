import style from "./loader.module.css";

export function Loader() {
  return (
    <div className={style.preloader}>
      <div className={style.loader}></div>
    </div>
  );
}
