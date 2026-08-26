import type { PrepQuestion } from "./contentTypes";

export const productionQuestions = [
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
    "id": "ITS-NET-1.1-008",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "A frame is intended for every device in the local broadcast domain. What transmission type is this?",
    "options": [
      {
        "id": "a",
        "text": "unicast"
      },
      {
        "id": "b",
        "text": "multicast"
      },
      {
        "id": "c",
        "text": "client-server"
      },
      {
        "id": "d",
        "text": "Broadcast"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Broadcast is one-to-all within the applicable broadcast domain.",
    "distractorExplanations": {
      "a": "Incorrect. unicast does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. multicast does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. client-server does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.1-009",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO statements that correctly contrast client-server and peer-to-peer networking.",
    "options": [
      {
        "id": "a",
        "text": "Peer-to-peer always requires a domain controller."
      },
      {
        "id": "b",
        "text": "Client-server means broadcasts are impossible."
      },
      {
        "id": "c",
        "text": "Client-server commonly centralizes services on dedicated servers."
      },
      {
        "id": "d",
        "text": "Peer-to-peer can allow endpoints to share resources directly."
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "explanation": "Client-server centralizes services; peer-to-peer allows direct sharing among peers. The other statements are false.",
    "distractorExplanations": {
      "a": "Incorrect for this item. Peer-to-peer always requires a domain controller. is not one of the required selections.",
      "b": "Incorrect for this item. Client-server means broadcasts are impossible. is not one of the required selections."
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
    "id": "ITS-NET-1.1-010",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "easy",
    "prompt": "A smart thermostat joins the IP network and reports telemetry to a cloud service. Which exam-scope category best describes it?",
    "options": [
      {
        "id": "a",
        "text": "a DNS resource record"
      },
      {
        "id": "b",
        "text": "An IoT network device"
      },
      {
        "id": "c",
        "text": "a Layer 3 routing protocol"
      },
      {
        "id": "d",
        "text": "a cable tester"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Internet of Things devices are network-connected embedded devices such as sensors, thermostats, cameras, and appliances.",
    "distractorExplanations": {
      "a": "Incorrect. a DNS resource record does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. a Layer 3 routing protocol does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. a cable tester does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.1-011",
    "objectiveId": "1.1",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which device is primarily used to connect different IP networks and forward packets between them?",
    "options": [
      {
        "id": "a",
        "text": "Router"
      },
      {
        "id": "b",
        "text": "hub"
      },
      {
        "id": "c",
        "text": "Layer 1 repeater"
      },
      {
        "id": "d",
        "text": "patch panel"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A router makes Layer 3 forwarding decisions between networks.",
    "distractorExplanations": {
      "b": "Incorrect. hub does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. Layer 1 repeater does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. patch panel does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.2-002",
    "objectiveId": "1.2",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What is a virtual machine?",
    "options": [
      {
        "id": "a",
        "text": "A VPN tunnel only"
      },
      {
        "id": "b",
        "text": "A software-defined computer with virtualized CPU, memory, storage, and networking"
      },
      {
        "id": "c",
        "text": "A physical switch with VLANs"
      },
      {
        "id": "d",
        "text": "A DNS alias"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "A VM behaves like an independent computer while its hardware resources are virtualized.",
    "distractorExplanations": {
      "a": "Incorrect. A VPN tunnel only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. A physical switch with VLANs does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. A DNS alias does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.2-003",
    "objectiveId": "1.2",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Several VMs on one physical server need Layer 2 connectivity to each other. Which component provides this in software?",
    "options": [
      {
        "id": "a",
        "text": "Virtual switch"
      },
      {
        "id": "b",
        "text": "default gateway only"
      },
      {
        "id": "c",
        "text": "TDR"
      },
      {
        "id": "d",
        "text": "WINS server"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A virtual switch provides software-based Ethernet switching for virtual NICs.",
    "distractorExplanations": {
      "b": "Incorrect. default gateway only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. TDR does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. WINS server does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.2-004",
    "objectiveId": "1.2",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which statement best describes a Type 1 hypervisor?",
    "options": [
      {
        "id": "a",
        "text": "It is only a DNS service"
      },
      {
        "id": "b",
        "text": "It is a virtual NIC driver inside one VM"
      },
      {
        "id": "c",
        "text": "It requires a peer-to-peer workgroup"
      },
      {
        "id": "d",
        "text": "It runs directly on host hardware rather than on top of a general-purpose host OS"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "A Type 1 (bare-metal) hypervisor runs directly on the physical host.",
    "distractorExplanations": {
      "a": "Incorrect. It is only a DNS service does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. It is a virtual NIC driver inside one VM does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. It requires a peer-to-peer workgroup does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.2-005",
    "objectiveId": "1.2",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "easy",
    "prompt": "A host runs multiple isolated guest operating systems at the same time. Which technology enables this?",
    "options": [
      {
        "id": "a",
        "text": "broadcasting"
      },
      {
        "id": "b",
        "text": "cable toning"
      },
      {
        "id": "c",
        "text": "Virtualization"
      },
      {
        "id": "d",
        "text": "NAT only"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Virtualization lets one physical system host multiple isolated virtual machines.",
    "distractorExplanations": {
      "a": "Incorrect. broadcasting does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. cable toning does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. NAT only does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.2-006",
    "objectiveId": "1.2",
    "domainId": "1",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO benefits commonly associated with server virtualization.",
    "options": [
      {
        "id": "a",
        "text": "It guarantees zero hardware failures"
      },
      {
        "id": "b",
        "text": "Better utilization of physical hardware"
      },
      {
        "id": "c",
        "text": "Isolation between separate virtual machines"
      },
      {
        "id": "d",
        "text": "It removes the need for IP addressing"
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "explanation": "Virtualization can consolidate workloads and isolate guests; it does not eliminate networking or hardware risk.",
    "distractorExplanations": {
      "a": "Incorrect for this item. It guarantees zero hardware failures is not one of the required selections.",
      "d": "Incorrect for this item. It removes the need for IP addressing is not one of the required selections."
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
    "id": "ITS-NET-1.2-007",
    "objectiveId": "1.2",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "A VM has a virtual NIC connected to a virtual switch. What does the virtual switch most closely emulate?",
    "options": [
      {
        "id": "a",
        "text": "An Ethernet switch"
      },
      {
        "id": "b",
        "text": "a fiber OTDR"
      },
      {
        "id": "c",
        "text": "a DNS MX record"
      },
      {
        "id": "d",
        "text": "a cellular modem"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A virtual switch forwards Ethernet frames among virtual/physical interfaces similarly to a physical switch.",
    "distractorExplanations": {
      "b": "Incorrect. a fiber OTDR does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. a DNS MX record does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. a cellular modem does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.2-008",
    "objectiveId": "1.2",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "If a physical virtualization host fails, several VMs on that host become unavailable. What concept does this illustrate?",
    "options": [
      {
        "id": "a",
        "text": "multicast optimization"
      },
      {
        "id": "b",
        "text": "DNS recursion"
      },
      {
        "id": "c",
        "text": "full-duplex Ethernet"
      },
      {
        "id": "d",
        "text": "A potential single point of failure"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Consolidating workloads on one host can increase the impact of a host failure unless redundancy exists.",
    "distractorExplanations": {
      "a": "Incorrect. multicast optimization does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. DNS recursion does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. full-duplex Ethernet does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.3-002",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which technology lets a user interact with the graphical desktop of a remote Windows computer?",
    "options": [
      {
        "id": "a",
        "text": "PAT"
      },
      {
        "id": "b",
        "text": "Remote Desktop"
      },
      {
        "id": "c",
        "text": "TDR"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Remote Desktop provides interactive remote access to a Windows desktop/session.",
    "distractorExplanations": {
      "a": "Incorrect. PAT does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. TDR does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. SMTP does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.3-003",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "An employee at home needs secure access to internal company resources over the Internet. Which solution is most appropriate?",
    "options": [
      {
        "id": "a",
        "text": "Remote-access VPN"
      },
      {
        "id": "b",
        "text": "broadcast Ethernet"
      },
      {
        "id": "c",
        "text": "crossover cable"
      },
      {
        "id": "d",
        "text": "WINS only"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A remote-access VPN securely connects an individual remote endpoint to the private network.",
    "distractorExplanations": {
      "b": "Incorrect. broadcast Ethernet does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. crossover cable does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. WINS only does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.3-004",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Two branch offices need an encrypted always-on connection between their networks across the Internet. Which method is most appropriate?",
    "options": [
      {
        "id": "a",
        "text": "RDP to every workstation"
      },
      {
        "id": "b",
        "text": "ad hoc Wi-Fi"
      },
      {
        "id": "c",
        "text": "local loopback"
      },
      {
        "id": "d",
        "text": "Site-to-site VPN"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Site-to-site VPNs connect networks through their gateways.",
    "distractorExplanations": {
      "a": "Incorrect. RDP to every workstation does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. ad hoc Wi-Fi does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. local loopback does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.3-005",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What is the default TCP port commonly associated with Microsoft Remote Desktop Protocol?",
    "options": [
      {
        "id": "a",
        "text": "53"
      },
      {
        "id": "b",
        "text": "443"
      },
      {
        "id": "c",
        "text": "3389"
      },
      {
        "id": "d",
        "text": "22"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "RDP commonly listens on TCP 3389 by default.",
    "distractorExplanations": {
      "a": "Incorrect. 53 does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. 443 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. 22 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.3-006",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Why is a VPN useful on an untrusted public network?",
    "options": [
      {
        "id": "a",
        "text": "It replaces every router"
      },
      {
        "id": "b",
        "text": "It can provide confidentiality and integrity for tunneled traffic"
      },
      {
        "id": "c",
        "text": "It converts every private address into IPv6"
      },
      {
        "id": "d",
        "text": "It prevents all malware automatically"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "VPNs are used to protect data in transit across untrusted networks.",
    "distractorExplanations": {
      "a": "Incorrect. It replaces every router does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. It converts every private address into IPv6 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. It prevents all malware automatically does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.3-007",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "easy",
    "prompt": "A support technician needs to see and control a user’s Windows desktop remotely. Which method best matches the requirement?",
    "options": [
      {
        "id": "a",
        "text": "Remote Desktop"
      },
      {
        "id": "b",
        "text": "site-to-site VPN only"
      },
      {
        "id": "c",
        "text": "DNS reverse lookup"
      },
      {
        "id": "d",
        "text": "Bluetooth PAN"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Remote Desktop is designed for interactive remote graphical control.",
    "distractorExplanations": {
      "b": "Incorrect. site-to-site VPN only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. DNS reverse lookup does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. Bluetooth PAN does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.3-008",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO accurate statements about VPN and Remote Desktop.",
    "options": [
      {
        "id": "a",
        "text": "Remote Desktop provides an interactive remote desktop session."
      },
      {
        "id": "b",
        "text": "RDP is a cable-testing protocol."
      },
      {
        "id": "c",
        "text": "A VPN is the same thing as a VLAN trunk."
      },
      {
        "id": "d",
        "text": "A VPN can provide network-level access to remote private resources."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "explanation": "VPN and RDP solve different remote-access problems: network connectivity versus interactive desktop access.",
    "distractorExplanations": {
      "b": "Incorrect for this item. RDP is a cable-testing protocol. is not one of the required selections.",
      "c": "Incorrect for this item. A VPN is the same thing as a VLAN trunk. is not one of the required selections."
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
    "id": "ITS-NET-1.3-009",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "A user establishes a VPN successfully but still cannot log in to a particular Windows server desktop. What should you conclude first?",
    "options": [
      {
        "id": "a",
        "text": "The server must be using IPv6"
      },
      {
        "id": "b",
        "text": "The cable tester is faulty"
      },
      {
        "id": "c",
        "text": "VPN connectivity and Remote Desktop availability are separate issues"
      },
      {
        "id": "d",
        "text": "The VPN proves RDP must work"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A working VPN provides network reachability, but RDP may still be disabled, blocked, or misconfigured.",
    "distractorExplanations": {
      "a": "Incorrect. The server must be using IPv6 does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. The cable tester is faulty does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. The VPN proves RDP must work does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-1.3-010",
    "objectiveId": "1.3",
    "domainId": "1",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which remote access option typically exposes a desktop/session rather than the entire remote network?",
    "options": [
      {
        "id": "a",
        "text": "NAT pool"
      },
      {
        "id": "b",
        "text": "Remote Desktop"
      },
      {
        "id": "c",
        "text": "site-to-site VPN"
      },
      {
        "id": "d",
        "text": "DHCP"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "RDP provides access to a remote Windows session; a VPN provides network connectivity.",
    "distractorExplanations": {
      "a": "Incorrect. NAT pool does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. site-to-site VPN does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. DHCP does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.1-007",
    "objectiveId": "2.1",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Why place an Internet-facing service in a DMZ rather than directly inside the trusted LAN?",
    "options": [
      {
        "id": "a",
        "text": "To make DNS unnecessary"
      },
      {
        "id": "b",
        "text": "To create a loopback address"
      },
      {
        "id": "c",
        "text": "To force half-duplex"
      },
      {
        "id": "d",
        "text": "To reduce exposure of the trusted internal network if the public service is compromised"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "A DMZ creates a controlled security zone between untrusted and trusted networks.",
    "distractorExplanations": {
      "a": "Incorrect. To make DNS unnecessary does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. To create a loopback address does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. To force half-duplex does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.1-008",
    "objectiveId": "2.1",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which network scope best describes devices connected within one office building using local Ethernet and Wi-Fi?",
    "options": [
      {
        "id": "a",
        "text": "Internet backbone"
      },
      {
        "id": "b",
        "text": "site-to-site VPN itself"
      },
      {
        "id": "c",
        "text": "LAN"
      },
      {
        "id": "d",
        "text": "WAN"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A LAN serves a limited local geographic area such as a building or campus segment.",
    "distractorExplanations": {
      "a": "Incorrect. Internet backbone does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. site-to-site VPN itself does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. WAN does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.2-002",
    "objectiveId": "2.2",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which WAN access method typically uses a provider coaxial cable network and a cable modem?",
    "options": [
      {
        "id": "a",
        "text": "Cable broadband"
      },
      {
        "id": "b",
        "text": "DSL only"
      },
      {
        "id": "c",
        "text": "Bluetooth"
      },
      {
        "id": "d",
        "text": "ad hoc Wi-Fi"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Cable Internet service commonly uses coaxial access and a cable modem.",
    "distractorExplanations": {
      "b": "Incorrect. DSL only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. Bluetooth does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. ad hoc Wi-Fi does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.2-003",
    "objectiveId": "2.2",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A rural site has no practical wired provider service but has a clear view of the sky. Which WAN option may be appropriate?",
    "options": [
      {
        "id": "a",
        "text": "VLAN trunk"
      },
      {
        "id": "b",
        "text": "loopback"
      },
      {
        "id": "c",
        "text": "Ethernet hub"
      },
      {
        "id": "d",
        "text": "Satellite"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Satellite can provide WAN connectivity where terrestrial infrastructure is limited.",
    "distractorExplanations": {
      "a": "Incorrect. VLAN trunk does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. loopback does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. Ethernet hub does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.2-004",
    "objectiveId": "2.2",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which technologies are generations of cellular mobile networking?",
    "options": [
      {
        "id": "a",
        "text": "FTP, SMTP, and DNS"
      },
      {
        "id": "b",
        "text": "CAT5, CAT6, and CAT7"
      },
      {
        "id": "c",
        "text": "3G, 4G, and 5G"
      },
      {
        "id": "d",
        "text": "802.3, 802.1Q, and STP"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "3G, 4G, and 5G are cellular network generations.",
    "distractorExplanations": {
      "a": "Incorrect. FTP, SMTP, and DNS does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. CAT5, CAT6, and CAT7 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. 802.3, 802.1Q, and STP does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.2-005",
    "objectiveId": "2.2",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Two offices exchange private traffic through a persistent tunnel over their Internet links. Which WAN concept best describes the arrangement?",
    "options": [
      {
        "id": "a",
        "text": "an access VLAN"
      },
      {
        "id": "b",
        "text": "Site-to-site connectivity/VPN"
      },
      {
        "id": "c",
        "text": "peer-to-peer file sharing only"
      },
      {
        "id": "d",
        "text": "a local broadcast"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Site-to-site connections link separate networks across a WAN, often using VPN tunneling over the Internet.",
    "distractorExplanations": {
      "a": "Incorrect. an access VLAN does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. peer-to-peer file sharing only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. a local broadcast does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.2-006",
    "objectiveId": "2.2",
    "domainId": "2",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO WAN access methods that can work without a wired last-mile cable to the customer premises.",
    "options": [
      {
        "id": "a",
        "text": "Satellite"
      },
      {
        "id": "b",
        "text": "Cellular"
      },
      {
        "id": "c",
        "text": "DSL"
      },
      {
        "id": "d",
        "text": "Cable modem"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "Satellite and cellular use radio links for the access path; DSL and cable rely on wired provider infrastructure.",
    "distractorExplanations": {
      "c": "Incorrect for this item. DSL is not one of the required selections.",
      "d": "Incorrect for this item. Cable modem is not one of the required selections."
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
    "id": "ITS-NET-2.3-002",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which technology is designed primarily for short-range personal-area connections such as headsets and peripherals?",
    "options": [
      {
        "id": "a",
        "text": "Bluetooth"
      },
      {
        "id": "b",
        "text": "DSL"
      },
      {
        "id": "c",
        "text": "RDP"
      },
      {
        "id": "d",
        "text": "TDR"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Bluetooth is a short-range wireless personal-area networking technology.",
    "distractorExplanations": {
      "b": "Incorrect. DSL does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. RDP does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. TDR does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.3-003",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which legacy wireless security option is considered weak and should not be chosen for a modern WLAN?",
    "options": [
      {
        "id": "a",
        "text": "WPA2"
      },
      {
        "id": "b",
        "text": "802.1X authentication"
      },
      {
        "id": "c",
        "text": "modern AES-based protection"
      },
      {
        "id": "d",
        "text": "WEP"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "WEP has serious cryptographic weaknesses and is obsolete for secure WLANs.",
    "distractorExplanations": {
      "a": "Incorrect. WPA2 does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. 802.1X authentication does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. modern AES-based protection does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.3-004",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which WLAN security generation generally improved on original WPA and is commonly associated with AES/CCMP?",
    "options": [
      {
        "id": "a",
        "text": "ARP"
      },
      {
        "id": "b",
        "text": "RDP"
      },
      {
        "id": "c",
        "text": "WPA2"
      },
      {
        "id": "d",
        "text": "WEP"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "WPA2 improved WLAN security and is commonly associated with AES-CCMP.",
    "distractorExplanations": {
      "a": "Incorrect. ARP does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. RDP does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. WEP does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.3-005",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "What is 802.1X primarily used for in enterprise network access?",
    "options": [
      {
        "id": "a",
        "text": "DNS reverse lookup"
      },
      {
        "id": "b",
        "text": "Port-based network access authentication"
      },
      {
        "id": "c",
        "text": "wireless channel numbering"
      },
      {
        "id": "d",
        "text": "IPv4 subnetting"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "802.1X provides an authentication framework for controlling access to network ports/WLANs.",
    "distractorExplanations": {
      "a": "Incorrect. DNS reverse lookup does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. wireless channel numbering does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. IPv4 subnetting does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.3-006",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "easy",
    "prompt": "Two wireless devices communicate directly without a normal infrastructure access point. What topology is this?",
    "options": [
      {
        "id": "a",
        "text": "Ad hoc"
      },
      {
        "id": "b",
        "text": "DMZ"
      },
      {
        "id": "c",
        "text": "star-wired only"
      },
      {
        "id": "d",
        "text": "trunking"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "An ad hoc wireless network allows peers to communicate directly without a conventional infrastructure AP.",
    "distractorExplanations": {
      "b": "Incorrect. DMZ does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. star-wired only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. trunking does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.3-007",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A wireless link is used to connect two buildings directly. Which term best fits?",
    "options": [
      {
        "id": "a",
        "text": "broadcast-only Ethernet"
      },
      {
        "id": "b",
        "text": "loopback"
      },
      {
        "id": "c",
        "text": "WINS"
      },
      {
        "id": "d",
        "text": "Point-to-point wireless"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Point-to-point wireless links connect two endpoints/sites by radio.",
    "distractorExplanations": {
      "a": "Incorrect. broadcast-only Ethernet does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. loopback does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. WINS does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.3-008",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Two separate wired LAN segments are joined using a wireless link between bridge devices. What is this called?",
    "options": [
      {
        "id": "a",
        "text": "PAT"
      },
      {
        "id": "b",
        "text": "half-duplex hubbing"
      },
      {
        "id": "c",
        "text": "Wireless bridging"
      },
      {
        "id": "d",
        "text": "DNS recursion"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Wireless bridging extends/connects Layer 2 network segments over a wireless link.",
    "distractorExplanations": {
      "a": "Incorrect. PAT does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. half-duplex hubbing does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. DNS recursion does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.3-009",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A 2.4 GHz WLAN becomes unreliable when a microwave oven is operating nearby. What is the likely issue?",
    "options": [
      {
        "id": "a",
        "text": "VLAN tagging error"
      },
      {
        "id": "b",
        "text": "Wireless interference"
      },
      {
        "id": "c",
        "text": "DNS cache poisoning"
      },
      {
        "id": "d",
        "text": "IPv4 loopback failure"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Other radio-frequency sources can interfere with Wi-Fi, especially in shared/unlicensed spectrum.",
    "distractorExplanations": {
      "a": "Incorrect. VLAN tagging error does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. DNS cache poisoning does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. IPv4 loopback failure does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.3-010",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO valid ways to improve a WLAN suffering from radio interference.",
    "options": [
      {
        "id": "a",
        "text": "Change to a less congested channel/band"
      },
      {
        "id": "b",
        "text": "Relocate or reorient the access point away from interference sources"
      },
      {
        "id": "c",
        "text": "Enable WEP because it increases signal strength"
      },
      {
        "id": "d",
        "text": "Convert the default gateway to 127.0.0.1"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "Channel/band planning and AP placement can reduce interference; encryption choice does not increase RF signal quality.",
    "distractorExplanations": {
      "c": "Incorrect for this item. Enable WEP because it increases signal strength is not one of the required selections.",
      "d": "Incorrect for this item. Convert the default gateway to 127.0.0.1 is not one of the required selections."
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
    "id": "ITS-NET-2.4-002",
    "objectiveId": "2.4",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which topology provides many redundant paths by interconnecting nodes with multiple other nodes?",
    "options": [
      {
        "id": "a",
        "text": "Mesh"
      },
      {
        "id": "b",
        "text": "bus"
      },
      {
        "id": "c",
        "text": "simple ring"
      },
      {
        "id": "d",
        "text": "single-star without redundancy"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Mesh topologies provide multiple paths and can improve resiliency.",
    "distractorExplanations": {
      "b": "Incorrect. bus does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. simple ring does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. single-star without redundancy does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.4-003",
    "objectiveId": "2.4",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which classic topology connects devices along one shared backbone medium?",
    "options": [
      {
        "id": "a",
        "text": "star"
      },
      {
        "id": "b",
        "text": "mesh"
      },
      {
        "id": "c",
        "text": "point-to-point only"
      },
      {
        "id": "d",
        "text": "Bus"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "A bus topology uses a shared backbone segment.",
    "distractorExplanations": {
      "a": "Incorrect. star does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. mesh does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. point-to-point only does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.4-004",
    "objectiveId": "2.4",
    "domainId": "2",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which topology concept describes how devices are actually cabled, regardless of how data logically flows?",
    "options": [
      {
        "id": "a",
        "text": "DNS topology"
      },
      {
        "id": "b",
        "text": "routing metric"
      },
      {
        "id": "c",
        "text": "Physical topology"
      },
      {
        "id": "d",
        "text": "logical topology"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Physical topology is the real arrangement of links and devices; logical topology describes data-flow relationships.",
    "distractorExplanations": {
      "a": "Incorrect. DNS topology does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. routing metric does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. logical topology does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-2.4-005",
    "objectiveId": "2.4",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "A network is physically wired as a star but a technology makes frames appear to circulate in a defined logical sequence. What distinction is being illustrated?",
    "options": [
      {
        "id": "a",
        "text": "WANs cannot have topology"
      },
      {
        "id": "b",
        "text": "Physical and logical topologies can differ"
      },
      {
        "id": "c",
        "text": "All stars are always logical buses"
      },
      {
        "id": "d",
        "text": "A VLAN is a cable type"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Physical layout and logical traffic flow are separate concepts.",
    "distractorExplanations": {
      "a": "Incorrect. WANs cannot have topology does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. All stars are always logical buses does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. A VLAN is a cable type does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.1-008",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Two switches are connected by redundant Layer 2 links and broadcast traffic begins multiplying rapidly. Which protocol is designed to prevent this?",
    "options": [
      {
        "id": "a",
        "text": "DHCP"
      },
      {
        "id": "b",
        "text": "Spanning Tree Protocol (STP)"
      },
      {
        "id": "c",
        "text": "SMTP"
      },
      {
        "id": "d",
        "text": "RDP"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "STP blocks redundant Layer 2 paths as needed to prevent switching loops.",
    "distractorExplanations": {
      "a": "Incorrect. DHCP does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. SMTP does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. RDP does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.1-009",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Why can a single central switch be a single point of failure in a star LAN?",
    "options": [
      {
        "id": "a",
        "text": "If it fails, many attached devices can lose connectivity"
      },
      {
        "id": "b",
        "text": "because switches always erase IP addresses"
      },
      {
        "id": "c",
        "text": "because STP disables every port"
      },
      {
        "id": "d",
        "text": "because DNS uses UDP"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A central switch concentrates connectivity, so its failure can affect all dependent endpoints.",
    "distractorExplanations": {
      "b": "Incorrect. because switches always erase IP addresses does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. because STP disables every port does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. because DNS uses UDP does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.1-010",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO accurate statements about hubs and switches.",
    "options": [
      {
        "id": "a",
        "text": "A switch can forward known unicasts only toward the appropriate destination port."
      },
      {
        "id": "b",
        "text": "A hub creates one collision domain per port."
      },
      {
        "id": "c",
        "text": "A switch requires half-duplex on every port."
      },
      {
        "id": "d",
        "text": "A hub repeats traffic to its ports at Layer 1."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "explanation": "Hubs repeat bits broadly; switches make Layer 2 forwarding decisions and isolate collisions per port.",
    "distractorExplanations": {
      "b": "Incorrect for this item. A hub creates one collision domain per port. is not one of the required selections.",
      "c": "Incorrect for this item. A switch requires half-duplex on every port. is not one of the required selections."
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
    "id": "ITS-NET-3.1-011",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "hard",
    "prompt": "A switch receives a frame whose destination MAC is not in its table. What does a normal Layer 2 switch do?",
    "options": [
      {
        "id": "a",
        "text": "send a DNS query"
      },
      {
        "id": "b",
        "text": "route it using the default gateway"
      },
      {
        "id": "c",
        "text": "Flood the frame out appropriate ports in that VLAN except the incoming port"
      },
      {
        "id": "d",
        "text": "drop all unknown destinations permanently"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Unknown unicast frames are flooded within the relevant VLAN while the switch learns addresses.",
    "distractorExplanations": {
      "a": "Incorrect. send a DNS query does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. route it using the default gateway does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. drop all unknown destinations permanently does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-002",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What is a static route?",
    "options": [
      {
        "id": "a",
        "text": "a route learned automatically from a dynamic routing protocol"
      },
      {
        "id": "b",
        "text": "a MAC table entry"
      },
      {
        "id": "c",
        "text": "a DNS PTR record"
      },
      {
        "id": "d",
        "text": "A route manually configured by an administrator"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Static routes are explicitly configured rather than dynamically learned.",
    "distractorExplanations": {
      "a": "Incorrect. a route learned automatically from a dynamic routing protocol does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. a MAC table entry does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. a DNS PTR record does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-003",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "What is a main purpose of a dynamic routing protocol?",
    "options": [
      {
        "id": "a",
        "text": "test copper continuity"
      },
      {
        "id": "b",
        "text": "encrypt RDP"
      },
      {
        "id": "c",
        "text": "Exchange reachability information and adapt routes as topology changes"
      },
      {
        "id": "d",
        "text": "assign hostnames"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Dynamic routing protocols learn and update paths automatically.",
    "distractorExplanations": {
      "a": "Incorrect. test copper continuity does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. encrypt RDP does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. assign hostnames does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-004",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "What does a default route represent?",
    "options": [
      {
        "id": "a",
        "text": "a DNS root server record"
      },
      {
        "id": "b",
        "text": "A catch-all route used when no more specific route matches"
      },
      {
        "id": "c",
        "text": "a route only to 127.0.0.1"
      },
      {
        "id": "d",
        "text": "a VLAN access port"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "The default route is the least-specific fallback route, commonly /0.",
    "distractorExplanations": {
      "a": "Incorrect. a DNS root server record does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. a route only to 127.0.0.1 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. a VLAN access port does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-005",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "A router has matching routes 10.0.0.0/8, 10.20.0.0/16, and 0.0.0.0/0 for destination 10.20.4.8. Which route is preferred?",
    "options": [
      {
        "id": "a",
        "text": "10.20.0.0/16"
      },
      {
        "id": "b",
        "text": "10.0.0.0/8"
      },
      {
        "id": "c",
        "text": "0.0.0.0/0"
      },
      {
        "id": "d",
        "text": "all are equally specific"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Routing uses the longest matching prefix; /16 is more specific than /8 or /0.",
    "distractorExplanations": {
      "b": "Incorrect. 10.0.0.0/8 does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. 0.0.0.0/0 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. all are equally specific does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-006",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which feature forwards incoming traffic on a specific public port to an internal host/service?",
    "options": [
      {
        "id": "a",
        "text": "STP"
      },
      {
        "id": "b",
        "text": "VLAN access mode"
      },
      {
        "id": "c",
        "text": "ARP cache timeout"
      },
      {
        "id": "d",
        "text": "Port forwarding"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Port forwarding maps inbound traffic to a designated internal destination.",
    "distractorExplanations": {
      "a": "Incorrect. STP does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. VLAN access mode does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. ARP cache timeout does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-007",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "What is Quality of Service (QoS) used for?",
    "options": [
      {
        "id": "a",
        "text": "measure fiber breaks"
      },
      {
        "id": "b",
        "text": "create private IPv4 ranges"
      },
      {
        "id": "c",
        "text": "Prioritize or manage traffic classes when network resources are constrained"
      },
      {
        "id": "d",
        "text": "translate hostnames to IP addresses"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "QoS can classify, prioritize, shape, or queue traffic to improve service for important applications.",
    "distractorExplanations": {
      "a": "Incorrect. measure fiber breaks does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. create private IPv4 ranges does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. translate hostnames to IP addresses does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-008",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Why does routing between subnets support network segmentation?",
    "options": [
      {
        "id": "a",
        "text": "it requires hubs"
      },
      {
        "id": "b",
        "text": "It creates Layer 3 boundaries where traffic can be controlled between networks"
      },
      {
        "id": "c",
        "text": "it merges all broadcasts into one domain"
      },
      {
        "id": "d",
        "text": "it removes IP addresses"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Routers separate IP networks and provide policy/control points between them.",
    "distractorExplanations": {
      "a": "Incorrect. it requires hubs does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. it merges all broadcasts into one domain does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. it removes IP addresses does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-009",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "After a link failure, routing protocols exchange updates until routers agree on usable paths again. What is this process called?",
    "options": [
      {
        "id": "a",
        "text": "Convergence"
      },
      {
        "id": "b",
        "text": "crosstalk"
      },
      {
        "id": "c",
        "text": "ARP poisoning"
      },
      {
        "id": "d",
        "text": "broadcasting"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Convergence is the process of routing information stabilizing after a topology change.",
    "distractorExplanations": {
      "b": "Incorrect. crosstalk does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. ARP poisoning does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. broadcasting does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.2-010",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A small router is overloaded because all Internet-bound traffic must pass through it. What characteristic is being demonstrated?",
    "options": [
      {
        "id": "a",
        "text": "routers eliminate bottlenecks by definition"
      },
      {
        "id": "b",
        "text": "the problem must be DNS"
      },
      {
        "id": "c",
        "text": "the router has become a hub"
      },
      {
        "id": "d",
        "text": "A router can become a network bottleneck"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "A device on a critical forwarding path can bottleneck traffic if its capacity is insufficient.",
    "distractorExplanations": {
      "a": "Incorrect. routers eliminate bottlenecks by definition does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. the problem must be DNS does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. the router has become a hub does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.3-002",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "What is a purpose of shielding in shielded twisted-pair cabling?",
    "options": [
      {
        "id": "a",
        "text": "increase DNS speed"
      },
      {
        "id": "b",
        "text": "provide optical signaling"
      },
      {
        "id": "c",
        "text": "replace VLAN tagging"
      },
      {
        "id": "d",
        "text": "Reduce susceptibility to electromagnetic interference"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Shielding helps protect copper signals from external electromagnetic noise.",
    "distractorExplanations": {
      "a": "Incorrect. increase DNS speed does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. provide optical signaling does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. replace VLAN tagging does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.3-003",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "What problem does twisting wire pairs help reduce?",
    "options": [
      {
        "id": "a",
        "text": "routing convergence"
      },
      {
        "id": "b",
        "text": "DNS recursion"
      },
      {
        "id": "c",
        "text": "Crosstalk and electromagnetic interference"
      },
      {
        "id": "d",
        "text": "IPv6 abbreviation"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Twisted pairs reduce electromagnetic coupling and crosstalk.",
    "distractorExplanations": {
      "a": "Incorrect. routing convergence does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. DNS recursion does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. IPv6 abbreviation does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.3-004",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which cabling categories listed in the objectives are forms of twisted-pair Ethernet media?",
    "options": [
      {
        "id": "a",
        "text": "3G through 5G"
      },
      {
        "id": "b",
        "text": "CAT5 through CAT7"
      },
      {
        "id": "c",
        "text": "only fiber OS1/OS2"
      },
      {
        "id": "d",
        "text": "RDP and SSH"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "CAT5-CAT7 are categories of balanced twisted-pair cabling.",
    "distractorExplanations": {
      "a": "Incorrect. 3G through 5G does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. only fiber OS1/OS2 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. RDP and SSH does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.3-005",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Historically, which cable wiring pattern was used to directly connect similar Ethernet devices when auto-MDI/MDIX was not available?",
    "options": [
      {
        "id": "a",
        "text": "Crossover cable"
      },
      {
        "id": "b",
        "text": "straight-through cable in every case"
      },
      {
        "id": "c",
        "text": "fiber patch with no transceivers"
      },
      {
        "id": "d",
        "text": "telephone DSL filter"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Crossover wiring swaps transmit/receive pairs and was used for direct similar-device links on older Ethernet equipment.",
    "distractorExplanations": {
      "b": "Incorrect. straight-through cable in every case does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. fiber patch with no transceivers does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. telephone DSL filter does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.3-006",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Historically, which copper cable type was commonly used from an endpoint to a switch port?",
    "options": [
      {
        "id": "a",
        "text": "crossover in every case"
      },
      {
        "id": "b",
        "text": "OTDR fiber trace"
      },
      {
        "id": "c",
        "text": "satellite coax feed only"
      },
      {
        "id": "d",
        "text": "Straight-through Ethernet cable"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Straight-through cabling was the conventional endpoint-to-switch wiring pattern.",
    "distractorExplanations": {
      "a": "Incorrect. crossover in every case does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. OTDR fiber trace does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. satellite coax feed only does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.3-007",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Why must cable segment length be considered when choosing network media?",
    "options": [
      {
        "id": "a",
        "text": "distance changes DNS records"
      },
      {
        "id": "b",
        "text": "segment length affects only hostnames"
      },
      {
        "id": "c",
        "text": "Standards specify distance limits beyond which signal quality may not meet requirements"
      },
      {
        "id": "d",
        "text": "longer cables automatically create VLANs"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Each physical technology has practical/standard distance limits tied to signal attenuation and performance.",
    "distractorExplanations": {
      "a": "Incorrect. distance changes DNS records does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. segment length affects only hostnames does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. longer cables automatically create VLANs does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-3.3-008",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO security/reliability characteristics of copper versus fiber media.",
    "options": [
      {
        "id": "a",
        "text": "UTP is completely immune to electromagnetic interference."
      },
      {
        "id": "b",
        "text": "Copper can be susceptible to EMI and crosstalk."
      },
      {
        "id": "c",
        "text": "Fiber is generally harder to tap casually and is immune to EMI."
      },
      {
        "id": "d",
        "text": "Fiber transmits using electrical voltage on copper pairs."
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "explanation": "Copper is electrically susceptible to interference; fiber uses light and offers strong EMI resistance.",
    "distractorExplanations": {
      "a": "Incorrect for this item. UTP is completely immune to electromagnetic interference. is not one of the required selections.",
      "d": "Incorrect for this item. Fiber transmits using electrical voltage on copper pairs. is not one of the required selections."
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
    "id": "ITS-NET-4.1-004",
    "objectiveId": "4.1",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct OSI associations.",
    "options": [
      {
        "id": "a",
        "text": "Layer 1 deals with physical signaling/media."
      },
      {
        "id": "b",
        "text": "Layer 7 provides network services closest to user applications."
      },
      {
        "id": "c",
        "text": "Layer 3 is where Ethernet MAC tables are the only addressing mechanism."
      },
      {
        "id": "d",
        "text": "Layer 4 is the physical cabling layer."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "Layer 1 is Physical and Layer 7 is Application. MAC switching is primarily Layer 2, and Transport is Layer 4.",
    "distractorExplanations": {
      "c": "Incorrect for this item. Layer 3 is where Ethernet MAC tables are the only addressing mechanism. is not one of the required selections.",
      "d": "Incorrect for this item. Layer 4 is the physical cabling layer. is not one of the required selections."
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
    "id": "ITS-NET-4.2-002",
    "objectiveId": "4.2",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which TCP/IP model layer contains TCP and UDP?",
    "options": [
      {
        "id": "a",
        "text": "Link layer"
      },
      {
        "id": "b",
        "text": "Application layer only"
      },
      {
        "id": "c",
        "text": "Transport layer"
      },
      {
        "id": "d",
        "text": "Internet layer"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "TCP and UDP are transport protocols.",
    "distractorExplanations": {
      "a": "Incorrect. Link layer does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. Application layer only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. Internet layer does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.2-003",
    "objectiveId": "4.2",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "HTTP, DNS, and SMTP are normally grouped in which TCP/IP model layer?",
    "options": [
      {
        "id": "a",
        "text": "Physical-only layer"
      },
      {
        "id": "b",
        "text": "Application layer"
      },
      {
        "id": "c",
        "text": "Internet layer"
      },
      {
        "id": "d",
        "text": "Link layer"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "The TCP/IP Application layer includes user/application protocols such as HTTP, DNS, and SMTP.",
    "distractorExplanations": {
      "a": "Incorrect. Physical-only layer does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. Internet layer does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. Link layer does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.2-004",
    "objectiveId": "4.2",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Ethernet and local-link delivery are most closely associated with which TCP/IP layer?",
    "options": [
      {
        "id": "a",
        "text": "Link/Network Access layer"
      },
      {
        "id": "b",
        "text": "Application"
      },
      {
        "id": "c",
        "text": "Transport"
      },
      {
        "id": "d",
        "text": "Internet only"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "The Link (Network Access) layer handles local network framing and media access.",
    "distractorExplanations": {
      "b": "Incorrect. Application does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. Transport does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. Internet only does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.3-002",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which IPv4 range is the private Class B-sized block?",
    "options": [
      {
        "id": "a",
        "text": "169.254.0.0/16"
      },
      {
        "id": "b",
        "text": "192.0.0.0/8"
      },
      {
        "id": "c",
        "text": "172.16.0.0/12"
      },
      {
        "id": "d",
        "text": "172.0.0.0/8"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Private 172 space is specifically 172.16.0.0 through 172.31.255.255 (/12), not all 172/8.",
    "distractorExplanations": {
      "a": "Incorrect. 169.254.0.0/16 does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. 192.0.0.0/8 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. 172.0.0.0/8 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.3-003",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "subnetting",
    "difficulty": "medium",
    "prompt": "A host is configured as 192.168.10.70/26. What is its network address?",
    "options": [
      {
        "id": "a",
        "text": "192.168.10.128"
      },
      {
        "id": "b",
        "text": "192.168.10.64"
      },
      {
        "id": "c",
        "text": "192.168.10.0"
      },
      {
        "id": "d",
        "text": "192.168.10.70"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "/26 has a block size of 64 in the last octet: 0-63, 64-127, 128-191, 192-255. Address .70 is in the .64/26 subnet.",
    "distractorExplanations": {
      "a": "Incorrect. 192.168.10.128 does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. 192.168.10.0 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. 192.168.10.70 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.3-004",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "subnetting",
    "difficulty": "hard",
    "prompt": "What is the broadcast address of 10.1.4.128/27?",
    "options": [
      {
        "id": "a",
        "text": "10.1.4.159"
      },
      {
        "id": "b",
        "text": "10.1.4.127"
      },
      {
        "id": "c",
        "text": "10.1.4.160"
      },
      {
        "id": "d",
        "text": "10.1.4.255"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "/27 blocks are 32 addresses. The block beginning at .128 ends at .159, which is its broadcast address.",
    "distractorExplanations": {
      "b": "Incorrect. 10.1.4.127 does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. 10.1.4.160 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. 10.1.4.255 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.3-005",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "subnetting",
    "difficulty": "medium",
    "prompt": "Using traditional IPv4 subnetting, how many usable host addresses are in a /28 subnet?",
    "options": [
      {
        "id": "a",
        "text": "16"
      },
      {
        "id": "b",
        "text": "30"
      },
      {
        "id": "c",
        "text": "6"
      },
      {
        "id": "d",
        "text": "14"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "A /28 has 16 total addresses. Traditionally, network and broadcast addresses are not assigned to hosts, leaving 14 usable addresses.",
    "distractorExplanations": {
      "a": "Incorrect. 16 does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. 30 does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. 6 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.3-006",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct IPv4 statements.",
    "options": [
      {
        "id": "a",
        "text": "169.254.0.0/16 is one of the three RFC 1918 private ranges."
      },
      {
        "id": "b",
        "text": "A subnet mask identifies a DNS mail exchanger."
      },
      {
        "id": "c",
        "text": "127.0.0.1 is commonly used as a local loopback test address."
      },
      {
        "id": "d",
        "text": "A default gateway is used to reach destinations outside the local subnet."
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "explanation": "Loopback tests the local IP stack, and the default gateway forwards off-subnet traffic. 169.254/16 is IPv4 link-local, not RFC 1918 private space.",
    "distractorExplanations": {
      "a": "Incorrect for this item. 169.254.0.0/16 is one of the three RFC 1918 private ranges. is not one of the required selections.",
      "b": "Incorrect for this item. A subnet mask identifies a DNS mail exchanger. is not one of the required selections."
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
    "id": "ITS-NET-4.4-002",
    "objectiveId": "4.4",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which IPv6 address is the loopback address?",
    "options": [
      {
        "id": "a",
        "text": "FF02::1"
      },
      {
        "id": "b",
        "text": "::FFFF"
      },
      {
        "id": "c",
        "text": "::1"
      },
      {
        "id": "d",
        "text": "FE80::1"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "IPv6 loopback is ::1.",
    "distractorExplanations": {
      "a": "Incorrect. FF02::1 does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. ::FFFF does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. FE80::1 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.4-003",
    "objectiveId": "4.4",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct IPv6 statements.",
    "options": [
      {
        "id": "a",
        "text": "The IPv6 loopback address is 127.0.0.1."
      },
      {
        "id": "b",
        "text": "FE80::/10 is link-local address space."
      },
      {
        "id": "c",
        "text": "FF02::1 identifies the all-nodes multicast group on the local link."
      },
      {
        "id": "d",
        "text": "IPv6 uses broadcast addresses like 255.255.255.255."
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "explanation": "IPv6 defines link-local addresses in FE80::/10 and uses multicast rather than broadcast; ::1 is loopback.",
    "distractorExplanations": {
      "a": "Incorrect for this item. The IPv6 loopback address is 127.0.0.1. is not one of the required selections.",
      "d": "Incorrect for this item. IPv6 uses broadcast addresses like 255.255.255.255. is not one of the required selections."
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
    "id": "ITS-NET-4.4-004",
    "objectiveId": "4.4",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A network runs IPv4 and IPv6 simultaneously on hosts during migration. Which transition method is this?",
    "options": [
      {
        "id": "a",
        "text": "Dual stack"
      },
      {
        "id": "b",
        "text": "WEP"
      },
      {
        "id": "c",
        "text": "PAT only"
      },
      {
        "id": "d",
        "text": "STP"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Dual stack lets systems operate IPv4 and IPv6 at the same time. Tunneling is another transition approach.",
    "distractorExplanations": {
      "b": "Incorrect. WEP does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. PAT only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. STP does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.5-002",
    "objectiveId": "4.5",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which well-known port is associated with DNS queries?",
    "options": [
      {
        "id": "a",
        "text": "80"
      },
      {
        "id": "b",
        "text": "143"
      },
      {
        "id": "c",
        "text": "53"
      },
      {
        "id": "d",
        "text": "21"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "DNS uses port 53 (UDP and TCP depending on operation).",
    "distractorExplanations": {
      "a": "Incorrect. 80 does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. 143 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. 21 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.5-003",
    "objectiveId": "4.5",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct mail/web protocol mappings.",
    "options": [
      {
        "id": "a",
        "text": "FTP control — TCP 443"
      },
      {
        "id": "b",
        "text": "SMTP — TCP 25"
      },
      {
        "id": "c",
        "text": "IMAP — TCP 143"
      },
      {
        "id": "d",
        "text": "HTTP — TCP 22"
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "explanation": "SMTP uses 25 and IMAP 143 by default. HTTP uses 80, FTP control 21, SSH 22, HTTPS 443.",
    "distractorExplanations": {
      "a": "Incorrect for this item. FTP control — TCP 443 is not one of the required selections.",
      "d": "Incorrect for this item. HTTP — TCP 22 is not one of the required selections."
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
    "id": "ITS-NET-4.5-004",
    "objectiveId": "4.5",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A firewall must allow a standard Remote Desktop connection to a Windows host. Which default port is most directly relevant?",
    "options": [
      {
        "id": "a",
        "text": "3389"
      },
      {
        "id": "b",
        "text": "25"
      },
      {
        "id": "c",
        "text": "53"
      },
      {
        "id": "d",
        "text": "143"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "RDP commonly uses TCP 3389 by default.",
    "distractorExplanations": {
      "b": "Incorrect. 25 does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. 53 does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. 143 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.6-002",
    "objectiveId": "4.6",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which DNS record identifies a mail exchanger for a domain?",
    "options": [
      {
        "id": "a",
        "text": "PTR"
      },
      {
        "id": "b",
        "text": "SRV"
      },
      {
        "id": "c",
        "text": "MX"
      },
      {
        "id": "d",
        "text": "CNAME"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "MX records identify mail servers for a domain.",
    "distractorExplanations": {
      "a": "Incorrect. PTR does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. SRV does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. CNAME does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.6-003",
    "objectiveId": "4.6",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which DNS record is used for reverse lookup from an IP-address representation toward a hostname?",
    "options": [
      {
        "id": "a",
        "text": "CNAME"
      },
      {
        "id": "b",
        "text": "PTR"
      },
      {
        "id": "c",
        "text": "A"
      },
      {
        "id": "d",
        "text": "AAAA"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "PTR records provide pointer mappings used by reverse DNS lookups.",
    "distractorExplanations": {
      "a": "Incorrect. CNAME does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. A does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. AAAA does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.6-004",
    "objectiveId": "4.6",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A Windows PC can ping 8.8.8.8 but cannot resolve server.example.com. Which command should be used next to test DNS resolution?",
    "options": [
      {
        "id": "a",
        "text": "nslookup server.example.com"
      },
      {
        "id": "b",
        "text": "arp -a"
      },
      {
        "id": "c",
        "text": "hostname"
      },
      {
        "id": "d",
        "text": "tracert 127.0.0.1"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Successful IP reachability suggests basic IP routing works. A hostname-only failure points to name resolution, and nslookup directly queries DNS.",
    "distractorExplanations": {
      "b": "Incorrect. arp -a does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. hostname does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. tracert 127.0.0.1 does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.7-002",
    "objectiveId": "4.7",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Many private hosts share one public IPv4 address while sessions are distinguished by transport port numbers. What mechanism is this?",
    "options": [
      {
        "id": "a",
        "text": "DNS CNAME"
      },
      {
        "id": "b",
        "text": "STP"
      },
      {
        "id": "c",
        "text": "PAT (Port Address Translation)"
      },
      {
        "id": "d",
        "text": "static routing"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "PAT, often called NAT overload, differentiates multiple translated sessions using port numbers.",
    "distractorExplanations": {
      "a": "Incorrect. DNS CNAME does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. STP does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. static routing does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-4.7-003",
    "objectiveId": "4.7",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO accurate statements.",
    "options": [
      {
        "id": "a",
        "text": "A firewall’s purpose is to assign every host a MAC address."
      },
      {
        "id": "b",
        "text": "Static NAT can provide a fixed mapping between an inside and outside address."
      },
      {
        "id": "c",
        "text": "A firewall can allow or block traffic according to security policy."
      },
      {
        "id": "d",
        "text": "Dynamic NAT is a DNS record type."
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "explanation": "NAT translates addressing; static NAT uses stable mappings. Firewalls enforce traffic policy.",
    "distractorExplanations": {
      "a": "Incorrect for this item. A firewall’s purpose is to assign every host a MAC address. is not one of the required selections.",
      "d": "Incorrect for this item. Dynamic NAT is a DNS record type. is not one of the required selections."
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
    "id": "ITS-NET-5.2-002",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "easy",
    "prompt": "You need to identify which unlabeled cable in a bundle terminates at a particular wall jack. Which tool is best?",
    "options": [
      {
        "id": "a",
        "text": "traceroute"
      },
      {
        "id": "b",
        "text": "Toner and probe"
      },
      {
        "id": "c",
        "text": "TDR only"
      },
      {
        "id": "d",
        "text": "multimeter only"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "A toner injects a detectable signal so the cable can be traced/identified with a probe.",
    "distractorExplanations": {
      "a": "Incorrect. traceroute does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. TDR only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. multimeter only does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.2-003",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which tool can estimate the distance to an open or short in a copper cable by analyzing reflected signals?",
    "options": [
      {
        "id": "a",
        "text": "TDR"
      },
      {
        "id": "b",
        "text": "OTDR"
      },
      {
        "id": "c",
        "text": "nslookup"
      },
      {
        "id": "d",
        "text": "loopback plug"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A Time-Domain Reflectometer measures reflections on copper to locate faults by distance.",
    "distractorExplanations": {
      "b": "Incorrect. OTDR does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. nslookup does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. loopback plug does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.2-004",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which tool is used to locate breaks, losses, and events along a fiber-optic cable?",
    "options": [
      {
        "id": "a",
        "text": "TDR for copper only"
      },
      {
        "id": "b",
        "text": "multimeter across the fiber"
      },
      {
        "id": "c",
        "text": "ARP"
      },
      {
        "id": "d",
        "text": "OTDR"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "An Optical Time-Domain Reflectometer analyzes optical reflections to locate fiber events and faults.",
    "distractorExplanations": {
      "a": "Incorrect. TDR for copper only does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. multimeter across the fiber does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. ARP does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.2-005",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which tool is most appropriate for measuring electrical voltage or resistance?",
    "options": [
      {
        "id": "a",
        "text": "OTDR"
      },
      {
        "id": "b",
        "text": "DNS server"
      },
      {
        "id": "c",
        "text": "Multimeter"
      },
      {
        "id": "d",
        "text": "toner"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A multimeter measures electrical quantities such as voltage, current, and resistance.",
    "distractorExplanations": {
      "a": "Incorrect. OTDR does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. DNS server does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. toner does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.2-006",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct tool/use pairs.",
    "options": [
      {
        "id": "a",
        "text": "Multimeter — discover IP route hops"
      },
      {
        "id": "b",
        "text": "Cable tester — verify wiremap/continuity"
      },
      {
        "id": "c",
        "text": "Toner — identify/trace a particular cable"
      },
      {
        "id": "d",
        "text": "OTDR — test Windows DNS cache"
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "explanation": "Cable testers verify cabling; toners identify cables. OTDR is for fiber and multimeters measure electrical values.",
    "distractorExplanations": {
      "a": "Incorrect for this item. Multimeter — discover IP route hops is not one of the required selections.",
      "d": "Incorrect for this item. OTDR — test Windows DNS cache is not one of the required selections."
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
    "id": "ITS-NET-5.3-002",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Windows command tests basic IP reachability using ICMP Echo?",
    "options": [
      {
        "id": "a",
        "text": "nslookup"
      },
      {
        "id": "b",
        "text": "ping"
      },
      {
        "id": "c",
        "text": "netstat"
      },
      {
        "id": "d",
        "text": "hostname"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "ping sends ICMP Echo requests to test reachability and measure response time.",
    "distractorExplanations": {
      "a": "Incorrect. nslookup does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. netstat does not best satisfy the scenario or definition being tested.",
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
    "id": "ITS-NET-5.3-003",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Windows command shows the hop-by-hop Layer 3 path toward a destination?",
    "options": [
      {
        "id": "a",
        "text": "tracert"
      },
      {
        "id": "b",
        "text": "arp"
      },
      {
        "id": "c",
        "text": "ipconfig /flushdns"
      },
      {
        "id": "d",
        "text": "hostname"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "tracert uses increasing TTL values to reveal intermediate routed hops.",
    "distractorExplanations": {
      "b": "Incorrect. arp does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. ipconfig /flushdns does not best satisfy the scenario or definition being tested.",
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
    "id": "ITS-NET-5.3-004",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which Windows tool combines route information with repeated measurements to help identify packet loss/latency along a path?",
    "options": [
      {
        "id": "a",
        "text": "hostname"
      },
      {
        "id": "b",
        "text": "arp -a"
      },
      {
        "id": "c",
        "text": "ipconfig /release"
      },
      {
        "id": "d",
        "text": "pathping"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "pathping combines path discovery with per-hop statistical measurements.",
    "distractorExplanations": {
      "a": "Incorrect. hostname does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. arp -a does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. ipconfig /release does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.3-005",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Windows command directly queries DNS and is useful for testing name resolution?",
    "options": [
      {
        "id": "a",
        "text": "arp"
      },
      {
        "id": "b",
        "text": "hostname"
      },
      {
        "id": "c",
        "text": "nslookup"
      },
      {
        "id": "d",
        "text": "netstat"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "nslookup queries DNS servers and is a primary name-resolution diagnostic tool.",
    "distractorExplanations": {
      "a": "Incorrect. arp does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. hostname does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. netstat does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.3-006",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Windows command displays the local computer name?",
    "options": [
      {
        "id": "a",
        "text": "tracert"
      },
      {
        "id": "b",
        "text": "hostname"
      },
      {
        "id": "c",
        "text": "pathping"
      },
      {
        "id": "d",
        "text": "arp -a"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "hostname prints the system hostname.",
    "distractorExplanations": {
      "a": "Incorrect. tracert does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. pathping does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. arp -a does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.3-007",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which Windows command can display active network connections and listening ports?",
    "options": [
      {
        "id": "a",
        "text": "netstat"
      },
      {
        "id": "b",
        "text": "ipconfig /renew"
      },
      {
        "id": "c",
        "text": "hostname"
      },
      {
        "id": "d",
        "text": "arp -d only"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "netstat reports network connections, listeners, and protocol statistics depending on options.",
    "distractorExplanations": {
      "b": "Incorrect. ipconfig /renew does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. hostname does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. arp -d only does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.3-008",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Windows command displays the IPv4 ARP cache?",
    "options": [
      {
        "id": "a",
        "text": "nslookup"
      },
      {
        "id": "b",
        "text": "tracert"
      },
      {
        "id": "c",
        "text": "hostname"
      },
      {
        "id": "d",
        "text": "arp -a"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "arp -a displays IPv4-to-MAC neighbor mappings in the ARP cache.",
    "distractorExplanations": {
      "a": "Incorrect. nslookup does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. tracert does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. hostname does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.3-009",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "A Windows system successfully pings 127.0.0.1 but cannot ping its default gateway. What does the loopback success establish?",
    "options": [
      {
        "id": "a",
        "text": "DNS is definitely working"
      },
      {
        "id": "b",
        "text": "the remote gateway is definitely powered off"
      },
      {
        "id": "c",
        "text": "The local TCP/IP stack can process loopback traffic; the failure lies beyond that test"
      },
      {
        "id": "d",
        "text": "the physical cable is definitely good"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "127.0.0.1 tests the local IP stack. It does not prove the NIC, cabling, switch path, or gateway are functioning.",
    "distractorExplanations": {
      "a": "Incorrect. DNS is definitely working does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. the remote gateway is definitely powered off does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. the physical cable is definitely good does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.4-002",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Linux command tests reachability with ICMP Echo?",
    "options": [
      {
        "id": "a",
        "text": "ip addr only"
      },
      {
        "id": "b",
        "text": "ping"
      },
      {
        "id": "c",
        "text": "netstat"
      },
      {
        "id": "d",
        "text": "host"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "ping sends ICMP Echo requests.",
    "distractorExplanations": {
      "a": "Incorrect. ip addr only does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. netstat does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. host does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.4-003",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Linux command is commonly used to trace the routed path toward a destination?",
    "options": [
      {
        "id": "a",
        "text": "traceroute"
      },
      {
        "id": "b",
        "text": "arp"
      },
      {
        "id": "c",
        "text": "dig"
      },
      {
        "id": "d",
        "text": "netstat"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "traceroute discovers intermediate hops toward a target.",
    "distractorExplanations": {
      "b": "Incorrect. arp does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. dig does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. netstat does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.4-004",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which Linux command can trace a path and can also discover path MTU without requiring the same privileges as some traceroute modes?",
    "options": [
      {
        "id": "a",
        "text": "hostname"
      },
      {
        "id": "b",
        "text": "arp -d"
      },
      {
        "id": "c",
        "text": "ip addr flush"
      },
      {
        "id": "d",
        "text": "tracepath"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "tracepath traces the path and reports path MTU information.",
    "distractorExplanations": {
      "a": "Incorrect. hostname does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. arp -d does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. ip addr flush does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.4-005",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Linux DNS utility provides detailed query output and is commonly used for DNS troubleshooting?",
    "options": [
      {
        "id": "a",
        "text": "arp"
      },
      {
        "id": "b",
        "text": "ping only"
      },
      {
        "id": "c",
        "text": "dig"
      },
      {
        "id": "d",
        "text": "netstat"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "dig performs DNS queries and provides detailed DNS response information.",
    "distractorExplanations": {
      "a": "Incorrect. arp does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. ping only does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. netstat does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.4-006",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "easy",
    "prompt": "Which Linux utility provides a simpler hostname/address DNS lookup interface?",
    "options": [
      {
        "id": "a",
        "text": "ip addr"
      },
      {
        "id": "b",
        "text": "host"
      },
      {
        "id": "c",
        "text": "traceroute"
      },
      {
        "id": "d",
        "text": "netstat"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "host performs DNS lookups in a compact format.",
    "distractorExplanations": {
      "a": "Incorrect. ip addr does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. traceroute does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. netstat does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.4-007",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which objective-listed Linux command can display active connections and listening sockets on systems where the legacy net-tools package is available?",
    "options": [
      {
        "id": "a",
        "text": "netstat"
      },
      {
        "id": "b",
        "text": "dig"
      },
      {
        "id": "c",
        "text": "tracepath"
      },
      {
        "id": "d",
        "text": "arp only"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "netstat is the objective-listed legacy networking status utility; modern systems may also use ss, but ss is outside this objective.",
    "distractorExplanations": {
      "b": "Incorrect. dig does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. tracepath does not best satisfy the scenario or definition being tested.",
      "d": "Incorrect. arp only does not best satisfy the scenario or definition being tested."
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
    "id": "ITS-NET-5.4-008",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which objective-listed Linux command displays/manages the legacy IPv4 ARP cache when net-tools is installed?",
    "options": [
      {
        "id": "a",
        "text": "dig"
      },
      {
        "id": "b",
        "text": "traceroute"
      },
      {
        "id": "c",
        "text": "host"
      },
      {
        "id": "d",
        "text": "arp"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "arp is explicitly named in the objective. Modern Linux may prefer ip neigh, but the exam objective lists arp.",
    "distractorExplanations": {
      "a": "Incorrect. dig does not best satisfy the scenario or definition being tested.",
      "b": "Incorrect. traceroute does not best satisfy the scenario or definition being tested.",
      "c": "Incorrect. host does not best satisfy the scenario or definition being tested."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives"
    ]
  }
] satisfies PrepQuestion[];
