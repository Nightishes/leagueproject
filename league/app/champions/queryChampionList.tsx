import { checkGameVersion } from "../page";

interface ChampListResponse {
  [name: string]: {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: unknown;
    image: unknown;
    tags: unknown[];
    partype: string;
    stats: unknown;
  };
}

export default async function queryChampList(): Promise<ChampListResponse> {
  const checkVersion = await checkGameVersion();
  return (
    await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${checkVersion[0]}/data/en_US/champion.json`,
      { next: { revalidate: 60 } }
    )
  )
    .json()
    .then((result) => result.data)
    .catch(console.error);
}
