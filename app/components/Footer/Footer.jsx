"use client";
import { usePathname } from "next/navigation";
import Styles from './Footer.module.css';
import Link from "next/link";
export const Footer = () => {
    const pathname = usePathname();
    return (
        
        <footer className={Styles["footer"]}>
            {pathname === "/" ? (
        <p className={Styles["footerlogo"]}>
          <span className={Styles["footerlogo-name"]}>pindie</span>
          <span className={Styles["footerlogo-copy"]}>, XXI век</span>
        </p>
      ) : (
        <Link href="/" className={Styles["footerlogo"]}>
          <span className={Styles["footerlogo-name"]}>pindie</span>
          <span className={Styles["footerlogo-copy"]}>, XXI век</span>
        </Link>
      )}
            <ul className={Styles["social-list"]}>
                <li className={Styles["social-list__item"]}>
                    <a href="" className={`button ${Styles["social-list__link"]}`}>YT</a>
                </li>
                <li className={Styles["social-list__item"]}>
                    <a href="" className={`button ${Styles["social-list__link"]}`}>ВК</a>
                </li>
                <li className={Styles["social-list__item"]}>
                    <a href="" className={`button ${Styles["social-list__link"]}`}>TG</a>
                </li>
            </ul>
        </footer>
    )
}
