'use client'
import { Container } from "@mui/material";
import React from "react";
import LgAppBar from "../LgAppBar";
import Announcement from "./Announcement";
import LatestSermon from "./LatestSermon";

export default function HomeBento({playlists}) {

 // console.log(playlists)

  return (
    <>
      <LgAppBar />
      <Container>
        <Announcement />
        <LatestSermon playlists={playlists} />
      </Container>
    </>
  );
}
