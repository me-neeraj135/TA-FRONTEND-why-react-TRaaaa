/** @format */

import Header from "./Header";
import Hero from "./Hero";
import Article from "./Article";
import Footer from "./Footer";
import data from "../data.json";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="main">
        {data.map(info => {
          return <Article {...info} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
