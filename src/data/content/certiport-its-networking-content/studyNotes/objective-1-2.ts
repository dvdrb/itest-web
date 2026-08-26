import type { StudyNote } from "../contentTypes";
export const objective1_2 = {
  "objectiveId": "1.2",
  "title": "Define cloud and virtualization concepts",
  "whatToKnow": [
    "Hypervisors, VMs, virtual switches",
    "How virtualization maps virtual resources to physical hardware"
  ],
  "memorize": [
    "Hypervisor = virtualization layer",
    "VM = isolated software-defined computer",
    "Virtual switch = software Ethernet switching for virtual NICs"
  ],
  "howItWorks": [
    "Multiple VMs share host resources while remaining logically isolated.",
    "Virtual switches connect VMs to each other and/or physical networks."
  ],
  "examTraps": [
    "Virtualization does not remove the need for IP configuration or physical redundancy."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 1.2?",
      "answer": "Define cloud and virtualization concepts"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "Hypervisor = virtualization layer"
    }
  ],
  "sourceRefs": [
    {
      "label": "Official 2025 Certiport ITS Networking objectives",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "IANA Service Name and Transport Protocol Port Number Registry",
      "url": "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
    },
    {
      "label": "RFC 1918 Private IPv4 Address Space",
      "url": "https://www.rfc-editor.org/info/rfc1918/"
    },
    {
      "label": "RFC 4291 IPv6 Addressing Architecture",
      "url": "https://www.rfc-editor.org/info/rfc4291/"
    },
    {
      "label": "RFC 1035 DNS",
      "url": "https://www.rfc-editor.org/info/rfc1035/"
    }
  ]
} satisfies StudyNote;
