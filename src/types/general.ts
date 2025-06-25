export interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  content: string;
  download_url: string;
  type: "file" | "dir";
  _links: {
    self: string;
    git?: string;
    html?: string;
  };
}
