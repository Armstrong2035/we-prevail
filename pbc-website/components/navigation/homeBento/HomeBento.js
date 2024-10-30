"use client";
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import LgAppBar from "../LgAppBar";
import Announcement from "./Announcement";
import BentoBody from "./bentoBody/BentoBody";
import LatestSermon from "./bentoBody/latestSermon/LatestSermon";

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
    <div style={{ backgroundColor: "" }}>
      {/* {desktop ? <LgAppBar /> : <SmAppBar />} */}

      <LgAppBar />
      <Container>
        <Announcement />
        <LatestSermon loadedPlaylists={loadedPlaylists} buttons={buttons} />
        <BentoBody />
      </Container>
    </div>
  );
}
