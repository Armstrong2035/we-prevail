import { Box, Stack } from "@mui/material";
import MoreInThisSeries from "./MoreInThisSeries";
import React, { useState } from "react";

export default function WatchSermon({ sermonData }) {
  const [headlineSermon, setHeadlineSermon] = useState(sermonData.videos[0]);

  return (
    <Stack spacing={4}>
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%", // 16:9 aspect ratio
          overflow: "hidden",
          height: 0,
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${headlineSermon.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
      <MoreInThisSeries
        setHeadlineSermon={setHeadlineSermon}
        sermonData={sermonData}
      />
    </Stack>
  );
}
