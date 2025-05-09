'use client';

import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  
 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('/api/weather?lat=19.07602&lon=72.87776'); 
        const data = await res.json();
    

        if (res.ok) {
          setWeather(data);
        } else {
          setError(data.error);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(`Failed to fetch weather data: ${err.message}`);
        } else {
          setError('Failed to fetch weather data.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <section className="text-center mt-10 dark:bg-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Hrishikesh 👋</h1>
      <p className="text-lg text-gray-600 mb-6 dark:text-gray-200">
        I’m a web developer learning Next.js & Tailwind CSS. This is my portfolio.
      </p>


      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">🌤️ Current Weather</h2>
        {loading ? (
          <p>Loading weather...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="text-lg">
            <p>Location: London</p>
            <p>Temperature: {weather.current.temp}°K</p>
            <p>Condition: </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
