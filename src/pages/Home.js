import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loadGames } from "../actions/gamesAction"
import Game from "../components/Game"
import styled from "styled-components"
import { motion,AnimateSharedLayout,AnimatePresence } from "framer-motion"
import GameDetail from "../components/GameDetail"
import{useLocation} from "react-router-dom"

const Home = () => {
// current-location
const location=useLocation()
const pathId=location.pathname.split("/")[2]




  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  

  const { popular, newGames, upcoming,searched } = useSelector((state) => state.games)


  return (
    <GameList>
    <AnimateSharedLayout>
    <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
    {/* searched */}{searched.length?(
     <div className="searched">
      <h2>searched Games</h2>
      <Games>
        {searched.map((game) => (
          <Game
          name={game.name}
          released={game.released}
          id={game.id}
          image={game.background_image}
          key={game.id}
          />
        ))}
      </Games></div>):""}
       {/* all api data*/}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
          name={game.name}
          released={game.released}
          id={game.id}
          image={game.background_image}
          key={game.id}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
          name={game.name}
          released={game.released}
          id={game.id}
          image={game.background_image}
          key={game.id}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
          name={game.name}
          released={game.released}
          id={game.id}
          image={game.background_image}
          key={game.id}
          />
        ))}
      </Games>
      </AnimateSharedLayout>
    </GameList>
  )
}
const GameList = styled(motion.div)`
padding: 0rem 5rem;
h2{
  padding:5rem 0rem;
}
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  object-fit: contain;
  grid-column-gap: 3rem;
  grid-row-gap: 1.5rem;
  cursor:pointer;
  


`

export default Home;