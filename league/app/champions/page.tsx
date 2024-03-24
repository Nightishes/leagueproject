"use client";
import "./assets/champList.scss";
import ChampList2 from "./importChampListFix";
import SearchbarName from "../searchbar/searchbarName";

export default function ChampionList() {
  return (
    <>
      <main>
        <article className="list-champion-main">
          <section className="article-buttons-list">
            <h2>Search by :</h2>
            <div className="list-buttons-main">
              <button className="button-search-parameters" id="fighter-button">
                Fighter
              </button>
              <button className="button-search-parameters" id="tankButton">
                Tank
              </button>
              <button className="button-search-parameters" id="mageButton">
                Mage
              </button>
              <button className="button-search-parameters" id="assassinButton">
                Assassin
              </button>
              <button className="button-search-parameters" id="marksmanButton">
                Marksman
              </button>
              <button className="button-search-parameters" id="supportButton">
                Support
              </button>
              <button className="button-search-parameters" id="manaButton">
                Mana
              </button>
              <button className="button-search-parameters" id="energyButton">
                Energy
              </button>
              <button className="button-search-parameters" id="noneButton">
                None
              </button>
            </div>
            <SearchbarName />
          </section>
          <section className="list-champion-map">
            <ChampList2 />
          </section>
        </article>
      </main>
    </>
  );
}
