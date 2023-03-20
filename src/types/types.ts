export interface ICardData {
  src: string;
  alt: string;
  title: string;
  text: string;
  path: string;
}

export interface IToDo {
  id: number;
  text: string;
  status?: boolean;
}
