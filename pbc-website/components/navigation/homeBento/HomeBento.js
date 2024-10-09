'use client'
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import LgAppBar from "../LgAppBar";
import Announcement from "./Announcement";
import LatestSermon from "./LatestSermon";
import BentoBody from "./bentoBody/BentoBody";
import { useStore } from "../../../utils/store";


export default function HomeBento({loadedPlaylists}) {
  
  useEffect(() => {
    localStorage.setItem('loadedPlaylists', JSON.stringify(loadedPlaylists))

  }, [loadedPlaylists])

  const buttons = true

  
// const setPlaylists = useStore((state) => state.setPlaylists)
// setPlaylists(playlists)

 // console.log(playlists)

  return (
    <>
      <LgAppBar />
      <Container>
        <Announcement />
        <LatestSermon loadedPlaylists={loadedPlaylists} buttons={buttons} />
        <BentoBody />        
      </Container>
    </>
  );
}
