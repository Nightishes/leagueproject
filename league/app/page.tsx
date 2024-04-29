import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const versionPull = await checkGameVersion();
  console.log(versionPull[0]);
  const lastUpdatedVersion = [
    versionPull[0],
    versionPull[1],
    versionPull[2],
    versionPull[3],
  ];

  return (
    <>
      <main>
        <section>
          <h2>Latest patchnotes</h2>
          {lastUpdatedVersion.map((patchnote) => {
            patchnote.slice(0, -2).replace(".", "-");

            return (
              <div key={patchnote}>
                <Link
                  href={`https://www.leagueoflegends.com/en-us/news/game-updates/patch-${patchnote}-notes/`}
                >
                  Link to {patchnote}
                </Link>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export async function checkGameVersion() {
  return (
    await fetch("https://ddragon.leagueoflegends.com/api/versions.json", {
      next: { revalidate: 3600 },
    })
  )
    .json()
    .then((result) => result)
    .catch(console.error);
}
