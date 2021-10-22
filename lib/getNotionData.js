import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getNotionData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    // Sort posts in descending order based on the Date column.
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  // Filter out posts not checked to publish.
  const getPublishedPosts = response.results.filter(post => !!post.properties.Published.checkbox)
  return getPublishedPosts
}

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  })
  return response.results
}
