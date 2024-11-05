"use client";

import { Container, Typography } from "@mui/material";
import WatchSermon from "./WatchSermon";
import React, { useEffect, useState } from "react";
import LgAppBar from "../../LgAppBar";

export default function Sermon({ slug }) {
  const [sermonData, setSermonData] = useState();

  useEffect(() => {
    const playlist = localStorage.getItem("loadedPlaylists");
    let playlists = [];

    try {
      playlists = JSON.parse(playlist) || [];
    } catch (error) {
      console.error("Error parsing loadedPlaylists from localStorage:", error);
    }

    if (playlists.length > 0) {
      const thisSermon = playlists.find(
        (playlist) => playlist.title.toLowerCase() === slug.toLowerCase()
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
