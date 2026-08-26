import type { StudyNote } from "../contentTypes";
export const objective5_3 = {
  "objectiveId": "5.3",
  "title": "Given a scenario, use the appropriate Windows software tools to troubleshoot a problem",
  "whatToKnow": [
    "ping: tests IP-level reachability with ICMP Echo and reports replies/round-trip time. If ping by IP works but ping by name fails, investigate name resolution.",
    "ipconfig: shows local IPv4/IPv6, mask/prefix, gateway and adapter configuration. /all adds DHCP/DNS/MAC and other details; /release and /renew interact with DHCP; /flushdns clears the DNS resolver cache.",
    "tracert: discovers intermediate Layer 3 hops using increasing TTL/hop-limit behavior. Asterisks can mean an intermediate router did not return the expected response; later responding hops prove the path can continue beyond that silent hop.",
    "pathping: combines path discovery with repeated probing/statistics to estimate latency/loss at intermediate routers/links.",
    "nslookup: queries DNS and can test specific DNS record types/servers; useful when names fail but IP connectivity works.",
    "hostname: prints the local computer name.",
    "netstat: displays active connections/listeners and, with options, protocol statistics/routing information. High-yield options: -a all connections/listeners, -n numeric, -o owning PID, -r route table.",
    "arp: displays/modifies IPv4 ARP cache. arp -a shows IPv4-to-MAC neighbor mappings.",
    "127.0.0.1 is the common IPv4 loopback address. Success proves the local TCP/IP stack can process loopback traffic; it does not prove NIC, cable, switch, gateway, DNS, or Internet connectivity.",
    "Recognize 169.254.x.x as IPv4 link-local/APIPA in ipconfig output when automatic configuration cannot obtain a usable DHCP lease (supplemental cross-objective diagnostic fact)."
  ],
  "memorize": [
    "ping → reachability/ICMP.",
    "ipconfig /all → full local IP config.",
    "ipconfig /release + /renew → DHCP lease refresh.",
    "ipconfig /flushdns → clear local DNS resolver cache.",
    "tracert → routed hops.",
    "pathping → path plus per-hop/link loss/latency statistics.",
    "nslookup → DNS query.",
    "hostname → local host name.",
    "netstat -ano → connections/listeners numeric + PID.",
    "arp -a → IPv4 ARP cache.",
    "127.0.0.1 → IPv4 loopback."
  ],
  "howItWorks": [
    "Troubleshoot from local outward: inspect ipconfig → ping loopback/local IP → ping gateway → ping remote IP → test hostname/DNS → trace path if remote routing is unclear.",
    "If ipconfig shows 169.254.x.x and no expected gateway, focus on DHCP/link/VLAN reachability rather than DNS first.",
    "If a remote IP responds but a hostname does not, use nslookup and inspect configured DNS servers/Hosts/cache.",
    "If tracert shows one silent hop but later hops respond, do not assume the silent hop is blocking transit; it may simply suppress TTL-expired responses."
  ],
  "examTraps": [
    "127.0.0.1 success does not prove the cable or gateway works.",
    "A failed ping does not automatically prove the destination is down; ICMP may be filtered.",
    "tracert asterisks are not automatically packet loss for forwarded traffic.",
    "netstat LISTENING means a local socket is listening; it does not prove an external firewall permits access.",
    "arp -a maps local-neighbor IPv4 addresses to MAC addresses; it does not show remote Internet routers beyond the local link.",
    "hostname does not query DNS; it simply reports the local host name."
  ],
  "quickCheck": [
    {
      "question": "ipconfig shows 169.254.20.8 and no gateway. First suspicion?",
      "answer": "No usable DHCP configuration / link to DHCP infrastructure."
    },
    {
      "question": "Ping 8.8.8.8 works; ping server.example fails. Next tool?",
      "answer": "nslookup (and inspect DNS configuration)."
    },
    {
      "question": "Need hop-by-hop path?",
      "answer": "tracert."
    },
    {
      "question": "Need per-hop loss/latency statistics over time?",
      "answer": "pathping."
    },
    {
      "question": "Need active connections/listening ports and PIDs?",
      "answer": "netstat -ano."
    },
    {
      "question": "Need local IPv4→MAC mappings?",
      "answer": "arp -a."
    },
    {
      "question": "What does successful 127.0.0.1 ping prove?",
      "answer": "Local TCP/IP loopback processing works, not external connectivity."
    },
    {
      "question": "Changed DNS record but this PC still resolves old value. Useful local action?",
      "answer": "ipconfig /flushdns, then retest resolution."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "Microsoft Learn - ipconfig",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig"
    },
    {
      "label": "Microsoft Learn - ping",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ping"
    },
    {
      "label": "Microsoft Learn - tracert",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert"
    },
    {
      "label": "Microsoft Learn - pathping",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/pathping"
    },
    {
      "label": "Microsoft Learn - nslookup",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup"
    },
    {
      "label": "Microsoft Learn - netstat",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat"
    },
    {
      "label": "Microsoft Learn - arp",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/arp"
    }
  ]
} satisfies StudyNote;
