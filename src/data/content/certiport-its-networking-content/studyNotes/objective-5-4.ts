import type { StudyNote } from "../contentTypes";
export const objective5_4 = {
  "objectiveId": "5.4",
  "title": "Given a scenario, use the appropriate Linux software tools to troubleshoot a problem",
  "whatToKnow": [
    "ip addr (ip address) displays/manages IPv4 and IPv6 addresses on interfaces and shows properties such as interface state, prefix length, and scope.",
    "ping sends ICMP Echo requests and reports replies/loss/round-trip time. It works with IPv4/IPv6 depending on implementation/options.",
    "traceroute discovers routed hops toward a destination using increasing TTL/hop-limit probes; asterisks indicate no response to that probe, not necessarily a failed forwarding path.",
    "tracepath is similar to traceroute and also reports/discovers path MTU; common implementations can run without superuser privileges.",
    "dig performs flexible DNS queries and displays detailed DNS response information; `dig name A`, `dig name AAAA`, `dig -x address` are high-yield patterns.",
    "host is a simpler DNS lookup utility that can convert names to addresses and addresses to names.",
    "netstat is the objective-listed legacy utility for connections/listeners/routing/interfaces. Modern Linux often uses ss/ip route instead, but the exam objective explicitly names netstat.",
    "arp is the objective-listed legacy tool for the IPv4 ARP cache. Modern Linux often uses `ip neigh`, but know arp because it is explicitly in scope."
  ],
  "memorize": [
    "ip addr → interface addresses/state.",
    "ping → ICMP reachability.",
    "traceroute → routed hops.",
    "tracepath → path + path MTU.",
    "dig → detailed DNS query.",
    "host → simple DNS name/address lookup.",
    "netstat -tuln → TCP/UDP listeners numeric (common pattern).",
    "arp -n / arp → legacy IPv4 ARP cache.",
    "Modern replacements (supplemental): ss for many netstat uses; ip neigh for arp."
  ],
  "howItWorks": [
    "If `ip addr` shows an interface DOWN/no expected address, solve local interface/configuration before testing remote DNS.",
    "If `dig` returns NXDOMAIN, the queried DNS server is saying the name does not exist in DNS as queried; if it times out, reachability/server/firewall may be different problems.",
    "If traceroute has one `* * *` hop and later hops answer, transit may still be working; the silent device may not answer probes.",
    "If tracepath reports a smaller PMTU after a hop, the path’s usable MTU has been discovered/reduced there."
  ],
  "examTraps": [
    "Do not treat netstat or arp as “wrong” simply because they are legacy; they are explicitly named by the objective.",
    "Do not confuse host with hostname: `host` performs DNS lookups; `hostname` prints/sets local hostname and is not listed in the Linux objective.",
    "Do not assume ping failure proves DNS is broken if the target was an IP address.",
    "Do not interpret every traceroute asterisk as a dropped transit packet."
  ],
  "quickCheck": [
    {
      "question": "Which command shows Linux interface addresses?",
      "answer": "ip addr."
    },
    {
      "question": "Which command gives detailed DNS response sections?",
      "answer": "dig."
    },
    {
      "question": "Which command is a simpler DNS name/address lookup?",
      "answer": "host."
    },
    {
      "question": "Which traces path and can report path MTU?",
      "answer": "tracepath."
    },
    {
      "question": "Which objective-listed legacy command shows listening sockets?",
      "answer": "netstat."
    },
    {
      "question": "Which objective-listed legacy command shows IPv4 ARP entries?",
      "answer": "arp."
    },
    {
      "question": "One traceroute hop is `* * *`, but later hops respond. Is the path necessarily broken there?",
      "answer": "No; that router may simply not answer the probes."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "Linux ip-address(8) manual",
      "url": "https://man7.org/linux/man-pages/man8/ip-address.8.html"
    },
    {
      "label": "Linux ping(8) manual",
      "url": "https://man7.org/linux/man-pages/man8/ping.8.html"
    },
    {
      "label": "Linux traceroute(8) manual",
      "url": "https://man7.org/linux/man-pages/man8/traceroute.8.html"
    },
    {
      "label": "Linux tracepath(8) manual",
      "url": "https://man7.org/linux/man-pages/man8/tracepath.8%40%40iputils.html"
    },
    {
      "label": "BIND 9 - dig manual",
      "url": "https://bind9.readthedocs.io/en/stable/manpages.html"
    },
    {
      "label": "Ubuntu manpage - host DNS lookup utility",
      "url": "https://manpages.ubuntu.com/manpages/focal/man1/host.1.html"
    },
    {
      "label": "Linux netstat(8) manual",
      "url": "https://man7.org/linux/man-pages/man8/netstat.8.html"
    }
  ]
} satisfies StudyNote;
