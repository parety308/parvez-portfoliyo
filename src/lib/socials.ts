import type { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { isPlaceholder, personalInfo } from "@/lib/portfolio";

type Social = { label: string; href: string; Icon: IconType };

const all: Social[] = [
  { label: "GitHub", href: personalInfo.socials.github, Icon: FaGithub },
  { label: "LinkedIn", href: personalInfo.socials.linkedin, Icon: FaLinkedin },
  { label: "Facebook", href: personalInfo.socials.facebook, Icon: FaFacebook },
  { label: "Twitter", href: personalInfo.socials.twitter, Icon: FaTwitter },
];

export const socials = all.filter((item) => !isPlaceholder(item.href));
