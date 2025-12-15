"use client";

import type React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1e1e64",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#991b1b",
    },
    success: {
      main: "#0891b2",
      light: "#cffafe",
      contrastText: "#0c4a6e",
    },
    warning: {
      main: "#ea580c",
      light: "#fed7aa",
      contrastText: "#0c4a6e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e3a8a",
      secondary: "#1f2937",
    },
  },
  typography: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
