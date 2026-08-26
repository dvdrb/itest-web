import type { StudyNote } from "../contentTypes";
export const objective2_1 = {
  "objectiveId": "2.1",
  "title": "Define characteristics of local area networks (LANs)",
  "whatToKnow": [
    "LAN, WLAN, VLAN, DMZ/perimeter networks"
  ],
  "memorize": [
    "VLAN = logical Layer 2 broadcast-domain segmentation",
    "DMZ = controlled security zone for exposed services"
  ],
  "howItWorks": [
    "Traffic between VLANs requires Layer 3 routing.",
    "A DMZ reduces direct exposure of the trusted LAN."
  ],
  "examTraps": [
    "VLANs are logical segmentation, not separate physical cabling by definition."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 2.1?",
      "answer": "Define characteristics of local area networks (LANs)"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "VLAN = logical Layer 2 broadcast-domain segmentation"
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
