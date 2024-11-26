export interface Newsletter {
  id: string;
  subject: string;
  content: string;
  htmlContent: string;
  receivedAt: Date;
  fromEmail: string;
}
