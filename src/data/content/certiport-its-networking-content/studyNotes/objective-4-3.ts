import type { StudyNote } from "../contentTypes";
export const objective4_3 = {
  "objectiveId": "4.3",
  "title": "Describe IPv4 concepts",
  "whatToKnow": [
    "IPv4 addresses are 32 bits. A subnet mask/prefix identifies network bits versus host bits. CIDR writes the prefix as /n, for example /24.",
    "Legacy classful ranges: Class A first octet 1-126 with default /8 (127/8 reserved for loopback); Class B 128-191 default /16; Class C 192-223 default /24. Modern routing is classless/CIDR.",
    "RFC1918 private blocks: 10.0.0.0/8, 172.16.0.0/12 (172.16-172.31), 192.168.0.0/16. They are not publicly routed on the Internet without translation/proxying.",
    "Loopback block is 127.0.0.0/8; 127.0.0.1 is the common local loopback test. Loopback is not an RFC1918 private block.",
    "Supplemental troubleshooting fact: 169.254.0.0/16 is IPv4 link-local/APIPA space; it often appears when automatic IPv4 configuration cannot obtain a DHCP lease. It is not RFC1918 private space.",
    "Default gateway is the local router address used for destinations outside the local subnet.",
    "Network address has all host bits 0; directed broadcast address has all host bits 1. Traditional host addressing does not assign network/broadcast addresses to hosts.",
    "A socket endpoint is commonly described as an IP address plus a transport-layer port number, for example 192.0.2.10:443.",
    "Subnetting divides a larger address block into smaller networks to control address use, broadcast scope, segmentation, and routing design.",
    "Quick subnet method: determine block size from the mask, identify the containing block, then network = first address and broadcast = last address."
  ],
  "memorize": [
    "Private: 10/8; 172.16/12; 192.168/16.",
    "Loopback: 127/8; common 127.0.0.1.",
    "IPv4 link-local/APIPA: 169.254/16 (supplemental but high-yield).",
    "/24 255.255.255.0; /25 .128; /26 .192; /27 .224; /28 .240; /29 .248; /30 .252.",
    "/25 block 128; /26 block 64; /27 block 32; /28 block 16; /29 block 8; /30 block 4 in the changing octet.",
    "Traditional usable hosts = 2^(host bits) − 2 for ordinary subnets (/31 and /32 are special cases outside the basic host-count rule).",
    "Class A /8, Class B /16, Class C /24 legacy defaults."
  ],
  "howItWorks": [
    "Example 192.168.10.70/26: /26 block size 64 → ranges 0-63, 64-127, 128-191, 192-255 → network .64, broadcast .127, hosts .65-.126.",
    "Example 10.1.4.128/27: /27 block size 32 → range .128-.159 → broadcast .159.",
    "To decide whether two hosts are local, apply the mask to both addresses; if network IDs match, they are on the same subnet.",
    "If destination is off-subnet, the host sends the frame toward the default gateway’s MAC address after resolving it with ARP."
  ],
  "examTraps": [
    "Only 172.16 through 172.31 is private; 172.32.x.x is not in RFC1918.",
    "169.254/16 is link-local, not private RFC1918.",
    "127/8 is loopback, not Class A private space.",
    "Do not subtract two host addresses when the question asks total addresses; a /28 has 16 total, 14 traditional usable hosts.",
    "A default gateway must be reachable on the local link/subnet; it is not a DNS server.",
    "“Classful” is legacy; CIDR/classless prefixes are the modern model."
  ],
  "quickCheck": [
    {
      "question": "Network of 192.168.10.70/26?",
      "answer": "192.168.10.64."
    },
    {
      "question": "Broadcast of 10.1.4.128/27?",
      "answer": "10.1.4.159."
    },
    {
      "question": "Traditional usable hosts in /28?",
      "answer": "14."
    },
    {
      "question": "Is 172.20.5.1 private?",
      "answer": "Yes, because it lies in 172.16.0.0/12."
    },
    {
      "question": "Is 172.40.5.1 private?",
      "answer": "No."
    },
    {
      "question": "What does 169.254.x.x commonly indicate?",
      "answer": "IPv4 link-local/APIPA; often DHCP configuration failure or no DHCP response."
    },
    {
      "question": "What is a socket endpoint?",
      "answer": "An IP address combined with a transport port."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "RFC 1918 - Address Allocation for Private Internets",
      "url": "https://www.rfc-editor.org/info/rfc1918/"
    },
    {
      "label": "RFC 3927 - Dynamic Configuration of IPv4 Link-Local Addresses",
      "url": "https://www.rfc-editor.org/info/rfc3927/"
    },
    {
      "label": "RFC 4632 - Classless Inter-domain Routing (CIDR)",
      "url": "https://www.rfc-editor.org/info/rfc4632/"
    }
  ]
} satisfies StudyNote;
