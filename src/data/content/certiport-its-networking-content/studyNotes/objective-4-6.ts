import type { StudyNote } from "../contentTypes";
export const objective4_6 = {
  "objectiveId": "4.6",
  "title": "Describe name resolution concepts",
  "whatToKnow": [
    "Static name resolution uses locally maintained mappings. HOSTS maps host/DNS-style names to IP addresses. LMHOSTS is the legacy local mapping mechanism for NetBIOS names.",
    "Dynamic name resolution: DNS is the modern hierarchical name service; WINS is a legacy Microsoft service that maps NetBIOS names to IP addresses.",
    "Windows DNS-client troubleshooting sequence for DNS hostnames: check resolver cache, then HOSTS file, then query configured DNS server. Other name types/legacy NetBIOS resolution can involve different mechanisms, so keep HOSTS/DNS versus LMHOSTS/WINS conceptually distinct.",
    "A record → IPv4 address. AAAA → IPv6 address. CNAME → canonical-name alias. MX → mail exchanger. PTR → pointer used for reverse lookup. SRV → service location containing priority/weight/port/target. SOA → start-of-authority/zone metadata.",
    "Forward lookup normally starts from a name and returns address/resource data. Reverse lookup starts from an IP address representation and uses PTR records to obtain a name.",
    "Recursive resolution: a client typically asks its configured resolver for an answer; the resolver can use cache or query/referral through the DNS hierarchy until it finds authoritative data or a negative answer.",
    "Caching speeds repeated resolution but can temporarily preserve old data until TTL/cache expiry; flushing a client cache is a troubleshooting step when stale local cache is suspected."
  ],
  "memorize": [
    "HOSTS = static hostname→IP; LMHOSTS = legacy NetBIOS local mappings.",
    "DNS = modern hierarchical dynamic name service; WINS = legacy NetBIOS name service.",
    "A IPv4; AAAA IPv6; MX mail; PTR reverse; SRV service/port/target; CNAME alias; SOA zone authority metadata.",
    "Windows DNS hostname path: cache → HOSTS → DNS server.",
    "Forward = name→resource/address; reverse = address→name via PTR."
  ],
  "howItWorks": [
    "If IP ping succeeds but hostname ping fails, basic IP reachability exists; investigate name resolution next with nslookup/dig/host and verify DNS server configuration.",
    "If HOSTS has an entry, Windows can resolve that hostname without sending a DNS query; this is useful for diagnosis but can also create stale/incorrect overrides.",
    "If forward lookup works but reverse lookup fails, check the reverse zone/PTR rather than the A/AAAA record.",
    "SRV is the record to remember when a client must discover a service endpoint including port and target."
  ],
  "examTraps": [
    "CNAME is not a mail record; MX is.",
    "PTR is reverse lookup; A/AAAA are forward address records.",
    "SOA does not map a hostname to a host IP; it describes authoritative zone information.",
    "WINS/LMHOSTS are legacy NetBIOS concepts, not replacements for modern DNS hierarchy.",
    "A successful ping to an IP but failed hostname does not prove the DNS server itself is down; client DNS configuration, cache, HOSTS, firewall, or the record can be wrong."
  ],
  "quickCheck": [
    {
      "question": "A record?",
      "answer": "Name to IPv4 address."
    },
    {
      "question": "AAAA?",
      "answer": "Name to IPv6 address."
    },
    {
      "question": "MX?",
      "answer": "Mail exchanger."
    },
    {
      "question": "PTR?",
      "answer": "Reverse lookup pointer."
    },
    {
      "question": "SRV?",
      "answer": "Service location including port/target."
    },
    {
      "question": "CNAME?",
      "answer": "Alias to canonical name."
    },
    {
      "question": "SOA?",
      "answer": "Zone authority/administrative metadata."
    },
    {
      "question": "Windows DNS client checks what before DNS server?",
      "answer": "Resolver cache and HOSTS file."
    },
    {
      "question": "What legacy service maps NetBIOS names dynamically?",
      "answer": "WINS."
    }
  ],
  "sourceRefs": [
    {
      "label": "Certiport IT Specialist Networking Exam Objectives (ITS OD Networking 101 0225)",
      "url": "https://ceiti.md/files/2024-2025/pdf/ITS%20OD%20Networking%20101%200225.pdf"
    },
    {
      "label": "RFC 1035 - Domain Names: Implementation and Specification",
      "url": "https://www.rfc-editor.org/info/rfc1035/"
    },
    {
      "label": "RFC 3596 - DNS Extensions to Support IPv6",
      "url": "https://www.rfc-editor.org/info/rfc3596/"
    },
    {
      "label": "RFC 2782 - DNS SRV RR",
      "url": "https://www.rfc-editor.org/info/rfc2782/"
    },
    {
      "label": "Microsoft Learn - Troubleshoot DNS client name resolution",
      "url": "https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/troubleshoot-dns-client-resolution-issues"
    },
    {
      "label": "Microsoft Learn - DNS WINS lookup integration",
      "url": "https://learn.microsoft.com/en-us/windows-server/networking/dns/wins-lookup"
    }
  ]
} satisfies StudyNote;
