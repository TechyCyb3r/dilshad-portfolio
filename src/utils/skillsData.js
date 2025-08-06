import OS from "../assets/ticon/os.svg"
import Hosting from "../assets/ticon/hosting.svg"
import Tools from "../assets/ticon/tools.svg"
import Web from "../assets/ticon/web.svg"
import Mail from "../assets/ticon/mail.svg"

import Centos from "../assets/os/centos.svg";
import Ubuntu from "../assets/os/ubuntu.svg";
import Alma from "../assets/os/almalinux.svg";
import Rocky from "../assets/os/rockylinux.svg";
import Windows from "../assets/os/windows.svg";

import cPanel from "../assets/hosting/cpanel.svg";
import Plesk from "../assets/hosting/plesk.svg";
import CWP from "../assets/hosting/cwp.png";
import Webuzo from "../assets/hosting/webuzo.png";
import VirtualMin from "../assets/hosting/Virtualmin.svg";

import githubLogo from "../assets/devop/github.svg";
import Docker from "../assets/devop/docker.svg";
import Bash from "../assets/devop/bash.svg";
import Cron from "../assets/devop/cron.png";

import Nginx from "../assets/web/nginx.svg";
import MySql from "../assets/web/mysql.svg";
import Apache from "../assets/web/apache.svg";
import Dns from "../assets/web/dns.svg";
import Php from "../assets/web/php.svg";

import SMail from "../assets/mail/smartermail.png";
import Gwspace from "../assets/mail/gworkspace.svg";
import Office from "../assets/mail/msoffice.svg";
import Zimbra from "../assets/mail/zimbra.png";

const skillsData = [
  {
    title: "Operating System",
    icon: OS,
    skills: [
      { skill: "CentOS", icon: Centos, color: "#262577" },
      { skill: "Ubuntu", icon: Ubuntu, color: "#E95420" },
      { skill: "AlmaLinux", icon: Alma, color: "#2C375B" },
      { skill: "RockyLinux", icon: Rocky, color: "#10B981" },
      { skill: "Windows", icon: Windows, color: "#00A4EF" },
    ],
  },
  {
    title: "Web Hosting Panels",
    icon: Hosting,
    skills: [
      { skill: "WHM/cPanel", icon: cPanel, color: "#FF6C2C" },
      { skill: "Plesk", icon: Plesk, color: "#1B1F23" },
      { skill: "CWP", icon: CWP, color: "#0063B1" },
      { skill: "Webuzo", icon: Webuzo, color: "#FC8213" },
      { skill: "Virtualmin", icon: VirtualMin, color: "#1D72F3" },
    ],
  },
  {
    title: "Mail & Collaboration Tool",
    icon: Mail,
    skills: [
      { skill: "Zimbra", icon: Zimbra, color: "#E2383F" },
      { skill: "Google Workspace", icon: Gwspace, color: "#4285F4" },
      { skill: "Office 365", icon: Office, color: "#D83B01" },
      { skill: "SmarterMail", icon: SMail, color: "#2C8FB1" },
    ],
  },
  {
    title: "devop & Tools",
    icon: Tools,
    skills: [
      { skill: "Bash Scripting", icon: Bash, color: "#4EAA25" },
      { skill: "GitHub", icon: githubLogo, color: "#171515" },
      { skill: "Docker (basics)", icon: Docker, color: "#0db7ed" },
      { skill: "cron jobs", icon: Cron, color: "#F9A825" },
    ],
  },
  {
    title: "Web Stack",
    icon: Web,
    skills: [
      { skill: "Apache", icon: Apache, color: "#D22128" },
      { skill: "Nginx", icon: Nginx, color: "#009639" },
      { skill: "MySQL", icon: MySql, color: "#00758F" },
      { skill: "PHP", icon: Php, color: "#8892BE" },
      { skill: "DNS", icon: Dns, color: "#4B0082" },
    ],
  },
];

export default skillsData;
