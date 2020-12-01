import axios from "axios"
import {popularGamesUrl,upcomingGamesUrl,newGamesUrl,searchedGameURL} from "../api"



export const loadGames =()=>async(dispatch)=>{
    const popularData =await axios.get(popularGamesUrl())
    const newGamesData =await axios.get(newGamesUrl())
    const upcomingData =await axios.get(upcomingGamesUrl())
    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular:popularData.data.results,
            upcoming:upcomingData.data.results,
            newGames:newGamesData.data.results,
            
        }
    })
}
export const fetchSearch=(game_name)=>async(dispatch)=>{
    const searchGame=await axios.get(searchedGameURL(game_name))
dispatch({
    type:"FETCH_SEARCHED",
    payload:{
        searched:searchGame.data.results

    }
})

}