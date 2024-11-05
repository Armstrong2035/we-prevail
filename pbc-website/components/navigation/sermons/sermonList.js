"use client";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Box,
  Grid2,
} from "@mui/material";
import Image from "next/image";
import Information from "./information";
import LgAppBar from "../LgAppBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import LatestSermon from "../homeBento/bentoBody/latestSermon/LatestSermon";

export default function SermonList({ loadedPlaylists }) {
  // const [loadedPlaylists, setLoadedPlaylists] = useState([]);

  useEffect(() => {
    localStorage.setItem("loadedPlaylists", JSON.stringify(loadedPlaylists));
  }, [loadedPlaylists]);

  // // console.log(loadedPlaylists);

  // useEffect(() => {
  //   const playlists = localStorage.getItem("loadedPlaylists");
  //   console.log(playlists);
  //   if (playlists) {
  //     setLoadedPlaylists(JSON.parse(playlists));
  //   }
  // }, []);

  // if (!loadedPlaylists.length) {
  //   return <p>Loading...</p>; // or any fallback UI while playlists load
  // }

  // const latestSermon =
  //   loadedPlaylists[0].videos[loadedPlaylists[0].videos.length - 1];

  const buttons = false;

  return (
    <div style={{ backgroundColor: "#DFF5D0" }}>
      <LgAppBar />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <LatestSermon loadedPlaylists={loadedPlaylists} buttons={buttons} />
        <Stack spacing={5}>
          <Grid2
            container
            spacing={3}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {loadedPlaylists.map((playlist) => (
              <Grid2 item size={{ lg: 4, sm: 12 }} key={playlist.id}>
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
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Container>
    </div>
  );
}
