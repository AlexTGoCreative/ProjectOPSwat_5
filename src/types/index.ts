export interface ProjectCardProps {
  title: string;
  description: string | null;
  link: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  language: string | null;
}
