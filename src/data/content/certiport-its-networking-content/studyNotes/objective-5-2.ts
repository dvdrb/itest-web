import type { StudyNote } from "../contentTypes";
export const objective5_2 = {
  "objectiveId": "5.2",
  "title": "Use appropriate hardware troubleshooting tools",
  "whatToKnow": [
    "Multimeter, cable tester, toner, TDR, OTDR"
  ],
  "memorize": [
    "Multimeter → voltage/resistance",
    "Cable tester → continuity/wiremap",
    "Toner → identify cable",
    "TDR → copper fault distance",
    "OTDR → fiber events/breaks"
  ],
  "howItWorks": [
    "TDR/OTDR infer fault location from reflected signals."
  ],
  "examTraps": [
    "TDR is for copper; OTDR is for fiber."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 5.2?",
      "answer": "Use appropriate hardware troubleshooting tools"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "Multimeter → voltage/resistance"
    }
  ],
  "sourceRefs": [
    {
      "label": "Official 2025 Certiport ITS Networking objectives",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "IANA Service Name and Transport Protocol Port Number Registry",
      "url": "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
    },
    {
      "label": "RFC 1918 Private IPv4 Address Space",
      "url": "https://www.rfc-editor.org/info/rfc1918/"
    },
    {
      "label": "RFC 4291 IPv6 Addressing Architecture",
      "url": "https://www.rfc-editor.org/info/rfc4291/"
    },
    {
      "label": "RFC 1035 DNS",
      "url": "https://www.rfc-editor.org/info/rfc1035/"
    }
  ]
} satisfies StudyNote;
