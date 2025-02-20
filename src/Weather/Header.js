function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="left-links">
            <a href="/" style={{ color: "whiteSmoke" }}>
              <h3>SmartWeather</h3>
            </a>
          </div>
          <div className="right-links">
            <a href="/about">Maps</a>
            <a href="/services">Guide</a>
            <a href="/contact">Sign In</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
