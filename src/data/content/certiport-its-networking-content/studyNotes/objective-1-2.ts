import type { StudyNote } from "../contentTypes";
export const objective1_2 = {
  "objectiveId": "1.2",
  "title": "Define cloud and virtualization concepts",
  "whatToKnow": [
    "A hypervisor is the virtualization layer that creates/runs virtual machines and arbitrates their use of physical CPU, memory, storage, and devices.",
    "A virtual machine (VM) is an isolated software-defined computer with virtual hardware and its own guest operating system.",
    "A virtual switch is a software Layer 2 Ethernet switch that connects virtual NICs and can connect VMs to other VMs and, depending on configuration, physical networks.",
    "Type 1 (bare-metal) hypervisors run directly on the host hardware; hosted/type 2 hypervisors run on top of a host operating system. The objective says hypervisors generally, so know the distinction but do not overfocus on vendor products.",
    "Virtualization consolidates workloads on fewer physical hosts and improves flexibility, but a physical host can become a shared failure domain for the VMs on it.",
    "Virtual networking still follows ordinary networking concepts: VM virtual NICs attach to virtual switch ports and need IP configuration just like physical endpoints."
  ],
  "memorize": [
    "Hypervisor → creates/runs VMs and abstracts physical resources.",
    "VM → isolated guest computer implemented in software.",
    "Virtual switch → software Layer 2 Ethernet switching for virtual NICs.",
    "Type 1 → directly on hardware; Type 2 → hosted on an operating system (supplemental classification)."
  ],
  "howItWorks": [
    "A VM sends an Ethernet frame through its virtual NIC to a virtual-switch port. The virtual switch can forward it to another VM or to an uplink toward the physical network.",
    "If multiple VMs on one host all lose connectivity when the host fails, the shared physical host is the common dependency.",
    "Isolation of VMs does not automatically imply network isolation; virtual switch/VLAN/firewall configuration still matters."
  ],
  "examTraps": [
    "Do not call a VM a container; containers and VMs are different abstraction models and containers are not part of this objective.",
    "Do not confuse a virtual switch with a router. A virtual switch is primarily Layer 2.",
    "“Cloud” questions in this objective should still map back to the explicitly listed technologies: hypervisors, VMs, and virtual switches."
  ],
  "quickCheck": [
    {
      "question": "What component connects VM virtual NICs at Layer 2?",
      "answer": "A virtual switch."
    },
    {
      "question": "What is the key job of a hypervisor?",
      "answer": "Create/manage VMs and allocate/abstract physical resources."
    },
    {
      "question": "What runs its own guest OS and virtual hardware?",
      "answer": "A virtual machine."
    },
    {
      "question": "A single physical host fails and six VMs fail with it. What concept matters?",
      "answer": "The host is a shared dependency/failure domain."
    },
    {
      "question": "Is a virtual switch primarily Layer 2 or Layer 3?",
      "answer": "Layer 2 Ethernet switching."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "Microsoft Learn - Hyper-V documentation",
      "url": "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/"
    },
    {
      "label": "Microsoft Learn - Hyper-V Virtual Switch",
      "url": "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/virtual-switch"
    }
  ]
} satisfies StudyNote;
