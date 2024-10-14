"use client";

import { Container, Typography } from "@mui/material";
import WatchSermon from "./WatchSermon";
import React, { useEffect, useState } from "react";
import LgAppBar from "../../LgAppBar";

export default function Sermon({ slug }) {
  const [sermonData, setSermonData] = useState();

  useEffect(() => {
    const playlist = localStorage.getItem("loadedPlaylists");
    const playlists = JSON.parse(playlist);

    if (playlists) {
      const thisSermon = playlists.find(
        (playlist) => playlist.title.toLowerCase() === slug
      );

      if (thisSermon) {
        setSermonData(thisSermon);
      } else {
        console.error("No matching sermon found for the slug:", slug);
      }
    } else {
      console.error("No playlists found in localStorage");
    }
  }, [slug]);

  //#F9F7D9
  //#324A5F
  //#DFF5D0

  return (
    <div style={{ backgroundColor: "#DFF5D0" }}>
      <LgAppBar />
      <Container>
        {sermonData ? (
          <WatchSermon sermonData={sermonData} />
        ) : (
          <Typography variant="h5">Sermon not found</Typography>
        )}
      </Container>
    </div>
  );
}
