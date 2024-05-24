import './globals.css';
import {Footer} from '../app/components/Footer/Footer';
import {Header} from '../app/components/Header/Header';
import { App } from "./App";

export const metadata = {
  title: 'Pindie',
  description: 'Портал инди-игр от студентов Яндекс Практикума',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
      <App>{children}</App>
    </body>
  </html>
           
  )
} 

