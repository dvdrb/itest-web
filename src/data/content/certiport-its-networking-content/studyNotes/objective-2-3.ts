import type { StudyNote } from "../contentTypes";
export const objective2_3 = {
  "objectiveId": "2.3",
  "title": "Identify wireless networking methods and characteristics",
  "whatToKnow": [
    "802.11 Wi-Fi, Bluetooth",
    "WEP/WPA/WPA2/802.1X",
    "P2P/ad hoc/bridging/interference"
  ],
  "memorize": [
    "WEP = obsolete/weak",
    "WPA2 commonly uses AES-CCMP",
    "802.1X = port-based authentication framework",
    "Bluetooth = short-range PAN"
  ],
  "howItWorks": [
    "Wi-Fi uses radio channels; interference and channel overlap affect performance.",
    "Ad hoc connects peers directly; wireless bridge connects LAN segments."
  ],
  "examTraps": [
    "802.1X is authentication/access control, not an encryption cipher itself."
  ],
  "quickCheck": [
    {
      "question": "What is the core focus of objective 2.3?",
      "answer": "Identify wireless networking methods and characteristics"
    },
    {
      "question": "Name one high-yield fact to recall.",
      "answer": "WEP = obsolete/weak"
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
