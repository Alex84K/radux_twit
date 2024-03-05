import { useState } from "react"
import "./App.css"
import { Stats, StatsType, User } from "./utils/types"
import { TwitterContext } from "./utils/context"
import Navigation from "./components/Navigation"
import Body from "./components/Body"

const App = () => {
    const [user, setUser] = useState<User>({
      name: 'Bobbi',
      avatar: 'https://gravatar.com/avatar/000?d=robohash'
    })
  
    const [stats, setStats] = useState<Stats>({
      followers: 0,
      following: 0
    })
  
  
    const changeStats = (statsType: StatsType, sum: number) => {
      setStats(stats => {
        let res = stats[statsType] + sum;
        res = res < 0 ? 0 : res;
        return { ...stats, [statsType]: res };
      })
    }
  
    return (
      <div className='app'>
          <Navigation />
          <Body />
      </div>
  )
  
}

export default App
