export interface PostType {
  archived: boolean
  created_time: string
  id: string
  last_edited_time: string
  object: string
  parent: object
  properties: {
    Date: { date: { start: string } }
    Description: {
      id: string
      rich_text: [{ plain_text: string }]
      type: string
    }
    Post: {
      id: string
      title: [{ plain_text: string }]
      type: string
    }
    Published: {
      checkbox: boolean
    }
    Slug: {
      rich_text: [{ plain_text: string }]
    }

    Show_updated_timestamp: {
      checkbox: boolean
    }
    url: string
  }
  url: string
}

export interface BlockType extends PostType {
  has_children: boolean
  paragraph: object
  type: string
}

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export interface FormState {
  state: Form
  message?: string
}

export interface ContentBlocks {
  annotations: {
    bold: string
    code: string
    color: string
    italic: string
    strikethrough: string
    underline: string
  }
  text: {
    content: string
    link: {
      url: string
    }
  }
}

export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export type FeaturedProps = {
  title?: string
  projRole: string
  image?: string
  width: number
  height: number
  url?: string
  summary: string
  awards?: string
  tools?: string
}
