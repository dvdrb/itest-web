import type { StudyNote } from "../contentTypes";
export const objective4_5 = {
  "objectiveId": "4.5",
  "title": "Identify well-known ports",
  "whatToKnow": [
    "Memorize the default/well-known service ports explicitly listed by the objective. Questions may ask port→protocol, protocol→port, or which firewall rule enables a service.",
    "HTTP commonly uses TCP 80; HTTPS commonly uses TCP 443.",
    "FTP control uses TCP 21. Supplemental but useful: traditional active-mode FTP data uses TCP 20 from the server side; passive FTP data uses dynamically negotiated ports, so do not assume all FTP data is always 20.",
    "SSH uses TCP 22.",
    "SMTP uses TCP 25 for standard server-to-server SMTP transport in exam-level port mapping.",
    "IMAP uses TCP 143 for the standard unencrypted/default IMAP service. IMAPS 993 is real but is outside the explicit objective list.",
    "DNS uses port 53 over UDP and TCP; UDP is common for ordinary queries, while TCP is also part of DNS operation (for example when required by response size/operation).",
    "RDP default service is 3389. IANA registers ms-wbt-server on both TCP and UDP 3389; exam questions usually expect the number 3389."
  ],
  "memorize": [
    "HTTP 80/TCP.",
    "HTTPS 443/TCP.",
    "FTP control 21/TCP; FTP active default data 20/TCP (supplemental).",
    "SSH 22/TCP.",
    "SMTP 25/TCP.",
    "IMAP 143/TCP.",
    "DNS 53/UDP and 53/TCP.",
    "RDP 3389 (commonly TCP; modern implementations may also use UDP)."
  ],
  "howItWorks": [
    "Convert scenario language into service first, then port. “Secure shell administration” → SSH → 22. “Web over TLS” → HTTPS → 443. “Remote Windows desktop” → RDP → 3389.",
    "If a question asks about FTP control versus data, control is 21; treat 20 as the traditional active-mode data port rather than the only possible data port."
  ],
  "examTraps": [
    "Do not confuse SMTP 25 with IMAP 143: SMTP sends/transfers mail; IMAP accesses mailboxes.",
    "Do not confuse SSH 22 with HTTPS 443; both are encrypted but serve different applications.",
    "DNS is not “UDP only”; port 53 is used with UDP and TCP.",
    "Avoid memorizing unrelated ports until these eight objective protocols are automatic."
  ],
  "quickCheck": [
    {
      "question": "SSH?",
      "answer": "22/TCP."
    },
    {
      "question": "HTTPS?",
      "answer": "443/TCP."
    },
    {
      "question": "DNS?",
      "answer": "53/UDP and TCP."
    },
    {
      "question": "RDP?",
      "answer": "3389."
    },
    {
      "question": "SMTP?",
      "answer": "25/TCP."
    },
    {
      "question": "IMAP?",
      "answer": "143/TCP."
    },
    {
      "question": "FTP control?",
      "answer": "21/TCP."
    },
    {
      "question": "HTTP?",
      "answer": "80/TCP."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "IANA Service Name and Transport Protocol Port Number Registry",
      "url": "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
    }
  ]
} satisfies StudyNote;
