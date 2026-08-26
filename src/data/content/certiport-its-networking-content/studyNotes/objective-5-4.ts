import type { StudyNote } from "../contentTypes";
export const objective5_4 = {
  "objectiveId": "5.4",
  "title": "Use Linux software troubleshooting tools",
  "whatToKnow": [
    "Linux commands in the objective"
  ],
  "memorize": [
    "ping reachability",
    "ip addr interface addresses",
    "traceroute hops",
    "tracepath path + MTU",
    "dig detailed DNS",
    "host simple DNS",
    "netstat connections/listeners",
    "arp legacy ARP cache"
  ],
  "howItWorks": [
    "Modern Linux has alternatives such as ss and ip neigh, but the exam objective explicitly names netstat and arp."
  ],
  "examTraps": [
    "Stay aligned with the objective-listed command names."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 5.4?",
      "answer": "Use Linux software troubleshooting tools"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "ping reachability"
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
