import ThemeSwitcher from "../ThemeSwitcher";
import classes from "./index.module.css";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-start pt-[49px] pb-[32px] 2xl:pt-[78px] 2xl:pb-[40px]">
      <h1 className={classes.appTitle}>Todo</h1>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
