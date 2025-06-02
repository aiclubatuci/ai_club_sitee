import "./Footer/Footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          Made with 😙 in Irvine, CA | Developed by{" "}
          <span className="contributors">
            Elise Ji, Ian Dai, and{" "}
            <a href="https://www.anguyen2000.dev">Anthony Nguyen</a>
          </span>
        </p>
      </div>
    </div>
  );
}
