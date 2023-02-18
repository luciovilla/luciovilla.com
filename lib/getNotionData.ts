import { Client } from '@notionhq/client'

const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getNotionData = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    // Filter out posts not checked to publish.
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true
          }
        }
      ]
    },
    // Sort posts in descending order based on the Date column.
    sorts: [
      {
        property: 'Date',
        direction: 'descending'
      }
    ]
  })

  return response.results
}

export const getPage = async (pageId: string): Promise<any> => {
  const pageData = await notion.pages.retrieve({ page_id: pageId })
  return pageData
}

export const getBlocks = async (blockId: string) => {
  const blocks = []
  let cursor: string
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId
    })
    blocks.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  return blocks
}
