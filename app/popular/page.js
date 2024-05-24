'use client'
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardList/CardsList";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";

export default function Popular() {
    const popularGames =useGetDataByCategory(endpoints.games, 'popular')
    return(
       <main className={'main-inner'}>
        {popularGames
         ? (<CardsList id='popular' title='Популярные' data={popularGames}/>) :
        (<Preloader/>)}
       </main>
    )
}