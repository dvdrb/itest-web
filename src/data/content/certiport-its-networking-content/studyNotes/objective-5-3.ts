import type { StudyNote } from "../contentTypes";
export const objective5_3 = {
  "objectiveId": "5.3",
  "title": "Use Windows software troubleshooting tools",
  "whatToKnow": [
    "Windows commands in the objective",
    "Loopback test"
  ],
  "memorize": [
    "ping reachability",
    "ipconfig /all config",
    "tracert hops",
    "pathping path + loss stats",
    "nslookup DNS",
    "hostname local name",
    "netstat connections/listeners",
    "arp -a ARP cache",
    "127.0.0.1 loopback"
  ],
  "howItWorks": [
    "Use tools to isolate layers: local config → local stack → gateway → remote IP → name resolution."
  ],
  "examTraps": [
    "Successful 127.0.0.1 ping does not prove the NIC/cable/gateway."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 5.3?",
      "answer": "Use Windows software troubleshooting tools"
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
