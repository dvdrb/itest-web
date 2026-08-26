import type { StudyNote } from "../contentTypes";
export const objective1_3 = {
  "objectiveId": "1.3",
  "title": "Describe remote access methods",
  "whatToKnow": [
    "A VPN creates a logical point-to-point connection across a public or private network using tunneling; VPN deployments normally add authentication and encryption to protect remote access.",
    "Remote-access VPN connects an individual remote client to organization resources; site-to-site VPN connects two networks/gateways.",
    "Remote Desktop provides interactive access to a remote graphical Windows desktop/session.",
    "VPN and Remote Desktop solve different problems: VPN provides network connectivity; RDP provides a remote user session on a specific computer.",
    "The default RDP port is 3389. Microsoft recommends using a VPN rather than directly exposing RDP to the public Internet when possible.",
    "A successful VPN does not prove that RDP, authentication, host firewall rules, or the target server itself is working."
  ],
  "memorize": [
    "VPN = protected tunnel/network access across an untrusted network.",
    "Remote Desktop/RDP = interactive remote desktop/session.",
    "RDP default port = 3389.",
    "Remote-access VPN = client-to-network; site-to-site VPN = network-to-network."
  ],
  "howItWorks": [
    "For a home user needing many internal services, connect the VPN first; after the tunnel is established, applications communicate as permitted by routing/security policy.",
    "For help-desk control of one Windows desktop, RDP is the more direct method; a VPN may still be required to reach that host securely from outside.",
    "Site-to-site VPN termination usually occurs on gateways at each site rather than on every endpoint."
  ],
  "examTraps": [
    "Do not assume VPN means Remote Desktop. A VPN can carry many application protocols.",
    "Do not assume an established VPN means the target service must work; access controls and service availability are separate.",
    "Do not memorize obsolete VPN protocol details that are not in the objective; focus on the purpose of VPN versus Remote Desktop."
  ],
  "quickCheck": [
    {
      "question": "A user needs secure access to several internal services from home. Best method?",
      "answer": "Remote-access VPN."
    },
    {
      "question": "Two offices need an encrypted network-to-network tunnel. Best method?",
      "answer": "Site-to-site VPN."
    },
    {
      "question": "What does RDP provide?",
      "answer": "An interactive remote desktop/session on a target computer."
    },
    {
      "question": "Default RDP port?",
      "answer": "3389."
    },
    {
      "question": "Why can RDP fail after VPN connects successfully?",
      "answer": "The tunnel only provides network reachability; RDP service, host firewall, credentials, and permissions still matter."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "Microsoft Learn - VPN connection types",
      "url": "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/vpn/vpn-connection-type"
    },
    {
      "label": "Microsoft Learn - Remote Desktop outside the local network",
      "url": "https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remotepc/remote-desktop-allow-outside-access"
    }
  ]
} satisfies StudyNote;
