import { dimensionPriority, dimensionTags, personalities } from "@/constants/personalities";
import { questions } from "@/constants/questions";
import type { CalculationResult, DimensionId, DimensionScores, QuizAnswers } from "@/types";

const initialDimensionScores: DimensionScores = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
};

export function calculateDimensionScores(answers: QuizAnswers): DimensionScores {
  return questions.reduce<DimensionScores>((scores, question) => {
    scores[question.dimension] += answers[question.id] ?? 0;
    return scores;
  }, { ...initialDimensionScores });
}

export function getTopDimension(dimensionScores: DimensionScores): DimensionId {
  return dimensionPriority.reduce<DimensionId>((currentTop, dimension) => {
    if (dimensionScores[dimension] > dimensionScores[currentTop]) {
      return dimension;
    }

    return currentTop;
  }, dimensionPriority[0]);
}

export function calculateResult(answers: QuizAnswers): CalculationResult {
  const dimensionScores = calculateDimensionScores(answers);
  const totalScore = Object.values(dimensionScores).reduce((sum, score) => sum + score, 0);
  const topDimension = getTopDimension(dimensionScores);
  const personality =
    personalities.find(
      (item) => totalScore >= item.minScore && totalScore <= item.maxScore,
    ) ?? personalities[personalities.length - 1];

  return {
    totalScore,
    dimensionScores,
    topDimension,
    dimensionTag: dimensionTags[topDimension],
    personality,
  };
}
