import { useContext, createContext, useState, useEffect } from "react";
import "./tema.css";

const themes = {
    light: {
        background: "#FFFFFF",
        color: "#000000"
    },
    dark: {
        background: "rgb(40, 44, 52)",
        color: "white",
    },
};

const ThemeContext = createContext();
const date = new Date();

export default function Theme() {
    const [valueTheme, setValueTheme] = useState(themes.dark);

    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    
      useEffect(() => {
        const timer = setInterval(() => {
          const date = new Date();
          setDateTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
          });
        }, 1000);
        return () => clearInterval(timer);
      }, []);

    return (
        <ThemeContext.Provider value={valueTheme}>
            <div className="contentWrapper" style={{ backgroundColor: valueTheme.background }}>
                <Content />
                <button className="Button" onClick={() => setValueTheme(valueTheme === themes.light ? themes.dark : themes.light)}>
                    Ganti
                </button>

                <div>
                    {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
                </div>
            </div>
        </ThemeContext.Provider >
    );
}

function Content(props) {
    return (
        <div>
            <Text />
        </div>
    );
}

function Text(props) {
    const theme = useContext(ThemeContext);
    console.log("[context value]", theme);
    return <p className="titlecontext" style={{ color: theme.color }}>Tema</p>;
}