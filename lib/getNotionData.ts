import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getNotionData = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    // Sort posts in descending order based on the Date column.
    sorts: [
      {
        property: 'Date',
        direction: 'descending'
      }
    ]
  })

  // Filter out posts not checked to publish.
  return response.results.filter((post) => !!post.properties.Published['checkbox'])
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
