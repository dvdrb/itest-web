import type { StudyNote } from "../contentTypes";
export const objective4_3 = {
  "objectiveId": "4.3",
  "title": "Describe IPv4 concepts",
  "whatToKnow": [
    "IPv4 classful/classless concepts",
    "subnetting",
    "mask/gateway/socket/broadcast",
    "private ranges",
    "loopback"
  ],
  "memorize": [
    "Private: 10/8, 172.16/12, 192.168/16",
    "Loopback: 127/8; common 127.0.0.1",
    "IPv4 link-local: 169.254/16",
    "/24 255.255.255.0",
    "/25 .128",
    "/26 .192",
    "/27 .224",
    "/28 .240"
  ],
  "howItWorks": [
    "Subnet mask/prefix separates network and host bits.",
    "Default gateway handles off-subnet destinations."
  ],
  "examTraps": [
    "169.254/16 is link-local, not RFC1918 private.",
    "Only 172.16–172.31 is private."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 4.3?",
      "answer": "Describe IPv4 concepts"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "Private: 10/8, 172.16/12, 192.168/16"
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
