import Header from "./Header";

function Footer() {
  return (
    <div>
      <footer>@20 Madubueze development. All right reserved.</footer>
    </div>
  );
}
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
