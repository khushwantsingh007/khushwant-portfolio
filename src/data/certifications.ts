export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  badge: string;
  iconName: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "oci-ai",
    title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle",
    period: "Sept 2025 – Oct 2025",
    badge: "Cloud & AI",
    iconName: "Cloud"
  },
  {
    id: "full-stack-udemy",
    title: "Full Stack Mastery Course",
    issuer: "Udemy",
    period: "Feb 2026 – Apr 2026",
    badge: "Web Development",
    iconName: "Layers"
  },
  {
    id: "ai-engineer-udemy",
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    issuer: "Udemy",
    period: "Jul 2026 – Aug 2026",
    badge: "AI Engineering",
    iconName: "BrainCircuit"
  }
];

export const achievements = [
  {
    id: "hackerrank-sql",
    title: "3 Star in SQL",
    platform: "HackerRank",
    description: "Demonstrated advanced relational database querying, schema joins, aggregations, and subqueries.",
    iconName: "Award"
  },
  {
    id: "leetcode-350",
    title: "Solved 350+ Problems",
    platform: "LeetCode",
    description: "Consistent practice across Arrays, Strings, Trees, Graphs, Greedy algorithms, and Dynamic Programming.",
    iconName: "Code2"
  }
];
