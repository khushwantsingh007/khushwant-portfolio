import type { ExperienceItem } from '../types/project';

export const experiences: ExperienceItem[] = [
  {
    id: "whizzact-backend",
    company: "Whizzact",
    role: "Backend Developer Intern",
    period: "June 2026 – Aug 2026",
    status: "Internship",
    location: "Remote",
    description: "Backend engineering internship focused on developing scalable RESTful API services and high-performance database architectures.",
    points: [
      "Developed and maintained RESTful APIs using Node.js and Express.js for core backend functionalities, enabling smooth integration between frontend and database layers.",
      "Worked with Postgres for database design and management, including schema modeling, CRUD operations, and performance optimization for scalable backend services."
    ],
    technologies: ["Node.js", "Express.js", "Postgres", "REST APIs", "SQL", "Git"]
  }
];

export const experienceNotes = {
  editableNotice: "Verified internship record from Khushwant Singh's official curriculum vitae."
};
