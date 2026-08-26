import type { StudyNote } from "../contentTypes";
export const objective4_5 = {
  "objectiveId": "4.5",
  "title": "Identify well-known ports",
  "whatToKnow": [
    "Ports explicitly listed by the objective"
  ],
  "memorize": [
    "FTP control 21",
    "SSH 22",
    "SMTP 25",
    "DNS 53",
    "HTTP 80",
    "IMAP 143",
    "HTTPS 443",
    "RDP 3389"
  ],
  "howItWorks": [
    "Port numbers identify application endpoints at the transport layer."
  ],
  "examTraps": [
    "DNS can use both UDP and TCP 53 depending on the operation."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 4.5?",
      "answer": "Identify well-known ports"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "FTP control 21"
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
