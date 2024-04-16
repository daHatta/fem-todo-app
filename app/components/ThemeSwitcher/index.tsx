"use client";

import Image from "next/image";
import iconMoon from "../../images/icon-moon.svg";
import iconSun from "../../images/icon-sun.svg";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={25}
        height={25}
        sizes="20x20"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        className="w-[20px] 2xl:w-[25px] 2xl:pt-[4px]"
        onClick={() => setTheme("light")}
      >
        <span className="visually-hidden">Switch Color Mode</span>
        <Image src={iconSun} width={25} height={25} alt="Icon Sun" priority />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        className="w-[20px] 2xl:w-[25px] 2xl:pt-[4px]"
        onClick={() => setTheme("dark")}
      >
        <span className="visually-hidden">Switch Color Mode</span>
        <Image src={iconMoon} width={25} height={25} alt="Icon Moon" priority />
      </button>
    );
  }
};

export default ThemeSwitcher;
