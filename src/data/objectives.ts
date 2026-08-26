import type { Objective } from '../types/exam'

export const objectives: Objective[] = [
  { id: 'NF-1', domain: 'Networking Fundamentals', title: 'Network concepts and transmission types' },
  { id: 'NF-2', domain: 'Networking Fundamentals', title: 'Cloud, virtualization, and remote access' },
  { id: 'NF-3', domain: 'Networking Fundamentals', title: 'Network models and addressing concepts' },
  { id: 'NI-1', domain: 'Network Infrastructures', title: 'LAN, WAN, and wireless characteristics' },
  { id: 'NI-2', domain: 'Network Infrastructures', title: 'Topologies, VLANs, and access methods' },
  { id: 'NI-3', domain: 'Network Infrastructures', title: 'IP addressing and subnetting' },
  { id: 'NH-1', domain: 'Network Hardware', title: 'Network devices and their roles' },
  { id: 'NH-2', domain: 'Network Hardware', title: 'Media, cabling, and interfaces' },
  { id: 'NH-3', domain: 'Network Hardware', title: 'Wireless and physical infrastructure' },
  { id: 'PS-1', domain: 'Protocols & Services', title: 'TCP/IP protocol suite and common ports' },
  { id: 'PS-2', domain: 'Protocols & Services', title: 'Network services and name resolution' },
  { id: 'PS-3', domain: 'Protocols & Services', title: 'Routing, switching, and secure services' },
  { id: 'TS-1', domain: 'Troubleshooting', title: 'Troubleshooting methodology and tools' },
  { id: 'TS-2', domain: 'Troubleshooting', title: 'Wired and wireless fault isolation' },
  { id: 'TS-3', domain: 'Troubleshooting', title: 'Command output and connectivity diagnosis' },
]

export const objectiveById = Object.fromEntries(objectives.map((objective) => [objective.id, objective]))
