interface ItemListResponse {
  name: string;
  id: number;
  tier: number;
  buildsFrom: unknown[];
  buildsInto: unknown[];
  specialRecipe: number;
  noEffects: boolean;
  removed: boolean;
  requiredChampion: string;
  requiredAlly: string;
  icon: string;
  simpleDescription: string;
  stats: Object;
  shop: Object;
}

export default async function queryItemList(): Promise<ItemListResponse> {
  return (
    await fetch(
      "http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json",
      { cache: "no-store" }
    )
  )
    .json()

    .catch(console.error);
}
