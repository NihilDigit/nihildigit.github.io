export const PROFILE = {
  name: "Shibo Liu",
  handle: "NihilDigit",
  school: {
    name: "North China University of Science and Technology",
    shortName: "NCST",
    href: "https://www.ncst.edu.cn/",
  },
  education:
    "2023-present: B.S. in Intelligence Science, College of Science, NCST, Tangshan, Hebei, China.",
  contact: {
    schoolEmail: "spencerliu@stu.ncst.edu.cn",
    personalEmail: "starse.nd233@gmail.com",
    github: "https://github.com/NihilDigit",
    orcid: "https://orcid.org/0009-0004-9426-3713",
    telegram: "https://t.me/NihilDigit",
  },
  summary:
    "Undergraduate researcher behind TongXing, ANVIL, and RAFNet, working on assistive edge AI, mobile NPU deployment, computer vision, video systems, and practical upstream open-source work.",
  llmsAbout: [
    "Shibo Liu is an undergraduate at North China University of Science and Technology (NCST), studying intelligence science.",
    "RAFNet was his first academic project and his practical entry into computer vision. TongXing ran in parallel from the deployment side as a 4C2026 competition project for blind and low-vision assistive systems, winning a provincial second prize and continuing into the national round. It combines NPU obstacle warning, offline speech, and a local LLM agent that closes touch-first app tasks through MCP tools and Android accessibility actions, making the potential of mobile NPUs and engineering optimization concrete.",
    "ANVIL came out of the overlap between those two tracks: RAFNet gave him a practical CV foundation, while TongXing made NPU constraints concrete. ANVIL reuses H.264 decoder motion vectors instead of learned optical flow so frame interpolation can fit mobile accelerator constraints.",
    "He also maintains tools and contributes upstream. waybar-ai-usage began as a personal desktop widget and became his first real open-source maintenance experience after users started filing issues and PRs. coding-agents-setup records the coding-agent setup he actually uses. Animeko and Fresh are active upstream contribution targets driven by apps he uses himself.",
  ],
} as const;
