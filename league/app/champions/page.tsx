"use client";
import "./assets/champList.scss";
import ChampList2 from "./importChampListFix";
import SearchbarName from "../searchbar/searchbarName";
import SearchbarTags from "../searchbar/searchbarTags";
import { useState } from "react";
import { Suspense } from "react";

export default function ChampionList() {
  const [sharedState, setSharedState] = useState("");
  const [sharedStateTag, setSharedStateTag] = useState("");
  const tagList = [
    "Fighter",
    "Tank",
    "Mage",
    "Marksman",
    "Assassin",
    "Support",
  ];

  return (
    <>
      <main>
        <article className="list-champion-main">
          <section className="article-buttons-list">
            <h2>Search by :</h2>
            <SearchbarTags
              props={{ tags: tagList, onQueryTags: setSharedStateTag }}
            />
            <SearchbarName onQuery={setSharedState} />
          </section>
          <section className="list-champion-map">
            <Suspense fallback={<h2>Loading...</h2>}>
              <ChampList2
                props={{
                  sharedState: sharedState,
                  sharedStateTag: sharedStateTag,
                }}
              />
            </Suspense>
          </section>
        </article>
      </main>
    </>
  );
}
