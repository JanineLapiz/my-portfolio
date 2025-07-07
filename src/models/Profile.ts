export enum ProfileHost {
  INDEED = 'Indeed',
  LINKED_IN = 'LinkedIn',
  GITHUB = 'GitHub',
  CODEPEN = 'CodePen',
  FREE_CODE_CAMP = 'freeCodeCamp'
}

export type Profile = {
  icon: JSX.Element;
  host: ProfileHost;
  url: string;
};
