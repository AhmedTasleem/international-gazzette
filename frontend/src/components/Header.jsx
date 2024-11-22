import React, { useState, useEffect } from "react";
import "./Header.css"; // Ensure your CSS file path is correct

const Header = () => {
  // State for date, time, and temperature
  const [currentTime, setCurrentTime] = useState(new Date());
  const [temperature, setTemperature] = useState(null);

  // Effect to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Effect to fetch location and temperature on component mount
  useEffect(() => {
    const success = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // const YOUR_API_KEY = ca28edaaba49e7ee070383a0e72e349a

      // Replace with your preferred weather API endpoint
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ca28edaaba49e7ee070383a0e72e349a&units=metric`)
        .then((response) => response.json())
        .then((data) => {
          setTemperature(Math.round(data.main.temp)); // Convert Kelvin to Celsius
        })
        .catch((error) => console.error(error));
    };

    const error = (err) => console.error(err);

    // Request user location permission
    navigator.geolocation.getCurrentPosition(success, error);
  }, []); // Empty dependency array to run only once on mount

  // Format date and time
  const formattedDate = currentTime.toLocaleDateString("en-GB");
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="header">
      {/* Left Section */}
      <div className="header-left">
        <span className="language-label">Language:</span>
        <select className="language-dropdown">
          <option value="en">English</option>
          <option value="fr">हिन्दी</option>
          <option value="es">ಕನ್ನಡ</option>
        </select>
      </div>

      {/* Center Section */}
      <div className="header-center">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
        {temperature ? (
          <span>{temperature}°C</span>
        ) : (
          <span>Loading...</span>
        )}
      </div>

      {/* Right Section */}
      <div className="header-right">
        <span>Follow Us:</span>
        <a href="https://www.instagram.com/ahmed_tasleem03" className="social-link">
          <img src="/rb_136728.png" alt="Instagram" />
        </a>
        <a href="https://x.com/ahmedtasleem14" className="social-link">
          <img src="/twitter_logo.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Header;