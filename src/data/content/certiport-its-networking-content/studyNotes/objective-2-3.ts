import type { StudyNote } from "../contentTypes";
export const objective2_3 = {
  "objectiveId": "2.3",
  "title": "Identify wireless networking methods and characteristics",
  "whatToKnow": [
    "802.11 is the IEEE wireless LAN (Wi-Fi) family; Bluetooth is primarily short-range personal-area connectivity.",
    "High-yield band idea: 2.4 GHz generally reaches farther but is more crowded/interference-prone; 5 GHz generally offers more non-overlapping channel capacity and less 2.4-GHz interference but typically shorter range through obstacles.",
    "Common standard associations useful for exam reasoning: 802.11b/g are 2.4 GHz; 802.11a/ac are 5 GHz; 802.11n can use 2.4 or 5 GHz; 802.11ax can operate on 2.4/5 GHz, with 6-GHz operation associated with Wi-Fi 6E as supplemental modern context.",
    "WEP is obsolete/weak. WPA improved on WEP but legacy WPA commonly uses TKIP. WPA2 is commonly associated with AES/CCMP. WPA3 is a modern successor and fits the objective’s “and others” wording as supplemental context.",
    "802.1X provides port-based network access control and is commonly used for Enterprise Wi-Fi authentication with a backend authentication service.",
    "Ad hoc networking lets wireless peers communicate without a normal infrastructure AP. Point-to-point wireless links connect two endpoints/sites. Wireless bridging joins LAN segments over wireless.",
    "Wireless interference can come from overlapping Wi-Fi channels and non-Wi-Fi devices such as Bluetooth, microwave ovens, and cordless devices in shared spectrum.",
    "On 2.4 GHz, channels 1, 6, and 11 are commonly used as non-overlapping 20-MHz channels in regions where those channels are permitted."
  ],
  "memorize": [
    "802.11 = Wi-Fi/WLAN; Bluetooth = short-range PAN.",
    "WEP = weak/obsolete; WPA = older improvement; WPA2 = AES/CCMP association; 802.1X = enterprise access control/authentication.",
    "2.4 GHz = more range/interference; 5 GHz = more channel capacity/less 2.4 interference.",
    "Ad hoc = peer wireless without infrastructure AP; point-to-point = two endpoints; wireless bridge = joins LAN segments.",
    "2.4-GHz common non-overlapping channels: 1, 6, 11 (regional caveat)."
  ],
  "howItWorks": [
    "When troubleshooting interference, first distinguish signal strength from contention/interference. A strong signal can still perform poorly if the channel is crowded.",
    "Moving clients/APs, changing channel, reducing overlapping-channel use, or moving to a less-congested supported band can improve performance.",
    "Enterprise authentication and encryption are separate ideas: 802.1X controls/authenticates access, while WPA2/WPA3 defines wireless security mechanisms."
  ],
  "examTraps": [
    "Do not choose WEP for a modern secure WLAN.",
    "Do not confuse 802.1X with an encryption algorithm; it is access control/authentication.",
    "Do not assume all 802.11 standards use the same band.",
    "Bluetooth interference can affect 2.4-GHz Wi-Fi because both can occupy the same general spectrum.",
    "Point-to-point wireless is not the same concept as peer-to-peer application/service architecture."
  ],
  "quickCheck": [
    {
      "question": "Which standard family is Wi-Fi?",
      "answer": "IEEE 802.11."
    },
    {
      "question": "Which security option should be treated as obsolete and weak?",
      "answer": "WEP."
    },
    {
      "question": "What does 802.1X provide?",
      "answer": "Port-based network access control/authentication, commonly for enterprise Wi-Fi."
    },
    {
      "question": "Why might 2.4-GHz Wi-Fi degrade near a microwave?",
      "answer": "Radio-frequency interference in the shared band."
    },
    {
      "question": "What are commonly used non-overlapping 2.4-GHz channels?",
      "answer": "1, 6, and 11, subject to regional rules."
    },
    {
      "question": "What is an ad hoc WLAN?",
      "answer": "Wireless peers communicating without a normal infrastructure access point."
    },
    {
      "question": "What is wireless bridging?",
      "answer": "Using a wireless link to join LAN segments/bridges."
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
