
"use client"


import { usePathname } from "next/navigation";
import Styles from './Header.module.css';
import { Popup } from '../Popup/Popup';
import Link from 'next/link';
import { Overlay } from '../Overlay/Overlay';
import { AuthForm } from '../AuthFrom/AuthForm';
import { useState, useEffect, useDeferredValue } from 'react';
import { getJWT, getMe, isResponseOk, removeJWT } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { useStore } from "@/app/store/app-store";
export const Header = () => {
  
  const store = useStore();

  
 
  const pathname = usePathname();
  const handleLogout = () => {
    store.logout();
  }
 
  return (
    <header className={Styles['header']}>
      {pathname === "/" ? (
        <span className={Styles["logo"]}>
          <img
            className={Styles["logoimage"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </span>
      ) : (
        <Link href="/" className={Styles["logo"]}>
          <img
            className={Styles["logoimage"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </Link>
      )}
      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <Link href="/new" className={`${Styles["menu__link"]} ${
    pathname === "/new" ? Styles["menu__link_active"] : ""}`}>
              Новинки
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/popular" className={`${Styles["menu__link"]} ${
    pathname === "/popular" ? Styles["menu__link_active"] : ""
  }`}>
              Популярные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/shooters" className={`${Styles["menu__link"]} ${
    pathname === "/shooters" ? Styles["menu__link_active"] : ""
  }`}>
              Шутеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/runners" className={`${Styles["menu__link"]} ${
    pathname === "/runners" ? Styles["menu__link_active"] : ""
  }`}>
              Ранеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/pixel-games" className={`${Styles["menu__link"]} ${
    pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
  }`}>
              Пиксельные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/tds" className={`${Styles["menu__link"]} ${
    pathname === "/tds" ? Styles["menu__link_active"] : ""
  }`}>
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles['auth']}>{store.isAuth ? (
        <button className={Styles['auth__button']} onClick={handleLogout}>Выйти</button>
        ) : (<button className={Styles['auth__button']} onClick={store.openPopup}>Войти</button>)}
          <nav>
            <Overlay isOpened={store.popupIsOpened} close={store.closePopup}/>
            <Popup isOpened={store.popupIsOpened} close={store.closePopup}>
              <AuthForm close={store.closePopup} />
            </Popup>
          </nav>
        </div>
      </nav>
    </header>
  )
}
