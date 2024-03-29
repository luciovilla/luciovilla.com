import { ImageResponse } from "next/og";

export const runtime = "edge";

const loadCustomFont = fetch(
  new URL("../../../public/fonts/inter.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const postTitle = searchParams.get("title");
    const fontData = await loadCustomFont;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundImage: "url(https://luciovilla.com/ogbg.png)"
          }}
        >
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              marginBottom: 150,
              display: "flex",
              fontSize: 125,
              fontFamily: "Inter",
              color: "black",
              lineHeight: 1.1,
              whiteSpace: "pre-wrap"
            }}
          >
            {postTitle}
          </div>
        </div>
      ),
      {
        width: 1920,
        height: 1080,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal"
          }
        ]
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate social image`, {
      status: 500
    });
  }
}
