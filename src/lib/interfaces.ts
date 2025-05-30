export interface GitHubCommitResponse {
    sha: string;
    commit: {
      author: {
        name: string;
        email: string;
        date: string;
      };
      message: string;
    };
    html_url: string;
    author?: {
      avatar_url: string;
    } | null;
  }
  
export interface Commit {
    hash: string;
    date: string;
    author: string;
    email: string;
    message: string;
    url: string;
    avatar: string | null;
  }