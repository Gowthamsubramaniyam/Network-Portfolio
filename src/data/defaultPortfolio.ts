import { ProfileData, SlideItem } from '../types';

export const initialProfile: ProfileData = {
  name: 'GOWTHAM S',
  title: 'ASPIRING NETWORK ENGINEER',
  subtitle: 'CCNA CANDIDATE • LINUX ENTHUSIAST',
  tagline: 'Designing Scalable, Resilient & Secure Network Topologies',
  bio: 'Computer Science and Engineering student with hands-on experience designing, configuring, and troubleshooting enterprise and small-office networks in Cisco Packet Tracer, covering VLANs, inter-VLAN routing, static routing, DHCP, DNS, and IPv4 addressing. Comfortable working across Linux and Windows environments, with a working knowledge of Python and web fundamentals. Currently pursuing CCNA certification and seeking a Network Engineer Internship or Entry-Level Network Engineer role.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  email: 'gowthamsubramaniyam05@gmail.com',
  phone: '+91 9944195898',
  location: 'Tamil Nadu, India',
  website: 'https://github.com/Gowthamsubramaniyam',
  github: 'https://github.com/Gowthamsubramaniyam',
  linkedin: 'https://www.linkedin.com/in/gowtham-s-155984420',
  experiences: [
    {
      id: 'exp-1',
      role: 'Network Design & Systems Architect (Academic & Labs)',
      company: 'Angel College of Engineering & Technology',
      period: '2023 - PRESENT',
      description: 'Architecting multi-branch enterprise networks, simulating Cisco 1941 routers, 2960 Catalyst switches, implementing IEEE 802.1Q VLAN trunking and DNS/DHCP infrastructure.',
      highlights: [
        'Configured Router-on-a-Stick for 6 isolated corporate VLANs',
        'Implemented static routing across simulated branch offices',
        'Conducted Wireshark packet inspections & ICMP connectivity tests'
      ]
    },
    {
      id: 'exp-2',
      role: 'Student Welfare Committee Head & Class Representative',
      company: 'Angel College of Engineering & Technology',
      period: '2023 - 2025',
      description: 'Led student initiatives, coordinated communications between faculty and engineering students, managed campus sports events as Yellow Lions Team Captain.',
      highlights: [
        'Managed student grievance resolution and campus initiatives',
        'Spearheaded technical workshops and departmental activities',
        'Led team to victory in inter-college sports competitions'
      ]
    },
    {
      id: 'exp-3',
      role: 'YouTube & Short Film Director / Content Creator',
      company: 'Independent Production',
      period: '2022 - 2024',
      description: 'Directed and produced 2 independent short films, handling end-to-end screenplay writing, technical direction, cinematography, video editing, and production management.',
      highlights: [
        'Directed 2 complete narrative short films',
        'Managed post-production, sound design, and color grading'
      ]
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Angel College of Engineering & Technology',
      period: '2023 - 2027 (Expected)',
      scoreOrHonor: 'Specializing in Computer Networks, Linux Systems & Cloud Infrastructure'
    },
    {
      id: 'edu-2',
      degree: 'Higher Secondary Education (Bio-Maths)',
      institution: 'Shanthi Nikethan Higher Secondary School',
      period: 'Completed: 2015',
      scoreOrHonor: 'Strong foundation in Analytical Mathematics & Sciences'
    }
  ],
  softwareSkills: [
    { name: 'TCP/IP & Subnetting (IPv4/IPv6)', level: 95, category: 'Networking' },
    { name: 'Routing & Switching (Static, VLAN, Trunking)', level: 92, category: 'Networking' },
    { name: 'Cisco Packet Tracer Simulation', level: 96, category: 'Tools & Protocols' },
    { name: 'DHCP, DNS, ICMP, ARP Services', level: 90, category: 'Networking' },
    { name: 'Wireshark Packet Analysis', level: 86, category: 'Tools & Protocols' },
    { name: 'Ubuntu Linux & CLI Administration', level: 88, category: 'Operating Systems' },
    { name: 'Git & GitHub Version Control', level: 85, category: 'Tools & Protocols' },
    { name: 'Python Scripting & Automation Basics', level: 80, category: 'Languages & Core' },
    { name: 'Windows Server & Client Networking', level: 85, category: 'Operating Systems' }
  ],
  certifications: [
    {
      id: 'cert-1',
      title: 'Generative AI in Action',
      issuer: 'IBM SkillsBuild',
      status: 'Certified',
      category: 'Cloud & AI',
      badgeColor: 'cyan',
      description: 'Foundations of GenAI, enterprise prompting architectures, and generative modeling applications.'
    },
    {
      id: 'cert-2',
      title: 'Google Cloud Cybersecurity',
      issuer: 'Google Cloud',
      status: 'Certified',
      category: 'Security & OS',
      badgeColor: 'emerald',
      description: 'Cloud perimeter defense, IAM access policies, threat analysis, and Google Cloud security principles.'
    },
    {
      id: 'cert-3',
      title: 'Google Cloud Data Analytics',
      issuer: 'Google Cloud',
      status: 'Certified',
      category: 'Cloud & AI',
      badgeColor: 'blue',
      description: 'Data ingestion, SQL pipelines, and BigQuery analytics across distributed cloud services.'
    },
    {
      id: 'cert-4',
      title: 'Oracle Certified AI Foundations Associate',
      issuer: 'Oracle Cloud Infrastructure',
      status: 'Certified',
      category: 'Cloud & AI',
      badgeColor: 'amber',
      description: 'AI core principles, machine learning workflows, and Oracle OCI AI cloud services.'
    },
    {
      id: 'cert-5',
      title: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco Systems',
      status: 'In Progress (Active Prep)',
      category: 'Networking',
      badgeColor: 'rose',
      description: 'Network fundamentals, IP connectivity, IP services, security fundamentals, and automation.'
    },
    {
      id: 'cert-6',
      title: 'Linux Administration Certificate',
      issuer: 'Self-Learning & Applied Labs',
      status: 'Completed',
      category: 'Security & OS',
      badgeColor: 'indigo',
      description: 'File permissions, bash scripting, systemd services, SSH hardening, and network interfaces.'
    }
  ],
  leadership: [
    {
      id: 'lead-1',
      role: 'Student Welfare Committee Head',
      organization: 'Angel College of Engineering & Technology',
      description: 'Coordinated student activities, addressed campus grievances, and liaised with faculty leadership to implement student-centric initiatives.'
    },
    {
      id: 'lead-2',
      role: 'Team Captain - Yellow Lions',
      organization: 'College Sports & Athletics League',
      description: 'Led, trained, and coordinated athletic team members across competitive university sports meets and tournaments.'
    },
    {
      id: 'lead-3',
      role: 'Class Representative',
      organization: 'Department of Computer Science & Engineering',
      description: 'Facilitated smooth communication between students and academic professors, orchestrating seminar schedules and lab sessions.'
    }
  ],
  softSkills: [
    'Problem Solving',
    'Analytical Thinking',
    'Technical Communication',
    'Teamwork & Collaboration',
    'Leadership & Mentorship',
    'Time Management',
    'Attention to Detail',
    'Adaptability',
    'Quick Learner'
  ],
  extracurricular: [
    'YouTube / Short Film Creator: Directed and Produced 2 Short Films, handling scripting, direction, editing, and production.',
    'College Activities: Actively participated in technical symposia, campus hackathons, student initiatives, and sports tournaments.'
  ]
};

export const defaultSlides: SlideItem[] = [
  {
    id: 1,
    slideNumberStr: '01',
    key: 'cover',
    title: 'NETWORK ENGINEERING',
    subtitle: 'PORTFOLIO • CCNA CANDIDATE • LINUX SPECIALIST',
    description: 'Enterprise Network Topologies, Cisco Packet Tracer Labs, Inter-VLAN Routing, Linux Administration & Cloud Certifications by Gowtham S.',
    category: 'Hero & Title'
  },
  {
    id: 2,
    slideNumberStr: '02',
    key: 'intro',
    title: 'ENGINEER PROFILE',
    subtitle: 'SUMMARY, EDUCATION & CORE METRICS',
    description: 'Computer Science student with hands-on networking expertise in VLANs, Cisco 1941/2960 hardware, routing protocols, and Linux systems.',
    category: 'Bio & Skills'
  },
  {
    id: 3,
    slideNumberStr: '03',
    key: 'index',
    title: 'PORTFOLIO INDEX',
    subtitle: 'TECHNICAL CHAPTERS & LAB ARCHIVES',
    description: 'Index of engineering architectures, simulation labs, network security configurations, and leadership achievements.',
    category: 'Index'
  },
  {
    id: 4,
    slideNumberStr: '04',
    key: 'enterprise_network',
    title: 'ENTERPRISE NETWORK',
    subtitle: 'MULTI-BRANCH CISCO PACKET TRACER TOPOLOGY',
    description: 'Designed and deployed a multi-branch enterprise network with 3 Cisco 1941 routers, 2 Cisco 2960 switches, 6 departmental VLANs, and Router-on-a-Stick inter-VLAN routing.',
    category: 'Network Architecture',
    items: [
      {
        id: 'proj-ent-1',
        title: 'Enterprise Multi-Branch Network',
        subtitle: '3x Cisco 1941 Routers • 2x Catalyst 2960 Switches',
        category: 'Enterprise Routing',
        imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
        description: 'Complete multi-site infrastructure topology segmented into 6 isolated VLANs (Management, Engineering, Finance, HR, Guest, Server Farm) utilizing IEEE 802.1Q trunking and static routing between branches.',
        tools: ['Cisco Packet Tracer', 'Router-on-a-Stick', 'IEEE 802.1Q', 'DHCP Server', 'ICMP Diagnostics'],
        tags: ['VLANs', 'Inter-VLAN', 'Static Routing', 'Cisco 1941', 'Trunking'],
        year: '2024',
        client: 'Enterprise Simulation Lab',
        topologyDetails: [
          '3 Cisco 1941 Routers interconnecting Headquarter and 2 Regional Branches',
          '2 Cisco Catalyst 2960 Switches managing departmental access ports',
          '6 Segmented VLANs with custom IPv4 subnet addressing schemes',
          'IEEE 802.1Q sub-interfaces configured for seamless Inter-VLAN routing'
        ],
        keyHighlights: [
          'Configured DHCP pools for dynamic IP distribution across subnets',
          'Configured static routes across WAN serial and gigabit interfaces',
          'Verified 0% packet drop end-to-end ping testing with ICMP'
        ]
      }
    ]
  },
  {
    id: 5,
    slideNumberStr: '05',
    key: 'small_office_network',
    title: 'SMALL OFFICE NETWORK',
    subtitle: 'CENTRALIZED DHCP, DNS & FILE SERVER INFRASTRUCTURE',
    description: 'Implemented a robust SOHO network with centralized local DNS resolution, file sharing services, IPv4 static addressing, and multi-OS client support.',
    category: 'Infrastructure',
    items: [
      {
        id: 'proj-soho-1',
        title: 'SOHO Centralized Network Infrastructure',
        subtitle: 'DHCP Pool • DNS Server • File Server • Client-Server Model',
        category: 'SOHO Network',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        description: 'Engineered small-office corporate network deploying dedicated DNS services for hostname mapping, centralized file storage server, and automated DHCP leasing.',
        tools: ['Cisco Packet Tracer', 'DNS Server', 'DHCP Service', 'FTP/File Sharing', 'IPv4 Addressing'],
        tags: ['DNS', 'DHCP', 'File Server', 'Troubleshooting', 'SOHO'],
        year: '2024',
        client: 'Small Business Lab Model',
        topologyDetails: [
          'Dedicated DNS server configured with local A-records and domain resolution',
          'Centralized file sharing server configured with user permission levels',
          'Static IPv4 allocations for mission-critical infrastructure hardware',
          'Interconnected heterogeneous Windows and Linux workstation clients'
        ],
        keyHighlights: [
          'Applied CCNA TCP/IP 4-layer model troubleshooting techniques',
          'Eliminated IP conflicts through optimized DHCP exclusion ranges',
          'Executed ping & traceroute diagnostic checks across subnets'
        ]
      }
    ]
  },
  {
    id: 6,
    slideNumberStr: '06',
    key: 'routing_switching',
    title: 'ROUTING & SWITCHING',
    subtitle: 'VLAN SEGMENTATION & IEEE 802.1Q TRUNKING',
    description: 'Deep dive into Layer 2 switching mechanics, broadcast domain isolation, 802.1Q encapsulation, Subnetting Math (/24 to /30), and Router-on-a-Stick sub-interfaces.',
    category: 'Core Protocols',
    items: [
      {
        id: 'proj-rs-1',
        title: 'VLAN Segmentation & Trunking Matrix',
        subtitle: 'Sub-interfaces, Dot1Q & Broadcast Containment',
        category: 'Switching & Routing',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        description: 'Granular network segmentation isolating high-security management traffic from open wireless networks, preventing broadcast storms and enforcing security boundaries.',
        tools: ['Cisco IOS CLI', 'IEEE 802.1Q', 'Access/Trunk Ports', 'Native VLAN', 'Subnet Calculator'],
        tags: ['Switching', 'Trunking', 'Dot1Q', 'Router-on-a-Stick', 'Subnetting'],
        year: '2024'
      }
    ]
  },
  {
    id: 7,
    slideNumberStr: '07',
    key: 'troubleshooting_wireshark',
    title: 'PACKET ANALYSIS & DICTIONARY',
    subtitle: 'WIRESHARK, ICMP, ARP & TCP/IP DIAGNOSTICS',
    description: 'Protocol-level troubleshooting using Wireshark packet captures, three-way TCP handshakes, ARP resolution workflows, and ICMP error diagnostics.',
    category: 'Troubleshooting',
    items: [
      {
        id: 'proj-diag-1',
        title: 'Wireshark Protocol Inspection & Telemetry',
        subtitle: 'TCP Handshake • ARP Resolution • ICMP Type Codes',
        category: 'Packet Analysis',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        description: 'Captured and analyzed live network packets to identify latency bottlenecks, misconfigured default gateways, DNS timeouts, and unauthorized broadcast bursts.',
        tools: ['Wireshark', 'ICMP Ping', 'Traceroute', 'ARP Table', 'Netstat'],
        tags: ['Wireshark', 'Packet Capture', 'Troubleshooting', 'TCP/IP', 'ARP'],
        year: '2024'
      }
    ]
  },
  {
    id: 8,
    slideNumberStr: '08',
    key: 'section_divider',
    title: 'CERTIFICATIONS & SYSTEMS',
    subtitle: 'CLOUD, CYBERSECURITY, AI & LINUX INFRASTRUCTURE',
    description: 'Industry-recognized credentials from Google Cloud, IBM, Oracle, Cisco CCNA, and Linux administration projects.',
    category: 'Divider'
  },
  {
    id: 9,
    slideNumberStr: '09',
    key: 'certifications',
    title: 'CREDENTIALS & CERTS',
    subtitle: 'IBM, GOOGLE CLOUD, ORACLE & CISCO CCNA',
    description: 'Verified professional certifications demonstrating competence across Cloud Security, Data Analytics, Artificial Intelligence, and Enterprise Networking.',
    category: 'Certifications',
    items: [
      {
        id: 'cert-ibm-ai',
        title: 'Generative AI in Action',
        subtitle: 'IBM SkillsBuild Verified Credential',
        category: 'Artificial Intelligence',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        description: 'Comprehensive study of transformer architectures, generative enterprise deployment, and AI security guidelines.',
        client: 'IBM SkillsBuild',
        year: '2024',
        tags: ['IBM', 'Generative AI', 'Cloud AI']
      },
      {
        id: 'cert-gcp-sec',
        title: 'Google Cloud Cybersecurity',
        subtitle: 'Google Cloud Infrastructure & Defense',
        category: 'Cybersecurity',
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        description: 'Identity & Access Management (IAM), VPC service perimeters, Cloud Armor security policies, and incident response.',
        client: 'Google Cloud',
        year: '2024',
        tags: ['Google Cloud', 'Cybersecurity', 'IAM', 'VPC']
      },
      {
        id: 'cert-gcp-data',
        title: 'Google Cloud Data Analytics',
        subtitle: 'Google Cloud Big Data & Pipelines',
        category: 'Cloud Analytics',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        description: 'Serverless data warehouses, SQL analytics, BigQuery infrastructure, and cloud data architecture.',
        client: 'Google Cloud',
        year: '2024',
        tags: ['BigQuery', 'Data Analytics', 'GCP']
      },
      {
        id: 'cert-oracle-ai',
        title: 'Oracle Certified AI Foundations Associate',
        subtitle: 'Oracle Cloud Infrastructure (OCI)',
        category: 'Cloud Infrastructure',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        description: 'OCI compute shapes, machine learning model life-cycles, and cloud infrastructure operations.',
        client: 'Oracle',
        year: '2024',
        tags: ['Oracle', 'OCI', 'AI Foundations']
      }
    ]
  },
  {
    id: 10,
    slideNumberStr: '10',
    key: 'linux_systems',
    title: 'LINUX ADMINISTRATION',
    subtitle: 'UBUNTU SERVER, BASH SCRIPTING & CLI MASTERY',
    description: 'System management across Linux environments: user permission models, systemd daemon control, SSH security hardening, network interface configurations, and cron jobs.',
    category: 'Operating Systems',
    items: [
      {
        id: 'proj-linux-1',
        title: 'Ubuntu Linux Server Management',
        subtitle: 'CLI, UFW Firewall, Systemd & Bash Automation',
        category: 'Linux Administration',
        imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
        description: 'Configured Linux networking stacks, Netplan interfaces, static route tables, system log monitoring, and automated maintenance scripts using Bash.',
        tools: ['Ubuntu Linux', 'Bash', 'UFW Firewall', 'SSH Key Auth', 'Netplan', 'Systemd'],
        tags: ['Ubuntu', 'Linux CLI', 'Bash Scripting', 'Server Config', 'Sysadmin'],
        year: '2024'
      }
    ]
  },
  {
    id: 11,
    slideNumberStr: '11',
    key: 'leadership',
    title: 'LEADERSHIP & SERVICE',
    subtitle: 'STUDENT WELFARE, TEAM CAPTAIN & CLASS LEAD',
    description: 'Demonstrated leadership managing institutional committees, coordinating 100+ student activities, captaining collegiate sports teams, and acting as academic liaison.',
    category: 'Leadership',
    items: [
      {
        id: 'lead-welfare-1',
        title: 'Student Welfare Committee Leadership',
        subtitle: 'Angel College of Engineering & Technology',
        category: 'Campus Governance',
        imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
        description: 'Head of Student Welfare Committee, resolving student concerns, organizing academic symposiums, and supporting institutional development programs.',
        tags: ['Leadership', 'Event Management', 'Student Welfare', 'Communication'],
        year: '2023 - 2025'
      },
      {
        id: 'lead-captain-2',
        title: 'Team Captain - Yellow Lions',
        subtitle: 'Collegiate Athletics & Sports Leadership',
        category: 'Sports & Team Lead',
        imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
        description: 'Led athletic teams through rigorous training, strategic event coordination, and inter-collegiate tournament matches with high morale.',
        tags: ['Teamwork', 'Captaincy', 'Athletics', 'Strategy'],
        year: '2024'
      }
    ]
  },
  {
    id: 12,
    slideNumberStr: '12',
    key: 'creative_media',
    title: 'CREATIVE DIRECTION',
    subtitle: 'YOUTUBE & SHORT FILM PRODUCTION',
    description: 'Written, directed, and produced 2 complete short films. Managed camera blocking, narrative scripting, sound design, editing, and video post-production.',
    category: 'Creative Media',
    items: [
      {
        id: 'film-1',
        title: 'Short Film Direction & Storytelling',
        subtitle: 'Scriptwriting, Camera Direction & Editing',
        category: 'Film & Media',
        imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
        description: 'Directed and produced 2 independent short films, synthesizing narrative pacing, team leadership, creative direction, and technical video post-production.',
        tools: ['Video Editing', 'Scriptwriting', 'Lighting & Audio', 'Directing', 'Post-Production'],
        tags: ['Short Film', 'Direction', 'Creativity', 'YouTube Creator'],
        year: '2023 - 2024'
      }
    ]
  },
  {
    id: 13,
    slideNumberStr: '13',
    key: 'education_academics',
    title: 'ACADEMIC ROADMAP',
    subtitle: 'COMPUTER SCIENCE & ENGINEERING DEGREE',
    description: 'Pursuing Bachelor of Engineering in Computer Science & Engineering at Angel College of Engineering & Technology (Graduation 2027), with earlier Bio-Maths foundation.',
    category: 'Academics',
    items: [
      {
        id: 'edu-be-1',
        title: 'B.E. Computer Science and Engineering',
        subtitle: 'Angel College of Engineering & Technology (2023 - 2027)',
        category: 'Higher Education',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
        description: 'Specializing in Network Architecture, Operating Systems, Algorithms, Cloud Computing, and Linux Systems Engineering.',
        tags: ['Computer Science', 'B.E. Degree', 'Angel College', 'Networking'],
        year: 'Expected 2027'
      }
    ]
  },
  {
    id: 14,
    slideNumberStr: '14',
    key: 'tools_ecosystem',
    title: 'TOOLKIT & STACK',
    subtitle: 'PACKET TRACER, WIRESHARK, GIT, PYTHON & LINUX',
    description: 'Comprehensive software and protocol stack utilized daily for enterprise simulation, packet debugging, configuration versioning, and network administration.',
    category: 'Technical Stack',
    items: [
      {
        id: 'tool-stack-1',
        title: 'Network Engineering Diagnostic Suite',
        subtitle: 'Cisco CLI, Wireshark, Git, Python & Linux',
        category: 'Tool Matrix',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        description: 'Complete operational workflow combining Cisco Packet Tracer simulation with real-time Wireshark packet capture, Linux CLI administration, and GitHub versioning.',
        tools: ['Cisco Packet Tracer', 'Wireshark', 'Ubuntu Linux', 'Git/GitHub', 'Python', 'Cisco IOS CLI'],
        tags: ['DevOps', 'Networking Tools', 'CLI', 'Packet Inspection'],
        year: '2024'
      }
    ]
  },
  {
    id: 15,
    slideNumberStr: '15',
    key: 'contact_connect',
    title: 'CONNECT & CONTACT',
    subtitle: 'LET’S BUILD RESILIENT NETWORKS TOGETHER',
    description: 'Open for Network Engineer Internships, Entry-Level Network Engineering roles, and collaborative systems infrastructure projects.',
    category: 'Contact'
  }
];
