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
import { buttonStyles, textStyles } from "@/app/styles";
import useTheme from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Image from "next/image";
export default function LgLatestSermon({ loadedPlaylists }) {
  const [isHovered, setIsHovered] = useState(false);

  let latestSermon =
    loadedPlaylists[0].videos[loadedPlaylists[0].videos.length - 1];
  //console.log(playlists)

  console.log(latestSermon);

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
        backgroundColor: "#324A5F",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%", // 16:9 aspect ratio
          overflow: "hidden",
          height: 0,
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${latestSermon.id}?rel=0`}
          title="YouTube video player"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Box>

      <CardContent sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          spacing={3}
        >
          <Chip
            size="medium"
            label={"Latest Sermon"}
            sx={{ ...textStyles.tertiaryHeading, color: "white" }}
          />
          <Typography sx={{ ...textStyles.sermons.heading, color: "white" }}>
            {latestSermon.title}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
