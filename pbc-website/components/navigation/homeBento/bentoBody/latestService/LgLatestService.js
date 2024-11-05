import React, { useState } from "react";
import { Box, Chip, Typography, Stack, Card, CardContent } from "@mui/material";
import { textStyles } from "@/app/styles";

export default function LgLatestService({ latestService }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card sx={{ backgroundColor: "#F1FAEE" }}>
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%", // 16:9 aspect ratio
          overflow: "hidden",
          height: 0,
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${latestService.id.videoId}?rel=0`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
            label={"Latest Service"}
            sx={textStyles.tertiaryHeading}
          />
          <Typography sx={textStyles.sermons.heading}>
            {latestService.snippet.title}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
