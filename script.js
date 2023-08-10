import Header from "./Header";
import Details from "./Details";
import Footer from "./Footer";
function PageComponent() {
  return (
    <div>
      <Header />
      <Details />
      <Footer />
    </div>
  );
}
ReactDOM.render(<PageComponent />, document.getElementById("header"));
