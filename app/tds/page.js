'use client'
import { CardsList } from "../components/CardList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
export default function TDS() {
    const TDSGames = useGetDataByCategory(endpoints.games, 'TDS');
    return(
       <main className={'main-inner'}>
         {TDSGames
         ? (<CardsList id='TDS' title='TDS' data={TDSGames}/>) :
        (<Preloader/>)}
        
       </main>
    )
}