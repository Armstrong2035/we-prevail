import { Box, Stack } from "@mui/material";
import MoreInThisSeries from "./MoreInThisSeries";
import React, { useState } from "react";

export default function WatchSermon({ sermonData }) {
  const [headlineSermon, setHeadlineSermon] = useState(sermonData.videos[0]);

  return (
    <Stack spacing={4}>
      <Box sx={{ height: { sm: "50vh", lg: "80vh" } }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${headlineSermon.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
      <MoreInThisSeries
        setHeadlineSermon={setHeadlineSermon}
        sermonData={sermonData}
      />
    </Stack>
  );
}
