'use client'
import { CardsList } from "../components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
export default function Shooter() {
    const shooterGames = useGetDataByCategory(endpoints.games, 'shooter');
    return(
       <main className={'main-inner'}>
        {shooterGames
         ? (<CardsList id='shooter' title='Шутеры' data={shooterGames}/>) :
        (<Preloader/>)}
       </main>
    )
}