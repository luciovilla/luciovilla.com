import { Client } from "@notionhq/client";
import { makeSource, defineDatabase } from "contentlayer-source-notion";

const client = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID!;

export const Post = defineDatabase(() => ({
  name: "Post",
  databaseId,
  query: {
    filter: {
      property: "Status",
      status: {
        equals: "Published"
      }
    }
  },
  properties: {
    date: {
      name: "Created time"
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/notas/${post.slug}`
    }
  }
}));

export default makeSource({
  client,
  databaseTypes: [Post]
});
