"use client";

import { useMemo, useState } from "react";
import { dimensions, questions } from "@/constants/questions";
import type { QuizAnswers, ScoreValue } from "@/types";

export function useQuizStore() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const currentDimension = dimensions[stepIndex];
  const currentQuestions = useMemo(
    () => questions.filter((question) => question.dimension === currentDimension.id),
    [currentDimension.id],
  );
  const answeredCount = Object.keys(answers).length;
  const currentStepAnswered = currentQuestions.every((question) => answers[question.id]);
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === dimensions.length - 1;

  function answerQuestion(questionId: number, value: ScoreValue) {
    setAnswers((current) => ({
      ...current,
      [questionId]: value,
    }));
  }

  function goNext() {
    setStepIndex((current) => Math.min(current + 1, dimensions.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goPrev() {
    setStepIndex((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return {
    answers,
    answeredCount,
    answerQuestion,
    currentDimension,
    currentQuestions,
    currentStepAnswered,
    dimensions,
    goNext,
    goPrev,
    isFirstStep,
    isLastStep,
    stepIndex,
    totalQuestions: questions.length,
  };
}
