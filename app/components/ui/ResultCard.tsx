"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Collapse,
  Button,
  Fade,
  Grow,
  Link,
  useTheme,
} from "@mui/material";
import {
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  PartyPopper,
  BookOpen,
} from "lucide-react";

interface ResultCardProps {
  probability: number;
  willPass: boolean;
}

export default function ResultCard({ probability, willPass }: ResultCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const theme = useTheme();

  const warningColor = theme.palette.warning.main;

  const circumference = 2 * Math.PI * 100; // radius 100px
  const offset = circumference - (probability / 100) * circumference;

  return (
    <Grow in={true} timeout={600}>
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, md: 4 },
          border: 3,
          borderColor: willPass ? "success.main" : "warning.main",
          mb: 3,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Fade in={true} timeout={800}>
            <Box sx={{ mb: 2 }}>
              {willPass ? (
                <CheckCircle2
                  size={56}
                  color={theme.palette.success.main}
                  strokeWidth={3}
                />
              ) : (
                <AlertCircle size={56} color={warningColor} strokeWidth={3} />
              )}
            </Box>
          </Fade>

          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: "text.primary",
              fontWeight: 600,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            Your Estimated Probability of Passing NAVLE
          </Typography>

          <Box
            sx={{
              width: { xs: 220, md: 240 },
              height: { xs: 220, md: 240 },
              position: "relative",
              mx: "auto",
              mb: 3,
              animation: "scaleIn 0.5s ease-out",
              "@keyframes scaleIn": {
                from: { transform: "scale(0.5)", opacity: 0 },
                to: { transform: "scale(1)", opacity: 1 },
              },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 220 220"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="110"
                cy="110"
                r="100"
                fill="none"
                stroke={theme.palette.grey[300]}
                strokeWidth="12"
              />
              <circle
                cx="110"
                cy="110"
                r="100"
                fill="none"
                stroke={willPass ? theme.palette.success.main : warningColor}
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{
                  transition: "stroke-dashoffset 1s ease-out",
                }}
              />
            </svg>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: willPass ? "success.main" : "warning.main",
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                }}
              >
                {probability.toFixed(1)}%
              </Typography>
            </Box>
          </Box>

          {willPass ? (
            <Fade in={true} timeout={1000}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <PartyPopper
                  size={24}
                  color={theme.palette.success.main}
                  strokeWidth={2}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    fontWeight: 600,
                    color: "success.main",
                  }}
                >
                  We think you are on track to PASS. Keep your momentum going!
                </Typography>
              </Box>
            </Fade>
          ) : (
            <Fade in={true} timeout={1000}>
              <Box
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  fontWeight: 600,
                  color: "text.secondary",
                  mb: 2,
                  bgcolor: theme.palette.warning.light,
                  borderRadius: 1,
                  px: 3,
                  py: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  width: "100%",
                }}
              >
                <BookOpen
                  size={24}
                  color={warningColor}
                  strokeWidth={2}
                  style={{ flexShrink: 0 }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    fontWeight: 600,
                    color: "text.secondary",
                  }}
                >
                  We think you should practice more.{" "}
                  <Link
                    href="/resources"
                    sx={{
                      color: warningColor,
                      fontWeight: 700,
                      textDecorationColor: warningColor,
                      "&:hover": {
                        color: theme.palette.success.main,
                      },
                    }}
                  >
                    Here
                  </Link>{" "}
                  are some resources to help.
                </Typography>
              </Box>
            </Fade>
          )}

          <Box sx={{ mt: 3 }}>
            <Button
              onClick={() => setShowExplanation(!showExplanation)}
              endIcon={
                showExplanation ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )
              }
              sx={{
                textTransform: "none",
                color: "text.primary",
                fontWeight: 600,
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              What this means
            </Button>
            <Collapse in={showExplanation}>
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  bgcolor: "#f0f9ff",
                  borderRadius: 2,
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1, lineHeight: 1.6 }}
                >
                  This estimate is based on historical performance data from SGU
                  veterinary students. It uses a statistical model that
                  considers your GPA, ICVA practice exam scores, and VetPrep
                  completion percentage.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    lineHeight: 1.6,
                  }}
                >
                  Important: This is an estimate and not a guarantee of exam
                  performance. Individual results may vary.
                </Typography>
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Paper>
    </Grow>
  );
}
