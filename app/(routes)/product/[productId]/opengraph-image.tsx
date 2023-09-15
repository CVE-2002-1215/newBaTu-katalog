/* eslint-disable @next/next/no-img-element */
import getProduct from "@/actions/get-product";
import { ImageResponse } from "next/server";
import probe from "probe-image-size";

export const alt = "New Ba&Tu Hırdavat";
export const contentType = "image/png";
export const size = {
  width: 400,
  height: 400,
} 

export const revalidate = 0;

export default async function og({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId);

  // Get the image dimensions using probe-image-size
  const { width, height } = await probe(product.images[0].url);

  const size = {
    width,
    height,
  };

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: `url(${product.images[0].url})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      ></div>
    ),
    {
      ...size
    }
  )
}