/* Button Types: */
type ButtonType = {
  action?: (event) => any,
  className: string,
  full?: boolean,
  label: string,
  link: string,
  title?: string,
  type: string,
}

type HeaderButtonType = {
  children: any,
  className: string,
  value: string,
  link: string,
  title: string,
}

/* Header / Slide fields types */
type SubLinks = {
  label: string,
  key: string,
  link: string,
}

type ContentType = {
  className?: string,
  label: string,
  link: string,
  sublinks?: SubLinks[],
}


/* Story Types */
type ParagraphType = {
  array?: string[],
  className?: string,
  style?: any,
  type: string,
  text: string,
}

type StoryType = {
  author?: string[],
  className?: string,
  id: string,
  title: string,
  text?: string,
  story: ParagraphType[],
  style?: {},
}

type StoriesType = StoryType[];

export {
  ButtonType,
  HeaderButtonType,
  ContentType,
  SubLinks,
  ParagraphType,
  StoryType,
  StoriesType
};
