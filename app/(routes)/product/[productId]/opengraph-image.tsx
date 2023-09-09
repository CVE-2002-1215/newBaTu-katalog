/* eslint-disable @next/next/no-img-element */
import getProduct from "@/actions/get-product";
import { ImageResponse } from "next/server";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Expolorer | Blog";
export const contentType = "image/png";

export default async function og({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={product?.images[0].url + "&w=1200&h=630&auto=format&q=75"}
            alt={product?.name!!}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">{product?.name}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
          </div>
        </div>
      </div>
    ),
    size
  );
}