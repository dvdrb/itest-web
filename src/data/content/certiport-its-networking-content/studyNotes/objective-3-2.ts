import type { StudyNote } from "../contentTypes";
export const objective3_2 = {
  "objectiveId": "3.2",
  "title": "Describe characteristics of routers",
  "whatToKnow": [
    "Connected/static/dynamic/default routes",
    "Routing table and best-route selection",
    "Port forwarding, QoS, segmentation, convergence"
  ],
  "memorize": [
    "Default route = /0 fallback",
    "Longest matching prefix wins among matching routes",
    "Convergence = routing state stabilizes after change"
  ],
  "howItWorks": [
    "Routers separate IP networks and choose next hops from the routing table.",
    "QoS prioritizes/manages classes of traffic."
  ],
  "examTraps": [
    "A default route loses to any more-specific matching route."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 3.2?",
      "answer": "Describe characteristics of routers"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "Default route = /0 fallback"
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
