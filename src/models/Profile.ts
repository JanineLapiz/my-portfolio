export enum ProfileProvider {
  INDEED = 'Indeed',
  LINKED_IN = 'LinkedIn',
  GITHUB = 'GitHub',
  CODEPEN = 'CodePen',
  FREE_CODE_CAMP = 'freeCodeCamp',
}

export type Profile = {
  icon: JSX.Element;
  provider: ProfileProvider;
  url: string;
};
