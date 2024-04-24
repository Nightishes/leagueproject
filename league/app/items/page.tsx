"use client";
import "./assets/itemList.scss";
import ExportItemList from "./importItemList";
import SearchbarName from "../searchbar/searchbarName";
import SearchbarTags from "../searchbar/searchbarTags";
import { useState } from "react";
import { Suspense } from "react";

export default function ItemsList() {
  const [sharedState, setSharedState] = useState("");
  const [sharedStateTag, setSharedStateTag] = useState("");
  const tagList = [
    "Starter",
    "Boots",
    "Basic",
    "Epic",
    "Legendary",
    "Consumable",
    "Distributed",
    "Potion",
    "Trinket",
  ];

  return (
    <>
      <main className="list-item-master">
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
              <ExportItemList
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
