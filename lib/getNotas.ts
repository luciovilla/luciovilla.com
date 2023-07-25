const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_ENDPOINT = `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`;

const filter = {
  filter: {
    and: [
      {
        property: "Published",
        checkbox: {
          equals: true
        }
      }
    ]
  },
  sorts: [
    {
      property: "Date",
      direction: "descending"
    }
  ]
};

export const getNotas = async () => {
  const response = await fetch(NOTION_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filter)
  });

  return response.json();
};
