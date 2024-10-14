"use client";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid2,
  IconButton,
  Typography,
  Stack,
  Box,
} from "@mui/material";

import Image from "next/image";
import LatestSermon from "../homeBento/bentoBody/latestSermon/LatestSermon";
import Information from "./information";
import Controls from "./controls";
import { textStyles } from "@/app/styles";
import LgAppBar from "../LgAppBar";
import Link from "next/link";

export default function SermonList() {
  const playlists = localStorage.getItem("loadedPlaylists");
  const loadedPlaylists = JSON.parse(playlists);
  //console.log(loadedPlaylists);

  let latestSermon =
    loadedPlaylists[0].videos[loadedPlaylists[0].videos.length - 1];

  //console.log(latestSermon);

  const buttons = false;
  //#F9F7D9
  //#324A5F
  //#DFF5D0

  return (
    <div style={{ backgroundColor: "#DFF5D0" }}>
      <LgAppBar />

      <Container>
        <Stack spacing={5}>
          {/* <LatestSermon loadedPlaylists={loadedPlaylists} buttons={buttons} /> */}
          <Grid2
            container
            direction={"row"}
            spacing={3}
            sx={{ width: "100%" }}
            justifyContent={"center"}
          >
            {loadedPlaylists.map((playlist) => (
              <Grid2 item size={{ lg: 3, md: 4, sm: 6 }} key={playlist.id}>
                {" "}
                {/* {{ edit_2: Added key prop for list items }} */}
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
                      {/* <Controls playlist={playlist} /> */}
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