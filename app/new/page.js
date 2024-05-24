'use client'
import { CardsList } from "../components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
export default  function New() {
    const newGames = useGetDataByCategory(endpoints.games, 'new');
    return(
       <main className={'main-inner'}>
        {newGames ? (<CardsList id='new' title='Новинки' data={newGames}/>) :
        (<Preloader/>)}
       </main>
    )
}