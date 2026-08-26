import type { DomainId } from "./contentTypes";

export interface Objective { id:string; domainId:DomainId; domain:string; title:string; topics:string[] }
export const objectives: Objective[] = [
  {
    "id": "1.1",
    "domainId": "1",
    "domain": "Networking Fundamentals",
    "title": "Define network concepts",
    "topics": [
      "Internet",
      "intranet",
      "extranet",
      "client-server",
      "peer-to-peer",
      "unicast",
      "multicast",
      "broadcast",
      "network devices",
      "IoT"
    ]
  },
  {
    "id": "1.2",
    "domainId": "1",
    "domain": "Networking Fundamentals",
    "title": "Define cloud and virtualization concepts",
    "topics": [
      "hypervisors",
      "virtual machines",
      "virtual switches"
    ]
  },
  {
    "id": "1.3",
    "domainId": "1",
    "domain": "Networking Fundamentals",
    "title": "Describe remote access methods",
    "topics": [
      "VPN",
      "Remote Desktop"
    ]
  },
  {
    "id": "2.1",
    "domainId": "2",
    "domain": "Network Infrastructures",
    "title": "Define characteristics of local area networks (LANs)",
    "topics": [
      "DMZ/perimeter networks",
      "security zones",
      "VLANs",
      "wired LAN",
      "wireless LAN"
    ]
  },
  {
    "id": "2.2",
    "domainId": "2",
    "domain": "Network Infrastructures",
    "title": "Define characteristics of wide area networks (WANs)",
    "topics": [
      "DSL",
      "site-to-site",
      "cable modem",
      "satellite",
      "3G",
      "4G",
      "5G"
    ]
  },
  {
    "id": "2.3",
    "domainId": "2",
    "domain": "Network Infrastructures",
    "title": "Identify wireless networking methods and characteristics",
    "topics": [
      "802.11",
      "Bluetooth",
      "WPA",
      "WPA2",
      "WEP",
      "802.1X",
      "point-to-point wireless",
      "ad hoc",
      "wireless bridging",
      "wireless interference"
    ]
  },
  {
    "id": "2.4",
    "domainId": "2",
    "domain": "Network Infrastructures",
    "title": "Compare and contrast network topologies and access methods",
    "topics": [
      "star",
      "mesh",
      "ring",
      "bus",
      "logical topology",
      "physical topology"
    ]
  },
  {
    "id": "3.1",
    "domainId": "3",
    "domain": "Network Hardware",
    "title": "Describe characteristics of switches",
    "topics": [
      "access vs trunk",
      "managed vs unmanaged",
      "VLANs",
      "Layer 2 vs Layer 3",
      "MAC table",
      "hubs vs switches",
      "collision domain",
      "broadcast domain",
      "half/full duplex",
      "STP",
      "single point of failure"
    ]
  },
  {
    "id": "3.2",
    "domainId": "3",
    "domain": "Network Hardware",
    "title": "Describe characteristics of routers",
    "topics": [
      "connected routes",
      "static routing",
      "dynamic routing",
      "default route",
      "routing table",
      "best route",
      "port forwarding",
      "QoS",
      "segmentation",
      "convergence",
      "bottlenecks"
    ]
  },
  {
    "id": "3.3",
    "domainId": "3",
    "domain": "Network Hardware",
    "title": "Describe characteristics of physical media",
    "topics": [
      "fiber",
      "twisted pair",
      "shielded/unshielded",
      "CAT5-CAT7",
      "crossover",
      "straight-through",
      "segment length",
      "speed",
      "EMI",
      "crosstalk",
      "interception"
    ]
  },
  {
    "id": "4.1",
    "domainId": "4",
    "domain": "Protocols and Services",
    "title": "Describe the OSI model",
    "topics": [
      "7 layers",
      "layer purposes",
      "devices/protocols/apps",
      "MAC address"
    ]
  },
  {
    "id": "4.2",
    "domainId": "4",
    "domain": "Protocols and Services",
    "title": "Describe the TCP/IP model",
    "topics": [
      "Application",
      "Transport",
      "Internet",
      "Link/Network Access",
      "protocol examples"
    ]
  },
  {
    "id": "4.3",
    "domainId": "4",
    "domain": "Protocols and Services",
    "title": "Describe IPv4 concepts",
    "topics": [
      "classful vs classless",
      "subnetting",
      "subnet mask",
      "default gateway",
      "socket",
      "broadcast",
      "private addressing",
      "loopback"
    ]
  },
  {
    "id": "4.4",
    "domainId": "4",
    "domain": "Protocols and Services",
    "title": "Describe IPv6 concepts",
    "topics": [
      "128-bit addressing",
      "abbreviation",
      "dual stack",
      "tunneling",
      "tunnel broker",
      "link-local",
      "global",
      "multicast",
      "all nodes/all routers",
      "loopback"
    ]
  },
  {
    "id": "4.5",
    "domainId": "4",
    "domain": "Protocols and Services",
    "title": "Identify well-known ports",
    "topics": [
      "HTTP",
      "HTTPS",
      "FTP",
      "SMTP",
      "IMAP",
      "DNS",
      "RDP",
      "SSH"
    ]
  },
  {
    "id": "4.6",
    "domainId": "4",
    "domain": "Protocols and Services",
    "title": "Describe name resolution concepts",
    "topics": [
      "HOSTS",
      "LMHOSTS",
      "DNS",
      "WINS",
      "A",
      "AAAA",
      "MX",
      "PTR",
      "SRV",
      "CNAME",
      "SOA",
      "forward lookup",
      "reverse lookup",
      "resolution process"
    ]
  },
  {
    "id": "4.7",
    "domainId": "4",
    "domain": "Protocols and Services",
    "title": "Identify roles of networking services",
    "topics": [
      "DHCP",
      "NAT",
      "static NAT",
      "dynamic NAT",
      "public/private",
      "PAT",
      "firewalls"
    ]
  },
  {
    "id": "5.1",
    "domainId": "5",
    "domain": "Troubleshooting",
    "title": "Apply troubleshooting process in a small-medium business network",
    "topics": [
      "identify problem",
      "establish theory",
      "test theory",
      "plan/implement solution",
      "verify",
      "document",
      "professional conduct"
    ]
  },
  {
    "id": "5.2",
    "domainId": "5",
    "domain": "Troubleshooting",
    "title": "Use appropriate hardware troubleshooting tools",
    "topics": [
      "multimeter",
      "cable tester",
      "toner",
      "TDR",
      "OTDR"
    ]
  },
  {
    "id": "5.3",
    "domainId": "5",
    "domain": "Troubleshooting",
    "title": "Use Windows software troubleshooting tools",
    "topics": [
      "ping",
      "ipconfig",
      "tracert",
      "pathping",
      "nslookup",
      "hostname",
      "netstat",
      "arp",
      "127.0.0.1"
    ]
  },
  {
    "id": "5.4",
    "domainId": "5",
    "domain": "Troubleshooting",
    "title": "Use Linux software troubleshooting tools",
    "topics": [
      "ping",
      "ip addr",
      "traceroute",
      "tracepath",
      "dig",
      "host",
      "netstat",
      "arp"
    ]
  }
];
