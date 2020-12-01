// Base URL

const base_url=`https://api.rawg.io/api/`;


// base month
const getCurrentMonth=()=>{
    const month=new Date().getMonth()+1
    if(month<10)
    {
        return `0${month}`
    }
    else
    {
        return month
    }
};
// base date
const getCurrentDay=()=>{
    const date=new Date().getDate();
    if(date<10)
    {
        return `0${date}`
    }
    else
    {
        return date
    }
};
// year
const currentYear=new Date().getFullYear();
const currentMonth=getCurrentMonth()
const currentDay=getCurrentDay()
// complete date

const currentDate=`${currentYear}-${currentMonth}-${currentDay}`
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`

const popularGames=`games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games=`games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames=`games?dates=${currentDate},${nextYear}&ordering=-released&page_size=10`


export const newGamesUrl=()=>`${base_url}${newGames}`
export const upcomingGamesUrl=()=>`${base_url}${upcoming_games}`
export const popularGamesUrl=()=>`${base_url}${popularGames}`
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenShotURL = (game_id) => `${base_url}games/${game_id}/screenshots`;

// searched game
export const searchedGameURL =(game_name)=>`${base_url}games?search=${game_name}&page_size=9`
 
//Game ScreenShots

  


