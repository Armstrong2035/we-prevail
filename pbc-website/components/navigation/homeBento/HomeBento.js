import Home from "@/app/page";
import { Container } from "@mui/material";
import React from "react";
import LgAppBar from "../LgAppBar";
import Announcement from "./Announcement";
import LatestSermon from "./LatestSermon";

export default function HomeBento({playlistItems}) {

  console.log(playlistItems)

  const mappedPlaylists = playlistItems.map((playlist) => {

    return {
      //playlistId: playlist.snippet.playlistId,
    //videoId: playlist.snippet.resourceId.videoId,

    }
  })
  return (
    <>
      <LgAppBar />
      <Container>
        <Announcement />
        <LatestSermon />
      </Container>
    </>
  );
}
