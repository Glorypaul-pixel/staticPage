function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./img/R.png" width="10%" />
        <ul className="nav-item">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Details() {
  return (
    <div>
      <h1>Reasons i am learning React</h1>
      <ol>
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
