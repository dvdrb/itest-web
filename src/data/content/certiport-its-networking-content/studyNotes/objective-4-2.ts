import type { StudyNote } from "../contentTypes";
export const objective4_2 = {
  "objectiveId": "4.2",
  "title": "Describe the Transmission Control Protocol (TCP) model",
  "whatToKnow": [
    "The official objective calls this the “Transmission Control Protocol (TCP) model”; industry references commonly call the four-layer architecture the TCP/IP model. Study the four-layer TCP/IP mapping while preserving the official objective wording.",
    "Application layer: combines functions closest to applications; examples HTTP, HTTPS, DNS, SMTP, IMAP, SSH.",
    "Transport layer: host-to-host transport; TCP and UDP; port numbers/sockets.",
    "Internet layer: IP addressing and routing across networks; IPv4/IPv6 and routing devices.",
    "Link/Network Access layer: local-link framing/media access and physical delivery; Ethernet/Wi-Fi concepts.",
    "Typical OSI crosswalk: TCP/IP Application ≈ OSI 5-7; Transport ≈ OSI 4; Internet ≈ OSI 3; Link ≈ OSI 1-2.",
    "The model is conceptual; exact implementations do not always fit cleanly into one textbook layer."
  ],
  "memorize": [
    "TCP/IP: Application → Transport → Internet → Link/Network Access.",
    "HTTP/DNS/SMTP/SSH → Application.",
    "TCP/UDP → Transport.",
    "IP → Internet.",
    "Ethernet/local framing → Link/Network Access.",
    "OSI 7-5 map broadly to TCP/IP Application; OSI 4 Transport; OSI 3 Internet; OSI 2-1 Link."
  ],
  "howItWorks": [
    "When asked to map a protocol, first decide whether it provides application service, end-to-end transport, internetwork routing, or local-link delivery.",
    "A TCP socket endpoint combines an IP address with a transport port, linking Internet-layer addressing to Transport-layer multiplexing."
  ],
  "examTraps": [
    "Do not add a separate Presentation or Session layer to the four-layer TCP/IP model; those functions are included in Application.",
    "Do not place IP in Transport or TCP in Internet.",
    "Do not confuse the protocol named TCP with the whole TCP/IP model; TCP itself is a Transport-layer protocol."
  ],
  "quickCheck": [
    {
      "question": "Which TCP/IP layer contains DNS?",
      "answer": "Application."
    },
    {
      "question": "Which contains TCP and UDP?",
      "answer": "Transport."
    },
    {
      "question": "Which contains IPv4/IPv6?",
      "answer": "Internet."
    },
    {
      "question": "Which contains Ethernet framing?",
      "answer": "Link/Network Access."
    },
    {
      "question": "Which TCP/IP layer broadly combines OSI 5, 6, and 7?",
      "answer": "Application."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "RFC 1122 - Requirements for Internet Hosts",
      "url": "https://www.rfc-editor.org/info/rfc1122/"
    }
  ]
} satisfies StudyNote;
