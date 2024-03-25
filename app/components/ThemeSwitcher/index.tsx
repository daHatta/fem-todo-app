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

    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={20}
            height={20}
            sizes="20x20"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    )

    if (resolvedTheme === "dark") {
        return (
            <button onClick={() => setTheme("light")}>
                <span className="visually-hidden">Switch Color Mode</span>
                    <Image
                        src={iconSun}
                        width={20}
                        height={20}
                        alt="Icon Sun"
                        priority={true}
                    />
            </button>
        )
    }

    if (resolvedTheme === "light") {
        return (
            <button onClick={() => setTheme("dark")}>
                <span className="visually-hidden">Switch Color Mode</span>
                    <Image
                        src={iconMoon}
                        width={20}
                        height={20}
                        alt="Icon Moon"
                        priority={true}
                    />
            </button>
        )
    }
}

export default ThemeSwitcher