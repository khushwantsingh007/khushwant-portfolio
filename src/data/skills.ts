import type { SkillGroup } from '../types/project';

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages for high-performance backend systems, algorithmic design, and low-level development.",
    skills: [
      { name: "C++", category: "Languages", iconName: "FileCode2", highlight: true },
      { name: "C", category: "Languages", iconName: "FileCode" },
      { name: "JavaScript", category: "Languages", iconName: "Code2", highlight: true },
      { name: "Python", category: "Languages", iconName: "Terminal", highlight: true },
    ]
  },
  {
    id: "backend-web",
    title: "Web & Backend Engineering",
    description: "RESTful API development, server architectures, and modern reactive client interfaces.",
    skills: [
      { name: "Node.js", category: "Backend", iconName: "Server", highlight: true },
      { name: "Express.js", category: "Backend", iconName: "Boxes", highlight: true },
      { name: "REST APIs", category: "Backend", iconName: "Network", highlight: true },
      { name: "React.js", category: "Frontend", iconName: "Atom", highlight: true },
      { name: "FastAPI", category: "Backend", iconName: "Zap" },
      { name: "HTML5", category: "Frontend", iconName: "Layers" },
      { name: "CSS3", category: "Frontend", iconName: "Palette" },
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational modeling, schema design, CRUD performance, and document indexing.",
    skills: [
      { name: "Postgres", category: "Database", iconName: "Database", highlight: true },
      { name: "SQL", category: "Database", iconName: "Table2", highlight: true },
      { name: "MongoDB", category: "Database", iconName: "Database", highlight: true },
    ]
  },
  {
    id: "devops-tools",
    title: "DevOps & Tools",
    description: "Containerization, CI/CD automated pipelines, and professional developer tooling.",
    skills: [
      { name: "Docker", category: "DevOps", iconName: "Container", highlight: true },
      { name: "Kubernetes", category: "DevOps", iconName: "Boxes", highlight: true },
      { name: "Github Actions", category: "DevOps", iconName: "GitBranch", highlight: true },
      { name: "Git", category: "Tools", iconName: "GitBranch", highlight: true },
      { name: "VS Code", category: "Tools", iconName: "Code" },
      { name: "Postman", category: "Tools", iconName: "Send" },
      { name: "Linux", category: "Tools", iconName: "Terminal", highlight: true },
    ]
  },
  {
    id: "core-concepts",
    title: "Core Computer Science",
    description: "Theoretical and algorithmic foundations applied to real-world software architecture.",
    skills: [
      { name: "Data Structures & Algorithms", category: "Core", iconName: "BrainCircuit", highlight: true },
      { name: "Operating Systems (OS)", category: "Core", iconName: "Server", highlight: true },
      { name: "Database Management (DBMS)", category: "Core", iconName: "Database", highlight: true },
      { name: "Computer Networks (CN)", category: "Core", iconName: "Network", highlight: true },
      { name: "Object-Oriented Programming (OOP)", category: "Core", iconName: "Boxes", highlight: true },
      { name: "Compiler Design", category: "Core", iconName: "Code2" },
    ]
  },
  {
    id: "ai-vision",
    title: "AI & Computer Vision",
    description: "Edge inference, YOLOv8 object detection, and OpenCV real-time video analytics.",
    skills: [
      { name: "YOLOv8", category: "AI / CV", iconName: "ScanFace", highlight: true },
      { name: "OpenCV", category: "AI / CV", iconName: "Camera", highlight: true },
      { name: "WebSockets", category: "AI / CV", iconName: "Radio" },
    ]
  }
];
