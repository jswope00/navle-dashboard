import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CalculatorForm from "./components/CalculatorForm";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Header />

      <Box sx={{ flex: 1, py: { xs: 4, md: 6 } }}>
        <CalculatorForm />
      </Box>

      <Footer />
    </Box>
  );
}
