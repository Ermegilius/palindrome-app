import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					// palette values for light mode
					primary: { main: "#1976d2" },
					background: { default: "#fff", paper: "#fff" },
			  }
			: {
					// palette values for dark mode
					primary: { main: "#90caf9" },
					background: { default: "#121212", paper: "#121212" },
			  }),
	},
});

const Main = () => {
	const [mode, setMode] = useState<PaletteMode>("light");

	const theme = createTheme(getDesignTokens(mode));

	const toggleTheme = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App toggleTheme={toggleTheme} mode={mode} />
		</ThemeProvider>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Main />);

export default Main;
