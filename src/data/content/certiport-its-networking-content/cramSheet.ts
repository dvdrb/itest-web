export const cramSheet = {
  "ports": [
    {
      "protocol": "FTP control",
      "port": "21/TCP"
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
      "port": "53/UDP,TCP"
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
      "port": "3389/TCP (default)"
    }
  ],
  "ipv4": [
    "Private 10.0.0.0/8",
    "Private 172.16.0.0/12",
    "Private 192.168.0.0/16",
    "Loopback 127.0.0.0/8; common 127.0.0.1",
    "Link-local 169.254.0.0/16",
    "/24 255.255.255.0",
    "/25 255.255.255.128",
    "/26 255.255.255.192",
    "/27 255.255.255.224",
    "/28 255.255.255.240"
  ],
  "ipv6": [
    "128 bits",
    "::1 loopback",
    "FE80::/10 link-local",
    "FF00::/8 multicast",
    "FF02::1 all-nodes local-link",
    "FF02::2 all-routers local-link",
    "No broadcast",
    ":: compresses one continuous zero run and appears once"
  ],
  "osi": [
    "7 Application",
    "6 Presentation",
    "5 Session",
    "4 Transport (TCP/UDP)",
    "3 Network (IP/router)",
    "2 Data Link (Ethernet/MAC/switch)",
    "1 Physical (signals/media)"
  ],
  "tcpip": [
    "Application — HTTP/DNS/SMTP/etc.",
    "Transport — TCP/UDP",
    "Internet — IP",
    "Link/Network Access — Ethernet/local delivery"
  ],
  "dns": [
    "A → IPv4",
    "AAAA → IPv6",
    "MX → mail exchanger",
    "PTR → reverse lookup",
    "SRV → service/port/target",
    "CNAME → alias",
    "SOA → zone authority metadata"
  ],
  "switching": [
    "Access = one VLAN",
    "Trunk = multiple VLANs",
    "MAC table drives L2 forwarding",
    "L3 switch can route",
    "Hub repeats; switch forwards",
    "STP prevents switching loops"
  ],
  "routing": [
    "Connected = directly attached",
    "Static = manually configured",
    "Dynamic = learned via routing protocol",
    "Default = /0 fallback",
    "Longest matching prefix wins",
    "QoS prioritizes/manages traffic",
    "Convergence = routes stabilize after change"
  ],
  "tools": [
    "Cable tester → continuity/wiremap",
    "Toner → identify cable",
    "TDR → distance to copper fault",
    "OTDR → fiber events/breaks",
    "Multimeter → electrical values"
  ],
  "windows": [
    "ping",
    "ipconfig /all",
    "tracert",
    "pathping",
    "nslookup",
    "hostname",
    "netstat",
    "arp -a",
    "127.0.0.1 loopback"
  ],
  "linux": [
    "ping",
    "ip addr",
    "traceroute",
    "tracepath",
    "dig",
    "host",
    "netstat",
    "arp"
  ],
  "troubleshooting": [
    "Identify",
    "Theory",
    "Test theory",
    "Plan/implement",
    "Verify",
    "Document"
  ]
} as const;
