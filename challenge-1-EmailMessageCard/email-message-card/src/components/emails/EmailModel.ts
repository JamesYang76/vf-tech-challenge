export interface Contact {
  name?: string;
  email: string;
}
  
export interface Message {
  id: string;
  dateTimeCreated: number;
  from: Contact;
  to: Contact[];
  cc: Contact[];
  contentPreview: string;
  content: string;
}
