/** @format */
import PropTypes from "prop-types";

function Article(props) {
  return (
    <>
      <li className="article">
        <figure className="relative">
          <img className="fullWidth" src={props.urlToImage} alt={props.title} />
          <figcaption>
            <span> {props.title.toUpperCase()}</span>
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

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Article;
