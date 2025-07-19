import Header from "./components/Header/Header"
import WeatherBoard from "./components/WeatherBody/WeatherBoard"
import { WeatherProvider } from "./provider"
function App() {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen bg-no-repeat bg-cover">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>

  )
}

export default App
