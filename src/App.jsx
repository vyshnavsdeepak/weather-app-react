import './App.css'
import LeafletMap from './components/Leaflet'
import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <>
      <h1 className='bg-green-100'>Weather app</h1>
      <div className='h-[600px] bg-red-100'>
        <LeafletMap />
      </div>
      <WeatherCard />
    </>
  )
}

export default App
