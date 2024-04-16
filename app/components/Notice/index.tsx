import classes from "./index.module.css";

const Notice = () => {
  return (
    <p className={`${classes.notice} text-center mt-[39px] 2xl:mt-[50px]`}>
      Drag and drop to reorder list
    </p>
  );
};

export default Notice;
