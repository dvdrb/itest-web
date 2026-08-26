import type { StudyNote } from "../contentTypes";
export const objective3_3 = {
  "objectiveId": "3.3",
  "title": "Describe characteristics of physical media",
  "whatToKnow": [
    "Twisted-pair copper Ethernet uses pairs of insulated copper conductors. Twisting reduces electromagnetic coupling/crosstalk; shielding adds protection in electrically noisy environments.",
    "UTP = unshielded twisted pair; STP = shielded twisted pair. Copper can be affected by EMI and is easier to tap/intercept physically than fiber.",
    "Fiber carries light, is immune to electromagnetic interference, supports longer distances/high bandwidth, and is harder to casually tap; it requires compatible optical transceivers and fiber type.",
    "Single-mode fiber uses a small core for long-distance links; multimode fiber uses a larger core and is commonly used for shorter building/datacenter links.",
    "Ethernet copper runs are commonly designed around a 100-m channel limit for twisted-pair standards. Exact speed/distance depends on category and Ethernet PHY.",
    "High-yield category context: Cat5e commonly supports 1 Gb/s to 100 m; Cat6 supports 1 Gb/s to 100 m and 10 Gb/s over shorter distances; Cat6a is designed for 10 Gb/s to 100 m. Cat7 is a shielded higher-category cabling system in ISO/IEC contexts. Treat exact vendor/installation limits as supplemental.",
    "Legacy cabling rule without auto-MDI-X: straight-through connects unlike MDI/MDI-X device roles (for example endpoint-to-switch); crossover connects like roles (for example switch-to-switch or endpoint-to-endpoint). Modern auto-MDI-X often removes this requirement.",
    "Segment length matters because attenuation, timing, and signal quality degrade beyond the supported physical-layer specification."
  ],
  "memorize": [
    "Fiber → light, EMI immune, long distance.",
    "UTP → no shield; STP → shielded for noisy environments.",
    "Twisting reduces crosstalk.",
    "Typical copper Ethernet channel maximum = 100 m (standard-dependent).",
    "Cat5e ≈ 1G/100m; Cat6a ≈ 10G/100m; Cat6 10G is shorter-range (supplemental high-yield).",
    "Legacy straight-through: unlike device roles; crossover: like device roles; auto-MDI-X can correct automatically.",
    "TDR = copper fault distance; OTDR = fiber fault/event distance (cross-objective reminder)."
  ],
  "howItWorks": [
    "If a copper link fails only near motors/fluorescent equipment, consider EMI and use better separation/shielding or fiber.",
    "If a long building-to-building run exceeds copper limits or crosses high-EMI areas, fiber is usually the stronger medium choice.",
    "For optical links, transceiver wavelength/fiber mode must be compatible on both ends."
  ],
  "examTraps": [
    "Do not say fiber is susceptible to EMI; it carries light.",
    "Do not treat Cat category alone as a guarantee of link speed; NIC/switch PHY, installation quality, length, and termination also matter.",
    "Do not overapply crossover rules to modern auto-MDI-X equipment; know the legacy distinction because it is explicitly in the objective.",
    "Shielding helps EMI but must be installed/grounded correctly to deliver intended benefit."
  ],
  "quickCheck": [
    {
      "question": "Best medium near heavy electrical interference?",
      "answer": "Fiber, or properly installed shielded copper if fiber is impractical."
    },
    {
      "question": "Why are copper pairs twisted?",
      "answer": "To reduce crosstalk/electromagnetic coupling."
    },
    {
      "question": "UTP versus STP?",
      "answer": "STP includes shielding; UTP does not."
    },
    {
      "question": "Legacy endpoint-to-switch cable?",
      "answer": "Straight-through."
    },
    {
      "question": "Legacy switch-to-switch cable with no auto-MDI-X?",
      "answer": "Crossover."
    },
    {
      "question": "Which fiber type is generally favored for the longest distances?",
      "answer": "Single-mode fiber."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "Cisco - Auto-MDIX",
      "url": "https://www.cisco.com/c/en/us/td/docs/IIOT/switches/ie35xx/sw-config-guide/17-18/b_ie3500_1718-cg/configuring_auto_mdix.pdf"
    }
  ]
} satisfies StudyNote;
