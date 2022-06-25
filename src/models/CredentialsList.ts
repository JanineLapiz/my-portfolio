type Credential = {
  id: number;
  title: string;
  issuedBy: string;
  issued: string;
  expires: string;
  credentialId: string | null;
  credentialUrl: string | null;
};

export type CredentialsList = Credential[];
