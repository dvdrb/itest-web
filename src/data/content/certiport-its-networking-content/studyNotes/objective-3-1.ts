import type { StudyNote } from "../contentTypes";
export const objective3_1 = {
  "objectiveId": "3.1",
  "title": "Describe characteristics of switches",
  "whatToKnow": [
    "Access vs trunk ports",
    "Managed/unmanaged",
    "L2/L3 switches",
    "MAC tables",
    "hubs vs switches",
    "collision/broadcast domains",
    "duplex",
    "STP"
  ],
  "memorize": [
    "Access port → one VLAN",
    "Trunk → multiple VLANs",
    "L2 switch forwards by MAC",
    "L3 switch can route",
    "STP prevents Layer 2 loops"
  ],
  "howItWorks": [
    "Switches learn source MAC addresses and use a MAC table for forwarding.",
    "Unknown unicasts are flooded within the VLAN."
  ],
  "examTraps": [
    "A switch port is usually its own collision domain, but VLAN membership determines Layer 2 broadcast scope."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 3.1?",
      "answer": "Describe characteristics of switches"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "Access port → one VLAN"
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
