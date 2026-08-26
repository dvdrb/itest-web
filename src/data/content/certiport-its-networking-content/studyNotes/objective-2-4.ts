import type { StudyNote } from "../contentTypes";
export const objective2_4 = {
  "objectiveId": "2.4",
  "title": "Compare and contrast network topologies and access methods",
  "whatToKnow": [
    "Physical topology describes actual devices/cables/links; logical topology describes how traffic or access behaves independent of the physical layout.",
    "Star: endpoints attach to a central switch/hub. Easy to add endpoints; the central device can become a single point of failure without redundancy.",
    "Mesh: nodes have multiple interconnections. Full mesh gives every node a direct link to every other node; partial mesh provides selected redundant paths. More resilient but more expensive/complex.",
    "Ring: nodes form a loop. Traffic can follow the ring; redundancy behavior depends on the specific ring technology/protocol.",
    "Bus: devices share one backbone medium. Classic bus designs are inexpensive but share a failure/collision medium and are rarely used for modern switched Ethernet LANs.",
    "Supplemental access-method context because the objective title says access methods: traditional half-duplex Ethernet used CSMA/CD; Wi-Fi uses collision-avoidance mechanisms rather than Ethernet collision detection."
  ],
  "memorize": [
    "Star = central device; mesh = many redundant links; ring = loop; bus = shared backbone.",
    "Physical = how it is actually wired; logical = how communication/access is organized.",
    "Full mesh links for n nodes = n(n−1)/2 (supplemental calculation)."
  ],
  "howItWorks": [
    "A physical star can support a different logical behavior depending on the technology, so always read whether the question asks physical or logical topology.",
    "Topology selection trades cost/cabling complexity against resiliency and fault domains."
  ],
  "examTraps": [
    "Do not assume a star always has no redundancy; the basic topology has a central dependency, but real designs can duplicate central devices/links.",
    "Do not assume every modern ring fails after one link; ring resiliency depends on its control protocol. Focus on the structural loop for topology identification.",
    "Bus and hub-based collision behavior is mostly legacy; still know it because the objective explicitly includes classic topologies."
  ],
  "quickCheck": [
    {
      "question": "All PCs connect to one switch. Physical topology?",
      "answer": "Star."
    },
    {
      "question": "Every node has direct links to every other node. Topology?",
      "answer": "Full mesh."
    },
    {
      "question": "All devices share one backbone. Topology?",
      "answer": "Bus."
    },
    {
      "question": "What is the difference between physical and logical topology?",
      "answer": "Physical is actual layout; logical is communication/access behavior."
    },
    {
      "question": "Which topology generally offers the most redundant paths?",
      "answer": "Mesh."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "IBM - What Is Network Topology?",
      "url": "https://www.ibm.com/think/topics/network-topology"
    }
  ]
} satisfies StudyNote;
