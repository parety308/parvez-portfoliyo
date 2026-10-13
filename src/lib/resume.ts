import fs from "node:fs";
import path from "node:path";
import { isPlaceholder, personalInfo } from "@/lib/portfolio";

/** True only if the resume file really exists in /public. */
export function hasResume(): boolean {
  if (isPlaceholder(personalInfo.resumeUrl)) return false;
  const relativePath = personalInfo.resumeUrl.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", relativePath));
}
