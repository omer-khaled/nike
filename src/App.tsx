import { ReactElement } from "react";
import Nav from "./components/Nav";
import {Outlet} from 'react-router-dom';
export default function App():ReactElement {
  return (
    <main className="relative px-16 max-md:px-2">
      <Nav/>
      <Outlet/>
    </main>
  )
}