# Weather-Forecast-App

A responsive weather application that provides real-time weather information for any location. Built with React and styled using CSS, this app utilizes the OpenWeatherMap API to fetch accurate weather data.

## Features

*   **Real-time Weather:** Displays current weather conditions, including temperature, humidity, and wind speed.
*   **Location Search:** Search for weather information by city name.
*   **5-Day Forecast:** Provides a 5-day weather forecast.
*   **Responsive Design:** Adapts seamlessly to various screen sizes and devices.
*   **Error Handling:** Implements error handling for invalid user inputs.
*   **User Preferences:** Uses LocalStorage to save user preferences (if applicable).

## Tech Stack

*   **Front-end:**
    *   React
    *   JavaScript
    *   HTML
    *   CSS
    *   Bootstrap
*   **API:**
    *   OpenWeatherMap API
*   **Other:**
    *   LocalStorage (for saving user preferences)

## Setup

### Prerequisites

*   Node.js installed on your system.

### Installation

1.  Clone the repository (if applicable).
2.  Navigate to the project directory in your terminal.
3.  Install dependencies:

   
    npm install
  

4.  Start the development server:

    
    npm start
    

## Screenshots



![screencapture-localhost-3000-2025-02-20-16_57_17](https://github.com/user-attachments/assets/de4a82b5-da22-4900-ba45-4a5189077fe5)

## API Documentation

This application uses the OpenWeatherMap API.  You will need an API key to use this app. 

### Endpoints

*   Current Weather: `GET /weather?q={city_name}&appid={API_KEY}`
*   5-Day Forecast: `GET /forecast?q={city_name}&appid={API_KEY}`
