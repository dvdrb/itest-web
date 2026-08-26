import type { StudyNote } from "../contentTypes";
export const objective4_1 = {
  "objectiveId": "4.1",
  "title": "Describe the Open Systems Interconnection (OSI) model",
  "whatToKnow": [
    "Layer 7 Application: network services closest to user applications; examples include HTTP, DNS, SMTP, IMAP.",
    "Layer 6 Presentation: data representation/translation, encoding, compression, encryption concepts.",
    "Layer 5 Session: establishes/manages/terminates application sessions/dialogs.",
    "Layer 4 Transport: end-to-end transport, segmentation/reassembly, reliability/flow concepts; TCP and UDP; port numbers.",
    "Layer 3 Network: logical addressing and routing between networks; IP; routers/Layer 3 switches.",
    "Layer 2 Data Link: local-link framing, MAC addressing, switching, error detection such as Ethernet FCS; Ethernet switches/bridges.",
    "Layer 1 Physical: bits/signals/media/connectors/radio/electrical/optical transmission; hubs/repeaters are classic examples.",
    "Encapsulation descends the stack at sender; de-encapsulation ascends it at receiver.",
    "Common PDU shorthand: L4 segment/datagram, L3 packet, L2 frame, L1 bits/signals. Terminology can vary by protocol; focus on function."
  ],
  "memorize": [
    "7 Application; 6 Presentation; 5 Session; 4 Transport; 3 Network; 2 Data Link; 1 Physical.",
    "MAC address = Layer 2.",
    "IP address/routing = Layer 3.",
    "TCP/UDP and ports = Layer 4.",
    "Switch = primarily L2; router = L3; hub/repeater = L1.",
    "Frame = L2; packet = L3; bits = L1."
  ],
  "howItWorks": [
    "Use the layer where a problem is actually expressed: unplugged cable = L1; wrong VLAN/MAC forwarding = L2; bad IP/gateway/route = L3; blocked TCP port = L4/policy boundary; DNS/HTTP behavior = Application layer.",
    "The same device can operate at multiple layers: a multilayer switch can perform L2 switching and L3 routing. Pick the function named in the question.",
    "Encapsulation adds headers/trailers appropriate to each layer as data moves toward the medium."
  ],
  "examTraps": [
    "Do not put MAC addresses at Layer 3 or IP addresses at Layer 2.",
    "Do not put TCP/UDP at the Network layer; they are Transport.",
    "Do not assume encryption is always only Layer 6 in real systems; OSI is a conceptual model. For the exam, associate presentation concepts with L6 when asked about the model.",
    "Application layer means network service to applications, not the application executable itself."
  ],
  "quickCheck": [
    {
      "question": "Which layer uses MAC addresses?",
      "answer": "Layer 2 Data Link."
    },
    {
      "question": "Which layer routes IP packets?",
      "answer": "Layer 3 Network."
    },
    {
      "question": "Which layer contains TCP and UDP?",
      "answer": "Layer 4 Transport."
    },
    {
      "question": "Which layer is cabling/signaling?",
      "answer": "Layer 1 Physical."
    },
    {
      "question": "HTTP and DNS are examples closest to which layer?",
      "answer": "Layer 7 Application."
    },
    {
      "question": "What happens during encapsulation?",
      "answer": "Protocol information is added as data moves down the stack toward transmission."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    }
  ]
} satisfies StudyNote;
