/** @format */
import data from "../data.json";
import Article from "./Article";

function Articles() {
  return (
    <>
      <section>
        <ul className="artContainer">
          {data.map(info => {
            return <Article key={info.publishedAt} {...info} />;
          })}
        </ul>
      </section>
    </>
  );
}

export default Articles;
