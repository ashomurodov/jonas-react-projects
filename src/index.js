import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Avatar } from "./avatar";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Shomurodov Sanjarbek</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, deserunt rem ea quae natus repellat.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, idx) => (
        <Skill color={skill.color} text={skill.skill} icon={skill.level} />
      ))}
    </div>
  );
}

function Skill({ color, text, icon }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{text}</span>
      <span>
        {icon === "advanced" && "👊"}
        {icon === "intermediate" && "👍"}
        {icon === "beginner" && "👶"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
