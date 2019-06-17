import axios from "axios";

export async function getData() {
  const response = await axios.get("/data/data.json");

  return transformResponse(response);
}

export function transformResponse(response) {
  
  const item = response.data.CatalogEntryView[0];
  let price = item.Offers[0].OfferPrice[0].formattedPriceValue;

  return {
    price,
    code: item.purchasingChannelCode,
    title: item.title
  };
}
