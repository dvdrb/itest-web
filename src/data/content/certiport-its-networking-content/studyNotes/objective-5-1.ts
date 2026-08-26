import type { StudyNote } from "../contentTypes";
export const objective5_1 = {
  "objectiveId": "5.1",
  "title": "Given a scenario, describe the troubleshooting process in a small-medium business network",
  "whatToKnow": [
    "The official objective requires the troubleshooting process plus etiquette/professional conduct. A practical study framework is: identify/define the problem; establish a likely theory; test the theory; plan and implement the fix; verify full functionality; document findings/actions/outcome.",
    "Identify: gather symptoms, affected users/devices, scope, exact errors, time of onset, recent changes, environmental factors, and what still works.",
    "Establish theory: use evidence and layer-by-layer reasoning to choose the most likely causes rather than changing random settings.",
    "Test theory with the least disruptive evidence-gathering action possible. If disproved, form another theory or escalate with evidence.",
    "Plan/implement: consider business impact, change window, backup/rollback, permissions, and dependencies before making risky changes.",
    "Verify: confirm the original symptom is gone and related functionality works; do not stop at “the command succeeded.”",
    "Document: capture root cause, changes, verification, and any prevention/follow-up.",
    "Professional conduct: communicate clearly, avoid blame, protect credentials/confidential information, obtain authorization, set realistic expectations, and keep users informed."
  ],
  "memorize": [
    "Identify → Theory → Test → Plan/Implement → Verify → Document (study framework).",
    "Gather evidence before changing production.",
    "Use least-disruptive test first.",
    "Have rollback for risky changes.",
    "Verify original service, not only one technical indicator.",
    "Communicate respectfully and protect confidential data."
  ],
  "howItWorks": [
    "If only one user is affected, compare that user/device with a known-good peer before assuming a network-wide outage.",
    "If an outage starts immediately after a documented change, that change becomes a strong theory—but still verify rather than guessing.",
    "If a temporary workaround restores service, still document/root-cause the underlying problem when appropriate.",
    "Layer-by-layer troubleshooting can narrow scope: Physical → link/VLAN → IP/routing → transport/service → application/name resolution."
  ],
  "examTraps": [
    "Do not jump directly to replacing hardware without evidence.",
    "Do not make multiple unrelated changes at once; you lose causal clarity and rollback becomes harder.",
    "Do not promise an exact restoration time if you cannot support it.",
    "Do not expose passwords, keys, or user data in tickets/screenshots unnecessarily.",
    "Verification is not documentation; both are separate final activities."
  ],
  "quickCheck": [
    {
      "question": "First action after a vague “network is down” report?",
      "answer": "Define scope and gather symptoms/recent changes."
    },
    {
      "question": "After forming a likely cause?",
      "answer": "Test the theory."
    },
    {
      "question": "Before a risky confirmed fix?",
      "answer": "Plan impact/rollback and obtain proper authorization."
    },
    {
      "question": "After implementing the fix?",
      "answer": "Verify full functionality, then document."
    },
    {
      "question": "Best response to an angry user?",
      "answer": "Stay respectful, explain what is known, avoid blame, protect confidentiality, and give realistic updates."
    },
    {
      "question": "Why change one variable at a time when possible?",
      "answer": "To preserve evidence about what caused/fixed the problem and make rollback clearer."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    }
  ]
} satisfies StudyNote;
