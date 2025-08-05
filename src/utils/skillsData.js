import OS from "../assets/ticon/os.svg"
import Hosting from "../assets/ticon/hosting.svg"
import Tools from "../assets/ticon/tools.svg"
import Web from "../assets/ticon/web.svg"
import Mail from "../assets/ticon/mail.svg"

import Centos from "../assets/os/CentOS.svg";
import Ubuntu from "../assets/os/Ubuntu.svg";
import Alma from "../assets/os/AlmaLinux.svg";
import Rocky from "../assets/os/RockyLinux.svg";
import Windows from "../assets/os/Windows.svg";

import cPanel from "../assets/hosting/cPanel.svg";
import Plesk from "../assets/hosting/Plesk.svg";
import CWP from "../assets/hosting/CWP.png";
import Webuzo from "../assets/hosting/Webuzo.png";
import VirtualMin from "../assets/hosting/Virtualmin.svg";

import canvaLogo from "../assets/Devops/canva.svg";
import githubLogo from "../assets/Devops/github.svg";
import Docker from "../assets/Devops/docker.svg";
import Bash from "../assets/Devops/bash.svg";
import Cron from "../assets/Devops/cron.png";

import Nginx from "../assets/web/Nginx.svg";
import MySql from "../assets/web/MySQL.svg";
import Apache from "../assets/web/Apache.svg";
import DNS from "../assets/web/DNS.svg";
import Php from "../assets/web/php.svg";

import SMail from "../assets/mail/smartermail.png";
import Gwspace from "../assets/mail/gworkspace.svg";
import Office from "../assets/mail/msoffice.svg"
import Zimbra from "../assets/mail/zimbra.png"
const skillsData = [
  {
    title: "Operating System",
    icon: OS,
    skills: [
      { skill: "CentOS", icon: Centos, color: "#e34c26" },
      { skill: "Ubuntu", icon: Ubuntu, color: "#264de4" },
      { skill: "AlmaLinux", icon: Alma, color: "#f0db4f" },
      { skill: "RockyLinux", icon: Rocky, color: "#f89820" },
      { skill: "Windows", icon: Windows, color: "#00599C" },

    ],
  },
  {
    title: "Web Hosting Panels",
    icon: Hosting,
    skills: [
      { skill: "WHM/cPanel", icon: cPanel, color: "#61DAFB" },
      { skill: "Plesk", icon: Plesk, color: "#9461fd" },
      { skill: "CWP", icon: CWP, color: "#264de4" },
      { skill: "Webuzo", icon: Webuzo, color: "#38BDF8" },
      { skill: "Virtualmin", icon: VirtualMin, color: "#7952B3" }
    ],
  },
  {
    title: "Mail & Collaboration Tool",
    icon: Mail,
    skills: [
      { skill: "Zimbra", icon: Zimbra, color: "#68A063" },
      { skill: "Google Workspace", icon: Gwspace, color: "#47A248" },
      { skill: "Office 365", icon: Office, color: "#00758F" },
      { skill: "SmarterMail", icon: SMail, color: "#00758F" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Tools,
    skills: [
      { skill: "Bash Scripting", icon: Bash, color: "#007ACC" },
      { skill: "GitHub", icon: githubLogo, color: "#9CA3AF" },
      { skill: "Docker (basics)", icon: Docker, color: "#00A67E" },
      { skill: "cron jobs", icon: Cron, color: "#F24E1E" },
      { skill: "Canva", icon: canvaLogo, color: "#00C4CC" },
    ],
  },
  {
    title: "Web Stack",
    icon: Web,
    skills: [
      { skill: "Apache", icon: Apache, color: "#007ACC" },
      { skill: "Nginx", icon: Nginx, color: "#9CA3AF" },
      { skill: "MySQL", icon: MySql, color: "#00A67E" },
      { skill: "PHP", icon: Php, color: "#F24E1E" },
      { skill: "DNS", icon: DNS, color: "#00C4CC" },
    ],
  },
];

export default skillsData;
