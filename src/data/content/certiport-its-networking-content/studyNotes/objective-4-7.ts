import type { StudyNote } from "../contentTypes";
export const objective4_7 = {
  "objectiveId": "4.7",
  "title": "Identify the roles of networking services",
  "whatToKnow": [
    "DHCP automatically supplies IP configuration to clients. Core exchange shorthand: DORA = Discover, Offer, Request, Acknowledge.",
    "DHCP clients initially broadcast when they do not yet have usable IP configuration. A DHCP relay can forward DHCP messages between subnets (supplemental implementation context).",
    "Supplemental ports: DHCP/BOOTP server UDP 67 and client UDP 68. These are useful troubleshooting facts but are not in objective 4.5’s explicit port list.",
    "NAT translates addresses between inside/private and outside/public realms.",
    "Static NAT gives a stable one-to-one mapping. Dynamic NAT selects a mapping from an available public pool. PAT/NAPT lets many private sessions share one public address by also translating transport port identifiers.",
    "Public IPv4 addresses are globally routable/unique within Internet routing; private RFC1918 addresses are intended for private internets and normally require translation/proxying to reach public Internet services.",
    "Firewalls enforce traffic policy by allowing/denying traffic based on attributes such as source, destination, protocol, port, interface/zone, and—in stateful firewalls—connection state."
  ],
  "memorize": [
    "DHCP DORA: Discover → Offer → Request → Ack.",
    "DHCP supplemental ports: UDP 67 server / UDP 68 client.",
    "Static NAT = fixed one-to-one; dynamic NAT = pool; PAT/NAPT = many-to-one using ports.",
    "Firewall = policy enforcement for network traffic.",
    "Private IPv4 = RFC1918; public IPv4 = routable public addressing."
  ],
  "howItWorks": [
    "If a DHCP client has no lease, troubleshoot reachability to DHCP server/relay, VLAN placement, DHCP scope availability, and firewall/relay configuration.",
    "When multiple internal hosts browse the Internet through one public IP, PAT is the likely mechanism because source port mappings distinguish sessions.",
    "A static port-forward/NAT rule may expose an internal service, but firewall policy must also allow the traffic."
  ],
  "examTraps": [
    "DHCP does not resolve hostnames; DNS does.",
    "NAT is not a firewall by itself, even though NAT and firewall functions often coexist in one appliance.",
    "Dynamic NAT is not DHCP; both allocate dynamically but solve different problems.",
    "PAT does not mean “one public address per private host”; it is specifically useful for sharing addresses using ports."
  ],
  "quickCheck": [
    {
      "question": "Put DORA in order.",
      "answer": "Discover, Offer, Request, Acknowledge."
    },
    {
      "question": "Many inside hosts share one public address using different ports. What?",
      "answer": "PAT/NAPT."
    },
    {
      "question": "Fixed one-to-one translation?",
      "answer": "Static NAT."
    },
    {
      "question": "Translation from a public pool as needed?",
      "answer": "Dynamic NAT."
    },
    {
      "question": "What controls whether traffic is permitted between zones?",
      "answer": "A firewall/security policy."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "RFC 2131 - Dynamic Host Configuration Protocol",
      "url": "https://www.rfc-editor.org/info/rfc2131/"
    },
    {
      "label": "RFC 3022 - Traditional NAT",
      "url": "https://www.rfc-editor.org/info/rfc3022/"
    }
  ]
} satisfies StudyNote;
