import Link from "next/link";
import queryItemList from "../../queryItemsList";
import Image from "next/image";

export default async function ItemSummaryDetails({ item }) {
  const answerItemResponse = await queryItemList();
  let selectorItem = parseInt(item);

  const filteredItemResponse = Object.values<any>(answerItemResponse).filter(
    (item) => item.id === selectorItem
  );

  return (
    <>
      {filteredItemResponse.map((item) => {
        return (
          <div key={item.name + item.id}>
            <article>
              <section>
                <Image
                  width={144}
                  height={144}
                  src={item.icon}
                  alt={item.name}
                />
                <h2>{item.name}</h2>
                {item.simpleDescription && <p>{item.simpleDescription}</p>}
                {/* {item.passives.length != 0 && <p>{item.passives}</p>}
                {item.active.length != 0 && <p>{item.active}</p>} */}
              </section>

              <section>
                {item.buildsFrom.length != 0 && <p>Builds from:</p>}
                {item.buildsFrom &&
                  item.buildsFrom.map((itemList) => {
                    return (
                      <div key={itemList + item.name + item.id}>
                        {Object.values<any>(answerItemResponse)
                          .filter((x) => x.id === itemList)
                          .map((itemBuild) => {
                            return (
                              <div key={itemBuild.name + item.name}>
                                <Image
                                  width={144}
                                  height={144}
                                  src={itemBuild.icon}
                                  alt={itemBuild.name}
                                />
                                <p>{itemBuild.name}</p>
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
                {item.buildsInto.length != 0 && <p>Builds into: </p>}
                {item.buildsInto &&
                  item.buildsInto.map((itemList) => {
                    return (
                      <div key={itemList + item.name + item.id}>
                        {Object.values<any>(answerItemResponse)
                          .filter((x) => x.id === itemList)
                          .map((itemBuild) => {
                            return (
                              <div key={itemBuild.name + item.name}>
                                <Link href={`/items/${itemBuild.id}`}>
                                  <Image
                                    width={144}
                                    height={144}
                                    src={itemBuild.icon}
                                    alt={itemBuild.name}
                                  />
                                  <p>{itemBuild.name}</p>
                                </Link>
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
              </section>
              <section>
                {Object.entries<any>(item.stats).map((stat) => {
                  return (
                    <ul key={stat[0] + item.name + item.id}>
                      {(stat[1].flat != 0 ||
                        stat[1].percent != 0 ||
                        stat[1].perLevel != 0 ||
                        stat[1].percentPerLevel != 0 ||
                        stat[1].percentBase != 0 ||
                        stat[1].percentBonus != 0) && <p>{stat[0]}</p>}
                      {stat[1].flat != 0 && <p>{stat[1].flat}</p>}
                      {stat[1].percent != 0 && <p>{stat[1].percent}%</p>}
                      {stat[1].perLevel != 0 && (
                        <p>{stat[1].perLevel} per level </p>
                      )}
                      {stat[1].percentPerLevel != 0 && (
                        <p>{stat[1].percentPerLevel}% per level</p>
                      )}
                      {stat[1].percentBase != 0 && (
                        <p>{stat[1].percentBase} base% </p>
                      )}
                      {stat[1].percentBonus != 0 && (
                        <p>{stat[1].percentBonus} bonus% </p>
                      )}
                    </ul>
                  );
                })}
                <p>{item.shop.prices.total}</p>
                <p>Full price: {item.shop.prices.total}</p>
                <p>Sells for : {item.shop.prices.sell}</p>
                {item.shop.prices.combined != 0 && (
                  <p> Combined price : {item.shop.prices.combined} </p>
                )}
              </section>
            </article>
          </div>
        );
      })}
    </>
  );
}
