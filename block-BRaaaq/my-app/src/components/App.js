/** @format */

import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Articles";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <Articles />
      </main>

      <Footer />
    </>
  );
}

export default App;
