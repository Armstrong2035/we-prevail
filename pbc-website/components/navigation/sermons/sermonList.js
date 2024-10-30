"use client";
import { Card, CardContent, Container, Grid, Stack, Box } from "@mui/material";
import Image from "next/image";
import Information from "./information";
import LgAppBar from "../LgAppBar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SermonList() {
  const [loadedPlaylists, setLoadedPlaylists] = useState([]);

  useEffect(() => {
    const playlists = localStorage.getItem("loadedPlaylists");
    if (playlists) {
      setLoadedPlaylists(JSON.parse(playlists));
    }
  }, []);

  if (!loadedPlaylists.length) {
    return <p>Loading...</p>; // or any fallback UI while playlists load
  }

  const latestSermon =
    loadedPlaylists[0].videos[loadedPlaylists[0].videos.length - 1];

  const buttons = false;

  return (
    <div style={{ backgroundColor: "#DFF5D0" }}>
      <LgAppBar />
      <Container>
        <Stack spacing={5}>
          <Grid
            container
            spacing={3}
            sx={{ width: "100%" }}
            justifyContent={"center"}
          >
            {loadedPlaylists.map((playlist) => (
              <Grid item lg={3} md={4} sm={6} key={playlist.id}>
                <Link
                  href={`/sermons/${playlist.title.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ backgroundColor: "#324A5F" }}>
                    <CardContent>
                      <Box>
                        <Image
                          src={
                            playlist.videos[playlist.videos.length - 1]
                              .thumbnails.maxres.url
                          }
                          alt={playlist.title}
                          layout="responsive"
                          width={500}
                          height={300}
                        />
                      </Box>
                      <Information playlist={playlist} />
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
