import { parse as parseYaml } from 'yaml';

function parseFrontmatter(raw: string): { data: any; content: string } {
  // Supports: ---\nYAML\n---\nCONTENT
  if (!raw.startsWith('---')) return { data: {}, content: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { data: {}, content: raw };
  const fmBlock = raw.slice(3, end).trim();
  const content = raw.slice(end + '\n---'.length).trimStart();
  const data = fmBlock ? parseYaml(fmBlock) : {};
  return { data, content };
}

export type Profile = {
  name: string;
  headline?: string;
  location?: string;
  avatar?: string;
  links?: { label: string; url: string }[];
  bioMd: string;
};

export type Skills = {
  intro?: string;
  sections: {
    title: string;
    items: { label: string }[];
    images?: string[];
  }[];
};

export type Projects = {
  intro?: string;
  projects: {
    name: string;
    tagline?: string;
    description?: string;
    tech?: string[];
    links?: { label: string; url: string }[];
    images?: string[];
  }[];
};

export type Achievements = {
  intro?: string;
  achievements: {
    title: string;
    org?: string;
    date?: string;
    description?: string;
    images?: string[];
  }[];
};

export type Certifications = {
  intro?: string;
  items: {
    title: string;
    issuer?: string;
    date?: string;
    credentialUrl?: string;
    images?: string[];
  }[];
};

export type Interests = {
  intro?: string;
  interests: {
    title: string;
    description?: string;
    images?: string[];
  }[];
};

async function fetchMd(relPath: string) {
  const res = await fetch(`/data/${relPath}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load /data/${relPath}: ${res.status}`);
  return res.text();
}

export async function loadProfile(): Promise<Profile> {
  const raw = await fetchMd('profile.md');
  const parsed = parseFrontmatter(raw);
  return {
    ...(parsed.data as any),
    bioMd: parsed.content.trim(),
  };
}

export async function loadSkills(): Promise<Skills> {
  const raw = await fetchMd('skills.md');
  const parsed = parseFrontmatter(raw);
  return parsed.data as any;
}

export async function loadProjects(): Promise<Projects> {
  const raw = await fetchMd('projects.md');
  const parsed = parseFrontmatter(raw);
  return parsed.data as any;
}

export async function loadAchievements(): Promise<Achievements> {
  const raw = await fetchMd('achievements.md');
  const parsed = parseFrontmatter(raw);
  return parsed.data as any;
}

export async function loadCertifications(): Promise<Certifications> {
  const raw = await fetchMd('certifications.md');
  const parsed = parseFrontmatter(raw);
  return parsed.data as any;
}

export async function loadInterests(): Promise<Interests> {
  const raw = await fetchMd('interests.md');
  const parsed = parseFrontmatter(raw);
  return parsed.data as any;
}
