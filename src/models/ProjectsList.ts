export type ProjectsList = {
  codePen: CodePen[];
  heroku: Heroku[];
};

type CodePen = {
  id: number;
  name: string;
  url: string;
  imgUrl: string;
};

type Heroku = CodePen & {
  repository: string;
};
