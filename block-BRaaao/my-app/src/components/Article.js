/** @format */

function Articles(props) {
  console.log(props);

  return (
    <>
      <article className="article">
        <figure>
          <img className="fullWidth" src={props.urlToImage} alt="img" />
        </figure>
        <span> {props.author}</span>
        <title>{props.title}</title>
        <p>{props.description}</p>
      </article>
    </>
  );
}

export default Articles;
