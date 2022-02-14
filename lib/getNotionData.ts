import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})
export const getNotionData = async (databaseId: string) => {
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

export const getPage = async (pageId: string) => {
  return await notion.pages.retrieve({ page_id: pageId })
}

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50
  })
  return response.results
}
