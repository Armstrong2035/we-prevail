import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Icon,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import howj from "../../../../../public/images/howj.png";
import nsn from "../../../../../public/images/nsn.png";
import Image from "next/image";
import FlipCameraAndroidRoundedIcon from "@mui/icons-material/FlipCameraAndroidRounded";
import { textStyles } from "@/app/styles";
import ExpressionCard from "./ExpressionCard";

export default function Expressions() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const expressions = [
    {
      acronym: "NSN",
      title: "Daily bible study",
      flyer: nsn,
      description:
        "Night Time Spiritual Nutrition (NSN) is a Spirit inspired bible study group. We meet every day on zoom to read the bible, and discuss its themes. If you are looking for consistent fellowship and improved knowledge of God, join us.",
    },

    {
      acronym: "HOWJ",
      title: "Missionary assignment",
      flyer: howj,
      description:
        "Hang Out With Jesus (HOWJ) is a missionary expression inspired by the Holy Spirit. The mandate is to take glorious gospel of Jesus Christ to the ends of the earth. No excuses! HOWJ is inspired by Micah 4:2 and Matthew 28:19. So far, God has sent us to three continents, and counting.",
    },
  ];

  return (
    <Box
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography sx={textStyles.secondaryHeading}>PBC Expressions</Typography>
      {expressions.map((expression, index) => (
        <ExpressionCard expression={expression} key={index} />
      ))}
    </Box>
  );
}
