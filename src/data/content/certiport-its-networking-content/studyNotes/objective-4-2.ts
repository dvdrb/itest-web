import type { StudyNote } from "../contentTypes";
export const objective4_2 = {
  "objectiveId": "4.2",
  "title": "Describe the TCP/IP model",
  "whatToKnow": [
    "TCP/IP layers and protocol examples"
  ],
  "memorize": [
    "Application: HTTP/DNS/SMTP",
    "Transport: TCP/UDP",
    "Internet: IP",
    "Link/Network Access: Ethernet/local delivery"
  ],
  "howItWorks": [
    "The TCP/IP model groups functions more broadly than the seven-layer OSI model."
  ],
  "examTraps": [
    "Presentation and Session are generally folded into TCP/IP Application."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 4.2?",
      "answer": "Describe the TCP/IP model"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "Application: HTTP/DNS/SMTP"
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
