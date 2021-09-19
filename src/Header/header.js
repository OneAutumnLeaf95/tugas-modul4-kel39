import { useContext, createContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  bar: {
    marginTop: "0px",
  },
  line: {
    height: "5px",
    backgroundColor: "	#C0C0C0",
  },
  link: {
    textDecoration: "none",
  },
}));

const themes = {
  light: {
    background: "#f5b8ec",
    color: "#330852",
  },
  dark: {
    background: "rgb(40, 44, 52)",
    color: "white",
  },
};

const ThemeContext = createContext();

export default function Header() {
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  const classes = styles();
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background }}>
        <Toolbar position="sticky" className={classes.bar}>
          <div>
            <Button className={classes.btn}>
              <Link
                to="/"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                Beranda
              </Link>
            </Button>

            <Button>
              <Link
                to="/list"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                List
              </Link>
            </Button>

            <Button>
              <Link
                to="/tema"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                Background
              </Link>
            </Button>

            <Button
              style={{ color: valueTheme.color, fontWeight: "bold" }}
              className="Button"
              onClick={() =>
                setValueTheme(
                  valueTheme === themes.light ? themes.dark : themes.light
                )
              }
            >
              Ganti Tema
            </Button>

          </div>
        </Toolbar>
        <div className={classes.line}></div>
      </div>
      </ThemeContext.Provider>
  );
}
