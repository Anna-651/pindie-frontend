import Banner from "./components/Banner/Banner";
import { getGamesByCategory } from "./data/data-utils.js";
import { PopularCardsList } from "./components/CardList/PopularCardsList";
import { NewCardsList } from "./components/CardList/NewCardsList";
import Promo from "./components/Promo/Promo";
import { CardsList } from "./components/CardList/CardsList";
import { NewCardsFragment } from "./components/CardList/NewCardsFragment";
import { endpoints } from "./api/config";
import { getNormalizedGamesDataByCategory } from "./api/api-utils";
export default async function Home() {

  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, 'popular');
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games, 'new');
  return (
    
        <main className='main'>
          <Banner/>
          <CardsList id="popular" title="Популярные" data={popularGames}/>
          <CardsList id="new" title="Новинки" data={newGames}/>
          <Promo/>
        </main>
    );
}