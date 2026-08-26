import { objectives as canonicalObjectives } from './content/certiport-its-networking-content/objectives'
import type { Objective } from '../types/exam'

export const objectives = canonicalObjectives as Objective[]
export const objectiveById = Object.fromEntries(objectives.map((objective) => [objective.id, objective]))
