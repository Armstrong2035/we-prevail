import React, { useState } from "react";
import {
  Box,
  Chip,
  Typography,
  Stack,
  Button,
  IconButton,
  useMediaQuery,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { buttonStyles } from "@/app/styles";
import useTheme from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Image from "next/image";
export default function LgLatestSermon({ loadedPlaylists, buttons }) {
  const [isHovered, setIsHovered] = useState(false);

  let latestSermon =
    loadedPlaylists[0].videos[loadedPlaylists[0].videos.length - 1];
  //console.log(playlists)

  //console.log(latestSermon)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //console.log(playlists)

  return (
    <Card
      sx={{
        xs: "50vh",
        md: "100vh",
        borderRadius: "15px",
        backgroundColor: "#324A5F",
      }}
    >
      <CardContent sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
        <Image
          src={latestSermon.thumbnails.maxres.url}
          alt={latestSermon.title}
          width={latestSermon.thumbnails.maxres.width}
          height={latestSermon.thumbnails.maxres.height}
          layout="responsive"
        />

        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          spacing={3}
        >
          {/* <Chip size='medium' label={'Latest Sermon'}/> */}

          <Button sx={buttonStyles.primaryButton}>Watch Sermon</Button>
          <Button sx={buttonStyles.primaryButton}>View more Sermons</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
