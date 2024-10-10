import React, { useState } from "react";
import {
  Box,
  Chip,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { buttonStyles } from "@/app/styles";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
export default function LatestSermon({ loadedPlaylists, buttons }) {
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
    <Box
      sx={{
        height: { xs: "50vh", md: "100vh" },
        backgroundImage: `url(${latestSermon.thumbnails.maxres.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "contain", md: "100% 100%" },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
      }}
    >
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
            <PlayCircleFilledIcon sx={{ fontSize: "6rem", color: "#F1FAEE" }} />
          </IconButton>
        </Box>
      ) : (
        <Box sx={{ ml: 5 }}>
          <Stack justifyContent={"flex-start"} alignItems={"flex-start"}>
            {/* <Chip size='medium' label={'Latest Sermon'}/> */}
            <Stack direction="row" spacing={3}>
              <Button sx={buttonStyles.primaryButton}>Watch Sermon</Button>
              <Button sx={buttonStyles.primaryButton}>View more Sermons</Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
