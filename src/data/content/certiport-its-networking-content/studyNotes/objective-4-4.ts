import type { StudyNote } from "../contentTypes";
export const objective4_4 = {
  "objectiveId": "4.4",
  "title": "Describe IPv6 concepts",
  "whatToKnow": [
    "IPv6 addressing/abbreviation",
    "transition methods",
    "link-local/global/multicast",
    "all nodes/all routers",
    "loopback"
  ],
  "memorize": [
    "IPv6 = 128 bits",
    "Loopback ::1",
    "Link-local FE80::/10",
    "Multicast FF00::/8",
    "All nodes FF02::1",
    "All routers FF02::2",
    "No IPv6 broadcast",
    ":: zero compression can appear once"
  ],
  "howItWorks": [
    "Dual stack runs IPv4 and IPv6 together; tunneling carries one protocol across another network."
  ],
  "examTraps": [
    "127.0.0.1 is IPv4 loopback; ::1 is IPv6 loopback."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 4.4?",
      "answer": "Describe IPv6 concepts"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "IPv6 = 128 bits"
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
