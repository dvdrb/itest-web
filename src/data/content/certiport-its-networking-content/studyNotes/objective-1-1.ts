import type { StudyNote } from "../contentTypes";
export const objective1_1 = {
  "objectiveId": "1.1",
  "title": "Define network concepts",
  "whatToKnow": [
    "Internet vs intranet vs extranet",
    "Client-server vs peer-to-peer",
    "Unicast, multicast, and broadcast",
    "Common network devices and IoT endpoints"
  ],
  "memorize": [
    "Internet = public global internetwork",
    "Intranet = private organizational network",
    "Extranet = controlled access for trusted outsiders",
    "Unicast 1→1; multicast 1→selected group; broadcast 1→all in broadcast domain"
  ],
  "howItWorks": [
    "Client-server centralizes services on servers; peer-to-peer allows endpoints to share directly.",
    "IoT devices are network-connected embedded devices such as sensors, cameras, thermostats, and appliances."
  ],
  "examTraps": [
    "Do not confuse intranet with extranet.",
    "Broadcast is not the same as multicast."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 1.1?",
      "answer": "Define network concepts"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "Internet = public global internetwork"
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
