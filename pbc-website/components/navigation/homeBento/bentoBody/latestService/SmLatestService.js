import React, { useState } from "react";
import {
  Box,
  Chip,
  Typography,
  Stack,
  Button,
  IconButton,
  useMediaQuery,
  CardContent,
  Card,
  Icon,
} from "@mui/material";
import { buttonStyles } from "@/app/styles";
import useTheme from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Image from "next/image";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";
export default function SmLatestService({ latestService }) {
  const [isHovered, setIsHovered] = useState(false);

  //   let latestSermon =
  //     loadedPlaylists[0].videos[loadedPlaylists[0].videos.length - 1];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //console.log(playlists)

  return (
    <Box>
      <Card>
        <Image
          src={latestService.snipppet.thumbnails.high.url}
          alt={latestService.snippet.title}
          width={latestService.snippet.thumbnails.high.width}
          height={latestService.snippet.thumbnails.high.height}
          layout="responsive"
        />

        {!buttons ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(60, 60, 60, 0.7)",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <PlayCircleFilledIcon
                sx={{ fontSize: "6rem", color: "#F1FAEE" }}
              />
            </IconButton>
          </Box>
        ) : (
          <Stack
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <IconButton>
              <Icon>
                <PlayCircleFilledIcon />
              </Icon>
            </IconButton>
            <IconButton>
              <Icon>
                <ReadMoreRoundedIcon />
              </Icon>
            </IconButton>
          </Stack>
        )}
      </Card>
    </Box>
  );
}
