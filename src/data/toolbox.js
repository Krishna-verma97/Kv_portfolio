import {
  FaDocker,
  FaAws,
  FaGithub,
  FaGitAlt,
  FaWindows,
  FaRobot,
} from "react-icons/fa";

import {
  SiPostman,
  SiFigma,
  SiClaude,
  SiCursor,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const toolbox = [
 {
  name: "Windows",
  icon: FaWindows,
  category: "OS",
},
{
  name: "VS Code",
  icon: VscVscode,
  category: "Editor",
},
{
  name: "Docker",
  icon: FaDocker,
  category: "DevOps",
},
{
  name: "AWS",
  icon: FaAws,
  category: "Cloud",
},
{
  name: "Git",
  icon: FaGitAlt,
  category: "Version Control",
},
{
  name: "GitHub",
  icon: FaGithub,
  category: "Repository",
},
{
  name: "Postman",
  icon: SiPostman,
  category: "API",
},
{
  name: "Claude",
  icon: SiClaude,
  category: "AI",
},
{
  name: "ChatGPT",
  icon: FaRobot,
  category: "AI",
},
{
  name: "Cursor",
  icon: SiCursor,
  category: "AI IDE",
},
{
  name: "Figma",
  icon: SiFigma,
  category: "Design",
},
];

export default toolbox;