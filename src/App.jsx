import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";
import { RocketDetails } from "./components/RocketDetails";
import logo from "./assets/logo-spacex.png";


export function App() {
  return (
    <>
      <Image m={4} src={ logo } width={300} />
      <Routes>
        <Route path="/" element={ <LaunchList /> } />
        <Route path="launch/:id" element={ <LaunchDetails /> } />
        <Route path="rockets/:rocketId" element={ <RocketDetails /> } />
      </Routes>
    </>
  )
}

