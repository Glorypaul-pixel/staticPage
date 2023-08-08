const website = (
  <div>
    <h1>React app</h1>
    <img src="./img/R.png" alt="react-logo" width="10%" />
    <h2>React Learning Website</h2>
    <ul>
      <li> Was first released in 2013</li>
      <li> Was originally created by Jordan Walke</li>
      <li> Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
    </ul>
  </div>
);

ReactDOM.render(website, document.getElementById("root"));

function PageComponent() {
  return (
    <div>
      <header>
        <nav>
          <img src="./img/R.png" width="10%" />
        </nav>
      </header>
      <h1>Reasons i am learning React</h1>
      <ol>
        <li>I love REACT</li>
        <li>I love REACT</li>
        <li>I love REACT</li>
        <li>I love REACT</li>
      </ol>
      <footer>@20 Madubueze development. All right reserved.</footer>
    </div>
  );
}
ReactDOM.render(<PageComponent />, document.getElementById("header"));
