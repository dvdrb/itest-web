export const cramSheet = {
  "ports": [
    {
      "protocol": "FTP control",
      "port": "21/TCP"
    },
    {
      "protocol": "FTP active data (supplemental)",
      "port": "20/TCP"
    },
    {
      "protocol": "SSH",
      "port": "22/TCP"
    },
    {
      "protocol": "SMTP",
      "port": "25/TCP"
    },
    {
      "protocol": "DNS",
      "port": "53/UDP + 53/TCP"
    },
    {
      "protocol": "HTTP",
      "port": "80/TCP"
    },
    {
      "protocol": "IMAP",
      "port": "143/TCP"
    },
    {
      "protocol": "HTTPS",
      "port": "443/TCP"
    },
    {
      "protocol": "RDP",
      "port": "3389 (default; TCP and modern UDP support)"
    }
  ],
  "ipv4": [
    "Private 10.0.0.0/8",
    "Private 172.16.0.0/12 = 172.16–172.31",
    "Private 192.168.0.0/16",
    "Loopback 127.0.0.0/8; common 127.0.0.1",
    "Link-local/APIPA 169.254.0.0/16 — NOT RFC1918 private",
    "/24 255.255.255.0",
    "/25 255.255.255.128 — block 128",
    "/26 255.255.255.192 — block 64",
    "/27 255.255.255.224 — block 32",
    "/28 255.255.255.240 — block 16",
    "/29 255.255.255.248 — block 8",
    "/30 255.255.255.252 — block 4",
    "Traditional usable hosts = 2^(host bits)−2"
  ],
  "ipv6": [
    "128 bits",
    "::1 loopback",
    "FE80::/10 link-local",
    "FF00::/8 multicast",
    "FF02::1 all nodes on local link",
    "FF02::2 all routers on local link",
    "No broadcast",
    "Omit leading zeros; use one :: for one longest zero run",
    "Dual stack = IPv4 + IPv6 simultaneously",
    "Tunneling carries one protocol through infrastructure for another"
  ],
  "osi": [
    "7 Application — HTTP/DNS/SMTP/IMAP",
    "6 Presentation — representation/encryption/compression concepts",
    "5 Session — session/dialog management",
    "4 Transport — TCP/UDP, ports",
    "3 Network — IP, routing, router",
    "2 Data Link — Ethernet frames, MAC, switch",
    "1 Physical — bits/signals/media, hub/repeater"
  ],
  "tcpip": [
    "Application — HTTP/DNS/SMTP/SSH",
    "Transport — TCP/UDP",
    "Internet — IPv4/IPv6 and routing",
    "Link/Network Access — Ethernet/Wi-Fi local delivery",
    "OSI 5-7 ≈ Application; 4 ≈ Transport; 3 ≈ Internet; 1-2 ≈ Link"
  ],
  "dns": [
    "A → IPv4",
    "AAAA → IPv6",
    "MX → mail exchanger",
    "PTR → reverse lookup",
    "SRV → service priority/weight/port/target",
    "CNAME → alias",
    "SOA → zone authority metadata",
    "Windows DNS hostname: cache → HOSTS → DNS server",
    "WINS/LMHOSTS = legacy NetBIOS name resolution"
  ],
  "switching": [
    "Access = one VLAN toward endpoint",
    "Trunk = multiple VLANs",
    "Learn SOURCE MAC; forward by DESTINATION MAC",
    "Unknown unicast/broadcast floods inside VLAN",
    "Each switch port = collision domain",
    "VLAN = broadcast domain",
    "Layer 3 switch can route",
    "STP prevents Layer 2 loops",
    "Store-and-forward = whole frame/FCS; cut-through = early forwarding"
  ],
  "routing": [
    "Connected = active directly attached network",
    "Static = manually configured",
    "Dynamic = learned via routing protocol",
    "Default IPv4 = 0.0.0.0/0",
    "Longest matching prefix wins",
    "Port forwarding = public port → internal service",
    "QoS prioritizes/manages congestion",
    "Segmentation separates networks/policy boundaries",
    "Convergence = routing stabilizes after change"
  ],
  "wireless": [
    "802.11 = Wi-Fi; Bluetooth = short-range PAN",
    "2.4 GHz: more range + more interference",
    "5 GHz: more channels + usually shorter range",
    "WEP weak/obsolete",
    "WPA legacy/TKIP association",
    "WPA2 AES/CCMP association",
    "802.1X = enterprise access control/authentication",
    "Ad hoc = no infrastructure AP",
    "Wireless bridge = joins LAN segments",
    "2.4-GHz common non-overlap: 1/6/11 (regional caveat)"
  ],
  "media": [
    "Fiber = light, long distance, EMI immune",
    "UTP = unshielded; STP = shielded",
    "Twisting reduces crosstalk",
    "Copper Ethernet commonly designed to 100 m channel",
    "Legacy endpoint↔switch = straight-through",
    "Legacy like-device↔like-device = crossover",
    "Auto-MDI-X can correct cable pair role automatically"
  ],
  "tools": [
    "Cable tester → continuity/wiremap",
    "Toner → identify cable",
    "TDR → distance to copper fault",
    "OTDR → fiber events/breaks",
    "Multimeter → voltage/current/resistance"
  ],
  "windows": [
    "ping → ICMP reachability",
    "ipconfig /all → full IP config",
    "ipconfig /release + /renew → DHCP",
    "ipconfig /flushdns → clear DNS cache",
    "tracert → routed hops",
    "pathping → path + loss/latency",
    "nslookup → DNS",
    "hostname → local host name",
    "netstat -ano → connections/listeners/PID",
    "arp -a → IPv4 ARP cache",
    "127.0.0.1 → loopback"
  ],
  "linux": [
    "ping",
    "ip addr",
    "traceroute",
    "tracepath → path + MTU",
    "dig → detailed DNS",
    "host → simple DNS",
    "netstat → objective-listed legacy network status",
    "arp → objective-listed legacy IPv4 ARP"
  ],
  "troubleshooting": [
    "Identify/scope",
    "Establish theory",
    "Test theory",
    "Plan + implement with rollback",
    "Verify full functionality",
    "Document",
    "Communicate clearly; avoid blame; protect credentials/data"
  ]
} as const;
