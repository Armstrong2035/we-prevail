"use client";
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import LgAppBar from "../LgAppBar";
import Announcement from "./Announcement";
import LatestSermon from "./LatestSermon";
import BentoBody from "./bentoBody/BentoBody";
import { useStore } from "../../../utils/store";
import useTheme from "@mui/material";
import useMediaQuery from "@mui/material";
import SmAppBar from "../SmAppBar";

export default function HomeBento({ loadedPlaylists }) {
  // const theme = useTheme();
  // const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    localStorage.setItem("loadedPlaylists", JSON.stringify(loadedPlaylists));
  }, [loadedPlaylists]);

  const buttons = true;

  // const setPlaylists = useStore((state) => state.setPlaylists)
  // setPlaylists(playlists)

  // console.log(playlists)

  return (
    <>
      {/* {desktop ? <LgAppBar /> : <SmAppBar />} */}

      <LgAppBar />
      <Container>
        <Announcement />
        <LatestSermon loadedPlaylists={loadedPlaylists} buttons={buttons} />
        <BentoBody />
      </Container>
    </>
  );
}
