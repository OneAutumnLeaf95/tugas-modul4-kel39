import { useContext, createContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  menu: {
    display: "flex",
  },
  food: {
    margin: "auto",
    marginBottom: "20px",
    textAlign: "center",
  },
  container:{
    marginTop:"0px"
  }
}));
const themes = {
  light: {
    background: "#FFFFFF",
    color: "#330852",
  },
  dark: {
    background: "rgb(40, 44, 52)",
    color: "white",
  },
};
const ThemeContext = createContext();

export default function App() {
  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdNama = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background }}>
        <div className="container">
            <input
              onChange={(event) => handleIdNama(event, "name")}
              name="idNama"
              value={valueInput.name}
              style={{ color: "#6e0234", padding: "8px" }}
              placeholder="Masukkan Nama"
            />
            <h3  style={{ color: valueTheme.color, fontWeight: "bold" }}>
              Selamat Datang {valueInput.name}
            </h3>
          </div>
      </div>
    </ThemeContext.Provider>
  );
}
