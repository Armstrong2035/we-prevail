"use client";
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import LgAppBar from "../LgAppBar";
import Announcement from "./Announcement";
import BentoBody from "./bentoBody/BentoBody";
import LatestSermon from "./bentoBody/latestSermon/LatestSermon";
import LatestService from "./bentoBody/latestService/LatestService";

export default function HomeBento({ latestService }) {
  // const theme = useTheme();
  // const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  //console.log(latestService);

  // useEffect(() => {
  //   localStorage.setItem("loadedPlaylists", JSON.stringify(loadedPlaylists));
  //   localStorage.setItem("latestService", JSON.stringify(latestService));
  // }, [loadedPlaylists, latestService]);

  //const buttons = true;

  // const setPlaylists = useStore((state) => state.setPlaylists)
  // setPlaylists(playlists)

  // console.log(playlists)

  return (
    <div style={{ backgroundColor: "#DFF5D0", height: "100%" }}>
      <LgAppBar />
      <Container>
        <Announcement />
        <LatestService latestService={latestService} />
        <BentoBody />
      </Container>
    </div>
  );
}
