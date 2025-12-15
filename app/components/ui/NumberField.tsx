"use client";

import { Box, TextField, Typography } from "@mui/material";

interface NumberFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error: boolean;
  errorMessage?: string;
  step: number;
  min: number;
  max: number;
  helperText: string;
}

export default function NumberField({
  label,
  value,
  onChange,
  placeholder,
  error,
  errorMessage,
  step,
  min,
  max,
  helperText,
}: NumberFieldProps) {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          mb: 1,
          fontWeight: 600,
          color: "text.primary",
          fontSize: { xs: "0.875rem", md: "1rem" },
        }}
      >
        {label}
      </Typography>
      <TextField
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        slotProps={{
          htmlInput: { step, min, max },
        }}
        error={error}
        sx={{
          "& .MuiOutlinedInput-root": {
            fontSize: { xs: "1rem", md: "1.125rem" },
            "& fieldset": {
              borderWidth: 2,
              borderColor: error ? "error.main" : "success.main",
            },
            "&:hover fieldset": {
              borderColor: error ? "error.main" : "success.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: error ? "error.main" : "success.main",
            },
          },
        }}
      />
      {error && errorMessage ? (
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: "block",
            color: "error.main",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            fontWeight: 600,
          }}
        >
          {errorMessage}
        </Typography>
      ) : (
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: "block",
            color: "text.secondary",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
          }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
}
