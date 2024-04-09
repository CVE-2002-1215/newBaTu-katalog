/* eslint-disable @next/next/no-img-element */
import getBillboards from "@/actions/get-billboards";
import probe from "probe-image-size";
import { ImageResponse } from "next/og";

export const alt = "New Ba&Tu Hırdavat";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
}

export const revalidate = 0;

export default async function og() {
  
  const billboards = await getBillboards("c9510183-16c9-443f-95f7-b19f3be8c119");
  
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
  );
}