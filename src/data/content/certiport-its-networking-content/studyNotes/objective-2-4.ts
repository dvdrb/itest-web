import type { StudyNote } from "../contentTypes";
export const objective2_4 = {
  "objectiveId": "2.4",
  "title": "Compare and contrast network topologies and access methods",
  "whatToKnow": [
    "Star, mesh, ring, bus",
    "Physical vs logical topology"
  ],
  "memorize": [
    "Star = central device",
    "Mesh = multiple redundant paths",
    "Bus = shared backbone",
    "Physical = actual links; logical = data flow"
  ],
  "howItWorks": [
    "The physical cabling arrangement and logical traffic pattern can differ."
  ],
  "examTraps": [
    "Do not assume physical and logical topology must be identical."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 2.4?",
      "answer": "Compare and contrast network topologies and access methods"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "Star = central device"
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
