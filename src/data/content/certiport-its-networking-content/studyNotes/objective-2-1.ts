import type { StudyNote } from "../contentTypes";
export const objective2_1 = {
  "objectiveId": "2.1",
  "title": "Define the characteristics of local area networks (LANs)",
  "whatToKnow": [
    "A LAN covers a limited local area such as a room, office, building, or campus segment and commonly uses Ethernet and/or Wi-Fi.",
    "A VLAN is a logical Layer 2 segmentation mechanism: hosts in different VLANs are in different broadcast domains even when connected to the same physical switch infrastructure.",
    "Inter-VLAN communication requires Layer 3 routing through a router or Layer 3 switch.",
    "A perimeter network/DMZ is a security zone for systems that must be reachable from less-trusted networks while remaining separated from the internal trusted LAN.",
    "Security zones group interfaces/systems by trust level so firewall policy can control traffic between zones.",
    "Wired LAN uses physical Ethernet media; wireless LAN uses 802.11 radio through access points or other wireless modes.",
    "VLANs improve segmentation and policy organization but are not a substitute for firewall policy where security enforcement is required."
  ],
  "memorize": [
    "VLAN = logical broadcast-domain segmentation.",
    "Different VLANs require routing to communicate.",
    "DMZ/perimeter network = isolated zone for exposed services between trust boundaries.",
    "LAN = local scope; wired LAN = Ethernet cabling; WLAN = wireless 802.11."
  ],
  "howItWorks": [
    "A switch can carry multiple VLANs over its infrastructure while keeping their Layer 2 broadcasts separated.",
    "A web server that must accept Internet traffic is safer in a DMZ with explicit firewall paths than directly on the trusted user LAN.",
    "Layer 3 interfaces/default gateways provide the path between VLAN subnets when permitted by policy."
  ],
  "examTraps": [
    "A VLAN is not the same thing as a subnet, although designs commonly map one IP subnet to one VLAN.",
    "A DMZ does not mean “no firewall”; its value comes from controlled policy between Internet, DMZ, and internal zones.",
    "Wireless LAN is still a LAN; the access medium differs."
  ],
  "quickCheck": [
    {
      "question": "Can devices in VLAN 10 and VLAN 20 communicate at Layer 2 without routing?",
      "answer": "No. They are separate broadcast domains; Layer 3 routing is needed."
    },
    {
      "question": "Where should an Internet-facing web server commonly be placed?",
      "answer": "In a DMZ/perimeter security zone with controlled firewall access."
    },
    {
      "question": "What does a VLAN separate?",
      "answer": "Layer 2 broadcast domains/logical groups."
    },
    {
      "question": "Is Wi-Fi a WAN because it is wireless?",
      "answer": "No. Wi-Fi is commonly used to build a wireless LAN."
    },
    {
      "question": "What device/function enables inter-VLAN communication?",
      "answer": "A router or Layer 3 switch/routing function."
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
      "label": "Cisco - Configure Inter-VLAN Routing with Catalyst Switches",
      "url": "https://www.cisco.com/c/en/us/support/docs/lan-switching/inter-vlan-routing/41260-189.html"
    }
  ]
} satisfies StudyNote;
