'use client'
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { useStore } from "./store/app-store";
import { AuthContext } from "./context/app-context";
export const App=(props) =>{
    const store = useStore();
    useEffect(()=> {
        store.checkAuth();
    }, []);
    return(
        <>
      <Header />
      {props.children}
      <Footer />
    </>
    )
}