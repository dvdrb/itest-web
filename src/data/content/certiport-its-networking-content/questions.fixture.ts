import type { PrepQuestion } from "./contentTypes";

export const fixtureQuestions = [
  {
    "id": "ITS-NET-1.1-001",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which term describes the worldwide public network of interconnected networks?",
    "options": [
      {
        "id": "a",
        "text": "extranet"
      },
      {
        "id": "b",
        "text": "peer-to-peer network"
      },
      {
        "id": "c",
        "text": "Internet"
      },
      {
        "id": "d",
        "text": "intranet"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "The Internet is the globally interconnected public network. An intranet is private to an organization; an extranet selectively exposes private resources to approved outsiders.",
    "distractorExplanations": {
      "a": "Incorrect. extranet does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. peer-to-peer network does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. intranet does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-1.2-001",
    "objectiveId": "1.2",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What software layer creates and manages virtual machines by abstracting physical hardware?",
    "options": [
      {
        "id": "a",
        "text": "firewall rule"
      },
      {
        "id": "b",
        "text": "DHCP relay"
      },
      {
        "id": "c",
        "text": "Hypervisor"
      },
      {
        "id": "d",
        "text": "DNS resolver"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A hypervisor provides the virtualization layer that hosts and manages VMs.",
    "distractorExplanations": {
      "a": "Incorrect. firewall rule does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. DHCP relay does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. DNS resolver does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-1.3-001",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which remote-access technology creates an encrypted logical tunnel across an untrusted network?",
    "options": [
      {
        "id": "a",
        "text": "DNS zone"
      },
      {
        "id": "b",
        "text": "VLAN trunk"
      },
      {
        "id": "c",
        "text": "VPN"
      },
      {
        "id": "d",
        "text": "ARP"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A VPN protects remote network traffic by creating a secure tunnel over another network such as the Internet.",
    "distractorExplanations": {
      "a": "Incorrect. DNS zone does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. VLAN trunk does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. ARP does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-1.1-002",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "A company portal is available only to employees on the company network. What is it?",
    "options": [
      {
        "id": "a",
        "text": "A peer-to-peer network"
      },
      {
        "id": "b",
        "text": "An intranet"
      },
      {
        "id": "c",
        "text": "The Internet"
      },
      {
        "id": "d",
        "text": "An extranet"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "An intranet is a private network/service intended for members of one organization.",
    "distractorExplanations": {
      "a": "Incorrect. A peer-to-peer network does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. The Internet does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. An extranet does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-1.1-003",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A supplier is given controlled access to a company ordering portal that is otherwise internal. Which concept best fits?",
    "options": [
      {
        "id": "a",
        "text": "Extranet"
      },
      {
        "id": "b",
        "text": "Internet"
      },
      {
        "id": "c",
        "text": "intranet"
      },
      {
        "id": "d",
        "text": "broadcast"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "An extranet extends selected private organizational resources to trusted external parties.",
    "distractorExplanations": {
      "b": "Incorrect. Internet does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. intranet does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. broadcast does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-1.1-004",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "In which model do dedicated servers provide services to requesting workstations?",
    "options": [
      {
        "id": "a",
        "text": "peer-to-peer"
      },
      {
        "id": "b",
        "text": "broadcast-only"
      },
      {
        "id": "c",
        "text": "ad hoc wireless"
      },
      {
        "id": "d",
        "text": "Client-server"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Client-server uses servers to provide centralized services/resources to clients.",
    "distractorExplanations": {
      "a": "Incorrect. peer-to-peer does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. broadcast-only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. ad hoc wireless does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-1.1-005",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "easy",
    "prompt": "A small workgroup shares files directly between PCs with no dedicated server. Which model is this?",
    "options": [
      {
        "id": "a",
        "text": "extranet"
      },
      {
        "id": "b",
        "text": "multicast"
      },
      {
        "id": "c",
        "text": "Peer-to-peer"
      },
      {
        "id": "d",
        "text": "client-server"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Peer-to-peer systems let endpoints act as peers and directly share resources.",
    "distractorExplanations": {
      "a": "Incorrect. extranet does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. multicast does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. client-server does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-1.1-006",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "One sender transmits one packet stream to exactly one destination host. What transmission type is used?",
    "options": [
      {
        "id": "a",
        "text": "anycast"
      },
      {
        "id": "b",
        "text": "Unicast"
      },
      {
        "id": "c",
        "text": "multicast"
      },
      {
        "id": "d",
        "text": "broadcast"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Unicast is one sender to one specific destination.",
    "distractorExplanations": {
      "a": "Incorrect. anycast does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. multicast does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. broadcast does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-1.1-007",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A video stream is delivered only to hosts that joined a particular group. What transmission type best describes this?",
    "options": [
      {
        "id": "a",
        "text": "Multicast"
      },
      {
        "id": "b",
        "text": "unicast"
      },
      {
        "id": "c",
        "text": "broadcast"
      },
      {
        "id": "d",
        "text": "peer-to-peer"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Multicast is one-to-many delivery to members of a defined group.",
    "distractorExplanations": {
      "b": "Incorrect. unicast does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. broadcast does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. peer-to-peer does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.1-001",
    "objectiveId": "2.1",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "What does a VLAN primarily provide on a switched LAN?",
    "options": [
      {
        "id": "a",
        "text": "DNS recursion"
      },
      {
        "id": "b",
        "text": "Logical Layer 2 segmentation into separate broadcast domains"
      },
      {
        "id": "c",
        "text": "physical fiber conversion"
      },
      {
        "id": "d",
        "text": "automatic Internet encryption"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "VLANs logically segment a switch network; traffic between VLANs normally requires Layer 3 routing.",
    "distractorExplanations": {
      "a": "Incorrect. DNS recursion does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. physical fiber conversion does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. automatic Internet encryption does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.2-001",
    "objectiveId": "2.2",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which broadband technology commonly delivers service over telephone copper pairs?",
    "options": [
      {
        "id": "a",
        "text": "fiber OTDR"
      },
      {
        "id": "b",
        "text": "DSL"
      },
      {
        "id": "c",
        "text": "satellite"
      },
      {
        "id": "d",
        "text": "Bluetooth"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "DSL uses existing telephone copper infrastructure for broadband data.",
    "distractorExplanations": {
      "a": "Incorrect. fiber OTDR does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. satellite does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. Bluetooth does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "2.2",
      "define-characteristics-of-wide-area-networks-(wans)"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.3-001",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which IEEE family defines Wi-Fi wireless LAN standards?",
    "options": [
      {
        "id": "a",
        "text": "802.15.1 only"
      },
      {
        "id": "b",
        "text": "802.11"
      },
      {
        "id": "c",
        "text": "802.3"
      },
      {
        "id": "d",
        "text": "802.1D only"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "IEEE 802.11 is the family of wireless LAN standards used for Wi-Fi.",
    "distractorExplanations": {
      "a": "Incorrect. 802.15.1 only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. 802.3 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. 802.1D only does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.4-001",
    "objectiveId": "2.4",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "In which physical topology do endpoints connect to a central device such as a switch?",
    "options": [
      {
        "id": "a",
        "text": "full mesh"
      },
      {
        "id": "b",
        "text": "Star"
      },
      {
        "id": "c",
        "text": "bus"
      },
      {
        "id": "d",
        "text": "ring"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "A star topology uses a central connection point.",
    "distractorExplanations": {
      "a": "Incorrect. full mesh does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. bus does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. ring does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "2.4",
      "compare-and-contrast-network-topologies-and-access-methods"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.1-002",
    "objectiveId": "2.1",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "easy",
    "prompt": "A public web server is placed in a network separated from the internal LAN by firewall controls. What is this area commonly called?",
    "options": [
      {
        "id": "a",
        "text": "DMZ/perimeter network"
      },
      {
        "id": "b",
        "text": "loopback network"
      },
      {
        "id": "c",
        "text": "broadcast storm"
      },
      {
        "id": "d",
        "text": "peer-to-peer segment"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A DMZ/perimeter network isolates public-facing services from the trusted internal network.",
    "distractorExplanations": {
      "b": "Incorrect. loopback network does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. broadcast storm does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. peer-to-peer segment does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.1-003",
    "objectiveId": "2.1",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which statement about a wired LAN is most accurate?",
    "options": [
      {
        "id": "a",
        "text": "It must use satellite service"
      },
      {
        "id": "b",
        "text": "It cannot use VLANs"
      },
      {
        "id": "c",
        "text": "It always spans multiple cities"
      },
      {
        "id": "d",
        "text": "Endpoints commonly connect using Ethernet cabling and switches"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Wired LANs commonly use Ethernet switches and copper/fiber cabling within a local site.",
    "distractorExplanations": {
      "a": "Incorrect. It must use satellite service does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. It cannot use VLANs does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. It always spans multiple cities does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.1-004",
    "objectiveId": "2.1",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which statement best describes a wireless LAN?",
    "options": [
      {
        "id": "a",
        "text": "It requires coaxial cable to every client"
      },
      {
        "id": "b",
        "text": "It is the same as Bluetooth only"
      },
      {
        "id": "c",
        "text": "It provides LAN connectivity over radio using Wi-Fi/802.11 technologies"
      },
      {
        "id": "d",
        "text": "It is always a WAN"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A WLAN is a local-area network using wireless radio, typically IEEE 802.11 Wi-Fi.",
    "distractorExplanations": {
      "a": "Incorrect. It requires coaxial cable to every client does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. It is the same as Bluetooth only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. It is always a WAN does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.1-005",
    "objectiveId": "2.1",
    "domainId": "2",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO reasons an organization might use VLANs.",
    "options": [
      {
        "id": "a",
        "text": "Eliminate the need for routing between different IP networks"
      },
      {
        "id": "b",
        "text": "Separate broadcast domains logically"
      },
      {
        "id": "c",
        "text": "Segment groups without requiring separate physical switches for every group"
      },
      {
        "id": "d",
        "text": "Increase the speed of light in fiber"
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "explanation": "VLANs support logical segmentation and reduce Layer 2 broadcast scope.",
    "distractorExplanations": {
      "a": "Incorrect for this item. Eliminate the need for routing between different IP networks is not one of the required selections.",
      "d": "Incorrect for this item. Increase the speed of light in fiber is not one of the required selections."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-2.1-006",
    "objectiveId": "2.1",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Traffic from VLAN 10 needs to reach VLAN 20. What function is required?",
    "options": [
      {
        "id": "a",
        "text": "Layer 3 routing/inter-VLAN routing"
      },
      {
        "id": "b",
        "text": "a hub only"
      },
      {
        "id": "c",
        "text": "a toner probe"
      },
      {
        "id": "d",
        "text": "DNS CNAME"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Different VLANs are separate Layer 2 broadcast domains, so Layer 3 forwarding is needed between them.",
    "distractorExplanations": {
      "b": "Incorrect. a hub only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. a toner probe does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. DNS CNAME does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.1-001",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What is the normal role of an access port on a managed switch?",
    "options": [
      {
        "id": "a",
        "text": "Carry traffic for one access VLAN to an endpoint"
      },
      {
        "id": "b",
        "text": "carry every VLAN by default"
      },
      {
        "id": "c",
        "text": "perform DNS resolution"
      },
      {
        "id": "d",
        "text": "measure cable voltage"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "An access port normally places endpoint traffic into one VLAN.",
    "distractorExplanations": {
      "b": "Incorrect. carry every VLAN by default does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. perform DNS resolution does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. measure cable voltage does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.2-001",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What route is automatically known because a router interface is configured in that network and operational?",
    "options": [
      {
        "id": "a",
        "text": "Directly connected route"
      },
      {
        "id": "b",
        "text": "static route entered by an admin"
      },
      {
        "id": "c",
        "text": "dynamic route from a protocol only"
      },
      {
        "id": "d",
        "text": "default route only"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Routers install connected routes for networks attached to active interfaces.",
    "distractorExplanations": {
      "b": "Incorrect. static route entered by an admin does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. dynamic route from a protocol only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. default route only does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.3-001",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which medium is generally immune to electromagnetic interference because it carries light rather than electrical signals?",
    "options": [
      {
        "id": "a",
        "text": "Fiber-optic cable"
      },
      {
        "id": "b",
        "text": "unshielded twisted pair"
      },
      {
        "id": "c",
        "text": "coaxial copper only"
      },
      {
        "id": "d",
        "text": "CAT5 UTP"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Fiber carries optical signals and is resistant to EMI.",
    "distractorExplanations": {
      "b": "Incorrect. unshielded twisted pair does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. coaxial copper only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. CAT5 UTP does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.1-002",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What is the normal role of a trunk port?",
    "options": [
      {
        "id": "a",
        "text": "connect only one untagged endpoint VLAN in all cases"
      },
      {
        "id": "b",
        "text": "act as an OTDR"
      },
      {
        "id": "c",
        "text": "assign DHCP leases"
      },
      {
        "id": "d",
        "text": "Carry traffic for multiple VLANs between network devices"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Trunks transport multiple VLANs, commonly using VLAN tagging.",
    "distractorExplanations": {
      "a": "Incorrect. connect only one untagged endpoint VLAN in all cases does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. act as an OTDR does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. assign DHCP leases does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.1-003",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which switch type allows configuration of features such as VLANs, STP, and port security?",
    "options": [
      {
        "id": "a",
        "text": "passive patch panel"
      },
      {
        "id": "b",
        "text": "cable modem"
      },
      {
        "id": "c",
        "text": "Managed switch"
      },
      {
        "id": "d",
        "text": "unmanaged hub"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Managed switches expose configuration and monitoring capabilities.",
    "distractorExplanations": {
      "a": "Incorrect. passive patch panel does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. cable modem does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. unmanaged hub does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.1-004",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "What does a Layer 2 switch primarily use to forward Ethernet frames?",
    "options": [
      {
        "id": "a",
        "text": "subnet masks only"
      },
      {
        "id": "b",
        "text": "Destination MAC address and MAC table"
      },
      {
        "id": "c",
        "text": "DNS MX records"
      },
      {
        "id": "d",
        "text": "TCP port 3389 only"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Layer 2 switches learn source MAC addresses and forward frames using their MAC/CAM table.",
    "distractorExplanations": {
      "a": "Incorrect. subnet masks only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. DNS MX records does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. TCP port 3389 only does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.1-005",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which feature distinguishes a Layer 3 switch from a purely Layer 2 switch?",
    "options": [
      {
        "id": "a",
        "text": "Ability to perform IP routing between networks/VLANs"
      },
      {
        "id": "b",
        "text": "ability to use Ethernet ports at all"
      },
      {
        "id": "c",
        "text": "ability to learn MAC addresses"
      },
      {
        "id": "d",
        "text": "ability to operate full duplex"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Layer 3 switches add routing functions to switching.",
    "distractorExplanations": {
      "b": "Incorrect. ability to use Ethernet ports at all does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. ability to learn MAC addresses does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. ability to operate full duplex does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.1-006",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Compared with a hub, what is a key benefit of a switch?",
    "options": [
      {
        "id": "a",
        "text": "all ports share one collision domain intentionally"
      },
      {
        "id": "b",
        "text": "switches cannot operate full duplex"
      },
      {
        "id": "c",
        "text": "switches broadcast every unicast frame permanently"
      },
      {
        "id": "d",
        "text": "Each switched port can be its own collision domain"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Switches isolate collision domains per port and support full-duplex Ethernet.",
    "distractorExplanations": {
      "a": "Incorrect. all ports share one collision domain intentionally does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. switches cannot operate full duplex does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. switches broadcast every unicast frame permanently does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-3.1-007",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "What happens to the broadcast domain when several Layer 2 switch ports remain in the same VLAN?",
    "options": [
      {
        "id": "a",
        "text": "broadcasting is impossible"
      },
      {
        "id": "b",
        "text": "the switch becomes a router"
      },
      {
        "id": "c",
        "text": "They remain in the same broadcast domain"
      },
      {
        "id": "d",
        "text": "each port automatically becomes a new IP network"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A VLAN generally defines a Layer 2 broadcast domain.",
    "distractorExplanations": {
      "a": "Incorrect. broadcasting is impossible does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. the switch becomes a router does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. each port automatically becomes a new IP network does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.1-001",
    "objectiveId": "4.1",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which OSI layer is responsible for end-to-end transport functions such as TCP and UDP?",
    "options": [
      {
        "id": "a",
        "text": "Layer 2 — Data Link"
      },
      {
        "id": "b",
        "text": "Layer 3 — Network"
      },
      {
        "id": "c",
        "text": "Layer 7 — Application"
      },
      {
        "id": "d",
        "text": "Layer 4 — Transport"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "TCP and UDP operate at the Transport layer in the OSI model.",
    "distractorExplanations": {
      "a": "Incorrect. Layer 2 — Data Link does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. Layer 3 — Network does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. Layer 7 — Application does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "4.1",
      "describe-the-osi-model"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.2-001",
    "objectiveId": "4.2",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which TCP/IP model layer contains IP?",
    "options": [
      {
        "id": "a",
        "text": "Transport layer"
      },
      {
        "id": "b",
        "text": "Application layer"
      },
      {
        "id": "c",
        "text": "Link layer only"
      },
      {
        "id": "d",
        "text": "Internet layer"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "IP provides internetwork addressing/routing at the Internet layer.",
    "distractorExplanations": {
      "a": "Incorrect. Transport layer does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. Application layer does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. Link layer only does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "4.2",
      "describe-the-tcp/ip-model"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.3-001",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which IPv4 range is private?",
    "options": [
      {
        "id": "a",
        "text": "11.0.0.0/8"
      },
      {
        "id": "b",
        "text": "100.0.0.0/8"
      },
      {
        "id": "c",
        "text": "127.0.0.0/8"
      },
      {
        "id": "d",
        "text": "10.0.0.0/8"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "RFC 1918 defines 10.0.0.0/8 as private. 127.0.0.0/8 is loopback, not an RFC 1918 private block.",
    "distractorExplanations": {
      "a": "Incorrect. 11.0.0.0/8 does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. 100.0.0.0/8 does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. 127.0.0.0/8 does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "4.3",
      "describe-ipv4-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.4-001",
    "objectiveId": "4.4",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "How long is an IPv6 address?",
    "options": [
      {
        "id": "a",
        "text": "32 bits"
      },
      {
        "id": "b",
        "text": "48 bits"
      },
      {
        "id": "c",
        "text": "64 bits"
      },
      {
        "id": "d",
        "text": "128 bits"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "IPv6 addresses are 128 bits long.",
    "distractorExplanations": {
      "a": "Incorrect. 32 bits does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. 48 bits does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. 64 bits does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "4.4",
      "describe-ipv6-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.5-001",
    "objectiveId": "4.5",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct protocol/port mappings.",
    "options": [
      {
        "id": "a",
        "text": "HTTPS — TCP 443"
      },
      {
        "id": "b",
        "text": "DNS — TCP/UDP 3389"
      },
      {
        "id": "c",
        "text": "RDP — TCP 25"
      },
      {
        "id": "d",
        "text": "SSH — TCP 22"
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "explanation": "SSH uses port 22 and HTTPS uses 443. RDP commonly uses 3389; SMTP uses 25; DNS uses 53.",
    "distractorExplanations": {
      "b": "Incorrect for this item. DNS — TCP/UDP 3389 is not one of the required selections.",
      "c": "Incorrect for this item. RDP — TCP 25 is not one of the required selections."
    },
    "tags": [
      "4.5",
      "identify-well-known-ports"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.6-001",
    "objectiveId": "4.6",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct DNS record mappings.",
    "options": [
      {
        "id": "a",
        "text": "AAAA maps a name to an IPv6 address."
      },
      {
        "id": "b",
        "text": "MX performs a reverse pointer lookup to a hostname."
      },
      {
        "id": "c",
        "text": "PTR identifies the authoritative start of a zone."
      },
      {
        "id": "d",
        "text": "A maps a name to an IPv4 address."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "explanation": "A/AAAA provide IPv4/IPv6 address mappings. PTR is used for reverse mappings; SOA contains zone authority metadata.",
    "distractorExplanations": {
      "b": "Incorrect for this item. MX performs a reverse pointer lookup to a hostname. is not one of the required selections.",
      "c": "Incorrect for this item. PTR identifies the authoritative start of a zone. is not one of the required selections."
    },
    "tags": [
      "4.6",
      "describe-name-resolution-concepts"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.7-001",
    "objectiveId": "4.7",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which service automatically provides hosts with IP configuration such as an address, mask, gateway, and DNS servers?",
    "options": [
      {
        "id": "a",
        "text": "DNS only"
      },
      {
        "id": "b",
        "text": "STP"
      },
      {
        "id": "c",
        "text": "FTP"
      },
      {
        "id": "d",
        "text": "DHCP"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "DHCP automates delivery of IP configuration parameters to clients.",
    "distractorExplanations": {
      "a": "Incorrect. DNS only does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. STP does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. FTP does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "4.7",
      "identify-roles-of-networking-services"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.1-002",
    "objectiveId": "4.1",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "At which OSI layer are IP routing and logical IP addressing primarily associated?",
    "options": [
      {
        "id": "a",
        "text": "Layer 2 — Data Link"
      },
      {
        "id": "b",
        "text": "Layer 6 — Presentation"
      },
      {
        "id": "c",
        "text": "Layer 3 — Network"
      },
      {
        "id": "d",
        "text": "Layer 1 — Physical"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "The Network layer handles logical addressing and routing.",
    "distractorExplanations": {
      "a": "Incorrect. Layer 2 — Data Link does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. Layer 6 — Presentation does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. Layer 1 — Physical does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "4.1",
      "describe-the-osi-model"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-4.1-003",
    "objectiveId": "4.1",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "At which OSI layer is a MAC address primarily used for local Ethernet frame delivery?",
    "options": [
      {
        "id": "a",
        "text": "Layer 7 — Application"
      },
      {
        "id": "b",
        "text": "Layer 2 — Data Link"
      },
      {
        "id": "c",
        "text": "Layer 4 — Transport"
      },
      {
        "id": "d",
        "text": "Layer 5 — Session"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "MAC addressing is a Data Link layer concept used for local frame delivery.",
    "distractorExplanations": {
      "a": "Incorrect. Layer 7 — Application does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. Layer 4 — Transport does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. Layer 5 — Session does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "4.1",
      "describe-the-osi-model"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.1-001",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What should normally happen first in a structured troubleshooting process?",
    "options": [
      {
        "id": "a",
        "text": "document the solution before testing"
      },
      {
        "id": "b",
        "text": "escalate without gathering information"
      },
      {
        "id": "c",
        "text": "Identify and clearly define the problem"
      },
      {
        "id": "d",
        "text": "replace several components immediately"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Effective troubleshooting begins by identifying symptoms, scope, recent changes, and the actual problem.",
    "distractorExplanations": {
      "a": "Incorrect. document the solution before testing does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. escalate without gathering information does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. replace several components immediately does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.2-001",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which tool is best for checking basic copper cable pinout/continuity?",
    "options": [
      {
        "id": "a",
        "text": "OTDR"
      },
      {
        "id": "b",
        "text": "DNS resolver"
      },
      {
        "id": "c",
        "text": "Cable tester"
      },
      {
        "id": "d",
        "text": "toner only"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A cable tester can verify continuity and wiring/pair mapping.",
    "distractorExplanations": {
      "a": "Incorrect. OTDR does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. DNS resolver does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. toner only does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.2",
      "use-appropriate-hardware-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.3-001",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Windows command displays detailed local TCP/IP configuration?",
    "options": [
      {
        "id": "a",
        "text": "arp -a"
      },
      {
        "id": "b",
        "text": "tracert"
      },
      {
        "id": "c",
        "text": "ipconfig /all"
      },
      {
        "id": "d",
        "text": "hostname"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "ipconfig /all shows addresses, masks, gateways, DNS settings, DHCP information, and adapter details.",
    "distractorExplanations": {
      "a": "Incorrect. arp -a does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. tracert does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. hostname does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.4-001",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Linux command shows interface IP addresses using the modern iproute2 toolset?",
    "options": [
      {
        "id": "a",
        "text": "host"
      },
      {
        "id": "b",
        "text": "arp only"
      },
      {
        "id": "c",
        "text": "ip addr"
      },
      {
        "id": "d",
        "text": "dig"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "ip addr displays and manages protocol addresses on interfaces.",
    "distractorExplanations": {
      "a": "Incorrect. host does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. arp only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. dig does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.1-002",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "After forming a probable cause, what is the next logical troubleshooting action?",
    "options": [
      {
        "id": "a",
        "text": "erase all logs"
      },
      {
        "id": "b",
        "text": "Test the theory to determine whether it explains the problem"
      },
      {
        "id": "c",
        "text": "close the ticket immediately"
      },
      {
        "id": "d",
        "text": "change unrelated settings"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "A theory should be tested before implementing a broader fix.",
    "distractorExplanations": {
      "a": "Incorrect. erase all logs does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. close the ticket immediately does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. change unrelated settings does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.1-003",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "A theory is confirmed. What should happen before making a risky production change?",
    "options": [
      {
        "id": "a",
        "text": "Establish a plan of action and consider potential effects"
      },
      {
        "id": "b",
        "text": "skip planning because the cause is known"
      },
      {
        "id": "c",
        "text": "delete documentation"
      },
      {
        "id": "d",
        "text": "replace every network device"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Plan the solution and account for impact before implementation.",
    "distractorExplanations": {
      "b": "Incorrect. skip planning because the cause is known does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. delete documentation does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. replace every network device does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.1-004",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "After implementing a fix, what step is essential?",
    "options": [
      {
        "id": "a",
        "text": "assume success if no error appears immediately"
      },
      {
        "id": "b",
        "text": "clear all evidence before testing"
      },
      {
        "id": "c",
        "text": "disable monitoring"
      },
      {
        "id": "d",
        "text": "Verify full functionality and confirm the issue is resolved"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Always verify the solution and, where appropriate, preventive measures.",
    "distractorExplanations": {
      "a": "Incorrect. assume success if no error appears immediately does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. clear all evidence before testing does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. disable monitoring does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.1-005",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Why document findings, actions, and outcomes after resolving a problem?",
    "options": [
      {
        "id": "a",
        "text": "it replaces backups"
      },
      {
        "id": "b",
        "text": "it prevents every future outage"
      },
      {
        "id": "c",
        "text": "It preserves knowledge and supports future troubleshooting/auditability"
      },
      {
        "id": "d",
        "text": "it makes IP addresses private"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Documentation records what happened, what changed, and what resolved the issue.",
    "distractorExplanations": {
      "a": "Incorrect. it replaces backups does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. it prevents every future outage does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. it makes IP addresses private does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  },
  {
    "id": "ITS-NET-5.1-006",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A user is frustrated during an outage. Which behavior best demonstrates professional troubleshooting etiquette?",
    "options": [
      {
        "id": "a",
        "text": "share private credentials for convenience"
      },
      {
        "id": "b",
        "text": "Communicate clearly, avoid blame, set realistic expectations, and protect confidential information"
      },
      {
        "id": "c",
        "text": "argue about who caused it"
      },
      {
        "id": "d",
        "text": "make promises you cannot keep"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Professional conduct includes respectful communication, confidentiality, and realistic updates.",
    "distractorExplanations": {
      "a": "Incorrect. share private credentials for convenience does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. argue about who caused it does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. make promises you cannot keep does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  }
] satisfies PrepQuestion[];
