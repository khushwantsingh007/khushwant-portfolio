export interface AcademicRecord {
  education: string;
  institute: string;
  score: string;
  year: string;
  location?: string;
  highlight?: boolean;
}

export const academicTable: AcademicRecord[] = [
  {
    education: "B.TECH in Computer Science",
    institute: "Graphic Era Hill University Bhimtal",
    score: "7.28 / 10",
    year: "2023 – 2027",
    location: "Bhimtal, Uttarakhand",
    highlight: true
  },
  {
    education: "12th U.B.S.E",
    institute: "Govt. M. Inter College, Chaukhutiya",
    score: "68%",
    year: "2022 – 2023",
    location: "Chaukhutiya, Uttarakhand"
  },
  {
    education: "10th U.B.S.E",
    institute: "Bal Vikas Vidya Mandir HSS, Bhatkote",
    score: "70.4%",
    year: "2020 – 2021",
    location: "Bhatkote, Uttarakhand"
  }
];

export const educationData = {
  institution: "Graphic Era Hill University Bhimtal",
  degree: "B.TECH in Computer Science",
  field: "Computer Science & Engineering",
  period: "2023 – 2027",
  score: "7.28 / 10 GPA",
  expectedGraduation: "2027",
  highlights: [
    "Core Coursework: Data Structures & Algorithms, Operating Systems (OS), Database Management Systems (DBMS), Computer Networks (CN), OOP, Compiler Design",
    "Applied Engineering: High-throughput backend development with Node.js/Express, relational database modeling in Postgres, and computer vision with YOLOv8 & OpenCV",
    "Academic Standing: 7.28/10 GPA with consistent focus on computer science fundamentals and software systems"
  ]
};
