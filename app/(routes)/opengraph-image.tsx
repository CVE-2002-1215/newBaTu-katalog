/* eslint-disable @next/next/no-img-element */
import getBillboards from "@/actions/get-billboards";
import getCategoryById from "@/actions/get-category-by-id";
import probe from "probe-image-size";
import { ImageResponse } from "next/server";

export const alt = "New Ba&Tu Hırdavat";
export const contentType = "image/png";

export const revalidate = 0;

export default async function og() {
  
  const billboards = await getBillboards("e0ec14b4-81fa-4696-8822-eda5cfcc9798");
  
  // Get the image dimensions using probe-image-size
  const { width, height } = await probe(billboards?.[0].url);

  const size = {
    width,
    height,
  };

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: `url(${billboards?.[0].url})`,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      </div>
    ),
    {
      ...size
    }
  )
}