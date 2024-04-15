import classes from "./index.module.css";

const Notice = () => {
  return (
    <p className={`${classes.notice} text-center pt-[43px]`}>
      Drag and drop to reorder list
    </p>
  );
};

export default Notice;
