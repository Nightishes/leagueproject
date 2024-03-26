"use client";
import "./assets/champList.scss";
import ChampList2 from "./importChampListFix";
import SearchbarName from "../searchbar/searchbarName";
import SearchbarTags from "../searchbar/searchbarTags";
import { useState } from "react";
import { Suspense } from "react";

export default function ChampionList() {
  const [sharedState, setSharedState] = useState("");
  const [sharedStateTag, setSharedStateTag] = useState(null);
  const tagList = [
    "Fighter",
    "Tank",
    "Mage",
    "Marksman",
    "Assassin",
    "Support",
    "Mana",
    "Energy",
    "None",
  ];

  return (
    <>
      <main>
        <article className="list-champion-main">
          <section className="article-buttons-list">
            <h2>Search by :</h2>
            <SearchbarTags tags={tagList} onQueryTags={setSharedStateTag} />
            <SearchbarName onQuery={setSharedState} />
          </section>
          <section className="list-champion-map">
            <Suspense fallback={<h2>Loading...</h2>}>
              <ChampList2
                sharedState={sharedState}
                sharedStateTag={sharedStateTag}
              />
            </Suspense>
          </section>
        </article>
      </main>
    </>
  );
}
