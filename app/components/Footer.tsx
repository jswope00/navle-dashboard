import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body2"
          sx={{
            color: "primary.contrastText",
            mb: 0.5,
            fontWeight: 600,
            fontSize: { xs: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          © 2025 St. George's University School of Veterinary Medicine
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "primary.contrastText",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            display: "block",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          This tool is for educational purposes and does not guarantee exam
          results.
        </Typography>
      </Container>
    </Box>
  );
}
