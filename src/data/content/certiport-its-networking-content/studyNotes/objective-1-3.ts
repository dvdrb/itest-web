import type { StudyNote } from "../contentTypes";
export const objective1_3 = {
  "objectiveId": "1.3",
  "title": "Describe remote access methods",
  "whatToKnow": [
    "VPN and Remote Desktop",
    "Remote-access vs site-to-site VPN use cases"
  ],
  "memorize": [
    "VPN = secure tunnel/network access",
    "RDP = interactive Windows desktop",
    "RDP default TCP port = 3389"
  ],
  "howItWorks": [
    "VPN provides protected network connectivity; RDP provides a remote interactive session."
  ],
  "examTraps": [
    "A working VPN does not prove RDP is enabled or reachable."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 1.3?",
      "answer": "Describe remote access methods"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "VPN = secure tunnel/network access"
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
