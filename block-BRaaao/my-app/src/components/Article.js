/** @format */

function Article(props) {
  return (
    <>
      <li className="article">
        <figure className="relative">
          <img className="fullWidth" src={props.urlToImage} alt={props.title} />
          <figcaption>
            <span> {props.title}</span>
          </figcaption>
        </figure>
        <p>{props.description}</p>
        <button>
          <a href={props.url}>Read more</a>
        </button>
      </li>
    </>
  );
}

export default Article;
