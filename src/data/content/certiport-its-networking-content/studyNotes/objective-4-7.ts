import type { StudyNote } from "../contentTypes";
export const objective4_7 = {
  "objectiveId": "4.7",
  "title": "Identify roles of networking services",
  "whatToKnow": [
    "DHCP",
    "NAT static/dynamic",
    "public/private",
    "PAT",
    "firewalls"
  ],
  "memorize": [
    "DHCP DORA: Discover, Offer, Request, Acknowledge",
    "Static NAT = fixed mapping",
    "Dynamic NAT = mapping from a pool",
    "PAT = many sessions share addresses using ports",
    "Firewall = traffic policy enforcement"
  ],
  "howItWorks": [
    "DHCP automates host configuration; NAT translates address representation; firewalls filter traffic."
  ],
  "examTraps": [
    "NAT is not a firewall by itself, even if some devices perform both."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 4.7?",
      "answer": "Identify roles of networking services"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "DHCP DORA: Discover, Offer, Request, Acknowledge"
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
