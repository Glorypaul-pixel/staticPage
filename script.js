function Header() {
  return (
    <header>
      <nav>
        <img src="./img/R.png" width="10%" />
      </nav>
    </header>
  );
}
function Details() {
  return (
    <div>
      <h1>Reasons i am learning React</h1>
      <ol className="nav-item">
        <li>I love REACT</li>
        <li>I love REACT</li>
        <li>I love REACT</li>
        <li>I love REACT</li>
      </ol>
    </div>
  );
}
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
