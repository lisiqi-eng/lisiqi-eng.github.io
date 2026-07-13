/*
 * ================================================================
 * EDIT THIS FILE TO UPDATE YOUR HOMEPAGE.
 * Save and push to GitHub after making changes.
 * ================================================================
 */

const PROFILE = {
  // Basic information
  name: "Li Siqi",
  chineseName: "李思齐",
  initials: "LS",
  role: "Undergraduate Student",
  affiliation: ["School of Aeronautics", "Northwestern Polytechnical University"],
  intro:
    "My research focuses on computer vision, robot perception, and visual localization for intelligent autonomous systems.",
  status: "Open to research opportunities",
  photo: "images/profile.jpg", // Leave empty to show initials instead.

  // Main links
  links: [
    { label: "Email me", url: "mailto:lisiqi_@mail.nwpu.edu.cn", primary: true },
    { label: "View GitHub", url: "https://github.com/lisiqi-eng" },
  ],

  // Scrolling research keywords
  interests: ["Computer Vision", "Visual Localization", "Robot Perception", "Autonomous Systems"],

  // About
  about: [
    "I am Li Siqi (李思齐), an undergraduate in Aerospace Engineering at the School of Aeronautics, Northwestern Polytechnical University. I hold a GPA of 3.933/4.1, ranking 5th among 344 students, with a comprehensive assessment rank of 1st among 252 students.",
    "My work sits at the intersection of computer vision, robotics, and navigation. I enjoy turning research ideas into reliable systems using Python, C++, MATLAB, PyTorch, TensorFlow, and OpenCV.",
  ],
  facts: [
    {
      label: "Undergraduate",
      value: "Northwestern Polytechnical University",
      detail: "B.Eng. candidate in Aerospace Engineering · School of Aeronautics",
    },
    {
      label: "Academic Record",
      value: "GPA 3.933/4.1 · Rank 5/344",
      detail: "Comprehensive assessment rank: 1/252",
    },
  ],

  // Research directions
  research: [
    {
      title: "Visual localization & pose estimation",
      description:
        "I study end-to-end relative pose estimation and visual relocalization for precise UAV landing, with an emphasis on robust cross-view matching under scale and viewpoint changes.",
      tags: ["Reloc3r", "Pose Estimation", "UAV"],
    },
    {
      title: "Robot perception in challenging illumination",
      description:
        "I develop adaptive image enhancement and exposure adjustment methods that improve target recognition under low light, glare, and uneven illumination.",
      tags: ["OpenCV", "Image Enhancement", "Detection"],
    },
    {
      title: "Nonlinear dynamics & navigation alignment",
      description:
        "I explore Koopman-operator-based modeling and correction methods for inertial navigation alignment on swinging platforms, improving convergence, stability, and disturbance rejection.",
      tags: ["Koopman Operator", "INS", "Filtering"],
    },
  ],

  // Publications and intellectual property
  publicationNote: "Granted invention patent.",
  allPublicationsUrl: "#publications",
  publications: [
    {
      year: "Granted",
      title: "A Retrospective Correction Alignment Method for a Swinging-Base Launch Frame",
      authors: "Li Siqi · Student second author",
      venue: "Chinese invention patent · CN 119687967 B",
      links: [{ label: "Patent", url: "https://patents.google.com/patent/CN119687967B/zh" }],
    },
  ],

  // Projects
  projects: [
    {
      number: "01",
      title: "Goal-driven UAV precision landing",
      period: "Apr 2026 – Present",
      role: "Project Lead · National Student Innovation Project",
      description:
        "Leading a national student innovation project on end-to-end landing pose estimation. Reproduced and adapted Reloc3r, built a dual-view inference pipeline, and achieved a top-five Codabench result.",
      tech: "Reloc3r · PyTorch · Pose Estimation",
      url: "#",
      accent: "blue", // Options: blue, coral, green
    },
    {
      number: "02",
      title: "Adaptive robot vision",
      period: "May 2025 – May 2026",
      role: "Core Member · Provincial Student Innovation Project",
      description:
        "Designed adaptive illumination analysis, image enhancement, and exposure adjustment methods for a mobile robot operating in low-light, high-glare, and unevenly lit environments.",
      tech: "OpenCV · Image Enhancement · Detection",
      url: "#",
      accent: "coral",
    },
    {
      number: "03",
      title: "Swinging-base alignment correction",
      period: "Granted",
      role: "Student Second Author · Invention Patent",
      description:
        "Developed a Koopman-operator-based nonlinear modeling and predictive correction approach for inertial alignment under platform motion, contributing to a granted invention patent.",
      tech: "Koopman Operator · INS · MATLAB",
      url: "https://patents.google.com/patent/CN119687967B/zh",
      accent: "green",
    },
  ],

  // Recent news and honors
  news: [
    {
      date: "Feb 2026",
      text: "Received the Meritorious Winner award in the Mathematical Contest in Modeling.",
    },
    {
      date: "Dec 2025",
      text: "Won national second prize in the 6th Jiudou Cup National College Physics Competition.",
    },
    {
      date: "Oct 2025",
      text: "Led a team to national second prize at the China Robot Competition and RoboCup China Open.",
    },
    {
      date: "Aug 2025",
      text: "Won national first prize in the 27th China Robot and Artificial Intelligence Competition.",
    },
    {
      date: "2025",
      text: "National Scholarship and First-Class University Scholarship.",
    },
    {
      date: "2025",
      text: "Provincial First Prize, Information Security and Adversarial Technology Competition.",
    },
    {
      date: "Jul 2025",
      text: "Provincial Second Prize, National 3D Digital Innovation Design Competition (Team Leader).",
    },
    {
      date: "2025",
      text: "Named Advanced Individual in Innovation and Entrepreneurship and Outstanding Communist Youth League Member.",
    },
  ],

  // Technical skills
  skills: [
    { label: "Programming", value: "C++, Python, MATLAB" },
    { label: "Machine Learning", value: "PyTorch, TensorFlow, model training, inference, and evaluation" },
    { label: "Computer Vision", value: "OpenCV, pose estimation, visual relocalization, object detection, and image enhancement" },
    { label: "Navigation & Control", value: "Koopman operators, Kalman filtering, and nonlinear dynamic modeling" },
    { label: "Development", value: "Windows/Linux, experiment automation, model deployment, and engineering validation" },
    { label: "Hardware", value: "LCEDA, basic circuit design, PCB design, and hardware prototyping" },
    { label: "Language", value: "Chinese (native), English (CET-6: 492)" },
  ],

  // Contact and social links
  contactText:
    "I am interested in research opportunities and collaborations in computer vision, robotics, visual localization, and autonomous systems.",
  email: "lisiqi_@mail.nwpu.edu.cn",
  social: [
    { label: "GitHub", url: "https://github.com/lisiqi-eng" },
    { label: "Email", url: "mailto:lisiqi_@mail.nwpu.edu.cn" },
  ],
};
