"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@mui/material";
import InputForm from "./ui/InputForm";
import ResultCard from "./ui/ResultCard";

export default function CalculatorForm() {
  const [gpa, setGpa] = useState("");
  const [icva, setIcva] = useState("");
  const [vetPrep, setVetPrep] = useState("");
  const [probability, setProbability] = useState<number | null>(null);
  const [hasValidated, setHasValidated] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    gpa: false,
    icva: false,
    vetPrep: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    gpa: "",
    icva: "",
    vetPrep: "",
  });

  const resultRef = useRef<HTMLDivElement>(null);

  const validateField = (
    field: "gpa" | "icva" | "vetPrep",
    value: string
  ): { isValid: boolean; message: string } => {
    const numValue = Number.parseFloat(value);

    if (value.trim() === "") {
      return { isValid: false, message: "This field is required" };
    }

    switch (field) {
      case "gpa":
        if (isNaN(numValue) || numValue < 0 || numValue > 4) {
          return { isValid: false, message: "Please enter a valid GPA (0-4)" };
        }
        return { isValid: true, message: "" };
      case "icva":
        if (isNaN(numValue) || numValue < 0 || numValue > 999) {
          return {
            isValid: false,
            message: "Please enter a valid ICVA score (0-999)",
          };
        }
        return { isValid: true, message: "" };
      case "vetPrep":
        if (isNaN(numValue) || numValue < 0 || numValue > 100) {
          return {
            isValid: false,
            message: "Please enter a valid percentage (0-100)",
          };
        }
        return { isValid: true, message: "" };
      default:
        return { isValid: false, message: "" };
    }
  };

  const validateAllFields = (): boolean => {
    const gpaValidation = validateField("gpa", gpa);
    const icvaValidation = validateField("icva", icva);
    const vetPrepValidation = validateField("vetPrep", vetPrep);

    setFieldErrors({
      gpa: !gpaValidation.isValid,
      icva: !icvaValidation.isValid,
      vetPrep: !vetPrepValidation.isValid,
    });

    setErrorMessages({
      gpa: gpaValidation.message,
      icva: icvaValidation.message,
      vetPrep: vetPrepValidation.message,
    });

    return (
      gpaValidation.isValid &&
      icvaValidation.isValid &&
      vetPrepValidation.isValid
    );
  };

  useEffect(() => {
    if (hasValidated) {
      const gpaValidation = validateField("gpa", gpa);
      const icvaValidation = validateField("icva", icva);
      const vetPrepValidation = validateField("vetPrep", vetPrep);

      setFieldErrors({
        gpa: !gpaValidation.isValid,
        icva: !icvaValidation.isValid,
        vetPrep: !vetPrepValidation.isValid,
      });

      setErrorMessages({
        gpa: gpaValidation.message,
        icva: icvaValidation.message,
        vetPrep: vetPrepValidation.message,
      });
    }
  }, [gpa, icva, vetPrep, hasValidated]);

  useEffect(() => {
    if (probability !== null && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 350);
    }
  }, [probability]);

  const calculateProbability = () => {
    setHasValidated(true);

    if (!validateAllFields()) {
      return;
    }

    const gpaValue = Number.parseFloat(gpa);
    const icvaValue = Number.parseFloat(icva);
    const vetPrepValue = Number.parseFloat(vetPrep);

    const prob =
      1 /
      (1 +
        Math.exp(
          -(
            -23.1294 +
            4.4009 * gpaValue +
            0.0163 * icvaValue +
            0.0475 * vetPrepValue
          )
        ));
    setProbability(prob * 100);
  };

  const willPass = probability !== null && probability >= 75;

  return (
    <Container maxWidth="md">
      <InputForm
        gpa={gpa}
        icva={icva}
        vetPrep={vetPrep}
        fieldErrors={fieldErrors}
        errorMessages={errorMessages}
        onGpaChange={setGpa}
        onIcvaChange={setIcva}
        onVetPrepChange={setVetPrep}
        onCalculate={calculateProbability}
      />

      {probability !== null && (
        <div ref={resultRef}>
          <ResultCard probability={probability} willPass={willPass} />
        </div>
      )}
    </Container>
  );
}
