export type Certification = {
  id: number;
  title: string;
  issuedBy: string;
  issuedDateTimeIsoUtc: string;
  expiresDateTimeIsoUtc?: string;
  url?: string;
};
