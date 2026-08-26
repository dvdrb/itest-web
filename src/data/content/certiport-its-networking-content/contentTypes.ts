export type DomainId = "1" | "2" | "3" | "4" | "5";
export type Difficulty = "easy" | "medium" | "hard";
export type QuestionType = "single-choice" | "multiple-choice" | "scenario" | "subnetting" | "command-output";

export interface QuestionOption { id: string; text: string }
export interface PrepQuestion {
  id: string; objectiveId: string; domainId: DomainId; type: QuestionType; difficulty: Difficulty;
  prompt: string; context?: string; options: QuestionOption[]; correctOptionIds: string[];
  explanation: string; distractorExplanations: Record<string,string>; tags: string[]; sourceRefs: string[];
}
export interface StudyNote {
  objectiveId: string; title: string; whatToKnow: string[]; memorize: string[]; howItWorks: string[]; examTraps: string[];
  quickCheck: {question:string; answer:string}[]; sourceRefs: {label:string; url:string}[];
}
