import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {

    return (
        <header className="flex flex-row justify-between items-center pt-[35px] pb-[40px]">
            <h1>Todo</h1>
            <ThemeSwitcher />
        </header>
    )
};

export default Header;