export type DimensionId = "A" | "B" | "C" | "D" | "E";

export type ScoreValue = 1 | 2 | 3 | 4 | 5;

export type PersonalityCode =
  | "JUDGE"
  | "TRACE"
  | "ARCH"
  | "GEEK"
  | "CURA"
  | "COMP"
  | "IDEA"
  | "ALGO"
  | "REAL"
  | "PURE";

export type Dimension = {
  id: DimensionId;
  name: string;
  shortName: string;
  description: string;
};

export type Question = {
  id: number;
  dimension: DimensionId;
  text: string;
};

export type Personality = {
  code: PersonalityCode;
  id: string;
  name: string;
  minScore: number;
  maxScore: number;
  avatar: string;
  badge: string;
  partner: string;
  roast: string;
  advice: string;
  description: string;
};

export type QuizAnswers = Partial<Record<number, ScoreValue>>;

export type DimensionScores = Record<DimensionId, number>;

export type CalculationResult = {
  totalScore: number;
  dimensionScores: DimensionScores;
  topDimension: DimensionId;
  dimensionTag: string;
  personality: Personality;
};
