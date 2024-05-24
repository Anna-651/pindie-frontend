'use client'
import { CardsList } from "../components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
export default  function PixelGames() {
    const pixelGames = useGetDataByCategory(endpoints.games, 'pixel');
    return(
       <main className={'main-inner'}>
        {pixelGames ? (<CardsList id='pixel' title='Пиксельные' data={pixelGames}/>) :
        (<Preloader/>)}
        
       </main>
    )
}