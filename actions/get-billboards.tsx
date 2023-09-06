import { Billboard } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async ( id?:string): Promise<Billboard[]> => {
  const url = id
    ? qs.stringifyUrl({
        url: `${URL}/${id}`,
      })
    : qs.stringifyUrl({
        url: URL,
      });

  const res = await fetch(url);
  const raw = await res.text();
  // console.log(raw);

  const responseArray = JSON.parse(raw);
  // console.log(responseArray);

  const imageUrls = responseArray.images.map((image: {url:string})=> ({
    url: image.url
  }));

  // console.log(imageUrls);

return imageUrls;
};

export default getBillboards;