import * as ReactIcons from "react-icons";

export enum ProfileProvider {
  INDEED = "Indeed",
  LINKED_IN = "LinkedIn",
  GITHUB = "GitHub",
  CODEPEN = "CodePen",
  FREE_CODE_CAMP = "freeCodeCamp",
}

export type Profile = {
  icon: JSX.Element;
  profileProvider: ProfileProvider;
  profileUrl: string;
};

export type ProfilesList = Profile[];
