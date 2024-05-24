'use client';
import { getGameById } from '../../data/data-utils';
import { GameNotFound } from '@/app/components/GameNotFound/GameNotFound';
import { getNormalizedGameDataById, isResponseOk, getJWT, getMe, vote, checkIfUserVoted, removeJWT, setJWT, authorize} from '@/app/api/api-utils';
import { Preloader } from '@/app/components/Preloader/Preloader';
import { endpoints } from '@/app/api/config';
import {useEffect, useState} from 'react';


import Styles from './Game.module.css';
import { useStore } from '@/app/store/app-store';
export default function GamePage(props) {
  const store = useStore();
  const [game, setGame] = useState(null);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)
  const [isVoted, setIsVoted] = useState(false);
  
  // const game = getGameById(props.params.id);
  useEffect(() => {
        async function fetchData() {
            const game = await getNormalizedGameDataById(endpoints.games, props.params.id);
            isResponseOk(game) ? setGame(game) : setGame(null);
            setPreloaderVisible(false);
        }
        fetchData()
    }, []);
      
    
    useEffect(() => {
      if (store.user && game) {
        setIsVoted(checkIfUserVoted(game, store.user.id));
      } else {
            setIsVoted(false);
        }
    }, [store.user]);

    const handleVote = async () => {
      const jwt = store.token;
      if(!jwt) {
        store.openPopup();
        return;
      }
    let usersIdArray = game.users.length
        ? game.users.map((user) => user.id)
      : [];
    usersIdArray.push(store.user.id);
    const response = await vote(
        `${endpoints.games}/${game.id}`,
      jwt,
      usersIdArray
    );
    if (isResponseOk(response)) {
        setIsVoted(true);
      setGame(() => {
          return {
            ...game,
          users: [...game.users, store.user],
        };
      });
    }
  };
  return (
    <main className="main">
      {
    game ? (
        <>
          <section className={Styles['game']}>
            <iframe className={Styles['game__iframe']} src={game.link}></iframe>
          </section>
          <section className={Styles['about']}>
            <h2 className={Styles['about__title']}>{game.title}</h2>
            <div className={Styles['about__content']}>
              <p className={Styles["about__description"]}>{game.description}</p>
              <div className={Styles["about__author"]}>
                <p>Автор: <span className={Styles["about__accent"]}>{game.developer}</span></p>
              </div>
            </div>
            <div className={Styles["about__vote"]}>
              <p className={Styles["about__vote-amount"]}>За игру уже проголосовали: <span className={Styles["about__accent"]}>{game.users.length}</span></p>
              {/* <button onClick={() => {}} className={`button ${Styles["about__vote-button"]}`}>Голосовать</button> */}
              <button
              disabled={!store.isAuth || isVoted}
              className={`button ${Styles["about__vote-button"]}`}
              onClick={handleVote}
            >
              {isVoted ? "Голос учтён" : "Голосовать"}
            </button>
            </div>
          </section>
        </>
    ) : (
        <section className={Styles['game']}>
            <p>Такой игры не существует 😢</p>
        </section>
    )
}
     </main>
    
  );
}
// 'use client';
// import { getGameById } from '../../data/data-utils';
// import { GameNotFound } from '@/app/components/GameNotFound/GameNotFound';
// import { getNormalizedGameDataById, isResponseOk, getJWT, getMe, vote, checkIfUserVoted, removeJWT, setJWT, authorize} from '@/app/api/api-utils';
// import { Preloader } from '@/app/components/Preloader/Preloader';
// import { endpoints } from '@/app/api/config';
// import {useEffect, useState} from 'react';
// import Styles from './Game.module.css';


// export default function GamePage(props) {
//   
//   

// useEffect(() => {
//   if (currentUser && game) {
//     setIsVoted(checkIfUserVoted(game, currentUser.id));
//       } else {
//             setIsVoted(false);
//         }
//     }, [currentUser, game]);
//     const handleVote = async () => {
//       const jwt = getJWT();
//     let usersIdArray = game.users.length
//         ? game.users.map((user) => user.id)
//       : [];
//     usersIdArray.push(currentUser.id);
//     const response = await vote(
//         `${endpoints.games}/${game.id}`,
//       jwt,
//       usersIdArray
//     );
//     if (isResponseOk(response)) {
//         setIsVoted(true);
//       setGame(() => {
//           return {
//             ...game,
//           users: [...game.users, currentUser],
//         };
//       });
//   }
//   return (
//     <main className="main">
//       {
//     game ? (
//         <>
//           <section className={Styles['game']}>
//             <iframe className={Styles['game__iframe']} src={game.link}></iframe>
//           </section>
//           <section className={Styles['about']}>
//             <h2 className={Styles['about__title']}>{game.title}</h2>
//             <div className={Styles['about__content']}>
//               <p className={Styles["about__description"]}>{game.description}</p>
//               <div className={Styles["about__author"]}>
//                 <p>Автор: <span className={Styles["about__accent"]}>{game.developer}</span></p>
//               </div>
//             </div>
//             <div className={Styles["about__vote"]}>
//               <p className={Styles["about__vote-amount"]}>За игру уже проголосовали: <span className={Styles["about__accent"]}>{game.users.length}</span></p>
//               <button
//                 disabled={!isAuthorized || isVoted}
//                 className={`button ${Styles["about__vote-button"]}`}
//                 onClick={handleVote}
//               >
//                 {isVoted ? "Голос учтён" : "Голосовать"}
//               </button>
//             </div>
//           </section>
//         </>
//     ) : preloaderVisible ? (
//       <Preloader />
//   ) : (
//       <GameNotFound />
//   )
// }
//      </main>
    
//   );
//     }
//   }