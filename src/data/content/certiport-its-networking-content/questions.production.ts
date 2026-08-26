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
        "id": "c",
        "text": "Internet"
      },
      {
        "id": "b",
        "text": "peer-to-peer network"
      },
      {
        "id": "a",
        "text": "extranet"
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
      "a": "Incorrect. An extranet gives approved external parties controlled access to selected private resources. The stem instead calls for Internet.",
      "b": "Incorrect. Peer-to-peer allows endpoints to share resources directly without requiring a dedicated central server. The stem instead calls for Internet.",
      "d": "Incorrect. An intranet is private to an organization. The stem instead calls for Internet."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "d",
        "text": "An extranet"
      },
      {
        "id": "b",
        "text": "An intranet"
      },
      {
        "id": "c",
        "text": "The Internet"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "An intranet is a private network/service intended for members of one organization.",
    "distractorExplanations": {
      "a": "Incorrect. Peer-to-peer allows endpoints to share resources directly without requiring a dedicated central server. The stem instead calls for An intranet.",
      "c": "Incorrect. The Internet is the worldwide public internetwork. The stem instead calls for An intranet.",
      "d": "Incorrect. An extranet gives approved external parties controlled access to selected private resources. The stem instead calls for An intranet."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "d",
        "text": "broadcast"
      },
      {
        "id": "c",
        "text": "intranet"
      },
      {
        "id": "b",
        "text": "Internet"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "An extranet extends selected private organizational resources to trusted external parties.",
    "distractorExplanations": {
      "b": "Incorrect. The Internet is the worldwide public internetwork. The stem instead calls for Extranet.",
      "c": "Incorrect. An intranet is private to an organization. The stem instead calls for Extranet.",
      "d": "Incorrect. Broadcast targets all hosts in the local broadcast domain. The stem instead calls for Extranet."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "d",
        "text": "Client-server"
      },
      {
        "id": "b",
        "text": "broadcast-only"
      },
      {
        "id": "c",
        "text": "ad hoc wireless"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Client-server uses servers to provide centralized services/resources to clients.",
    "distractorExplanations": {
      "a": "Incorrect. Peer-to-peer allows endpoints to share resources directly without requiring a dedicated central server. The stem instead calls for Client-server.",
      "b": "Incorrect. Broadcast targets all hosts in the local broadcast domain. The stem instead calls for Client-server.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: Client-server uses servers to provide centralized services/resources to clients. The correct answer is Client-server."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "b",
        "text": "multicast"
      },
      {
        "id": "d",
        "text": "client-server"
      },
      {
        "id": "a",
        "text": "extranet"
      },
      {
        "id": "c",
        "text": "Peer-to-peer"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Peer-to-peer systems let endpoints act as peers and directly share resources.",
    "distractorExplanations": {
      "a": "Incorrect. An extranet gives approved external parties controlled access to selected private resources. The stem instead calls for Peer-to-peer.",
      "b": "Incorrect. Multicast delivers traffic to members of a selected group. The stem instead calls for Peer-to-peer.",
      "d": "Incorrect. Client-server centralizes services on servers that respond to clients. The stem instead calls for Peer-to-peer."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "c",
        "text": "multicast"
      },
      {
        "id": "b",
        "text": "Unicast"
      },
      {
        "id": "d",
        "text": "broadcast"
      },
      {
        "id": "a",
        "text": "anycast"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Unicast is one sender to one specific destination.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: Unicast is one sender to one specific destination. The correct answer is Unicast.",
      "c": "Incorrect. Multicast delivers traffic to members of a selected group. The stem instead calls for Unicast.",
      "d": "Incorrect. Broadcast targets all hosts in the local broadcast domain. The stem instead calls for Unicast."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "b",
        "text": "unicast"
      },
      {
        "id": "d",
        "text": "peer-to-peer"
      },
      {
        "id": "c",
        "text": "broadcast"
      },
      {
        "id": "a",
        "text": "Multicast"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Multicast is one-to-many delivery to members of a defined group.",
    "distractorExplanations": {
      "b": "Incorrect. Unicast is one sender to one destination. The stem instead calls for Multicast.",
      "c": "Incorrect. Broadcast targets all hosts in the local broadcast domain. The stem instead calls for Multicast.",
      "d": "Incorrect. Peer-to-peer allows endpoints to share resources directly without requiring a dedicated central server. The stem instead calls for Multicast."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "c",
        "text": "client-server"
      },
      {
        "id": "b",
        "text": "multicast"
      },
      {
        "id": "d",
        "text": "Broadcast"
      },
      {
        "id": "a",
        "text": "unicast"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Broadcast is one-to-all within the applicable broadcast domain.",
    "distractorExplanations": {
      "a": "Incorrect. Unicast is one sender to one destination. The stem instead calls for Broadcast.",
      "b": "Incorrect. Multicast delivers traffic to members of a selected group. The stem instead calls for Broadcast.",
      "c": "Incorrect. Client-server centralizes services on servers that respond to clients. The stem instead calls for Broadcast."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "b",
        "text": "Client-server means broadcasts are impossible."
      },
      {
        "id": "a",
        "text": "Peer-to-peer always requires a domain controller."
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
      "a": "Incorrect. Peer-to-peer networking does not inherently require a domain controller; peers can share resources directly without dedicated centralized server infrastructure.",
      "b": "Incorrect. Client-server describes how services are provided; it does not eliminate broadcast traffic at the network/link layers."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "c",
        "text": "a Layer 3 routing protocol"
      },
      {
        "id": "a",
        "text": "a DNS resource record"
      },
      {
        "id": "b",
        "text": "An IoT network device"
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
      "a": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for An IoT network device.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: Internet of Things devices are network-connected embedded devices such as sensors, thermostats, cameras, and appliances. The correct answer is An IoT network device.",
      "d": "Incorrect. A cable tester checks properties such as continuity and wiremap. The stem instead calls for An IoT network device."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "c",
        "text": "Layer 1 repeater"
      },
      {
        "id": "b",
        "text": "hub"
      },
      {
        "id": "d",
        "text": "patch panel"
      },
      {
        "id": "a",
        "text": "Router"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A router makes Layer 3 forwarding decisions between networks.",
    "distractorExplanations": {
      "b": "Incorrect. A hub repeats incoming bits to other ports and does not make MAC-based forwarding decisions. The stem instead calls for Router.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: A router makes Layer 3 forwarding decisions between networks. The correct answer is Router.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: A router makes Layer 3 forwarding decisions between networks. The correct answer is Router."
    },
    "tags": [
      "1.1",
      "define-network-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-networking"
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
        "id": "b",
        "text": "DHCP relay"
      },
      {
        "id": "a",
        "text": "firewall rule"
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
      "a": "Incorrect. This choice conflicts with the defining fact in the item: A hypervisor provides the virtualization layer that hosts and manages VMs. The correct answer is Hypervisor.",
      "b": "Incorrect. This choice conflicts with the defining fact in the item: A hypervisor provides the virtualization layer that hosts and manages VMs. The correct answer is Hypervisor.",
      "d": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for Hypervisor."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-hyperv",
      "microsoft-vswitch"
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
        "id": "c",
        "text": "A physical switch with VLANs"
      },
      {
        "id": "a",
        "text": "A VPN tunnel only"
      },
      {
        "id": "d",
        "text": "A DNS alias"
      },
      {
        "id": "b",
        "text": "A software-defined computer with virtualized CPU, memory, storage, and networking"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "A VM behaves like an independent computer while its hardware resources are virtualized.",
    "distractorExplanations": {
      "a": "Incorrect. That limitation is not valid here. The stem is testing A software-defined computer with virtualized CPU, memory, storage, and networking; the cited choice either describes a different function or adds an unsupported restriction.",
      "c": "Incorrect. A Layer 2 switch forwards Ethernet frames using MAC addresses. The stem instead calls for A software-defined computer with virtualized CPU, memory, storage, and networking.",
      "d": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for A software-defined computer with virtualized CPU, memory, storage, and networking."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-hyperv",
      "microsoft-vswitch"
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
        "id": "d",
        "text": "WINS server"
      },
      {
        "id": "b",
        "text": "default gateway only"
      },
      {
        "id": "c",
        "text": "TDR"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A virtual switch provides software-based Ethernet switching for virtual NICs.",
    "distractorExplanations": {
      "b": "Incorrect. That limitation is not valid here. The stem is testing Virtual switch; the cited choice either describes a different function or adds an unsupported restriction.",
      "c": "Incorrect. A TDR locates copper-cable faults by analyzing signal reflections and distance. The stem instead calls for Virtual switch.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: A virtual switch provides software-based Ethernet switching for virtual NICs. The correct answer is Virtual switch."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-hyperv",
      "microsoft-vswitch"
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
        "id": "c",
        "text": "It requires a peer-to-peer workgroup"
      },
      {
        "id": "d",
        "text": "It runs directly on host hardware rather than on top of a general-purpose host OS"
      },
      {
        "id": "b",
        "text": "It is a virtual NIC driver inside one VM"
      },
      {
        "id": "a",
        "text": "It is only a DNS service"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "A Type 1 (bare-metal) hypervisor runs directly on the physical host.",
    "distractorExplanations": {
      "a": "Incorrect. That limitation is not valid here. The stem is testing It runs directly on host hardware rather than on top of a general-purpose host OS; the cited choice either describes a different function or adds an unsupported restriction.",
      "b": "Incorrect. This choice conflicts with the defining fact in the item: A Type 1 (bare-metal) hypervisor runs directly on the physical host. The correct answer is It runs directly on host hardware rather than on top of a general-purpose host OS.",
      "c": "Incorrect. Peer-to-peer allows endpoints to share resources directly without requiring a dedicated central server. The stem instead calls for It runs directly on host hardware rather than on top of a general-purpose host OS."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-hyperv",
      "microsoft-vswitch"
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
      },
      {
        "id": "a",
        "text": "broadcasting"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Virtualization lets one physical system host multiple isolated virtual machines.",
    "distractorExplanations": {
      "a": "Incorrect. Broadcast targets all hosts in the local broadcast domain. The stem instead calls for Virtualization.",
      "b": "Incorrect. This choice conflicts with the defining fact in the item: Virtualization lets one physical system host multiple isolated virtual machines. The correct answer is Virtualization.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: Virtualization lets one physical system host multiple isolated virtual machines. The correct answer is Virtualization."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-hyperv",
      "microsoft-vswitch"
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
        "id": "d",
        "text": "It removes the need for IP addressing"
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
        "id": "a",
        "text": "It guarantees zero hardware failures"
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "explanation": "Virtualization can consolidate workloads and isolate guests; it does not eliminate networking or hardware risk.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: Virtualization can consolidate workloads and isolate guests; it does not eliminate networking or hardware risk. The correct answer is Better utilization of physical hardware / Isolation between separate virtual machines.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: Virtualization can consolidate workloads and isolate guests; it does not eliminate networking or hardware risk. The correct answer is Better utilization of physical hardware / Isolation between separate virtual machines."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-hyperv",
      "microsoft-vswitch"
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
        "id": "d",
        "text": "a cellular modem"
      },
      {
        "id": "c",
        "text": "a DNS MX record"
      },
      {
        "id": "b",
        "text": "a fiber OTDR"
      },
      {
        "id": "a",
        "text": "An Ethernet switch"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A virtual switch forwards Ethernet frames among virtual/physical interfaces similarly to a physical switch.",
    "distractorExplanations": {
      "b": "Incorrect. Fiber carries light, is immune to EMI, and supports long distances/high bandwidth. The stem instead calls for An Ethernet switch.",
      "c": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for An Ethernet switch.",
      "d": "Incorrect. Cellular WAN access uses mobile carrier networks such as 3G/4G/5G. The stem instead calls for An Ethernet switch."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-hyperv",
      "microsoft-vswitch"
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
        "id": "d",
        "text": "A potential single point of failure"
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
        "id": "a",
        "text": "multicast optimization"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Consolidating workloads on one host can increase the impact of a host failure unless redundancy exists.",
    "distractorExplanations": {
      "a": "Incorrect. Multicast delivers traffic to members of a selected group. The stem instead calls for A potential single point of failure.",
      "b": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for A potential single point of failure.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: Consolidating workloads on one host can increase the impact of a host failure unless redundancy exists. The correct answer is A potential single point of failure."
    },
    "tags": [
      "1.2",
      "define-cloud-and-virtualization-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-hyperv",
      "microsoft-vswitch"
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
        "id": "d",
        "text": "ARP"
      },
      {
        "id": "c",
        "text": "VPN"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A VPN protects remote network traffic by creating a secure tunnel over another network such as the Internet.",
    "distractorExplanations": {
      "a": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for VPN.",
      "b": "Incorrect. A trunk carries traffic for multiple VLANs between network devices. The stem instead calls for VPN.",
      "d": "Incorrect. ARP maps local IPv4 addresses to Layer 2 MAC addresses. The stem instead calls for VPN."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
        "id": "d",
        "text": "SMTP"
      },
      {
        "id": "c",
        "text": "TDR"
      },
      {
        "id": "b",
        "text": "Remote Desktop"
      },
      {
        "id": "a",
        "text": "PAT"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Remote Desktop provides interactive remote access to a Windows desktop/session.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: Remote Desktop provides interactive remote access to a Windows desktop/session. The correct answer is Remote Desktop.",
      "c": "Incorrect. A TDR locates copper-cable faults by analyzing signal reflections and distance. The stem instead calls for Remote Desktop.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: Remote Desktop provides interactive remote access to a Windows desktop/session. The correct answer is Remote Desktop."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
        "id": "d",
        "text": "WINS only"
      },
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
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A remote-access VPN securely connects an individual remote endpoint to the private network.",
    "distractorExplanations": {
      "b": "Incorrect. Broadcast targets all hosts in the local broadcast domain. The stem instead calls for Remote-access VPN.",
      "c": "Incorrect. A crossover cable historically connects like MDI/MDI-X roles when auto-MDI-X is unavailable. The stem instead calls for Remote-access VPN.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: A remote-access VPN securely connects an individual remote endpoint to the private network. The correct answer is Remote-access VPN."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
        "id": "d",
        "text": "Site-to-site VPN"
      },
      {
        "id": "c",
        "text": "local loopback"
      },
      {
        "id": "a",
        "text": "RDP to every workstation"
      },
      {
        "id": "b",
        "text": "ad hoc Wi-Fi"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Site-to-site VPNs connect networks through their gateways.",
    "distractorExplanations": {
      "a": "Incorrect. RDP is Microsoft’s Remote Desktop Protocol and commonly uses TCP 3389 by default. The stem instead calls for Site-to-site VPN.",
      "b": "Incorrect. This choice conflicts with the defining fact in the item: Site-to-site VPNs connect networks through their gateways. The correct answer is Site-to-site VPN.",
      "c": "Incorrect. Loopback tests stay inside the local host and do not verify the external LAN path. The stem instead calls for Site-to-site VPN."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
        "id": "c",
        "text": "3389"
      },
      {
        "id": "b",
        "text": "443"
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
      "a": "Incorrect. 53 is not the correct value for this item; the correct answer is 3389. ",
      "b": "Incorrect. 443 is not the correct value for this item; the correct answer is 3389. ",
      "d": "Incorrect. 22 is not the correct value for this item; the correct answer is 3389. "
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
      "a": "Incorrect. A router forwards Layer 3 packets between IP networks. The stem instead calls for It can provide confidentiality and integrity for tunneled traffic.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: VPNs are used to protect data in transit across untrusted networks. The correct answer is It can provide confidentiality and integrity for tunneled traffic.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: VPNs are used to protect data in transit across untrusted networks. The correct answer is It can provide confidentiality and integrity for tunneled traffic."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
        "id": "d",
        "text": "Bluetooth PAN"
      },
      {
        "id": "c",
        "text": "DNS reverse lookup"
      },
      {
        "id": "a",
        "text": "Remote Desktop"
      },
      {
        "id": "b",
        "text": "site-to-site VPN only"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Remote Desktop is designed for interactive remote graphical control.",
    "distractorExplanations": {
      "b": "Incorrect. That limitation is not valid here. The stem is testing Remote Desktop; the cited choice either describes a different function or adds an unsupported restriction.",
      "c": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for Remote Desktop.",
      "d": "Incorrect. Bluetooth is primarily a short-range personal-area wireless technology. The stem instead calls for Remote Desktop."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
        "id": "d",
        "text": "A VPN can provide network-level access to remote private resources."
      },
      {
        "id": "c",
        "text": "A VPN is the same thing as a VLAN trunk."
      },
      {
        "id": "a",
        "text": "Remote Desktop provides an interactive remote desktop session."
      },
      {
        "id": "b",
        "text": "RDP is a cable-testing protocol."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "explanation": "VPN and RDP solve different remote-access problems: network connectivity versus interactive desktop access.",
    "distractorExplanations": {
      "b": "Incorrect. RDP is Microsoft’s Remote Desktop Protocol and commonly uses TCP 3389 by default. The stem instead calls for A VPN can provide network-level access to remote private resources. / Remote Desktop provides an interactive remote desktop session..",
      "c": "Incorrect. A trunk carries traffic for multiple VLANs between network devices. The stem instead calls for A VPN can provide network-level access to remote private resources. / Remote Desktop provides an interactive remote desktop session.."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
      },
      {
        "id": "a",
        "text": "The server must be using IPv6"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A working VPN provides network reachability, but RDP may still be disabled, blocked, or misconfigured.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: A working VPN provides network reachability, but RDP may still be disabled, blocked, or misconfigured. The correct answer is VPN connectivity and Remote Desktop availability are separate issues.",
      "b": "Incorrect. A cable tester checks properties such as continuity and wiremap. The stem instead calls for VPN connectivity and Remote Desktop availability are separate issues.",
      "d": "Incorrect. A VPN provides protected network connectivity through a logical tunnel across another network. The stem instead calls for VPN connectivity and Remote Desktop availability are separate issues."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
        "id": "c",
        "text": "site-to-site VPN"
      },
      {
        "id": "d",
        "text": "DHCP"
      },
      {
        "id": "a",
        "text": "NAT pool"
      },
      {
        "id": "b",
        "text": "Remote Desktop"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "RDP provides access to a remote Windows session; a VPN provides network connectivity.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: RDP provides access to a remote Windows session; a VPN provides network connectivity. The correct answer is Remote Desktop.",
      "c": "Incorrect. A VPN provides protected network connectivity through a logical tunnel across another network. The stem instead calls for Remote Desktop.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: RDP provides access to a remote Windows session; a VPN provides network connectivity. The correct answer is Remote Desktop."
    },
    "tags": [
      "1.3",
      "describe-remote-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-vpn",
      "microsoft-rdp"
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
        "id": "c",
        "text": "physical fiber conversion"
      },
      {
        "id": "b",
        "text": "Logical Layer 2 segmentation into separate broadcast domains"
      },
      {
        "id": "a",
        "text": "DNS recursion"
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
      "a": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for Logical Layer 2 segmentation into separate broadcast domains.",
      "c": "Incorrect. Fiber carries light, is immune to EMI, and supports long distances/high bandwidth. The stem instead calls for Logical Layer 2 segmentation into separate broadcast domains.",
      "d": "Incorrect. The Internet is the worldwide public internetwork. The stem instead calls for Logical Layer 2 segmentation into separate broadcast domains."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-intervlan"
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
        "id": "d",
        "text": "peer-to-peer segment"
      },
      {
        "id": "b",
        "text": "loopback network"
      },
      {
        "id": "a",
        "text": "DMZ/perimeter network"
      },
      {
        "id": "c",
        "text": "broadcast storm"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A DMZ/perimeter network isolates public-facing services from the trusted internal network.",
    "distractorExplanations": {
      "b": "Incorrect. Loopback tests stay inside the local host and do not verify the external LAN path. The stem instead calls for DMZ/perimeter network.",
      "c": "Incorrect. Broadcast targets all hosts in the local broadcast domain. The stem instead calls for DMZ/perimeter network.",
      "d": "Incorrect. Peer-to-peer allows endpoints to share resources directly without requiring a dedicated central server. The stem instead calls for DMZ/perimeter network."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-intervlan"
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
        "id": "c",
        "text": "It always spans multiple cities"
      },
      {
        "id": "d",
        "text": "Endpoints commonly connect using Ethernet cabling and switches"
      },
      {
        "id": "b",
        "text": "It cannot use VLANs"
      },
      {
        "id": "a",
        "text": "It must use satellite service"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Wired LANs commonly use Ethernet switches and copper/fiber cabling within a local site.",
    "distractorExplanations": {
      "a": "Incorrect. Satellite WAN access uses a satellite link and is useful where terrestrial service is unavailable. The stem instead calls for Endpoints commonly connect using Ethernet cabling and switches.",
      "b": "Incorrect. A VLAN creates logical Layer 2 segmentation and a separate broadcast domain. The stem instead calls for Endpoints commonly connect using Ethernet cabling and switches.",
      "c": "Incorrect. The statement is too absolute for the evidence given. The correct conclusion is Endpoints commonly connect using Ethernet cabling and switches, as explained by the behavior described in the stem."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-intervlan"
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
        "id": "b",
        "text": "It is the same as Bluetooth only"
      },
      {
        "id": "a",
        "text": "It requires coaxial cable to every client"
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
      "a": "Incorrect. This choice conflicts with the defining fact in the item: A WLAN is a local-area network using wireless radio, typically IEEE 802. The correct answer is It provides LAN connectivity over radio using Wi-Fi/802.11 technologies.",
      "b": "Incorrect. That limitation is not valid here. The stem is testing It provides LAN connectivity over radio using Wi-Fi/802.11 technologies; the cited choice either describes a different function or adds an unsupported restriction.",
      "d": "Incorrect. The statement is too absolute for the evidence given. The correct conclusion is It provides LAN connectivity over radio using Wi-Fi/802.11 technologies, as explained by the behavior described in the stem."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-intervlan"
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
        "id": "b",
        "text": "Separate broadcast domains logically"
      },
      {
        "id": "c",
        "text": "Segment groups without requiring separate physical switches for every group"
      },
      {
        "id": "a",
        "text": "Eliminate the need for routing between different IP networks"
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
      "a": "Incorrect. This choice conflicts with the defining fact in the item: VLANs support logical segmentation and reduce Layer 2 broadcast scope. The correct answer is Separate broadcast domains logically / Segment groups without requiring separate physical switches for every group.",
      "d": "Incorrect. Fiber carries light, is immune to EMI, and supports long distances/high bandwidth. The stem instead calls for Separate broadcast domains logically / Segment groups without requiring separate physical switches for every group."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-intervlan"
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
        "id": "c",
        "text": "a toner probe"
      },
      {
        "id": "d",
        "text": "DNS CNAME"
      },
      {
        "id": "b",
        "text": "a hub only"
      },
      {
        "id": "a",
        "text": "Layer 3 routing/inter-VLAN routing"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Different VLANs are separate Layer 2 broadcast domains, so Layer 3 forwarding is needed between them.",
    "distractorExplanations": {
      "b": "Incorrect. That limitation is not valid here. The stem is testing Layer 3 routing/inter-VLAN routing; the cited choice either describes a different function or adds an unsupported restriction.",
      "c": "Incorrect. A toner helps identify or trace a particular copper cable. The stem instead calls for Layer 3 routing/inter-VLAN routing.",
      "d": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for Layer 3 routing/inter-VLAN routing."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-intervlan"
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
        "id": "b",
        "text": "To create a loopback address"
      },
      {
        "id": "d",
        "text": "To reduce exposure of the trusted internal network if the public service is compromised"
      },
      {
        "id": "c",
        "text": "To force half-duplex"
      },
      {
        "id": "a",
        "text": "To make DNS unnecessary"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "A DMZ creates a controlled security zone between untrusted and trusted networks.",
    "distractorExplanations": {
      "a": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for To reduce exposure of the trusted internal network if the public service is compromised.",
      "b": "Incorrect. Loopback tests stay inside the local host and do not verify the external LAN path. The stem instead calls for To reduce exposure of the trusted internal network if the public service is compromised.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: A DMZ creates a controlled security zone between untrusted and trusted networks. The correct answer is To reduce exposure of the trusted internal network if the public service is compromised."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-intervlan"
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
        "id": "d",
        "text": "WAN"
      },
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
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "A LAN serves a limited local geographic area such as a building or campus segment.",
    "distractorExplanations": {
      "a": "Incorrect. The Internet is the worldwide public internetwork. The stem instead calls for LAN.",
      "b": "Incorrect. A VPN provides protected network connectivity through a logical tunnel across another network. The stem instead calls for LAN.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: A LAN serves a limited local geographic area such as a building or campus segment. The correct answer is LAN."
    },
    "tags": [
      "2.1",
      "define-characteristics-of-local-area-networks-(lans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-intervlan"
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
        "id": "d",
        "text": "Bluetooth"
      },
      {
        "id": "c",
        "text": "satellite"
      },
      {
        "id": "b",
        "text": "DSL"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "DSL uses existing telephone copper infrastructure for broadband data.",
    "distractorExplanations": {
      "a": "Incorrect. Fiber carries light, is immune to EMI, and supports long distances/high bandwidth. The stem instead calls for DSL.",
      "c": "Incorrect. Satellite WAN access uses a satellite link and is useful where terrestrial service is unavailable. The stem instead calls for DSL.",
      "d": "Incorrect. Bluetooth is primarily a short-range personal-area wireless technology. The stem instead calls for DSL."
    },
    "tags": [
      "2.2",
      "define-characteristics-of-wide-area-networks-(wans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-dsl",
      "ibm-networking"
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
        "id": "b",
        "text": "DSL only"
      },
      {
        "id": "d",
        "text": "ad hoc Wi-Fi"
      },
      {
        "id": "c",
        "text": "Bluetooth"
      },
      {
        "id": "a",
        "text": "Cable broadband"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Cable Internet service commonly uses coaxial access and a cable modem.",
    "distractorExplanations": {
      "b": "Incorrect. DSL provides broadband over telephone copper pairs. The stem instead calls for Cable broadband.",
      "c": "Incorrect. Bluetooth is primarily a short-range personal-area wireless technology. The stem instead calls for Cable broadband.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: Cable Internet service commonly uses coaxial access and a cable modem. The correct answer is Cable broadband."
    },
    "tags": [
      "2.2",
      "define-characteristics-of-wide-area-networks-(wans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-dsl",
      "ibm-networking"
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
        "id": "d",
        "text": "Satellite"
      },
      {
        "id": "c",
        "text": "Ethernet hub"
      },
      {
        "id": "a",
        "text": "VLAN trunk"
      },
      {
        "id": "b",
        "text": "loopback"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Satellite can provide WAN connectivity where terrestrial infrastructure is limited.",
    "distractorExplanations": {
      "a": "Incorrect. A trunk carries traffic for multiple VLANs between network devices. The stem instead calls for Satellite.",
      "b": "Incorrect. Loopback tests stay inside the local host and do not verify the external LAN path. The stem instead calls for Satellite.",
      "c": "Incorrect. A hub repeats incoming bits to other ports and does not make MAC-based forwarding decisions. The stem instead calls for Satellite."
    },
    "tags": [
      "2.2",
      "define-characteristics-of-wide-area-networks-(wans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-dsl",
      "ibm-networking"
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
        "id": "d",
        "text": "802.3, 802.1Q, and STP"
      },
      {
        "id": "c",
        "text": "3G, 4G, and 5G"
      },
      {
        "id": "b",
        "text": "CAT5, CAT6, and CAT7"
      },
      {
        "id": "a",
        "text": "FTP, SMTP, and DNS"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "3G, 4G, and 5G are cellular network generations.",
    "distractorExplanations": {
      "a": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for 3G, 4G, and 5G.",
      "b": "Incorrect. This choice conflicts with the defining fact in the item: 3G, 4G, and 5G are cellular network generations. The correct answer is 3G, 4G, and 5G.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: 3G, 4G, and 5G are cellular network generations. The correct answer is 3G, 4G, and 5G."
    },
    "tags": [
      "2.2",
      "define-characteristics-of-wide-area-networks-(wans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-dsl",
      "ibm-networking"
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
        "id": "b",
        "text": "Site-to-site connectivity/VPN"
      },
      {
        "id": "a",
        "text": "an access VLAN"
      },
      {
        "id": "d",
        "text": "a local broadcast"
      },
      {
        "id": "c",
        "text": "peer-to-peer file sharing only"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Site-to-site connections link separate networks across a WAN, often using VPN tunneling over the Internet.",
    "distractorExplanations": {
      "a": "Incorrect. A VLAN creates logical Layer 2 segmentation and a separate broadcast domain. The stem instead calls for Site-to-site connectivity/VPN.",
      "c": "Incorrect. That limitation is not valid here. The stem is testing Site-to-site connectivity/VPN; the cited choice either describes a different function or adds an unsupported restriction.",
      "d": "Incorrect. Broadcast targets all hosts in the local broadcast domain. The stem instead calls for Site-to-site connectivity/VPN."
    },
    "tags": [
      "2.2",
      "define-characteristics-of-wide-area-networks-(wans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-dsl",
      "ibm-networking"
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
        "id": "d",
        "text": "Cable modem"
      },
      {
        "id": "c",
        "text": "DSL"
      },
      {
        "id": "b",
        "text": "Cellular"
      },
      {
        "id": "a",
        "text": "Satellite"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "Satellite and cellular use radio links for the access path; DSL and cable rely on wired provider infrastructure.",
    "distractorExplanations": {
      "c": "Incorrect. DSL provides broadband over telephone copper pairs. The stem instead calls for Cellular / Satellite.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: Satellite and cellular use radio links for the access path; DSL and cable rely on wired provider infrastructure. The correct answer is Cellular / Satellite."
    },
    "tags": [
      "2.2",
      "define-characteristics-of-wide-area-networks-(wans)"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-dsl",
      "ibm-networking"
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
        "id": "d",
        "text": "802.1D only"
      },
      {
        "id": "c",
        "text": "802.3"
      },
      {
        "id": "a",
        "text": "802.15.1 only"
      },
      {
        "id": "b",
        "text": "802.11"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "IEEE 802.11 is the family of wireless LAN standards used for Wi-Fi.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: IEEE 802. The correct answer is 802.11.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: IEEE 802. The correct answer is 802.11.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: IEEE 802. The correct answer is 802.11."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
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
        "id": "b",
        "text": "DSL"
      },
      {
        "id": "d",
        "text": "TDR"
      },
      {
        "id": "a",
        "text": "Bluetooth"
      },
      {
        "id": "c",
        "text": "RDP"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Bluetooth is a short-range wireless personal-area networking technology.",
    "distractorExplanations": {
      "b": "Incorrect. DSL provides broadband over telephone copper pairs. The stem instead calls for Bluetooth.",
      "c": "Incorrect. RDP is Microsoft’s Remote Desktop Protocol and commonly uses TCP 3389 by default. The stem instead calls for Bluetooth.",
      "d": "Incorrect. A TDR locates copper-cable faults by analyzing signal reflections and distance. The stem instead calls for Bluetooth."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
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
      "a": "Incorrect. WPA2 is a WLAN security generation commonly associated with AES/CCMP. The stem instead calls for WEP.",
      "b": "Incorrect. 802.1X provides port-based network access authentication/control. The stem instead calls for WEP.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: WEP has serious cryptographic weaknesses and is obsolete for secure WLANs. The correct answer is WEP."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
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
        "id": "d",
        "text": "WEP"
      },
      {
        "id": "c",
        "text": "WPA2"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "WPA2 improved WLAN security and is commonly associated with AES-CCMP.",
    "distractorExplanations": {
      "a": "Incorrect. ARP maps local IPv4 addresses to Layer 2 MAC addresses. The stem instead calls for WPA2.",
      "b": "Incorrect. RDP is Microsoft’s Remote Desktop Protocol and commonly uses TCP 3389 by default. The stem instead calls for WPA2.",
      "d": "Incorrect. WEP is an obsolete and weak WLAN security method. The stem instead calls for WPA2."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
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
        "id": "c",
        "text": "wireless channel numbering"
      },
      {
        "id": "a",
        "text": "DNS reverse lookup"
      },
      {
        "id": "d",
        "text": "IPv4 subnetting"
      },
      {
        "id": "b",
        "text": "Port-based network access authentication"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "802.1X provides an authentication framework for controlling access to network ports/WLANs.",
    "distractorExplanations": {
      "a": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for Port-based network access authentication.",
      "c": "Incorrect. A ring topology forms a loop. The stem instead calls for Port-based network access authentication.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: 802. The correct answer is Port-based network access authentication."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
    ]
  },
  {
    "id": "ITS-NET-2.3-006",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Two laptops in a temporary field office must exchange files directly over Wi-Fi. There is no wireless access point or router available. Which wireless arrangement best fits?",
    "options": [
      {
        "id": "c",
        "text": "Wireless bridge between two wired LANs"
      },
      {
        "id": "b",
        "text": "Ad hoc wireless network"
      },
      {
        "id": "a",
        "text": "Infrastructure WLAN through an access point"
      },
      {
        "id": "d",
        "text": "Site-to-site VPN"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "An ad hoc wireless network allows wireless peers to communicate directly without a normal infrastructure access point.",
    "distractorExplanations": {
      "a": "Infrastructure mode depends on an access point coordinating client access.",
      "c": "A wireless bridge is used to join network segments, not simply two peer laptops with no AP.",
      "d": "A site-to-site VPN connects networks through gateways; it is not a Wi-Fi operating arrangement."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
    ]
  },
  {
    "id": "ITS-NET-2.3-007",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A warehouse and an office 150 meters apart need a dedicated wireless link between rooftop devices so the two sites can exchange LAN traffic. Which wireless method is the best match?",
    "options": [
      {
        "id": "b",
        "text": "Point-to-point wireless link"
      },
      {
        "id": "c",
        "text": "Bluetooth personal-area network"
      },
      {
        "id": "d",
        "text": "802.1X authentication"
      },
      {
        "id": "a",
        "text": "Ad hoc client network"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "A point-to-point wireless link connects two fixed endpoints/sites directly and is commonly used for building-to-building connectivity.",
    "distractorExplanations": {
      "a": "Ad hoc describes peers communicating without an infrastructure AP and is not the best term for a fixed building-to-building link.",
      "c": "Bluetooth is designed mainly for short-range personal-area connectivity.",
      "d": "802.1X is an access-control/authentication framework, not a link topology."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
    ]
  },
  {
    "id": "ITS-NET-2.3-008",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A remote workshop already has a wired Ethernet LAN. An access point in bridge mode connects that LAN over Wi-Fi to the main building LAN. What function is the wireless equipment providing?",
    "options": [
      {
        "id": "a",
        "text": "Wireless bridging"
      },
      {
        "id": "d",
        "text": "DNS forwarding"
      },
      {
        "id": "b",
        "text": "NAT overload/PAT"
      },
      {
        "id": "c",
        "text": "Ad hoc networking"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Wireless bridging extends or joins LAN segments across a wireless link while preserving the bridging role at the local-link level.",
    "distractorExplanations": {
      "b": "PAT translates addresses/ports and is unrelated to joining LAN segments over radio.",
      "c": "Ad hoc networking is direct peer wireless communication without infrastructure APs.",
      "d": "DNS forwarding resolves names; it does not bridge LAN traffic."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
    ]
  },
  {
    "id": "ITS-NET-2.3-009",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "Users report good Wi-Fi signal strength but poor throughput whenever the break-room microwave is running. The affected clients are connected on 2.4 GHz. What should the technician investigate first?",
    "options": [
      {
        "id": "c",
        "text": "A missing DNS PTR record"
      },
      {
        "id": "d",
        "text": "A failed fiber transceiver"
      },
      {
        "id": "a",
        "text": "A duplicate IPv4 default gateway"
      },
      {
        "id": "b",
        "text": "Radio-frequency interference on the WLAN channel"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Microwave ovens can interfere with 2.4-GHz Wi-Fi. Strong signal strength does not rule out RF interference or channel contention.",
    "distractorExplanations": {
      "a": "A duplicate/default-gateway problem would not normally correlate with the microwave operating.",
      "c": "PTR records affect reverse DNS, not RF throughput.",
      "d": "A fiber-transceiver failure would not be expected to appear only when a microwave runs."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
    ]
  },
  {
    "id": "ITS-NET-2.3-010",
    "objectiveId": "2.3",
    "domainId": "2",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "A 2.4-GHz WLAN has heavy co-channel interference from nearby access points. Select TWO actions that are most directly appropriate.",
    "options": [
      {
        "id": "c",
        "text": "Downgrade security from WPA2 to WEP"
      },
      {
        "id": "d",
        "text": "Increase the number of APs on the exact same 2.4-GHz channel without planning"
      },
      {
        "id": "a",
        "text": "Move supported dual-band clients to a less-congested 5-GHz WLAN"
      },
      {
        "id": "b",
        "text": "Choose a better non-overlapping 2.4-GHz channel after a site/channel survey"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "Reducing channel contention by selecting a cleaner channel and moving capable clients to a less-congested band are direct RF remedies. Security downgrade and unplanned same-channel AP density do not solve the interference problem.",
    "distractorExplanations": {
      "c": "WEP is obsolete and weak; changing to it does not improve RF interference.",
      "d": "Adding APs on the same channel can increase co-channel contention rather than reduce it."
    },
    "tags": [
      "2.3",
      "identify-wireless-networking-methods-and-characteristics"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-wifi-rf",
      "microsoft-8021x"
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
      },
      {
        "id": "a",
        "text": "full mesh"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "A star topology uses a central connection point.",
    "distractorExplanations": {
      "a": "Incorrect. A mesh topology provides multiple interconnections/redundant paths. The stem instead calls for Star.",
      "c": "Incorrect. A bus topology uses one shared backbone medium. The stem instead calls for Star.",
      "d": "Incorrect. A ring topology forms a loop. The stem instead calls for Star."
    },
    "tags": [
      "2.4",
      "compare-and-contrast-network-topologies-and-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-topology"
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
        "id": "c",
        "text": "simple ring"
      },
      {
        "id": "b",
        "text": "bus"
      },
      {
        "id": "a",
        "text": "Mesh"
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
      "b": "Incorrect. A bus topology uses one shared backbone medium. The stem instead calls for Mesh.",
      "c": "Incorrect. A ring topology forms a loop. The stem instead calls for Mesh.",
      "d": "Incorrect. A star topology connects endpoints to a central device. The stem instead calls for Mesh."
    },
    "tags": [
      "2.4",
      "compare-and-contrast-network-topologies-and-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-topology"
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
        "id": "b",
        "text": "mesh"
      },
      {
        "id": "d",
        "text": "Bus"
      },
      {
        "id": "c",
        "text": "point-to-point only"
      },
      {
        "id": "a",
        "text": "star"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "A bus topology uses a shared backbone segment.",
    "distractorExplanations": {
      "a": "Incorrect. A star topology connects endpoints to a central device. The stem instead calls for Bus.",
      "b": "Incorrect. A mesh topology provides multiple interconnections/redundant paths. The stem instead calls for Bus.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: A bus topology uses a shared backbone segment. The correct answer is Bus."
    },
    "tags": [
      "2.4",
      "compare-and-contrast-network-topologies-and-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-topology"
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
        "id": "c",
        "text": "Physical topology"
      },
      {
        "id": "b",
        "text": "routing metric"
      },
      {
        "id": "d",
        "text": "logical topology"
      },
      {
        "id": "a",
        "text": "DNS topology"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Physical topology is the real arrangement of links and devices; logical topology describes data-flow relationships.",
    "distractorExplanations": {
      "a": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for Physical topology.",
      "b": "Incorrect. This choice conflicts with the defining fact in the item: Physical topology is the real arrangement of links and devices; logical topology describes data-flow relationships. The correct answer is Physical topology.",
      "d": "Incorrect. Logical topology describes how communication behaves independent of the physical layout. The stem instead calls for Physical topology."
    },
    "tags": [
      "2.4",
      "compare-and-contrast-network-topologies-and-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-topology"
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
        "id": "b",
        "text": "Physical and logical topologies can differ"
      },
      {
        "id": "d",
        "text": "A VLAN is a cable type"
      },
      {
        "id": "a",
        "text": "WANs cannot have topology"
      },
      {
        "id": "c",
        "text": "All stars are always logical buses"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Physical layout and logical traffic flow are separate concepts.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: Physical layout and logical traffic flow are separate concepts. The correct answer is Physical and logical topologies can differ.",
      "c": "Incorrect. The statement is too absolute for the evidence given. The correct conclusion is Physical and logical topologies can differ, as explained by the behavior described in the stem.",
      "d": "Incorrect. A VLAN creates logical Layer 2 segmentation and a separate broadcast domain. The stem instead calls for Physical and logical topologies can differ."
    },
    "tags": [
      "2.4",
      "compare-and-contrast-network-topologies-and-access-methods"
    ],
    "sourceRefs": [
      "official-objectives",
      "ibm-topology"
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
      },
      {
        "id": "a",
        "text": "Carry traffic for one access VLAN to an endpoint"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "An access port normally places endpoint traffic into one VLAN.",
    "distractorExplanations": {
      "b": "Incorrect. A VLAN creates logical Layer 2 segmentation and a separate broadcast domain. The stem instead calls for Carry traffic for one access VLAN to an endpoint.",
      "c": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for Carry traffic for one access VLAN to an endpoint.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: An access port normally places endpoint traffic into one VLAN. The correct answer is Carry traffic for one access VLAN to an endpoint."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
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
        "id": "d",
        "text": "Carry traffic for multiple VLANs between network devices"
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
        "id": "a",
        "text": "connect only one untagged endpoint VLAN in all cases"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Trunks transport multiple VLANs, commonly using VLAN tagging.",
    "distractorExplanations": {
      "a": "Incorrect. That limitation is not valid here. The stem is testing Carry traffic for multiple VLANs between network devices; the cited choice either describes a different function or adds an unsupported restriction.",
      "b": "Incorrect. An OTDR locates fiber events/faults by analyzing optical reflections/backscatter. The stem instead calls for Carry traffic for multiple VLANs between network devices.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: Trunks transport multiple VLANs, commonly using VLAN tagging. The correct answer is Carry traffic for multiple VLANs between network devices."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
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
        "id": "c",
        "text": "Managed switch"
      },
      {
        "id": "d",
        "text": "unmanaged hub"
      },
      {
        "id": "b",
        "text": "cable modem"
      },
      {
        "id": "a",
        "text": "passive patch panel"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Managed switches expose configuration and monitoring capabilities.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: Managed switches expose configuration and monitoring capabilities. The correct answer is Managed switch.",
      "b": "Incorrect. This choice conflicts with the defining fact in the item: Managed switches expose configuration and monitoring capabilities. The correct answer is Managed switch.",
      "d": "Incorrect. A hub repeats incoming bits to other ports and does not make MAC-based forwarding decisions. The stem instead calls for Managed switch."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
    ]
  },
  {
    "id": "ITS-NET-3.1-004",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "A switch receives a frame in VLAN 20 with destination MAC 00AA.BBCC.DDEE. Based on the table, which port should transmit the frame?",
    "context": "Vlan   Mac Address       Type       Ports\n----   -----------       --------   -----\n20     0011.2233.4455    DYNAMIC    Gi1/0/3\n20     00aa.bbcc.ddee    DYNAMIC    Gi1/0/8\n30     00ff.eedd.ccbb    DYNAMIC    Gi1/0/12",
    "options": [
      {
        "id": "b",
        "text": "Gi1/0/8 only"
      },
      {
        "id": "c",
        "text": "Every port in every VLAN"
      },
      {
        "id": "d",
        "text": "The frame must be sent to a router first"
      },
      {
        "id": "a",
        "text": "Gi1/0/3 only"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "A Layer 2 switch forwards a known unicast frame using the destination MAC entry for that VLAN. The table maps 00AA.BBCC.DDEE in VLAN 20 to Gi1/0/8.",
    "distractorExplanations": {
      "a": "Gi1/0/3 is associated with a different MAC address.",
      "c": "A known unicast is not flooded to every port or every VLAN.",
      "d": "Routing is needed for inter-network/inter-VLAN traffic, not for a known Layer 2 destination in the same VLAN."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
    ]
  },
  {
    "id": "ITS-NET-3.1-005",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Hosts in VLAN 10 and VLAN 20 are connected to the same multilayer switch. The design requires the switch itself to route between the two VLAN subnets. Which capability is required?",
    "options": [
      {
        "id": "d",
        "text": "An unmanaged-only switch"
      },
      {
        "id": "c",
        "text": "Half-duplex Ethernet"
      },
      {
        "id": "b",
        "text": "Hub repeater mode"
      },
      {
        "id": "a",
        "text": "Layer 3 switching/routing"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A Layer 3 switch can perform routing between IP networks/VLAN interfaces in addition to Layer 2 switching.",
    "distractorExplanations": {
      "b": "A hub repeats bits and cannot route between VLANs.",
      "c": "Duplex mode does not create Layer 3 routing capability.",
      "d": "An unmanaged switch normally lacks the configuration/routing features required."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
    ]
  },
  {
    "id": "ITS-NET-3.1-006",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Twenty PCs share an old Ethernet hub and collisions increase as traffic rises. Replacing the hub with a full-duplex switch most directly changes which behavior?",
    "options": [
      {
        "id": "c",
        "text": "Broadcast frames are no longer forwarded inside the VLAN"
      },
      {
        "id": "d",
        "text": "Every frame is repeated out every switch port"
      },
      {
        "id": "a",
        "text": "Each switched port becomes its own collision domain and full-duplex eliminates normal CSMA/CD collisions on that link"
      },
      {
        "id": "b",
        "text": "All PCs are placed into separate IP subnets automatically"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A switch isolates collision domains per port, and full-duplex switched Ethernet does not use normal collision detection on that point-to-point link.",
    "distractorExplanations": {
      "b": "A switch does not automatically create a separate IP subnet for every port.",
      "c": "Broadcasts are still forwarded within the same VLAN/broadcast domain.",
      "d": "Repeating every frame is hub behavior, not normal switch forwarding."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
    ]
  },
  {
    "id": "ITS-NET-3.1-007",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A 48-port Layer 2 switch has all access ports assigned to VLAN 30. How many Layer 2 broadcast domains do those VLAN 30 ports form?",
    "options": [
      {
        "id": "d",
        "text": "One per learned MAC address"
      },
      {
        "id": "a",
        "text": "One"
      },
      {
        "id": "c",
        "text": "Two: one transmit and one receive"
      },
      {
        "id": "b",
        "text": "Forty-eight"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A VLAN is a Layer 2 broadcast domain. Ports in the same VLAN share that broadcast domain even though each switch port is a separate collision domain.",
    "distractorExplanations": {
      "b": "Separate switch ports create separate collision domains, not separate broadcast domains when they remain in the same VLAN.",
      "c": "Transmit/receive direction does not define broadcast domains.",
      "d": "MAC-table entries identify destinations; they do not create broadcast domains."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
    ]
  },
  {
    "id": "ITS-NET-3.1-008",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "After a technician adds a second Layer 2 cable between two switches, users see severe instability. Switch logs show the same source MAC rapidly alternating between two trunk ports and broadcast traffic spikes. Which feature is intended to prevent this condition?",
    "context": "SW1 log excerpt\nMAC 00aa.bbcc.ddee VLAN 20 learned on Gi1/0/47\nMAC 00aa.bbcc.ddee VLAN 20 moved to Gi1/0/48\nMAC 00aa.bbcc.ddee VLAN 20 moved to Gi1/0/47\nBroadcast rate: rapidly increasing",
    "options": [
      {
        "id": "c",
        "text": "Port Address Translation"
      },
      {
        "id": "d",
        "text": "DHCP relay"
      },
      {
        "id": "a",
        "text": "Spanning Tree Protocol (STP)"
      },
      {
        "id": "b",
        "text": "DNS round robin"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Redundant Layer 2 paths can form a switching loop. STP blocks selected redundant paths to create a loop-free logical topology while retaining redundancy.",
    "distractorExplanations": {
      "b": "DNS round robin distributes name resolution answers; it does not stop Ethernet loops.",
      "c": "PAT translates transport sessions and addresses; it does not control Layer 2 loops.",
      "d": "DHCP relay forwards DHCP messages across subnets and does not prevent loops."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
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
        "id": "b",
        "text": "because switches always erase IP addresses"
      },
      {
        "id": "a",
        "text": "If it fails, many attached devices can lose connectivity"
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
      "b": "Incorrect. The statement is too absolute for the evidence given. The correct conclusion is If it fails, many attached devices can lose connectivity, as explained by the behavior described in the stem.",
      "c": "Incorrect. This choice conflicts with the defining fact in the item: A central switch concentrates connectivity, so its failure can affect all dependent endpoints. The correct answer is If it fails, many attached devices can lose connectivity.",
      "d": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for If it fails, many attached devices can lose connectivity."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
    ]
  },
  {
    "id": "ITS-NET-3.1-010",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select TWO statements that correctly distinguish common Ethernet hub and switch behavior.",
    "options": [
      {
        "id": "c",
        "text": "A switch always creates a separate broadcast domain for every physical port"
      },
      {
        "id": "b",
        "text": "A switch learns source MAC addresses and normally forwards known unicast frames only toward the destination port"
      },
      {
        "id": "d",
        "text": "A hub provides full-duplex dedicated bandwidth to every attached station"
      },
      {
        "id": "a",
        "text": "A hub repeats incoming traffic to its other ports and attached devices share a collision domain"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "Hubs are repeaters that share collision behavior, while switches learn MAC locations and selectively forward known unicast frames. VLANs—not individual switch ports by themselves—define Layer 2 broadcast domains.",
    "distractorExplanations": {
      "c": "A switch port is a separate collision domain, but ports in the same VLAN remain in the same broadcast domain.",
      "d": "Classic hubs are shared, half-duplex repeater devices; they do not provide dedicated full-duplex links."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
    ]
  },
  {
    "id": "ITS-NET-3.1-011",
    "objectiveId": "3.1",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "A switch receives a unicast Ethernet frame on Gi1/0/1 in VLAN 10. The destination MAC address is not yet in the MAC table. What is the normal forwarding action?",
    "options": [
      {
        "id": "c",
        "text": "Flood the frame to all switch ports in every VLAN"
      },
      {
        "id": "d",
        "text": "Send an ARP request to the Internet default gateway before forwarding"
      },
      {
        "id": "b",
        "text": "Drop every unknown unicast frame by default"
      },
      {
        "id": "a",
        "text": "Flood the frame to other forwarding ports in VLAN 10, except the ingress port"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "With normal flood-and-learn Ethernet switching, an unknown unicast destination is flooded to the other forwarding ports in the same VLAN. The switch can later learn locations from source MAC addresses it sees.",
    "distractorExplanations": {
      "b": "Unknown unicast is normally flooded rather than universally dropped.",
      "c": "VLAN boundaries constrain Layer 2 flooding; the frame is not sent into unrelated VLANs.",
      "d": "ARP is an IP-to-MAC resolution mechanism; the switch does not need to query an Internet gateway to flood an unknown Layer 2 destination."
    },
    "tags": [
      "3.1",
      "describe-characteristics-of-switches"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-vlan",
      "cisco-mac",
      "cisco-stp"
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
        "id": "b",
        "text": "static route entered by an admin"
      },
      {
        "id": "c",
        "text": "dynamic route from a protocol only"
      },
      {
        "id": "a",
        "text": "Directly connected route"
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
      "b": "Incorrect. A static route is manually configured. The stem instead calls for Directly connected route.",
      "c": "Incorrect. That limitation is not valid here. The stem is testing Directly connected route; the cited choice either describes a different function or adds an unsupported restriction.",
      "d": "Incorrect. That limitation is not valid here. The stem is testing Directly connected route; the cited choice either describes a different function or adds an unsupported restriction."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
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
        "id": "d",
        "text": "A route manually configured by an administrator"
      },
      {
        "id": "c",
        "text": "a DNS PTR record"
      },
      {
        "id": "b",
        "text": "a MAC table entry"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Static routes are explicitly configured rather than dynamically learned.",
    "distractorExplanations": {
      "a": "Incorrect. Dynamic routing protocols exchange reachability and adapt to topology changes. The stem instead calls for A route manually configured by an administrator.",
      "b": "Incorrect. A switch MAC/CAM table maps learned MAC addresses to switch ports. The stem instead calls for A route manually configured by an administrator.",
      "c": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for A route manually configured by an administrator."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
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
        "id": "d",
        "text": "assign hostnames"
      },
      {
        "id": "a",
        "text": "test copper continuity"
      },
      {
        "id": "c",
        "text": "Exchange reachability information and adapt routes as topology changes"
      },
      {
        "id": "b",
        "text": "encrypt RDP"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Dynamic routing protocols learn and update paths automatically.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: Dynamic routing protocols learn and update paths automatically. The correct answer is Exchange reachability information and adapt routes as topology changes.",
      "b": "Incorrect. RDP is Microsoft’s Remote Desktop Protocol and commonly uses TCP 3389 by default. The stem instead calls for Exchange reachability information and adapt routes as topology changes.",
      "d": "Incorrect. Hostname prints the local system name. The stem instead calls for Exchange reachability information and adapt routes as topology changes."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
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
        "id": "d",
        "text": "a VLAN access port"
      },
      {
        "id": "c",
        "text": "a route only to 127.0.0.1"
      },
      {
        "id": "b",
        "text": "A catch-all route used when no more specific route matches"
      },
      {
        "id": "a",
        "text": "a DNS root server record"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "The default route is the least-specific fallback route, commonly /0.",
    "distractorExplanations": {
      "a": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for A catch-all route used when no more specific route matches.",
      "c": "Incorrect. That limitation is not valid here. The stem is testing A catch-all route used when no more specific route matches; the cited choice either describes a different function or adds an unsupported restriction.",
      "d": "Incorrect. An access port normally carries one access VLAN toward an endpoint. The stem instead calls for A catch-all route used when no more specific route matches."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
    ]
  },
  {
    "id": "ITS-NET-3.2-005",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "A router must forward a packet to 10.20.4.8. Which route from the table is selected?",
    "context": "Destination       Next hop\n0.0.0.0/0         192.0.2.1\n10.0.0.0/8        192.0.2.2\n10.20.0.0/16      192.0.2.3",
    "options": [
      {
        "id": "c",
        "text": "10.20.0.0/16 via 192.0.2.3"
      },
      {
        "id": "a",
        "text": "0.0.0.0/0 via 192.0.2.1"
      },
      {
        "id": "b",
        "text": "10.0.0.0/8 via 192.0.2.2"
      },
      {
        "id": "d",
        "text": "The router must use all three routes equally"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "All three prefixes match 10.20.4.8, but /16 is the longest (most specific) matching prefix, so it is preferred for forwarding.",
    "distractorExplanations": {
      "a": "The default route is used only when no more-specific matching route is preferred.",
      "b": "10.0.0.0/8 matches, but it is less specific than 10.20.0.0/16.",
      "d": "Equal use is not implied; longest-prefix match selects the most specific route."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
    ]
  },
  {
    "id": "ITS-NET-3.2-006",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A small business has one public IPv4 address. Internet users must reach an internal HTTPS server at 192.168.10.20 when they connect to the public address on TCP 443. Which router feature is required?",
    "options": [
      {
        "id": "a",
        "text": "Port forwarding/static destination mapping for TCP 443"
      },
      {
        "id": "d",
        "text": "A Layer 2 access port"
      },
      {
        "id": "b",
        "text": "A DNS PTR record only"
      },
      {
        "id": "c",
        "text": "Spanning Tree Protocol"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Port forwarding maps traffic arriving on a specific public address/port to an internal host/service. Firewall policy must also permit the traffic.",
    "distractorExplanations": {
      "b": "PTR records support reverse DNS and do not forward inbound connections.",
      "c": "STP prevents Layer 2 loops and is unrelated to publishing an internal service.",
      "d": "An access port places a switch endpoint in a VLAN; it does not perform Internet port forwarding."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
    ]
  },
  {
    "id": "ITS-NET-3.2-007",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "During large file transfers, VoIP calls become choppy because the WAN link is congested. Which router capability is designed to give delay-sensitive voice traffic preferential treatment?",
    "options": [
      {
        "id": "d",
        "text": "DNS CNAME records"
      },
      {
        "id": "c",
        "text": "Spanning Tree Protocol"
      },
      {
        "id": "b",
        "text": "ARP cache aging"
      },
      {
        "id": "a",
        "text": "Quality of Service (QoS)"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "QoS classifies and manages traffic so important delay-sensitive flows can receive appropriate priority or bandwidth treatment during congestion.",
    "distractorExplanations": {
      "b": "ARP cache aging concerns local IP-to-MAC mappings, not WAN traffic prioritization.",
      "c": "STP controls Layer 2 topology loops.",
      "d": "CNAME records create DNS aliases and do not schedule network traffic."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
    ]
  },
  {
    "id": "ITS-NET-3.2-008",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Accounting and guest devices are placed in different VLANs and IP subnets. Policy requires traffic between them to pass through a Layer 3 device where rules can be applied. What design concept is being used?",
    "options": [
      {
        "id": "a",
        "text": "Network segmentation"
      },
      {
        "id": "d",
        "text": "Wireless ad hoc mode"
      },
      {
        "id": "b",
        "text": "A single collision domain"
      },
      {
        "id": "c",
        "text": "Peer-to-peer file sharing"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Network segmentation separates networks/broadcast domains and forces inter-segment traffic through routing/policy boundaries where controls can be applied.",
    "distractorExplanations": {
      "b": "Segmentation reduces rather than creates one shared collision domain.",
      "c": "Peer-to-peer is an application/resource-sharing model, not network segmentation.",
      "d": "Ad hoc describes direct wireless peers and does not describe routed subnet separation."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
    ]
  },
  {
    "id": "ITS-NET-3.2-009",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "A routed link fails. Neighboring routers exchange routing updates, calculate alternate paths, and eventually agree on stable reachable routes. What has occurred when the routing information stabilizes?",
    "options": [
      {
        "id": "d",
        "text": "MAC learning"
      },
      {
        "id": "a",
        "text": "Convergence"
      },
      {
        "id": "c",
        "text": "NAT overload"
      },
      {
        "id": "b",
        "text": "Broadcast flooding"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Routing convergence is the process/state in which routers update and settle on consistent usable routes after a topology change.",
    "distractorExplanations": {
      "b": "Broadcast flooding is a Layer 2 forwarding behavior.",
      "c": "NAT overload/PAT translates many sessions through fewer public addresses.",
      "d": "MAC learning is a switch function, not a routing-protocol stabilization process."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
    ]
  },
  {
    "id": "ITS-NET-3.2-010",
    "objectiveId": "3.2",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "All traffic between a branch LAN and the Internet must traverse one low-performance router. CPU utilization reaches 100% and throughput collapses even though the access links are faster. What router characteristic does this demonstrate?",
    "options": [
      {
        "id": "b",
        "text": "The router has created an Ethernet loop"
      },
      {
        "id": "d",
        "text": "The router automatically disables subnetting"
      },
      {
        "id": "c",
        "text": "The router is functioning as a DNS alias"
      },
      {
        "id": "a",
        "text": "The router can become a network bottleneck"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A router through which all traffic must pass can become a bottleneck when its forwarding capacity is below the offered traffic load.",
    "distractorExplanations": {
      "b": "An Ethernet loop is a Layer 2 topology problem and is not implied by CPU saturation on the router.",
      "c": "DNS aliases are CNAME records, not router forwarding behavior.",
      "d": "Subnetting is an addressing design and is not automatically disabled by high load."
    },
    "tags": [
      "3.2",
      "describe-characteristics-of-routers"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-routing"
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
        "id": "b",
        "text": "unshielded twisted pair"
      },
      {
        "id": "a",
        "text": "Fiber-optic cable"
      },
      {
        "id": "d",
        "text": "CAT5 UTP"
      },
      {
        "id": "c",
        "text": "coaxial copper only"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Fiber carries optical signals and is resistant to EMI.",
    "distractorExplanations": {
      "b": "Incorrect. This choice conflicts with the defining fact in the item: Fiber carries optical signals and is resistant to EMI. The correct answer is Fiber-optic cable.",
      "c": "Incorrect. That limitation is not valid here. The stem is testing Fiber-optic cable; the cited choice either describes a different function or adds an unsupported restriction.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: Fiber carries optical signals and is resistant to EMI. The correct answer is Fiber-optic cable."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-auto-mdix",
      "cisco-cabling"
    ]
  },
  {
    "id": "ITS-NET-3.3-002",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A copper Ethernet run must pass near motors and other sources of electromagnetic noise. Which cable characteristic can help reduce external interference pickup?",
    "options": [
      {
        "id": "b",
        "text": "Removing all twists from the pairs"
      },
      {
        "id": "a",
        "text": "Shielded twisted pair (STP)"
      },
      {
        "id": "d",
        "text": "Replacing copper with a DNS server"
      },
      {
        "id": "c",
        "text": "Using an unshielded cable solely because it is thinner"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "STP adds shielding around the pairs/cable to improve resistance to electromagnetic interference. Twisting itself also helps control noise and crosstalk.",
    "distractorExplanations": {
      "b": "Twisting helps reject interference and reduce crosstalk; removing twists makes performance worse.",
      "c": "UTP may work in many environments, but shielding is the characteristic specifically intended to improve EMI resistance.",
      "d": "DNS is a network service, not a physical transmission medium."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-auto-mdix",
      "cisco-cabling"
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
        "id": "d",
        "text": "IPv6 abbreviation"
      },
      {
        "id": "c",
        "text": "Crosstalk and electromagnetic interference"
      },
      {
        "id": "b",
        "text": "DNS recursion"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Twisted pairs reduce electromagnetic coupling and crosstalk.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: Twisted pairs reduce electromagnetic coupling and crosstalk. The correct answer is Crosstalk and electromagnetic interference.",
      "b": "Incorrect. DNS resolves names and stores resource records; it is not a physical-layer diagnostic. The stem instead calls for Crosstalk and electromagnetic interference.",
      "d": "Incorrect. This choice conflicts with the defining fact in the item: Twisted pairs reduce electromagnetic coupling and crosstalk. The correct answer is Crosstalk and electromagnetic interference."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-auto-mdix",
      "cisco-cabling"
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
        "id": "c",
        "text": "only fiber OS1/OS2"
      },
      {
        "id": "d",
        "text": "RDP and SSH"
      },
      {
        "id": "a",
        "text": "3G through 5G"
      },
      {
        "id": "b",
        "text": "CAT5 through CAT7"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "CAT5-CAT7 are categories of balanced twisted-pair cabling.",
    "distractorExplanations": {
      "a": "Incorrect. This choice conflicts with the defining fact in the item: CAT5-CAT7 are categories of balanced twisted-pair cabling. The correct answer is CAT5 through CAT7.",
      "c": "Incorrect. That limitation is not valid here. The stem is testing CAT5 through CAT7; the cited choice either describes a different function or adds an unsupported restriction.",
      "d": "Incorrect. RDP is Microsoft’s Remote Desktop Protocol and commonly uses TCP 3389 by default. The stem instead calls for CAT5 through CAT7."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-auto-mdix",
      "cisco-cabling"
    ]
  },
  {
    "id": "ITS-NET-3.3-005",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Two older switches without auto-MDI-X must be connected directly with copper Ethernet. Which legacy wiring choice is expected?",
    "options": [
      {
        "id": "b",
        "text": "Straight-through cable"
      },
      {
        "id": "a",
        "text": "Crossover cable"
      },
      {
        "id": "c",
        "text": "Single-mode fiber only"
      },
      {
        "id": "d",
        "text": "Coaxial WAN cable"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Before auto-MDI-X became common, like Ethernet devices such as switch-to-switch links typically required crossover wiring so transmit and receive pairs were crossed.",
    "distractorExplanations": {
      "b": "Straight-through was the classic choice for unlike roles such as endpoint-to-switch; auto-MDI-X on modern devices often removes this practical distinction.",
      "c": "Fiber may be used when interfaces support it, but the question asks the legacy copper wiring choice.",
      "d": "Coaxial WAN cable is not the described twisted-pair Ethernet connection."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-auto-mdix",
      "cisco-cabling"
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
        "id": "d",
        "text": "Straight-through Ethernet cable"
      },
      {
        "id": "c",
        "text": "satellite coax feed only"
      },
      {
        "id": "b",
        "text": "OTDR fiber trace"
      },
      {
        "id": "a",
        "text": "crossover in every case"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Straight-through cabling was the conventional endpoint-to-switch wiring pattern.",
    "distractorExplanations": {
      "a": "Incorrect. A crossover cable historically connects like MDI/MDI-X roles when auto-MDI-X is unavailable. The stem instead calls for Straight-through Ethernet cable.",
      "b": "Incorrect. Fiber carries light, is immune to EMI, and supports long distances/high bandwidth. The stem instead calls for Straight-through Ethernet cable.",
      "c": "Incorrect. That limitation is not valid here. The stem is testing Straight-through Ethernet cable; the cited choice either describes a different function or adds an unsupported restriction."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-auto-mdix",
      "cisco-cabling"
    ]
  },
  {
    "id": "ITS-NET-3.3-007",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A technician proposes a 180-meter horizontal copper Ethernet run using ordinary twisted-pair Ethernet equipment designed for a 100-meter channel. What is the primary concern?",
    "options": [
      {
        "id": "b",
        "text": "IP addresses cannot be used on cables longer than 100 meters"
      },
      {
        "id": "a",
        "text": "The segment exceeds the normal design distance and may not meet Ethernet performance requirements"
      },
      {
        "id": "d",
        "text": "DNS will stop returning AAAA records"
      },
      {
        "id": "c",
        "text": "The cable will automatically become single-mode fiber"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Media standards have maximum segment/channel lengths. A run beyond the supported length can suffer excessive attenuation/timing problems and should use an appropriate design such as an intermediate switch or suitable fiber.",
    "distractorExplanations": {
      "b": "IP addressing is independent of cable length; the physical link must simply meet its media specifications.",
      "c": "Copper does not transform into fiber because it is long.",
      "d": "DNS record behavior is unrelated to physical copper segment length."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-auto-mdix",
      "cisco-cabling"
    ]
  },
  {
    "id": "ITS-NET-3.3-008",
    "objectiveId": "3.3",
    "domainId": "3",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select TWO statements that correctly compare fiber-optic and twisted-pair copper media.",
    "options": [
      {
        "id": "a",
        "text": "Fiber is immune to electromagnetic interference because it carries optical signals"
      },
      {
        "id": "b",
        "text": "Copper twisted-pair can be affected by EMI/crosstalk, with shielding/twisting used to reduce susceptibility"
      },
      {
        "id": "c",
        "text": "Fiber normally carries Ethernet by sending electrical voltage down the glass"
      },
      {
        "id": "d",
        "text": "Copper cannot carry full-duplex Ethernet"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "Fiber uses light and is immune to EMI, while copper uses electrical signaling and can be affected by EMI/crosstalk. Twisting and optional shielding help reduce those effects.",
    "distractorExplanations": {
      "c": "Fiber carries optical rather than electrical signals through the glass.",
      "d": "Modern switched copper Ethernet commonly operates full-duplex."
    },
    "tags": [
      "3.3",
      "describe-characteristics-of-physical-media"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-auto-mdix",
      "cisco-cabling"
    ]
  },
  {
    "id": "ITS-NET-4.1-001",
    "objectiveId": "4.1",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select THREE correct OSI layer/function associations.",
    "options": [
      {
        "id": "a",
        "text": "Layer 1 Physical — signals, connectors, and media"
      },
      {
        "id": "d",
        "text": "Layer 3 Network — Ethernet MAC-table learning"
      },
      {
        "id": "c",
        "text": "Layer 6 Presentation — data representation/encryption/compression concepts"
      },
      {
        "id": "b",
        "text": "Layer 4 Transport — TCP/UDP and end-to-end transport"
      }
    ],
    "correctOptionIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Physical covers the transmission medium/signals, Transport contains TCP/UDP and end-to-end delivery functions, and Presentation models representation/encoding/encryption/compression. MAC-table learning is a Data Link (Layer 2) function.",
    "distractorExplanations": {
      "d": "Ethernet MAC switching belongs at Layer 2 Data Link, not Layer 3."
    },
    "tags": [
      "4.1",
      "describe-the-osi-model"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-arp"
    ]
  },
  {
    "id": "ITS-NET-4.1-002",
    "objectiveId": "4.1",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A workstation has link lights and can exchange Ethernet frames locally, but it has an incorrect IP default gateway and cannot reach remote networks. Which OSI layer is the primary configuration problem?",
    "options": [
      {
        "id": "b",
        "text": "Layer 2 Data Link"
      },
      {
        "id": "a",
        "text": "Layer 1 Physical"
      },
      {
        "id": "d",
        "text": "Layer 7 Application"
      },
      {
        "id": "c",
        "text": "Layer 3 Network"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "IP addressing, default gateways, and routing are Network-layer (Layer 3) functions. The working link and local Ethernet communication indicate the lower layers are functioning.",
    "distractorExplanations": {
      "a": "Physical connectivity is present because link is up and frames can be exchanged.",
      "b": "Local Ethernet frame delivery works, so the described fault is not primarily Layer 2.",
      "d": "The failure occurs at IP routing before an application-layer service is reached."
    },
    "tags": [
      "4.1",
      "describe-the-osi-model"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-arp"
    ]
  },
  {
    "id": "ITS-NET-4.1-003",
    "objectiveId": "4.1",
    "domainId": "4",
    "type": "command-output",
    "difficulty": "medium",
    "prompt": "The table below is from a switch. Which OSI layer does the address used for the forwarding decision belong to?",
    "context": "Vlan   Mac Address       Ports\n10     00aa.bbcc.0011    Gi1/0/4\n10     00aa.bbcc.0022    Gi1/0/9",
    "options": [
      {
        "id": "d",
        "text": "Layer 4 Transport"
      },
      {
        "id": "a",
        "text": "Layer 1 Physical"
      },
      {
        "id": "b",
        "text": "Layer 2 Data Link"
      },
      {
        "id": "c",
        "text": "Layer 3 Network"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "The table contains Ethernet MAC addresses, which are Data Link-layer (Layer 2) addresses used for local frame forwarding.",
    "distractorExplanations": {
      "a": "Physical deals with bits/signals/media, not MAC addressing.",
      "c": "Layer 3 uses logical network addressing such as IP.",
      "d": "Layer 4 uses transport protocols and port numbers."
    },
    "tags": [
      "4.1",
      "describe-the-osi-model"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-arp"
    ]
  },
  {
    "id": "ITS-NET-4.1-004",
    "objectiveId": "4.1",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select THREE correct OSI associations.",
    "options": [
      {
        "id": "d",
        "text": "Layer 2 Data Link — TCP and UDP port numbers"
      },
      {
        "id": "b",
        "text": "Layer 5 Session — session/dialog management concepts"
      },
      {
        "id": "c",
        "text": "Layer 3 Network — IP routing"
      },
      {
        "id": "a",
        "text": "Layer 7 Application — network services such as HTTP/DNS"
      }
    ],
    "correctOptionIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Application models services used by applications, Session models dialog/session management, and Network covers logical addressing/routing. TCP/UDP ports belong to the Transport layer.",
    "distractorExplanations": {
      "d": "TCP and UDP are Layer 4 Transport protocols; their ports are transport-layer identifiers."
    },
    "tags": [
      "4.1",
      "describe-the-osi-model"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-arp"
    ]
  },
  {
    "id": "ITS-NET-4.2-001",
    "objectiveId": "4.2",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "In the four-layer TCP/IP model, which layer provides logical internetwork addressing and carries IPv4/IPv6 packets between networks?",
    "options": [
      {
        "id": "d",
        "text": "Link/Network Access"
      },
      {
        "id": "b",
        "text": "Transport"
      },
      {
        "id": "c",
        "text": "Internet"
      },
      {
        "id": "a",
        "text": "Application"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "The Internet layer contains IP and provides internetwork addressing/routing. It broadly corresponds to the OSI Network layer.",
    "distractorExplanations": {
      "a": "Application contains services such as DNS/HTTP/SMTP.",
      "b": "Transport contains TCP/UDP and end-to-end transport.",
      "d": "Link/Network Access handles local-link framing/media access."
    },
    "tags": [
      "4.2",
      "describe-the-tcp/ip-model"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1122"
    ]
  },
  {
    "id": "ITS-NET-4.2-002",
    "objectiveId": "4.2",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO protocols that belong to the TCP/IP Transport layer.",
    "options": [
      {
        "id": "c",
        "text": "IPv4"
      },
      {
        "id": "a",
        "text": "TCP"
      },
      {
        "id": "d",
        "text": "Ethernet"
      },
      {
        "id": "b",
        "text": "UDP"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "TCP and UDP are transport protocols. IPv4 belongs to the Internet layer, and Ethernet is a Link/Network Access technology.",
    "distractorExplanations": {
      "c": "IPv4 is an Internet-layer protocol.",
      "d": "Ethernet belongs to the Link/Network Access layer."
    },
    "tags": [
      "4.2",
      "describe-the-tcp/ip-model"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1122"
    ]
  },
  {
    "id": "ITS-NET-4.2-003",
    "objectiveId": "4.2",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A browser uses HTTPS over TCP. In the TCP/IP model, which pairing is correct?",
    "options": [
      {
        "id": "a",
        "text": "HTTPS = Application; TCP = Transport"
      },
      {
        "id": "c",
        "text": "HTTPS = Transport; TCP = Application"
      },
      {
        "id": "b",
        "text": "HTTPS = Internet; TCP = Link"
      },
      {
        "id": "d",
        "text": "HTTPS = Link; TCP = Internet"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "HTTPS is an application-layer protocol/service, while TCP provides transport for the application data.",
    "distractorExplanations": {
      "b": "HTTPS is not an Internet-layer protocol and TCP is not Link-layer.",
      "c": "The layer assignments are reversed.",
      "d": "Neither assignment is correct."
    },
    "tags": [
      "4.2",
      "describe-the-tcp/ip-model"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1122"
    ]
  },
  {
    "id": "ITS-NET-4.2-004",
    "objectiveId": "4.2",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select TWO correct TCP/IP-to-OSI crosswalk statements.",
    "options": [
      {
        "id": "c",
        "text": "TCP/IP Transport combines OSI Layers 5-7"
      },
      {
        "id": "d",
        "text": "TCP/IP Application is equivalent only to OSI Layer 4"
      },
      {
        "id": "b",
        "text": "TCP/IP Link/Network Access broadly covers OSI Layers 1-2 functions"
      },
      {
        "id": "a",
        "text": "TCP/IP Internet broadly corresponds to OSI Layer 3 Network"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "The Internet layer maps broadly to OSI Network, while Link/Network Access covers local-link and physical-delivery functions. TCP/IP Application absorbs upper-layer functions, and Transport maps to OSI Layer 4.",
    "distractorExplanations": {
      "c": "TCP/IP Transport corresponds broadly to OSI Layer 4, not Layers 5-7.",
      "d": "TCP/IP Application covers upper application/session/presentation-style functions, not OSI Transport."
    },
    "tags": [
      "4.2",
      "describe-the-tcp/ip-model"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1122"
    ]
  },
  {
    "id": "ITS-NET-4.3-001",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A legacy document describes 192.168.50.0 as a Class C network with a default /24 mask. A modern routing table instead lists 192.168.50.0/27. Which statement best explains the difference?",
    "options": [
      {
        "id": "c",
        "text": "A /27 is an IPv6 prefix only"
      },
      {
        "id": "b",
        "text": "Classless addressing cannot subnet Class C space"
      },
      {
        "id": "d",
        "text": "Classful addressing always used /27 for Class C"
      },
      {
        "id": "a",
        "text": "Classful addressing used fixed default masks by class; classless/CIDR addressing carries an explicit prefix length"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Legacy classful addressing associated Class C with a /24 default. CIDR/classless addressing uses explicit prefix lengths such as /27 independent of the old class boundary.",
    "distractorExplanations": {
      "b": "CIDR is specifically what allows flexible prefix lengths/subnetting beyond classful defaults.",
      "c": "/27 is a valid IPv4 CIDR prefix.",
      "d": "The legacy Class C default was /24, not /27."
    },
    "tags": [
      "4.3",
      "describe-ipv4-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1918",
      "rfc3927",
      "rfc4632"
    ]
  },
  {
    "id": "ITS-NET-4.3-002",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select THREE IPv4 addresses that are inside RFC1918 private address space.",
    "options": [
      {
        "id": "a",
        "text": "10.55.1.8"
      },
      {
        "id": "b",
        "text": "172.20.10.5"
      },
      {
        "id": "c",
        "text": "192.168.50.9"
      },
      {
        "id": "d",
        "text": "172.40.10.5"
      }
    ],
    "correctOptionIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "RFC1918 private IPv4 space is 10.0.0.0/8, 172.16.0.0/12 (172.16 through 172.31), and 192.168.0.0/16.",
    "distractorExplanations": {
      "d": "172.40.10.5 is outside 172.16.0.0/12 and is not in RFC1918 private space."
    },
    "tags": [
      "4.3",
      "describe-ipv4-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1918",
      "rfc3927",
      "rfc4632"
    ]
  },
  {
    "id": "ITS-NET-4.3-003",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "subnetting",
    "difficulty": "medium",
    "prompt": "A host has IPv4 address 192.168.10.70 with prefix /26. What is the network address?",
    "options": [
      {
        "id": "c",
        "text": "192.168.10.70"
      },
      {
        "id": "a",
        "text": "192.168.10.0"
      },
      {
        "id": "b",
        "text": "192.168.10.64"
      },
      {
        "id": "d",
        "text": "192.168.10.127"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "/26 is 255.255.255.192, giving a block size of 64 in the last octet. Address 70 falls in the 64-127 block, so the network address is 192.168.10.64.",
    "distractorExplanations": {
      "a": "The 0-63 range is the preceding /26 subnet.",
      "c": "The host address is not the network address.",
      "d": "127 is the broadcast address of this /26 subnet, not its network address."
    },
    "tags": [
      "4.3",
      "describe-ipv4-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1918",
      "rfc3927",
      "rfc4632"
    ]
  },
  {
    "id": "ITS-NET-4.3-004",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "subnetting",
    "difficulty": "hard",
    "prompt": "What is the broadcast address for subnet 10.1.4.128/27?",
    "options": [
      {
        "id": "d",
        "text": "10.1.4.160"
      },
      {
        "id": "c",
        "text": "10.1.4.159"
      },
      {
        "id": "b",
        "text": "10.1.4.143"
      },
      {
        "id": "a",
        "text": "10.1.4.127"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "/27 is 255.255.255.224, a block size of 32. The subnet beginning at .128 spans .128 through .159, so .159 is the broadcast address.",
    "distractorExplanations": {
      "a": ".127 is the broadcast of the preceding /27 subnet.",
      "b": ".143 is a usable address inside the subnet, not the broadcast.",
      "d": ".160 is the network address of the next /27 subnet."
    },
    "tags": [
      "4.3",
      "describe-ipv4-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1918",
      "rfc3927",
      "rfc4632"
    ]
  },
  {
    "id": "ITS-NET-4.3-005",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "subnetting",
    "difficulty": "medium",
    "prompt": "A /28 subnet is used for an ordinary IPv4 LAN. Using the traditional network/broadcast reservation rule, how many usable host addresses are available?",
    "options": [
      {
        "id": "d",
        "text": "30"
      },
      {
        "id": "b",
        "text": "14"
      },
      {
        "id": "c",
        "text": "16"
      },
      {
        "id": "a",
        "text": "8"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "/28 leaves 4 host bits: 2^4 = 16 total addresses. Subtract the network and broadcast addresses to get 14 traditional usable host addresses.",
    "distractorExplanations": {
      "a": "Eight total addresses corresponds to /29, not /28.",
      "c": "Sixteen is the total address count before reserving network and broadcast.",
      "d": "Thirty traditional usable hosts corresponds to /27."
    },
    "tags": [
      "4.3",
      "describe-ipv4-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1918",
      "rfc3927",
      "rfc4632"
    ]
  },
  {
    "id": "ITS-NET-4.3-006",
    "objectiveId": "4.3",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "A PC is configured as 192.168.40.25/24 with default gateway 192.168.40.1. Select TWO correct statements.",
    "options": [
      {
        "id": "b",
        "text": "Traffic to 192.168.50.90 is off-subnet and is sent toward the default gateway"
      },
      {
        "id": "c",
        "text": "169.254.10.20 is an RFC1918 private address"
      },
      {
        "id": "a",
        "text": "Traffic to 192.168.40.90 is on the same subnet and can be delivered locally after Layer 2 address resolution"
      },
      {
        "id": "d",
        "text": "A socket is only a MAC address with no port information"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "With /24, 192.168.40.x addresses share the local subnet. A destination in 192.168.50.0/24 is remote, so the host forwards toward its default gateway. IPv4 link-local 169.254/16 is not RFC1918, and a socket endpoint combines an IP address with a transport port.",
    "distractorExplanations": {
      "c": "169.254.0.0/16 is IPv4 link-local/APIPA space, not RFC1918 private space.",
      "d": "A network socket endpoint is commonly identified by an IP address plus a transport port number."
    },
    "tags": [
      "4.3",
      "describe-ipv4-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1918",
      "rfc3927",
      "rfc4632"
    ]
  },
  {
    "id": "ITS-NET-4.4-001",
    "objectiveId": "4.4",
    "domainId": "4",
    "type": "single-choice",
    "difficulty": "medium",
    "prompt": "Which is the best compressed form of 2001:0db8:0000:0000:0000:0000:0000:0042?",
    "options": [
      {
        "id": "d",
        "text": "2001:0db8::0000::0042"
      },
      {
        "id": "a",
        "text": "2001:db8::42"
      },
      {
        "id": "b",
        "text": "2001::db8::42"
      },
      {
        "id": "c",
        "text": "2001:db8:0:0:0:0:0:0042:0"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Leading zeros can be removed, and one contiguous run of zero hextets can be compressed with a single ::. Therefore 2001:db8::42 is valid and concise.",
    "distractorExplanations": {
      "b": "An IPv6 address cannot contain two :: compression markers.",
      "c": "This form has the wrong number/placement of hextets.",
      "d": "It uses :: more than once, which is invalid."
    },
    "tags": [
      "4.4",
      "describe-ipv6-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc4291",
      "rfc5952"
    ]
  },
  {
    "id": "ITS-NET-4.4-002",
    "objectiveId": "4.4",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select THREE correct IPv6 address/group mappings.",
    "options": [
      {
        "id": "b",
        "text": "FE80::/10 — link-local"
      },
      {
        "id": "c",
        "text": "FF02::1 — all nodes on the local link"
      },
      {
        "id": "a",
        "text": "::1 — loopback"
      },
      {
        "id": "d",
        "text": "FF02::2 — all end-user hosts only, excluding routers"
      }
    ],
    "correctOptionIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "IPv6 loopback is ::1, link-local addresses are FE80::/10, and FF02::1 is the all-nodes multicast group on the local link. FF02::2 is the all-routers local-link group.",
    "distractorExplanations": {
      "d": "FF02::2 identifies all routers on the local link, not all end-user hosts."
    },
    "tags": [
      "4.4",
      "describe-ipv6-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc4291",
      "rfc5952"
    ]
  },
  {
    "id": "ITS-NET-4.4-003",
    "objectiveId": "4.4",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct statements about IPv6.",
    "options": [
      {
        "id": "b",
        "text": "An IPv6 socket can combine an IPv6 address with a transport port"
      },
      {
        "id": "c",
        "text": "FE80::/10 is a globally routable public prefix"
      },
      {
        "id": "a",
        "text": "IPv6 uses multicast rather than an IPv4-style broadcast address"
      },
      {
        "id": "d",
        "text": "IPv6 addresses are 32 bits long"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "IPv6 has no broadcast address and uses multicast for group delivery. Socket concepts still combine an IP address with a transport-layer port. Link-local FE80::/10 is not globally routed, and IPv6 addresses are 128 bits.",
    "distractorExplanations": {
      "c": "FE80::/10 is link-local and is not routed beyond the local link.",
      "d": "IPv6 addresses are 128 bits, not 32."
    },
    "tags": [
      "4.4",
      "describe-ipv6-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc4291",
      "rfc5952"
    ]
  },
  {
    "id": "ITS-NET-4.4-004",
    "objectiveId": "4.4",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "An organization enables both IPv4 and IPv6 natively on its hosts and routers during migration. A different remote site later carries IPv6 packets through an IPv4-only provider path by encapsulating them. Which TWO transition concepts are being used?",
    "options": [
      {
        "id": "b",
        "text": "Tunneling"
      },
      {
        "id": "a",
        "text": "Dual stack"
      },
      {
        "id": "c",
        "text": "Static NAT only"
      },
      {
        "id": "d",
        "text": "WINS"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "Running both protocol families at the same time is dual stack. Encapsulating IPv6 across an IPv4-only portion of the path is tunneling. A tunnel broker may provision such a tunnel but is not required by the first scenario.",
    "distractorExplanations": {
      "c": "Static NAT is an address-translation concept and does not describe these IPv4/IPv6 transition methods.",
      "d": "WINS is a legacy NetBIOS name-resolution service."
    },
    "tags": [
      "4.4",
      "describe-ipv6-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc4291",
      "rfc5952"
    ]
  },
  {
    "id": "ITS-NET-4.5-001",
    "objectiveId": "4.5",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct web protocol/default-port mappings.",
    "options": [
      {
        "id": "d",
        "text": "HTTPS — TCP 25"
      },
      {
        "id": "a",
        "text": "HTTP — TCP 80"
      },
      {
        "id": "c",
        "text": "HTTP — TCP 22"
      },
      {
        "id": "b",
        "text": "HTTPS — TCP 443"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "HTTP is conventionally mapped to TCP 80 and HTTPS to TCP 443.",
    "distractorExplanations": {
      "c": "TCP 22 is SSH.",
      "d": "TCP 25 is SMTP."
    },
    "tags": [
      "4.5",
      "identify-well-known-ports"
    ],
    "sourceRefs": [
      "official-objectives",
      "iana-ports"
    ]
  },
  {
    "id": "ITS-NET-4.5-002",
    "objectiveId": "4.5",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select TWO correct remote administration/file-transfer control mappings.",
    "options": [
      {
        "id": "b",
        "text": "FTP control — TCP 21"
      },
      {
        "id": "a",
        "text": "SSH — TCP 22"
      },
      {
        "id": "d",
        "text": "FTP control — TCP 53"
      },
      {
        "id": "c",
        "text": "SSH — TCP 3389"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "SSH uses TCP 22 and FTP control uses TCP 21. Traditional active-mode FTP data commonly uses TCP 20 as supplemental context, but control remains 21.",
    "distractorExplanations": {
      "c": "3389 is the default RDP service port.",
      "d": "53 is DNS, not FTP control."
    },
    "tags": [
      "4.5",
      "identify-well-known-ports"
    ],
    "sourceRefs": [
      "official-objectives",
      "iana-ports"
    ]
  },
  {
    "id": "ITS-NET-4.5-003",
    "objectiveId": "4.5",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "medium",
    "prompt": "Select TWO correct mail protocol/default-port mappings.",
    "options": [
      {
        "id": "d",
        "text": "IMAP — TCP 80"
      },
      {
        "id": "b",
        "text": "IMAP — TCP 143"
      },
      {
        "id": "c",
        "text": "SMTP — TCP 143"
      },
      {
        "id": "a",
        "text": "SMTP — TCP 25"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "SMTP is associated with TCP 25 for standard mail transfer and IMAP with TCP 143 for standard mailbox access.",
    "distractorExplanations": {
      "c": "TCP 143 is IMAP, not standard SMTP.",
      "d": "TCP 80 is HTTP, not IMAP."
    },
    "tags": [
      "4.5",
      "identify-well-known-ports"
    ],
    "sourceRefs": [
      "official-objectives",
      "iana-ports"
    ]
  },
  {
    "id": "ITS-NET-4.5-004",
    "objectiveId": "4.5",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select TWO correct protocol/default-port statements.",
    "options": [
      {
        "id": "d",
        "text": "RDP uses TCP 21 by default"
      },
      {
        "id": "c",
        "text": "DNS uses only TCP 443"
      },
      {
        "id": "b",
        "text": "RDP uses port 3389 by default"
      },
      {
        "id": "a",
        "text": "DNS uses port 53 over UDP and TCP"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "explanation": "DNS uses port 53 with UDP and TCP. Remote Desktop uses 3389 by default (TCP, with modern RDP also able to use UDP).",
    "distractorExplanations": {
      "c": "443 is HTTPS, and DNS is not TCP-only.",
      "d": "TCP 21 is FTP control, not RDP."
    },
    "tags": [
      "4.5",
      "identify-well-known-ports"
    ],
    "sourceRefs": [
      "official-objectives",
      "iana-ports"
    ]
  },
  {
    "id": "ITS-NET-4.6-001",
    "objectiveId": "4.6",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select THREE correct DNS resource-record mappings.",
    "options": [
      {
        "id": "a",
        "text": "A — host name to IPv4 address"
      },
      {
        "id": "b",
        "text": "AAAA — host name to IPv6 address"
      },
      {
        "id": "c",
        "text": "CNAME — alias to a canonical name"
      },
      {
        "id": "d",
        "text": "MX — reverse IPv4 lookup"
      }
    ],
    "correctOptionIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "A maps names to IPv4, AAAA maps names to IPv6, and CNAME creates an alias. MX identifies mail exchangers; reverse lookups normally use PTR.",
    "distractorExplanations": {
      "d": "MX is a mail-exchanger record. PTR is the record associated with reverse lookup."
    },
    "tags": [
      "4.6",
      "describe-name-resolution-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1035",
      "rfc3596",
      "rfc2782",
      "microsoft-dns-client",
      "microsoft-wins"
    ]
  },
  {
    "id": "ITS-NET-4.6-002",
    "objectiveId": "4.6",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select THREE correct DNS resource-record purposes.",
    "options": [
      {
        "id": "c",
        "text": "SRV — service discovery information including a target and port"
      },
      {
        "id": "b",
        "text": "PTR — reverse lookup pointer"
      },
      {
        "id": "d",
        "text": "SOA — alias from one host name to another"
      },
      {
        "id": "a",
        "text": "MX — mail exchanger for a domain"
      }
    ],
    "correctOptionIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "MX identifies mail exchangers, PTR supports reverse lookup, and SRV advertises service-location details such as target and port. SOA stores authoritative zone metadata; CNAME is the alias record.",
    "distractorExplanations": {
      "d": "SOA is Start of Authority/zone metadata, not an alias record."
    },
    "tags": [
      "4.6",
      "describe-name-resolution-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1035",
      "rfc3596",
      "rfc2782",
      "microsoft-dns-client",
      "microsoft-wins"
    ]
  },
  {
    "id": "ITS-NET-4.6-003",
    "objectiveId": "4.6",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "On a Windows client, a hostname has an incorrect entry in the local HOSTS file. The DNS server has the correct A record. What is the most likely result for that hostname on this client?",
    "options": [
      {
        "id": "d",
        "text": "Reverse DNS will automatically repair the HOSTS file"
      },
      {
        "id": "b",
        "text": "The client must ignore HOSTS and always use WINS first"
      },
      {
        "id": "a",
        "text": "The local HOSTS mapping can override the DNS answer for that lookup"
      },
      {
        "id": "c",
        "text": "The client will convert the A record into an MX record"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "HOSTS is a static local hostname mapping and is checked by the Windows resolver before querying DNS for that name. A stale HOSTS entry can therefore cause a client-specific wrong resolution result.",
    "distractorExplanations": {
      "b": "WINS is a legacy NetBIOS name-resolution service; it is not universally used before HOSTS for DNS hostnames.",
      "c": "DNS record types are not automatically converted this way.",
      "d": "Reverse lookup does not edit the local HOSTS file."
    },
    "tags": [
      "4.6",
      "describe-name-resolution-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1035",
      "rfc3596",
      "rfc2782",
      "microsoft-dns-client",
      "microsoft-wins"
    ]
  },
  {
    "id": "ITS-NET-4.6-004",
    "objectiveId": "4.6",
    "domainId": "4",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "A PC can reach a DNS server by IP, but the lookup below fails. Which conclusion is best supported by the output?",
    "context": "C:\\> nslookup app.example.test 192.0.2.53\nServer:  dns1.example.test\nAddress: 192.0.2.53\n\n*** dns1.example.test can't find app.example.test: Non-existent domain",
    "options": [
      {
        "id": "b",
        "text": "The Ethernet cable is definitely disconnected"
      },
      {
        "id": "d",
        "text": "The PC must be using an incorrect subnet mask because NXDOMAIN always means routing failure"
      },
      {
        "id": "a",
        "text": "IP connectivity to the DNS server exists, but DNS has no answer for the queried name as shown"
      },
      {
        "id": "c",
        "text": "The local TCP/IP stack is definitely corrupt"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "The DNS server responded and returned NXDOMAIN, so the query reached DNS successfully but the requested name does not exist in DNS as queried (or is being negatively answered by that resolver). This differs from a DNS timeout/no response.",
    "distractorExplanations": {
      "b": "The server replied, which demonstrates that the path was not simply disconnected.",
      "c": "A functioning DNS exchange does not support a conclusion that the local TCP/IP stack is corrupt.",
      "d": "NXDOMAIN is a DNS response status, not proof of a subnet-mask/routing failure."
    },
    "tags": [
      "4.6",
      "describe-name-resolution-concepts"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc1035",
      "rfc3596",
      "rfc2782",
      "microsoft-dns-client",
      "microsoft-wins"
    ]
  },
  {
    "id": "ITS-NET-4.7-001",
    "objectiveId": "4.7",
    "domainId": "4",
    "type": "command-output",
    "difficulty": "medium",
    "prompt": "A new DHCP client has no address and begins the standard DHCP lease exchange. Which message order is correct?",
    "context": "Client has just joined the LAN and has no usable IPv4 lease yet.",
    "options": [
      {
        "id": "d",
        "text": "Discover → Request → Offer → Acknowledge"
      },
      {
        "id": "c",
        "text": "Request → Offer → Discover → Acknowledge"
      },
      {
        "id": "b",
        "text": "Offer → Discover → Acknowledge → Request"
      },
      {
        "id": "a",
        "text": "Discover → Offer → Request → Acknowledge"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "The common DHCP lease shorthand is DORA: Discover, Offer, Request, Acknowledge.",
    "distractorExplanations": {
      "b": "The server cannot normally offer before the new client initiates discovery in this basic exchange.",
      "c": "The order begins with Discover, not Request.",
      "d": "Offer precedes the client Request in the normal DORA sequence."
    },
    "tags": [
      "4.7",
      "identify-roles-of-networking-services"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc2131",
      "rfc3022"
    ]
  },
  {
    "id": "ITS-NET-4.7-002",
    "objectiveId": "4.7",
    "domainId": "4",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select THREE correct NAT statements.",
    "options": [
      {
        "id": "c",
        "text": "PAT/NAPT can let many private sessions share one public address by translating port identifiers"
      },
      {
        "id": "a",
        "text": "Static NAT provides a stable one-to-one mapping"
      },
      {
        "id": "b",
        "text": "Dynamic NAT can choose a public address from an available pool"
      },
      {
        "id": "d",
        "text": "NAT is the same security function as a stateful firewall"
      }
    ],
    "correctOptionIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Static NAT is fixed one-to-one, dynamic NAT allocates mappings from a pool, and PAT/NAPT multiplexes many sessions using address/port translation. NAT and firewalling are distinct functions even when implemented on the same device.",
    "distractorExplanations": {
      "d": "A firewall enforces traffic policy/state; NAT performs translation. One device may do both, but the functions are not equivalent."
    },
    "tags": [
      "4.7",
      "identify-roles-of-networking-services"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc2131",
      "rfc3022"
    ]
  },
  {
    "id": "ITS-NET-4.7-003",
    "objectiveId": "4.7",
    "domainId": "4",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "A public-to-private port-forward rule exists for TCP 443 to an internal web server, but the perimeter firewall rule denies inbound TCP 443. What happens to a new Internet connection attempt?",
    "options": [
      {
        "id": "b",
        "text": "The NAT rule automatically overrides the firewall deny"
      },
      {
        "id": "d",
        "text": "DNS creates a new firewall allow rule"
      },
      {
        "id": "c",
        "text": "DHCP converts the connection to UDP"
      },
      {
        "id": "a",
        "text": "The connection is blocked by firewall policy even though a translation rule exists"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Address/port translation does not automatically grant permission through a firewall. The traffic must satisfy both the translation configuration and the firewall policy.",
    "distractorExplanations": {
      "b": "NAT and firewall policy are separate functions; translation does not necessarily override an explicit deny.",
      "c": "DHCP assigns host configuration and does not change an HTTPS connection into UDP.",
      "d": "DNS resolves names and does not create firewall rules."
    },
    "tags": [
      "4.7",
      "identify-roles-of-networking-services"
    ],
    "sourceRefs": [
      "official-objectives",
      "rfc2131",
      "rfc3022"
    ]
  },
  {
    "id": "ITS-NET-5.1-001",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A user reports, “The network is down.” Before changing any settings, what should the technician do first?",
    "options": [
      {
        "id": "c",
        "text": "Replace the router immediately"
      },
      {
        "id": "b",
        "text": "Factory-reset the nearest switch"
      },
      {
        "id": "d",
        "text": "Change DNS, DHCP, and VLAN settings at the same time"
      },
      {
        "id": "a",
        "text": "Define the problem and scope by gathering symptoms, affected users/devices, timing, and recent changes"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Structured troubleshooting begins by identifying and scoping the problem. Evidence about what works, what fails, who is affected, and what changed prevents random disruptive fixes.",
    "distractorExplanations": {
      "b": "Resetting infrastructure before collecting evidence can cause unnecessary disruption and destroy useful state.",
      "c": "Replacing hardware without evidence is premature.",
      "d": "Making multiple unrelated changes at once makes root-cause analysis and rollback much harder."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-troubleshooting"
    ]
  },
  {
    "id": "ITS-NET-5.1-002",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "Only one employee cannot access a shared server; nearby coworkers on the same VLAN can. What is the best next troubleshooting approach?",
    "options": [
      {
        "id": "a",
        "text": "Compare the affected host with a known-good host and test the most likely local causes"
      },
      {
        "id": "c",
        "text": "Immediately rebuild every switch VLAN"
      },
      {
        "id": "b",
        "text": "Assume the entire WAN provider is down"
      },
      {
        "id": "d",
        "text": "Tell the user the server is definitely broken"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "The limited scope strongly suggests checking host-specific configuration/connectivity and comparing against a known-good peer before escalating to network-wide causes.",
    "distractorExplanations": {
      "b": "A WAN outage would normally affect more than one local user when peers can reach the same server.",
      "c": "Rebuilding VLANs is disproportionate and risky without evidence.",
      "d": "The evidence does not establish a server failure because other users can reach it."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-troubleshooting"
    ]
  },
  {
    "id": "ITS-NET-5.1-003",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "A technician tests a theory and confirms that a planned switch configuration change will restore service, but the change could briefly disconnect an entire department. What should happen before implementation?",
    "options": [
      {
        "id": "a",
        "text": "Assess impact, obtain appropriate authorization/change window, and prepare rollback"
      },
      {
        "id": "b",
        "text": "Apply the change immediately without telling anyone"
      },
      {
        "id": "c",
        "text": "Delete the current configuration so rollback is impossible"
      },
      {
        "id": "d",
        "text": "Make several additional unrelated changes at the same time"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A confirmed theory is followed by a controlled implementation plan. Risky production changes should consider impact, authorization, timing, and a rollback path.",
    "distractorExplanations": {
      "b": "Skipping communication/authorization can create avoidable business impact.",
      "c": "Removing rollback capability increases risk.",
      "d": "Unrelated simultaneous changes reduce causal clarity and complicate recovery."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-troubleshooting"
    ]
  },
  {
    "id": "ITS-NET-5.1-004",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A configuration change completes successfully and the original user can now open one website. What should the technician do before declaring the incident resolved?",
    "options": [
      {
        "id": "b",
        "text": "Assume success because the command returned no error"
      },
      {
        "id": "c",
        "text": "Erase all logs immediately"
      },
      {
        "id": "a",
        "text": "Verify full expected functionality and check for related side effects"
      },
      {
        "id": "d",
        "text": "Disable monitoring to prevent further alerts"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Verification must confirm the original service and relevant related functionality, not merely that a command executed or one narrow test passed.",
    "distractorExplanations": {
      "b": "A successful command is not proof that end-to-end service is restored.",
      "c": "Logs can be important evidence/documentation.",
      "d": "Disabling monitoring would reduce visibility rather than verify service."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-troubleshooting"
    ]
  },
  {
    "id": "ITS-NET-5.1-005",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "After restoring service, which documentation is most useful for future support?",
    "options": [
      {
        "id": "d",
        "text": "No documentation if the fix worked"
      },
      {
        "id": "a",
        "text": "Symptoms/scope, root cause, actions taken, verification, and follow-up/prevention"
      },
      {
        "id": "b",
        "text": "Only the technician’s name"
      },
      {
        "id": "c",
        "text": "Only the final command with no context"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Good troubleshooting documentation records what happened, why, what was changed, and how restoration was verified so future incidents can be handled more efficiently.",
    "distractorExplanations": {
      "b": "The technician identity alone does not capture technical learning.",
      "c": "A command without context does not explain cause, impact, or outcome.",
      "d": "Successful incidents still benefit from documentation and knowledge capture."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-troubleshooting"
    ]
  },
  {
    "id": "ITS-NET-5.1-006",
    "objectiveId": "5.1",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A frustrated employee demands the administrator password so they can “fix it themselves” during an outage. What is the most professional response?",
    "options": [
      {
        "id": "d",
        "text": "Promise an exact restoration time even though the cause is unknown"
      },
      {
        "id": "a",
        "text": "Do not disclose credentials; explain the troubleshooting status calmly and provide realistic updates"
      },
      {
        "id": "c",
        "text": "Blame another team before investigating"
      },
      {
        "id": "b",
        "text": "Share the password because the user is upset"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Professional conduct includes protecting credentials/confidential information, communicating respectfully, avoiding blame, and setting realistic expectations.",
    "distractorExplanations": {
      "b": "Administrative credentials must not be disclosed simply to satisfy a frustrated user.",
      "c": "Blame is unprofessional and unsupported without evidence.",
      "d": "An unsupported exact promise creates false expectations."
    },
    "tags": [
      "5.1",
      "apply-troubleshooting-process-in-a-small-medium-business-network"
    ],
    "sourceRefs": [
      "official-objectives",
      "cisco-troubleshooting"
    ]
  },
  {
    "id": "ITS-NET-5.2-001",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "medium",
    "prompt": "An Ethernet cable tester reports the wiremap below. Which tool is being used for the appropriate task?",
    "context": "Pair 1-2: PASS\nPair 3-6: OPEN\nPair 4-5: PASS\nPair 7-8: PASS",
    "options": [
      {
        "id": "d",
        "text": "tracert"
      },
      {
        "id": "c",
        "text": "nslookup"
      },
      {
        "id": "a",
        "text": "Cable tester"
      },
      {
        "id": "b",
        "text": "OTDR"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A cable tester checks copper continuity/wiremap and can reveal opens, shorts, reversals, and other termination faults depending on the model.",
    "distractorExplanations": {
      "b": "An OTDR analyzes optical fiber, not an RJ-45 copper wiremap.",
      "c": "nslookup is a DNS software tool.",
      "d": "tracert is a Layer 3 path-tracing command."
    },
    "tags": [
      "5.2",
      "use-appropriate-hardware-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "fluke-telecom",
      "fluke-otdr"
    ]
  },
  {
    "id": "ITS-NET-5.2-002",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A patch panel has 60 unlabeled copper cables. You need to identify which cable terminates at wall jack 3B without disconnecting every cable. Which tool is most appropriate?",
    "options": [
      {
        "id": "d",
        "text": "Multimeter"
      },
      {
        "id": "c",
        "text": "OTDR"
      },
      {
        "id": "a",
        "text": "Toner and probe"
      },
      {
        "id": "b",
        "text": "TDR"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A toner injects a traceable signal onto a copper cable and a probe helps locate that specific cable in a bundle or patch panel.",
    "distractorExplanations": {
      "b": "A TDR locates copper faults by distance; it is not primarily for identifying one unlabeled cable among many.",
      "c": "An OTDR is for fiber events/faults.",
      "d": "A multimeter measures electrical quantities and is not the normal cable-identification tool."
    },
    "tags": [
      "5.2",
      "use-appropriate-hardware-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "fluke-telecom",
      "fluke-otdr"
    ]
  },
  {
    "id": "ITS-NET-5.2-003",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "A copper cable fails intermittently. A TDR reports a strong reflection approximately 37 meters from the tester. What should the technician investigate?",
    "context": "TDR result\nPair: 1-2\nEstimated event distance: 37 m\nReflection: high",
    "options": [
      {
        "id": "a",
        "text": "A copper fault/impedance discontinuity near 37 meters from the test point"
      },
      {
        "id": "c",
        "text": "A fiber splice only"
      },
      {
        "id": "d",
        "text": "The Windows ARP cache"
      },
      {
        "id": "b",
        "text": "A DNS record 37 hops away"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A TDR sends a signal down copper and measures reflections; the timing of the reflection is used to estimate distance to opens, shorts, or impedance changes.",
    "distractorExplanations": {
      "b": "TDR distance is physical cable distance, not IP hop count or DNS information.",
      "c": "Fiber is tested with an OTDR rather than a copper TDR.",
      "d": "ARP cache contents are unrelated to the physical reflection measurement."
    },
    "tags": [
      "5.2",
      "use-appropriate-hardware-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "fluke-telecom",
      "fluke-otdr"
    ]
  },
  {
    "id": "ITS-NET-5.2-004",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "An OTDR trace shows a sudden large loss event 420 meters from the launch point on a fiber run. Where should the technician inspect first?",
    "context": "OTDR event table\n0 m       launch\n418-422 m major loss/reflection event\n610 m     end of fiber",
    "options": [
      {
        "id": "b",
        "text": "At the DNS server"
      },
      {
        "id": "d",
        "text": "In the Windows HOSTS file"
      },
      {
        "id": "a",
        "text": "Near the connector/splice/fiber section around the 420-meter location"
      },
      {
        "id": "c",
        "text": "At an RJ-45 copper punch-down exactly 4.2 meters away"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "An OTDR analyzes optical reflections/backscatter and reports events by distance along fiber. A large event near 420 meters directs inspection to that physical portion of the fiber path.",
    "distractorExplanations": {
      "b": "DNS is a logical name-resolution service and cannot explain an optical loss event by distance.",
      "c": "OTDR measurements apply to fiber, not an RJ-45 copper punch-down.",
      "d": "HOSTS is a software name-resolution file, not a fiber component."
    },
    "tags": [
      "5.2",
      "use-appropriate-hardware-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "fluke-telecom",
      "fluke-otdr"
    ]
  },
  {
    "id": "ITS-NET-5.2-005",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "medium",
    "prompt": "A network appliance is not powering on and the technician needs to verify DC supply voltage at its power terminals. Which tool is appropriate?",
    "options": [
      {
        "id": "b",
        "text": "Toner"
      },
      {
        "id": "d",
        "text": "Cable tester in wiremap mode"
      },
      {
        "id": "a",
        "text": "Multimeter"
      },
      {
        "id": "c",
        "text": "OTDR"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A multimeter measures electrical quantities such as voltage and resistance, making it the appropriate choice for a power-supply voltage check.",
    "distractorExplanations": {
      "b": "A toner traces copper cabling and does not normally measure supply voltage.",
      "c": "An OTDR analyzes optical fiber.",
      "d": "A cable tester verifies cable wiring/continuity rather than appliance power voltage."
    },
    "tags": [
      "5.2",
      "use-appropriate-hardware-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "fluke-telecom",
      "fluke-otdr"
    ]
  },
  {
    "id": "ITS-NET-5.2-006",
    "objectiveId": "5.2",
    "domainId": "5",
    "type": "multiple-choice",
    "difficulty": "hard",
    "prompt": "Select THREE correct hardware tool/use pairs.",
    "options": [
      {
        "id": "a",
        "text": "Cable tester — verify copper wiremap/continuity"
      },
      {
        "id": "d",
        "text": "Multimeter — trace Layer 3 routing hops"
      },
      {
        "id": "b",
        "text": "Toner — identify a particular copper cable in a bundle"
      },
      {
        "id": "c",
        "text": "OTDR — locate fiber events/breaks by distance"
      }
    ],
    "correctOptionIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Cable testers validate copper wiring, toners identify cable runs, and OTDRs locate optical events along fiber. A multimeter measures electrical values rather than IP route hops.",
    "distractorExplanations": {
      "d": "Layer 3 path discovery uses software tools such as tracert/traceroute, not a multimeter."
    },
    "tags": [
      "5.2",
      "use-appropriate-hardware-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "fluke-telecom",
      "fluke-otdr"
    ]
  },
  {
    "id": "ITS-NET-5.3-001",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "The PC cannot reach any remote network. What is the most important clue in this ipconfig output?",
    "context": "C:\\> ipconfig\n\nEthernet adapter Ethernet:\n   IPv4 Address. . . . . . . . . . . : 169.254.34.77\n   Subnet Mask . . . . . . . . . . . : 255.255.0.0\n   Default Gateway . . . . . . . . . :",
    "options": [
      {
        "id": "c",
        "text": "The DNS suffix proves the switch is down"
      },
      {
        "id": "b",
        "text": "The default gateway proves Internet access is working"
      },
      {
        "id": "d",
        "text": "The MAC address is an IPv6 global address"
      },
      {
        "id": "a",
        "text": "The 169.254.x.x address indicates IPv4 link-local/APIPA and suggests the PC did not obtain the expected DHCP configuration"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "A 169.254.0.0/16 address is IPv4 link-local/APIPA. In a DHCP-managed LAN, seeing APIPA with no expected gateway strongly suggests the client did not obtain a usable DHCP lease or cannot reach DHCP infrastructure.",
    "distractorExplanations": {
      "b": "No default gateway is shown, and even a configured gateway would not by itself prove Internet access.",
      "c": "A DNS suffix does not establish switch failure.",
      "d": "A MAC address is a Layer 2 identifier, not an IPv6 global address."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.3-002",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "medium",
    "prompt": "What does the successful test below prove?",
    "context": "C:\\> ping 127.0.0.1\nReply from 127.0.0.1: bytes=32 time<1ms TTL=128\nReply from 127.0.0.1: bytes=32 time<1ms TTL=128",
    "options": [
      {
        "id": "a",
        "text": "The local TCP/IP stack can process IPv4 loopback traffic"
      },
      {
        "id": "d",
        "text": "DNS is definitely resolving names"
      },
      {
        "id": "b",
        "text": "The Ethernet cable and switch path are definitely good"
      },
      {
        "id": "c",
        "text": "The default gateway is definitely reachable"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "127.0.0.1 is the IPv4 loopback address. A successful reply verifies local TCP/IP loopback processing but does not exercise the NIC, cable, switch, gateway, or DNS.",
    "distractorExplanations": {
      "b": "Loopback traffic does not leave the host and therefore does not test the physical LAN.",
      "c": "The gateway is not contacted by a loopback ping.",
      "d": "No hostname lookup occurs in this test."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.3-003",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "The remote IP is reachable, but its hostname fails. Which Windows tool should be used next to directly test name resolution?",
    "context": "C:\\> ping 198.51.100.24\nReply from 198.51.100.24: bytes=32 time=18ms TTL=52\n\nC:\\> ping app.example.test\nPing request could not find host app.example.test.",
    "options": [
      {
        "id": "b",
        "text": "arp -a"
      },
      {
        "id": "d",
        "text": "pathping 127.0.0.1"
      },
      {
        "id": "c",
        "text": "hostname"
      },
      {
        "id": "a",
        "text": "nslookup"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Successful IP reachability shows that basic routing to the destination works. Failure only when using a hostname points toward name resolution, and nslookup directly queries DNS.",
    "distractorExplanations": {
      "b": "arp -a shows local IPv4-to-MAC neighbor mappings and does not directly query DNS.",
      "c": "hostname prints the local computer name; it does not resolve the remote DNS name.",
      "d": "pathping to loopback does not investigate remote DNS."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.3-004",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "In this tracert output, hop 2 does not reply but later hops do. What is the best interpretation?",
    "context": "C:\\> tracert 203.0.113.50\n  1     1 ms     1 ms     1 ms  192.168.1.1\n  2     *        *        *     Request timed out.\n  3    11 ms    10 ms    12 ms  198.51.100.9\n  4    18 ms    17 ms    18 ms  203.0.113.50",
    "options": [
      {
        "id": "d",
        "text": "The local NIC cannot transmit Ethernet frames"
      },
      {
        "id": "c",
        "text": "DNS must be broken at hop 2"
      },
      {
        "id": "b",
        "text": "Hop 2 definitely drops all transit traffic"
      },
      {
        "id": "a",
        "text": "Hop 2 may be forwarding traffic while choosing not to return the expected traceroute response"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "tracert relies on TTL-expired responses. A router may forward transit packets while filtering or not generating those diagnostic responses. Later responding hops prove traffic progressed beyond hop 2.",
    "distractorExplanations": {
      "b": "If hop 2 dropped all transit traffic, later hops would not be reached in this trace.",
      "c": "The trace is already operating on IP addresses; a single silent hop is not proof of DNS failure.",
      "d": "The trace reached multiple remote hops, so the local NIC is transmitting traffic."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.3-005",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "Which Windows tool produced this style of output and is designed to combine route discovery with repeated per-hop loss/latency statistics?",
    "context": "Computing statistics for 75 seconds...\nSource to Here   This Node/Link\nHop  RTT  Lost/Sent = Pct  Address\n 0              0/100 = 0%  client\n 1   1ms        0/100 = 0%  192.168.1.1\n 2  18ms       12/100 =12%  198.51.100.1\n 3  19ms       12/100 =12%  203.0.113.10",
    "options": [
      {
        "id": "a",
        "text": "pathping"
      },
      {
        "id": "d",
        "text": "ipconfig /flushdns"
      },
      {
        "id": "c",
        "text": "arp"
      },
      {
        "id": "b",
        "text": "hostname"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "pathping traces the route and then collects statistics over time to help identify loss/latency associated with routers or links along the path.",
    "distractorExplanations": {
      "b": "hostname only reports the local computer name.",
      "c": "arp displays/manages local IPv4 ARP entries.",
      "d": "ipconfig /flushdns clears the DNS resolver cache and does not measure path loss."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.3-006",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "easy",
    "prompt": "Which Windows command produced the output shown?",
    "context": "C:\\> hostname\nLAB-PC-07",
    "options": [
      {
        "id": "a",
        "text": "hostname"
      },
      {
        "id": "c",
        "text": "netstat -ano"
      },
      {
        "id": "d",
        "text": "tracert"
      },
      {
        "id": "b",
        "text": "nslookup"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "The hostname command prints the local computer name.",
    "distractorExplanations": {
      "b": "nslookup performs DNS queries and would show DNS response information.",
      "c": "netstat -ano displays connections/listeners and PIDs.",
      "d": "tracert displays routed hops."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.3-007",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "What does the LISTENING entry below establish?",
    "context": "C:\\> netstat -ano\nProto  Local Address          Foreign Address        State       PID\nTCP    0.0.0.0:3389           0.0.0.0:0              LISTENING   1260",
    "options": [
      {
        "id": "a",
        "text": "A local process is listening on TCP port 3389; it does not by itself prove remote clients can pass through firewalls/NAT to reach it"
      },
      {
        "id": "d",
        "text": "The host has no open TCP ports"
      },
      {
        "id": "b",
        "text": "RDP is guaranteed reachable from the Internet"
      },
      {
        "id": "c",
        "text": "DNS is listening on UDP 53"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "netstat can show local listening sockets. LISTENING on 0.0.0.0:3389 indicates a local TCP listener bound to port 3389 on all IPv4 interfaces; external reachability still depends on routing, firewall, NAT, and other controls.",
    "distractorExplanations": {
      "b": "A local listener is necessary but not sufficient for Internet reachability.",
      "c": "The shown port is 3389 and protocol is TCP, not DNS UDP 53.",
      "d": "The output explicitly shows a TCP listener."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.3-008",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "medium",
    "prompt": "What information is the command output primarily showing?",
    "context": "C:\\> arp -a\nInterface: 192.168.1.25 --- 0x9\n  Internet Address      Physical Address      Type\n  192.168.1.1           34-12-98-aa-bb-01     dynamic\n  192.168.1.50          88-77-66-55-44-33     dynamic",
    "options": [
      {
        "id": "a",
        "text": "IPv4 neighbor mappings between IP addresses and MAC addresses on the local link"
      },
      {
        "id": "b",
        "text": "DNS A and AAAA records from an authoritative server"
      },
      {
        "id": "c",
        "text": "All routed Internet hops"
      },
      {
        "id": "d",
        "text": "DHCP lease offers"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "arp -a displays the IPv4 ARP cache, mapping local-neighbor IPv4 addresses to Layer 2 MAC addresses.",
    "distractorExplanations": {
      "b": "DNS records are queried with tools such as nslookup.",
      "c": "Routed hops are shown by tracert/pathping rather than ARP.",
      "d": "DHCP lease exchange is not represented by the ARP table."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.3-009",
    "objectiveId": "5.3",
    "domainId": "5",
    "type": "scenario",
    "difficulty": "hard",
    "prompt": "A DNS A record was changed this morning. Other PCs resolve the new address, but one Windows PC still resolves the old address from its local resolver cache. Which command is the most direct local corrective test?",
    "options": [
      {
        "id": "a",
        "text": "ipconfig /flushdns"
      },
      {
        "id": "b",
        "text": "arp -d *"
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
    "explanation": "ipconfig /flushdns clears the Windows DNS resolver cache so the next lookup can obtain fresh resolution data. The authoritative record should still be verified if the problem persists.",
    "distractorExplanations": {
      "b": "Clearing ARP affects local IPv4-to-MAC neighbor entries, not cached DNS names.",
      "c": "hostname only reports the local computer name.",
      "d": "Tracing loopback does not clear or retest the stale DNS cache."
    },
    "tags": [
      "5.3",
      "use-windows-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "microsoft-ipconfig",
      "microsoft-ping",
      "microsoft-tracert",
      "microsoft-pathping",
      "microsoft-nslookup",
      "microsoft-netstat",
      "microsoft-arp"
    ]
  },
  {
    "id": "ITS-NET-5.4-001",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "What is the most important interpretation of this `ip addr` output?",
    "context": "$ ip addr show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    inet 192.168.10.25/24 brd 192.168.10.255 scope global eth0",
    "options": [
      {
        "id": "c",
        "text": "The default gateway is 192.168.10.25"
      },
      {
        "id": "a",
        "text": "eth0 is up and has IPv4 address 192.168.10.25/24"
      },
      {
        "id": "d",
        "text": "DNS is confirmed working"
      },
      {
        "id": "b",
        "text": "eth0 is down and has no address"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "`ip addr` displays interface state and addresses. The output shows eth0 UP with inet 192.168.10.25/24. It does not by itself show the default gateway or prove DNS operation.",
    "distractorExplanations": {
      "b": "The interface flags include UP and an inet address is present.",
      "c": "An interface address is not automatically the default gateway; routing information would be checked separately.",
      "d": "No DNS query appears in this output."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "man7-ipaddr",
      "man7-ping",
      "man7-traceroute",
      "man7-tracepath",
      "bind-dig",
      "ubuntu-host",
      "man7-netstat"
    ]
  },
  {
    "id": "ITS-NET-5.4-002",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "medium",
    "prompt": "What does this output most directly show?",
    "context": "$ ping -c 3 192.0.2.10\n64 bytes from 192.0.2.10: icmp_seq=1 ttl=56 time=12.4 ms\n64 bytes from 192.0.2.10: icmp_seq=2 ttl=56 time=12.1 ms\n64 bytes from 192.0.2.10: icmp_seq=3 ttl=56 time=12.3 ms\n3 packets transmitted, 3 received, 0% packet loss",
    "options": [
      {
        "id": "b",
        "text": "DNS lookup of 192.0.2.10 failed"
      },
      {
        "id": "a",
        "text": "The host receives ICMP Echo replies from 192.0.2.10 with no packet loss in this sample"
      },
      {
        "id": "d",
        "text": "The route has exactly two routers"
      },
      {
        "id": "c",
        "text": "The ARP cache is empty"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "`ping` tests reachability using ICMP Echo. The replies and 0% packet loss show successful responses for this sample, though ping alone does not prove every application/service is available.",
    "distractorExplanations": {
      "b": "No DNS name lookup is shown; the command targets an IP address.",
      "c": "The output contains no ARP table.",
      "d": "Ping does not enumerate routed hops."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "man7-ipaddr",
      "man7-ping",
      "man7-traceroute",
      "man7-tracepath",
      "bind-dig",
      "ubuntu-host",
      "man7-netstat"
    ]
  },
  {
    "id": "ITS-NET-5.4-003",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "Hop 2 shows only asterisks, but later hops respond. What is the best conclusion?",
    "context": "$ traceroute 203.0.113.50\n1  192.168.1.1  0.8 ms  0.7 ms  0.8 ms\n2  * * *\n3  198.51.100.9  10.4 ms  10.1 ms  10.6 ms\n4  203.0.113.50  17.8 ms  17.5 ms  17.7 ms",
    "options": [
      {
        "id": "b",
        "text": "Hop 2 definitely drops all forwarded traffic"
      },
      {
        "id": "a",
        "text": "The path is not necessarily broken at hop 2; that device may not return traceroute probe responses"
      },
      {
        "id": "d",
        "text": "The local Ethernet interface is down"
      },
      {
        "id": "c",
        "text": "DNS is definitely misconfigured"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "traceroute uses TTL/hop-limit expiry and diagnostic responses. A device can forward transit traffic while suppressing those replies. Later responding hops demonstrate that probes traveled beyond hop 2.",
    "distractorExplanations": {
      "b": "Later hops could not answer if all transit traffic were dropped there.",
      "c": "The trace uses an IP destination and does not establish a DNS fault.",
      "d": "Multiple remote hops were reached, so the local interface is functioning."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "man7-ipaddr",
      "man7-ping",
      "man7-traceroute",
      "man7-tracepath",
      "bind-dig",
      "ubuntu-host",
      "man7-netstat"
    ]
  },
  {
    "id": "ITS-NET-5.4-004",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "Which objective-listed Linux command is especially useful when you want the routed path and path-MTU information shown below?",
    "context": "$ tracepath 203.0.113.20\n 1?: [LOCALHOST]                      pmtu 1500\n 1:  192.168.1.1                      0.8ms\n 2:  198.51.100.1                     9.4ms pmtu 1400\n 3:  203.0.113.20                    17.2ms reached",
    "options": [
      {
        "id": "c",
        "text": "arp"
      },
      {
        "id": "b",
        "text": "host"
      },
      {
        "id": "a",
        "text": "tracepath"
      },
      {
        "id": "d",
        "text": "netstat"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "`tracepath` traces the route and can discover/report path MTU information without requiring the same privileges as some traceroute modes.",
    "distractorExplanations": {
      "b": "host performs DNS lookups.",
      "c": "arp shows legacy IPv4 neighbor-cache entries.",
      "d": "netstat shows network status such as sockets/routes depending on options but not this trace/PMTU view."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "man7-ipaddr",
      "man7-ping",
      "man7-traceroute",
      "man7-tracepath",
      "bind-dig",
      "ubuntu-host",
      "man7-netstat"
    ]
  },
  {
    "id": "ITS-NET-5.4-005",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "What does the DNS status in this `dig` output indicate?",
    "context": "$ dig app.example.test A\n;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 4128\n;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1",
    "options": [
      {
        "id": "b",
        "text": "The Linux Ethernet interface is physically down"
      },
      {
        "id": "c",
        "text": "The ARP cache contains a duplicate gateway"
      },
      {
        "id": "a",
        "text": "The queried DNS server returned NXDOMAIN: the requested name does not exist as queried"
      },
      {
        "id": "d",
        "text": "The query definitely succeeded with an A record"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "`dig` shows the DNS response status. NXDOMAIN is a negative DNS answer indicating the queried name does not exist as queried; it is different from a timeout or transport failure.",
    "distractorExplanations": {
      "b": "A DNS response was received, so this output does not support a physical-link-down conclusion.",
      "c": "No ARP information is shown.",
      "d": "The status is NXDOMAIN and ANSWER is 0, so no A answer was returned."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "man7-ipaddr",
      "man7-ping",
      "man7-traceroute",
      "man7-tracepath",
      "bind-dig",
      "ubuntu-host",
      "man7-netstat"
    ]
  },
  {
    "id": "ITS-NET-5.4-006",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "medium",
    "prompt": "Which Linux utility produced this compact name-to-address lookup?",
    "context": "$ host files.example.test\nfiles.example.test has address 192.0.2.44",
    "options": [
      {
        "id": "d",
        "text": "arp"
      },
      {
        "id": "c",
        "text": "traceroute"
      },
      {
        "id": "a",
        "text": "host"
      },
      {
        "id": "b",
        "text": "ip addr"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "`host` is a simple DNS lookup utility that can translate names to addresses and addresses to names.",
    "distractorExplanations": {
      "b": "ip addr displays/manages interface addresses.",
      "c": "traceroute displays routed hops.",
      "d": "arp displays/manages legacy IPv4 neighbor mappings."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "man7-ipaddr",
      "man7-ping",
      "man7-traceroute",
      "man7-tracepath",
      "bind-dig",
      "ubuntu-host",
      "man7-netstat"
    ]
  },
  {
    "id": "ITS-NET-5.4-007",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "hard",
    "prompt": "What does this objective-listed legacy `netstat` output show?",
    "context": "$ netstat -tuln\nProto Recv-Q Send-Q Local Address   Foreign Address   State\ntcp        0      0 0.0.0.0:22      0.0.0.0:*         LISTEN",
    "options": [
      {
        "id": "a",
        "text": "A local TCP service is listening on port 22"
      },
      {
        "id": "c",
        "text": "The default gateway is definitely 0.0.0.0"
      },
      {
        "id": "d",
        "text": "There is no SSH service on this host"
      },
      {
        "id": "b",
        "text": "DNS returned an AAAA record"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "`netstat -tuln` can show listening TCP/UDP sockets numerically. A TCP LISTEN entry on 0.0.0.0:22 indicates a local service is listening on TCP port 22 on IPv4 interfaces; it does not prove remote firewall reachability.",
    "distractorExplanations": {
      "b": "This is socket status, not DNS output.",
      "c": "0.0.0.0 in the Local Address means all IPv4 local interfaces for the listener, not a default gateway.",
      "d": "Port 22 is the standard SSH port, and the output shows it listening."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "man7-ipaddr",
      "man7-ping",
      "man7-traceroute",
      "man7-tracepath",
      "bind-dig",
      "ubuntu-host",
      "man7-netstat"
    ]
  },
  {
    "id": "ITS-NET-5.4-008",
    "objectiveId": "5.4",
    "domainId": "5",
    "type": "command-output",
    "difficulty": "medium",
    "prompt": "What does this objective-listed legacy `arp` output primarily represent?",
    "context": "$ arp -n\nAddress          HWtype  HWaddress           Flags Mask  Iface\n192.168.10.1     ether   34:12:98:aa:bb:01   C           eth0",
    "options": [
      {
        "id": "d",
        "text": "An IPv6 multicast membership table"
      },
      {
        "id": "b",
        "text": "A DNS reverse-lookup result"
      },
      {
        "id": "a",
        "text": "An IPv4-to-MAC neighbor mapping on the local link"
      },
      {
        "id": "c",
        "text": "A list of routed hops"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "The legacy `arp` utility displays/manages the IPv4 ARP cache, which maps local-neighbor IPv4 addresses to MAC addresses. Modern Linux often uses `ip neigh`, but `arp` is explicitly in the exam objective.",
    "distractorExplanations": {
      "b": "DNS reverse lookup uses PTR records and DNS tools such as host/dig.",
      "c": "traceroute/tracepath show routed hops.",
      "d": "ARP is an IPv4 neighbor-resolution mechanism, not an IPv6 multicast table."
    },
    "tags": [
      "5.4",
      "use-linux-software-troubleshooting-tools"
    ],
    "sourceRefs": [
      "official-objectives",
      "man7-ipaddr",
      "man7-ping",
      "man7-traceroute",
      "man7-tracepath",
      "bind-dig",
      "ubuntu-host",
      "man7-netstat"
    ]
  }
] satisfies PrepQuestion[];
