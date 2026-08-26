import type { Domain } from '../types/exam'

export interface StudyNote {
  domain: Domain
  title: string
  points: string[]
}

export const studyNotes: StudyNote[] = [
  { domain: 'Networking Fundamentals', title: 'Models & traffic', points: ['OSI separates network functions into seven layers; TCP/IP groups them more broadly.', 'Unicast targets one host, multicast targets a group, and broadcast reaches a local broadcast domain.', 'A VPN creates an encrypted tunnel across an untrusted network.'] },
  { domain: 'Network Infrastructures', title: 'Addressing & layout', points: ['A /24 leaves 8 host bits and provides 254 usable IPv4 host addresses.', 'VLANs separate Layer 2 broadcast domains on a switch.', 'Star topology centralizes connections; mesh adds resilient alternate paths.'] },
  { domain: 'Network Hardware', title: 'What each device does', points: ['Switches forward frames within a LAN; routers forward packets between IP networks.', 'Fiber resists electromagnetic interference and supports long distances.', 'PoE delivers power over compatible Ethernet cabling.'] },
  { domain: 'Protocols & Services', title: 'Services to remember', points: ['DNS translates names to IP addresses; DHCP leases addressing configuration.', 'HTTPS normally uses TCP port 443; DNS commonly uses port 53.', 'NAT translates private and public addressing at a network boundary.'] },
  { domain: 'Troubleshooting', title: 'Diagnose deliberately', points: ['Start by identifying symptoms and scope before changing configuration.', 'ping tests reachability; tracert/traceroute reveals path hops.', 'Check physical connectivity, addressing, DNS, and routing in a logical order.'] },
]
