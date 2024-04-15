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
              </section>
              <section></section>
            </article>
          </div>
        );
      })}
    </>
  );
}
