import React, { useState } from "react";
import wordChecker from "../services/wordChecker";
import { Container, TextField, Button, Typography, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import "./App.css";

interface AppProps {
	toggleTheme: () => void;
	mode: "light" | "dark";
}

function App({ toggleTheme, mode }: AppProps) {
	const [word, setWord] = useState<string>("");

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const resultArea: HTMLElement | null = document.getElementById("resultArea");
		if (resultArea) {
			resultArea.textContent = wordChecker(word);
		}
	};

	return (
		<Container maxWidth="sm">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Typography variant="h2" component="h1" gutterBottom>
					Palindrome Checker
				</Typography>
				<IconButton onClick={toggleTheme} color="inherit">
					{mode === "light" ? <Brightness4 /> : <Brightness7 />}
				</IconButton>
			</Box>
			<Box component="form" noValidate autoComplete="off">
				<TextField
					fullWidth
					label="Enter a word"
					variant="outlined"
					value={word}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWord(e.target.value)}
					margin="normal"
				/>
				<Button variant="contained" color="primary" onClick={handleClick}>
					Check it!
				</Button>
			</Box>
			<Typography variant="body1" id="resultArea" marginTop="2rem"></Typography>
		</Container>
	);
}

export default App;
