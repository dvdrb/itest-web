import type { StudyNote } from "../contentTypes";
export const objective3_1 = {
  "objectiveId": "3.1",
  "title": "Describe characteristics of switches",
  "whatToKnow": [
    "Access ports normally carry traffic for one VLAN toward an endpoint. Trunk ports carry traffic for multiple VLANs between network devices, commonly using VLAN tags.",
    "Managed switches expose configuration/monitoring features such as VLANs, STP, port security, management access, and diagnostics; unmanaged switches provide basic switching with little/no configuration.",
    "Physical port count and port types constrain how many devices can connect directly to a switch. For example, a 24-port access switch cannot directly attach more than 24 single-link Ethernet endpoints unless ports are also consumed by uplinks/trunks; additional switches can expand total network capacity.",
    "Layer 2 switches forward Ethernet frames using destination MAC addresses and a MAC/CAM table. They learn source MAC addresses on ingress ports.",
    "If the destination MAC is known, the switch forwards only toward the associated port (subject to VLAN/forwarding state). Unknown unicast is normally flooded within the VLAN except back out the ingress port.",
    "Broadcast frames are flooded within their VLAN/broadcast domain. A VLAN separates Layer 2 broadcast domains.",
    "A Layer 3 switch can also perform routing between IP networks/VLANs.",
    "A hub repeats incoming bits to all other ports; all hub-connected nodes share the collision domain and historically use half duplex. A switch gives each port its own collision domain and supports full duplex.",
    "Full duplex allows simultaneous send/receive and does not use Ethernet CSMA/CD; half-duplex shared Ethernet can experience collisions.",
    "Spanning Tree Protocol (STP) prevents Layer 2 switching loops by creating a loop-free active topology and blocking redundant paths as needed.",
    "Switching types: store-and-forward receives the whole frame and can verify FCS before forwarding; cut-through starts forwarding after reading enough of the header, reducing latency but potentially forwarding errored frames.",
    "A single central switch can be a single point of failure if all attached devices depend on it."
  ],
  "memorize": [
    "Access = one VLAN toward endpoint; trunk = multiple VLANs between network devices.",
    "Switch learns SOURCE MAC; forwards based on DESTINATION MAC.",
    "Unknown unicast/broadcast → flood within VLAN (not to other VLANs).",
    "Each switch port = separate collision domain; one VLAN = one broadcast domain.",
    "STP = prevent Layer 2 loops/broadcast storms.",
    "Store-and-forward = entire frame/FCS first; cut-through = earlier forwarding/lower latency.",
    "Layer 2 switch = MAC forwarding; Layer 3 switch = can route IP."
  ],
  "howItWorks": [
    "When a frame enters a switch, learn/update the source MAC-to-port mapping first; then look up the destination MAC to choose a forwarding action.",
    "If a MAC appears to move rapidly between ports while broadcast traffic explodes, suspect a Layer 2 loop before blaming IP routing.",
    "A trunk does not automatically route VLANs; it transports VLAN traffic. Routing still requires Layer 3."
  ],
  "examTraps": [
    "Do not say a switch eliminates broadcast domains: a Layer 2 switch extends broadcasts within a VLAN; VLANs/routing divide broadcast domains.",
    "Do not say a trunk means “faster port”; trunk refers to carrying multiple VLANs.",
    "Do not confuse MAC table with ARP table. MAC table maps MAC→switch port; ARP maps IPv4→MAC on a host/router.",
    "STP may intentionally block a redundant link; blocked does not necessarily mean failed.",
    "Full duplex means no collisions on that point-to-point Ethernet link."
  ],
  "quickCheck": [
    {
      "question": "What address does an L2 switch learn from an incoming frame?",
      "answer": "The source MAC address."
    },
    {
      "question": "What does it use to choose an outgoing port?",
      "answer": "The destination MAC address and MAC table."
    },
    {
      "question": "Destination MAC is unknown. Normal action?",
      "answer": "Flood the frame within that VLAN except the ingress port."
    },
    {
      "question": "What carries multiple VLANs between switches?",
      "answer": "A trunk port/link."
    },
    {
      "question": "What prevents redundant L2 links from forming forwarding loops?",
      "answer": "STP."
    },
    {
      "question": "Difference between hub and switch collision domains?",
      "answer": "Hub ports share one collision domain; each switch port is a separate collision domain."
    },
    {
      "question": "Store-and-forward versus cut-through?",
      "answer": "Store-and-forward receives/checks whole frame; cut-through starts forwarding earlier."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "Cisco - VLAN concepts",
      "url": "https://www.cisco.com/c/en/us/support/docs/wireless/aironet-1100-series/46141-vlanswireless.html"
    },
    {
      "label": "Cisco - MAC address table management",
      "url": "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/15-2_1_e/configuration/guide/2960_scg/swadmin.html"
    },
    {
      "label": "Cisco - Spanning Tree Protocol documentation",
      "url": "https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/5234-5.html"
    }
  ]
} satisfies StudyNote;
