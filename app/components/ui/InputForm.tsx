"use client";

import { Box, Button, Typography, Paper, Stack } from "@mui/material";
import NumberField from "./NumberField";

interface InputFormProps {
  gpa: string;
  icva: string;
  vetPrep: string;
  fieldErrors: {
    gpa: boolean;
    icva: boolean;
    vetPrep: boolean;
  };
  errorMessages: {
    gpa: string;
    icva: string;
    vetPrep: string;
  };
  onGpaChange: (value: string) => void;
  onIcvaChange: (value: string) => void;
  onVetPrepChange: (value: string) => void;
  onCalculate: () => void;
}

export default function InputForm({
  gpa,
  icva,
  vetPrep,
  fieldErrors,
  errorMessages,
  onGpaChange,
  onIcvaChange,
  onVetPrepChange,
  onCalculate,
}: InputFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: { xs: 3, md: 4 },
        mb: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: "text.primary",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
        }}
      >
        Enter Your Information
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Stack spacing={3}>
          <NumberField
            label="Most Recent GPA"
            value={gpa}
            onChange={onGpaChange}
            placeholder="3.45"
            error={fieldErrors.gpa}
            errorMessage={errorMessages.gpa}
            step={0.01}
            min={0}
            max={4}
            helperText="Enter a value between 0.0 and 4.0"
          />

          <NumberField
            label="Median ICVA Practice Exam Score"
            value={icva}
            onChange={onIcvaChange}
            placeholder="120"
            error={fieldErrors.icva}
            errorMessage={errorMessages.icva}
            step={1}
            min={0}
            max={999}
            helperText="Enter a score between 0 and 999"
          />

          <NumberField
            label="VetPrep Questions Completed (%)"
            value={vetPrep}
            onChange={onVetPrepChange}
            placeholder="65"
            error={fieldErrors.vetPrep}
            errorMessage={errorMessages.vetPrep}
            step={1}
            min={0}
            max={100}
            helperText="Enter a percentage between 0 and 100"
          />

          <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            onClick={onCalculate}
            sx={{
              py: 2,
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 4px 14px 0 rgba(153, 27, 27, 0.4)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px 0 rgba(153, 27, 27, 0.5)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Calculate My Readiness
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
