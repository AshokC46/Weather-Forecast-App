function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} SmartWeather. All rights reserved.
        </p>
        <p>
          Weather data provided by{" "}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenWeatherMap
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
export default Footer;
