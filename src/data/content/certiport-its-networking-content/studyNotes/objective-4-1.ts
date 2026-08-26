import type { StudyNote } from "../contentTypes";
export const objective4_1 = {
  "objectiveId": "4.1",
  "title": "Describe the OSI model",
  "whatToKnow": [
    "Seven OSI layers and purposes",
    "MAC address at Layer 2"
  ],
  "memorize": [
    "7 Application",
    "6 Presentation",
    "5 Session",
    "4 Transport",
    "3 Network",
    "2 Data Link",
    "1 Physical",
    "MAC = L2",
    "IP = L3",
    "TCP/UDP = L4"
  ],
  "howItWorks": [
    "Encapsulation moves data down the stack; receiving systems process it upward."
  ],
  "examTraps": [
    "Do not place switches/MAC tables at Layer 3 or routers/IP at Layer 2."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 4.1?",
      "answer": "Describe the OSI model"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "7 Application"
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
