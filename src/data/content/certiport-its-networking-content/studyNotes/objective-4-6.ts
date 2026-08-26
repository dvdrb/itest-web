import type { StudyNote } from "../contentTypes";
export const objective4_6 = {
  "objectiveId": "4.6",
  "title": "Describe name resolution concepts",
  "whatToKnow": [
    "HOSTS/LMHOSTS vs DNS/WINS",
    "DNS records",
    "forward/reverse lookup",
    "resolution process"
  ],
  "memorize": [
    "A → IPv4",
    "AAAA → IPv6",
    "MX → mail exchanger",
    "PTR → reverse pointer",
    "SRV → service location",
    "CNAME → alias",
    "SOA → zone authority metadata"
  ],
  "howItWorks": [
    "Forward lookup typically maps names to addresses; reverse lookup maps address representation to names using PTR."
  ],
  "examTraps": [
    "CNAME is an alias, not a mail record; PTR is reverse lookup, not A/AAAA."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 4.6?",
      "answer": "Describe name resolution concepts"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "A → IPv4"
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
