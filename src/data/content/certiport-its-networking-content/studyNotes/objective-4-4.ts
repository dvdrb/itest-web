import type { StudyNote } from "../contentTypes";
export const objective4_4 = {
  "objectiveId": "4.4",
  "title": "Describe IPv6 concepts",
  "whatToKnow": [
    "IPv6 addresses are 128 bits and are written as eight 16-bit hexadecimal groups (hextets) before abbreviation.",
    "IPv6 uses prefix lengths such as /64 rather than IPv4-style dotted-decimal subnet masks. This clarifies the objective’s “subnet mask” wording using standard IPv6 practice.",
    "Leading zeros in a hextet may be omitted. One longest contiguous run of all-zero hextets may be compressed with ::; :: can appear only once in an address.",
    "Loopback = ::1/128.",
    "Link-local = FE80::/10. Link-local addresses are valid only on the local link and are not forwarded by routers to other links.",
    "Global unicast addresses are routable beyond the local link; 2000::/3 is the currently allocated broad global-unicast range for normal Internet-style unicast.",
    "IPv6 uses multicast instead of broadcast. Multicast = FF00::/8. FF02::1 is all nodes on the local link; FF02::2 is all routers on the local link.",
    "Default gateway in IPv6 is often represented by a router’s link-local address on that interface.",
    "Dual stack runs IPv4 and IPv6 simultaneously. Tunneling carries one protocol across infrastructure built for another. A tunnel broker is a service that provisions/manages a tunnel for a client/network.",
    "A socket concept still combines an IP address and transport port; IPv6 text is often bracketed with a port, for example [2001:db8::10]:443, to avoid colon ambiguity."
  ],
  "memorize": [
    "IPv6 = 128 bits.",
    "Loopback = ::1.",
    "Link-local = FE80::/10.",
    "Multicast = FF00::/8.",
    "All nodes local-link = FF02::1; all routers local-link = FF02::2.",
    "No IPv6 broadcast.",
    "One :: only; omit leading zeros; compress longest zero run.",
    "Dual stack = IPv4 + IPv6 simultaneously."
  ],
  "howItWorks": [
    "2001:0db8:0000:0000:0000:0000:0000:0042 can be shortened to 2001:db8::42.",
    "A host can communicate with a neighbor using link-local IPv6 even without a global address, but routers do not route that link-local source/destination across links.",
    "During migration, dual stack is simplest conceptually when both protocol families are available; tunneling is useful when native transport for one family is missing along part of the path."
  ],
  "examTraps": [
    "Do not use 127.0.0.1 as IPv6 loopback; IPv6 loopback is ::1.",
    "Do not call FE80::/10 global. It is link-local.",
    "Do not invent IPv6 broadcast addresses; use multicast.",
    "Do not use more than one :: in an IPv6 address.",
    "Do not confuse FF02::1 (all nodes) with FF02::2 (all routers)."
  ],
  "quickCheck": [
    {
      "question": "Compress 2001:0db8:0:0:0:0:0:42.",
      "answer": "2001:db8::42."
    },
    {
      "question": "IPv6 loopback?",
      "answer": "::1."
    },
    {
      "question": "IPv6 link-local prefix?",
      "answer": "FE80::/10."
    },
    {
      "question": "All-nodes local-link multicast?",
      "answer": "FF02::1."
    },
    {
      "question": "All-routers local-link multicast?",
      "answer": "FF02::2."
    },
    {
      "question": "Does IPv6 have broadcast?",
      "answer": "No; multicast is used instead."
    },
    {
      "question": "What is dual stack?",
      "answer": "Running IPv4 and IPv6 simultaneously."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "RFC 4291 - IPv6 Addressing Architecture",
      "url": "https://www.rfc-editor.org/info/rfc4291/"
    },
    {
      "label": "RFC 5952 - IPv6 Text Representation",
      "url": "https://www.rfc-editor.org/info/rfc5952/"
    }
  ]
} satisfies StudyNote;
