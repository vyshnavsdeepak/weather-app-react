import React, { useState } from "react"
import getWeather from "../api/weather";

const WeatherCard = () => {
  const [info, setInfo] = useState({
    city: "",
    temperature: "",
    windspeed: "",
  });

  React.useEffect(() => {
    const abortController = new AbortController();
    (async function () {
      const weather = await getWeather({ lat: 17.4065,long: 78.4772 }, abortController.signal)

      setInfo({
        city: "",
        ...weather
      })
    })();


    return () => {
      abortController.abort();
    }
  }, []);



return (<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Weather</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            { Object.keys(info).map((field) => <li className="py-3 sm:py-4" key={field}>
                <div className="flex items-center justify-between">
                      <p className="text-gray-100">
                      {field}
                      </p>

                    <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       {info[field]}
                    </p>
                </div>
            </li>)}
        </ul>
   </div>
</div>)
}

export default WeatherCard;
