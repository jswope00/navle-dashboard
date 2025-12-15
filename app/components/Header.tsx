import { Box, Container, Typography, Stack } from "@mui/material";
import { GraduationCap } from "lucide-react";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            color: "primary.contrastText",
            fontWeight: 700,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            mb: 1,
            textAlign: "center",
          }}
        >
          NAVLE Readiness Checker
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "primary.contrastText",
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontWeight: 400,
            mb: 1,
            textAlign: "center",
            opacity: 0.95,
          }}
        >
          Get a personalized estimate of your probability to pass the North
          American Veterinary Licensing Examination
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <GraduationCap size={20} color="white" />
          <Typography
            variant="body2"
            sx={{
              color: "primary.contrastText",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              opacity: 0.9,
            }}
          >
            St. George's University School of Veterinary Medicine
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
