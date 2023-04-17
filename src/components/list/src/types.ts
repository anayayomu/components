export interface IListItem {
  avatar?: string,
  title?: string,
  desc?: string,
  time?: string,
  tag?: string,
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger',
}

export interface IListOptions {
  title: string,
  content: IListItem[]
}

export interface IActionOptions {
  text: string,
  icon?: string
}