import type { StudyNote } from "../contentTypes";
export const objective3_2 = {
  "objectiveId": "3.2",
  "title": "Describe characteristics of routers",
  "whatToKnow": [
    "Routers forward IP packets between networks and can become bottlenecks if processing/interface capacity is lower than offered traffic.",
    "Directly connected route: created because an active router interface is configured in that network. Static route: manually configured. Dynamic route: learned through a routing protocol.",
    "Default route is the least-specific fallback, IPv4 0.0.0.0/0, used when no more-specific route matches.",
    "Route forwarding uses longest-prefix match: among matching routes, the route with the most specific prefix length wins.",
    "Routing protocols exchange reachability and respond to topology changes. Convergence is the period/process until participating routers reach a stable view after a change.",
    "Port forwarding maps traffic arriving at a public address/port toward a specific internal host/service.",
    "QoS classifies/prioritizes/manages traffic, often protecting delay-sensitive applications such as voice during congestion.",
    "Network segmentation separates networks/subnets so Layer 3 policy/routing controls how traffic crosses between them.",
    "Supplemental route-selection nuance: if multiple routes to the same prefix are candidates, routing-protocol preference and metrics determine which routes are installed; forwarding still applies longest-prefix match to the installed table."
  ],
  "memorize": [
    "Connected = active local interface network.",
    "Static = manually configured.",
    "Dynamic = learned via routing protocol.",
    "Default IPv4 route = 0.0.0.0/0.",
    "Longest prefix match wins forwarding decision.",
    "Port forwarding = public port → internal service.",
    "QoS = prioritize/manage traffic under contention.",
    "Convergence = routing becomes stable after a topology change."
  ],
  "howItWorks": [
    "To solve a routing-table question, list every route containing the destination, compare prefix lengths, and choose the longest prefix. Use default only if nothing more specific matches.",
    "A router can segment broadcast domains because it does not normally forward Layer 2 broadcasts between interfaces.",
    "If all Internet traffic passes through one underpowered router/interface, it can be the throughput bottleneck even when LAN switches are fast."
  ],
  "examTraps": [
    "Do not choose the default route when a more-specific route matches.",
    "Do not confuse static route with static NAT; one controls path selection, the other address translation.",
    "QoS does not create bandwidth; it decides how traffic is treated when resources are constrained.",
    "Port forwarding is not the same as opening all firewall traffic; firewall policy may still need to allow the connection."
  ],
  "quickCheck": [
    {
      "question": "Routes /8, /16, and /24 all match. Which wins?",
      "answer": "/24, the longest/most-specific prefix."
    },
    {
      "question": "What route exists because an interface is up in that network?",
      "answer": "Directly connected route."
    },
    {
      "question": "What is 0.0.0.0/0?",
      "answer": "The IPv4 default route."
    },
    {
      "question": "What does convergence mean?",
      "answer": "Routers reach a stable consistent set of usable paths after change."
    },
    {
      "question": "What feature maps a public TCP port to an internal server?",
      "answer": "Port forwarding."
    },
    {
      "question": "Why use QoS?",
      "answer": "To classify/prioritize/manage traffic, especially under congestion."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "Cisco - IP routing and longest-prefix concepts",
      "url": "https://www.cisco.com/c/en/us/support/docs/ip/ip-routing/200711-Understanding-Route-Selection-in-Cisco-I.html"
    },
    {
      "label": "Cisco - Configure Inter-VLAN Routing with Catalyst Switches",
      "url": "https://www.cisco.com/c/en/us/support/docs/lan-switching/inter-vlan-routing/41260-189.html"
    }
  ]
} satisfies StudyNote;
