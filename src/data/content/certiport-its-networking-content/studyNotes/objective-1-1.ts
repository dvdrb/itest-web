import type { StudyNote } from "../contentTypes";
export const objective1_1 = {
  "objectiveId": "1.1",
  "title": "Define network concepts",
  "whatToKnow": [
    "Internet: the worldwide public internetwork; intranet: private organizational network/resources; extranet: selected private resources exposed to trusted external parties.",
    "Client-server centralizes services on dedicated servers; peer-to-peer allows endpoints to share directly without requiring a dedicated central server.",
    "Unicast is one-to-one delivery; multicast targets members of a group; broadcast targets all hosts in a local broadcast domain where broadcasting is supported.",
    "Know the roles of common network devices at a conceptual level: switch connects LAN devices, router connects IP networks, access point connects wireless clients to a LAN, firewall enforces traffic policy.",
    "IoT devices are network-connected embedded devices such as sensors, cameras, thermostats, appliances, and controllers.",
    "A network can combine these models: for example, client-server applications can run over a LAN that also contains peer-to-peer discovery traffic."
  ],
  "memorize": [
    "Internet = public global network; intranet = internal/private; extranet = controlled external access to private resources.",
    "Client-server = centralized services; peer-to-peer = direct sharing among peers.",
    "Unicast = one destination; multicast = subscribed group; broadcast = everyone in the broadcast domain.",
    "Router = Layer 3 forwarding between networks; switch = Layer 2 LAN forwarding; access point = wireless-to-LAN bridge role."
  ],
  "howItWorks": [
    "When reading a scenario, identify WHO can access the resource: employees only points to intranet; selected suppliers/partners points to extranet; unrestricted public reach points to Internet.",
    "For transmission type questions, count intended receivers rather than physical devices: one specific host = unicast, group = multicast, all local hosts = broadcast.",
    "A switch does not replace a router when traffic must move between IP subnets; a router or Layer 3 switch performs that routing function."
  ],
  "examTraps": [
    "Do not confuse an extranet with the public Internet: an extranet is still controlled access to an organization’s private resources.",
    "Peer-to-peer does not mean wireless ad hoc; P2P describes the service/role model, while ad hoc is a wireless topology.",
    "Broadcast is not the same as multicast. Multicast receivers explicitly belong to a group; broadcast is local one-to-all.",
    "IoT is a device/use category, not a separate IP protocol."
  ],
  "quickCheck": [
    {
      "question": "A vendor gets access only to your ordering portal. Internet, intranet, or extranet?",
      "answer": "Extranet."
    },
    {
      "question": "One server sends a stream only to members of a subscribed video group. What transmission type?",
      "answer": "Multicast."
    },
    {
      "question": "What device normally forwards traffic between different IP networks?",
      "answer": "A router or Layer 3 routing device."
    },
    {
      "question": "What model best fits five PCs directly sharing folders with no dedicated server?",
      "answer": "Peer-to-peer."
    },
    {
      "question": "What is an intranet?",
      "answer": "A private network or private network services intended for members of one organization."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "IBM - What Is Computer Networking?",
      "url": "https://www.ibm.com/think/topics/networking"
    }
  ]
} satisfies StudyNote;
