import type { StudyNote } from "../contentTypes";
export const objective2_2 = {
  "objectiveId": "2.2",
  "title": "Define the characteristics of wide area networks (WANs)",
  "whatToKnow": [
    "A WAN connects networks over larger geographic distances using service-provider or carrier infrastructure.",
    "DSL uses existing copper telephone pairs for broadband access; ADSL is asymmetric and VDSL is a higher-speed DSL family.",
    "Cable-modem service uses the cable provider’s coaxial/HFC access network.",
    "Satellite provides reach where terrestrial wired service may be unavailable; long propagation distance can make latency a major consideration.",
    "Cellular WAN access uses mobile networks such as 3G, 4G/LTE, and 5G and can be useful for mobile sites, rapid deployment, or backup connectivity.",
    "Site-to-site connectivity links two networks; it may use a private carrier service or an encrypted tunnel over public Internet access.",
    "The objective is about recognizing characteristics and selecting an appropriate WAN access method, not memorizing carrier-specific speed claims."
  ],
  "memorize": [
    "DSL → broadband over telephone copper pairs.",
    "Cable modem → provider cable/coax access network.",
    "Satellite → wireless WAN with broad geographic reach; latency can be higher.",
    "3G/4G/5G → cellular generations.",
    "Site-to-site → connects entire networks/sites rather than one user session."
  ],
  "howItWorks": [
    "Choose access based on geography, available provider media, mobility, bandwidth, latency, and reliability requirements.",
    "A rural location with no wired last mile may favor satellite or cellular; a fixed urban site might use DSL or cable where available.",
    "A site-to-site VPN can ride on top of ordinary Internet WAN access to provide protected network-to-network connectivity."
  ],
  "examTraps": [
    "Do not call Wi-Fi a WAN merely because it is wireless; Wi-Fi is primarily WLAN technology.",
    "Site-to-site describes the connectivity relationship, not one specific physical medium.",
    "Do not assume newer cellular generation always means a guaranteed speed; real performance depends on deployment and signal conditions."
  ],
  "quickCheck": [
    {
      "question": "Which WAN method commonly uses telephone copper pairs?",
      "answer": "DSL."
    },
    {
      "question": "Which WAN method commonly uses a cable provider access network?",
      "answer": "Cable modem."
    },
    {
      "question": "What do 3G, 4G, and 5G identify?",
      "answer": "Cellular network generations."
    },
    {
      "question": "A remote site has no terrestrial cable/DSL. Which listed method may still work?",
      "answer": "Satellite, or cellular if coverage exists."
    },
    {
      "question": "What is site-to-site connectivity?",
      "answer": "A connection between networks at separate sites, often gateway-to-gateway."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "Cisco - Digital Subscriber Line technology description",
      "url": "https://www.cisco.com/c/en/us/td/docs/net_mgmt/prime/network/3-8/reference/guide/dsl.html"
    }
  ]
} satisfies StudyNote;
