import type { StudyNote } from "../contentTypes";
export const objective5_2 = {
  "objectiveId": "5.2",
  "title": "Given a scenario, use the appropriate hardware troubleshooting tools",
  "whatToKnow": [
    "Cable tester: verifies copper cable continuity/wiremap and can reveal opens, shorts, reversals, crossed/miswired pairs depending on tester capability.",
    "Toner/probe: identifies and traces a particular copper cable among bundles/patch panels; it is for locating the cable, not certifying Ethernet performance.",
    "TDR (time-domain reflectometer): sends a signal down copper and analyzes reflections to estimate distance to opens, shorts, impedance changes, or faults.",
    "OTDR (optical time-domain reflectometer): sends optical pulses through fiber and analyzes reflections/backscatter to locate fiber events, losses, splices, and breaks by distance.",
    "Multimeter: measures electrical quantities such as voltage, current, and resistance; useful for power/electrical checks, not IP routing or optical-fiber loss maps.",
    "Choose the tool from the physical symptom: wrong pinout/continuity → cable tester; find which cable → toner; distance to copper fault → TDR; fiber event/break → OTDR; voltage/resistance → multimeter."
  ],
  "memorize": [
    "Cable tester → wiremap/continuity.",
    "Toner → trace/identify cable.",
    "TDR → locate copper fault by distance.",
    "OTDR → locate fiber event/fault by distance.",
    "Multimeter → voltage/current/resistance."
  ],
  "howItWorks": [
    "If a cable tester reports split/reversed pairs, fix termination before investigating IP configuration.",
    "If an OTDR shows a major loss event 420 m from the test point, inspect the fiber path/connector/splice near that distance.",
    "A toner identifies cable location but does not prove the cable meets Cat performance requirements."
  ],
  "examTraps": [
    "Do not use TDR for fiber; OTDR is optical.",
    "Do not use a multimeter to “test DNS” or identify a route.",
    "Do not confuse toner with a cable tester: toner locates; tester verifies wiring/continuity.",
    "Tool capabilities vary by model; focus on the primary purpose in the objective."
  ],
  "quickCheck": [
    {
      "question": "Unlabeled cable in a bundle?",
      "answer": "Toner/probe."
    },
    {
      "question": "Check RJ-45 wiremap/continuity?",
      "answer": "Cable tester."
    },
    {
      "question": "Find distance to copper open?",
      "answer": "TDR."
    },
    {
      "question": "Find fiber break/loss event?",
      "answer": "OTDR."
    },
    {
      "question": "Measure voltage/resistance?",
      "answer": "Multimeter."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    }
  ]
} satisfies StudyNote;
