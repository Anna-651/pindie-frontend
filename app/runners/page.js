'use client'
import { CardsList } from "../components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
export default function Runner() {
    const runnerGames = useGetDataByCategory(endpoints.games, 'runner');
    return(
       <main className={'main-inner'}>
         {runnerGames
         ? (<CardsList id='runner' title='Ранеры' data={runnerGames}/>) :
        (<Preloader/>)}
       </main>
    )
}