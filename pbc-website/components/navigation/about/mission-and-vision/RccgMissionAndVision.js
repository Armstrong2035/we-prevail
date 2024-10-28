import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Dialog,
  IconButton,
  Typography,
  DialogContent,
  Paper,
  Icon,
  Stack,
  DialogActions,
  Box,
} from "@mui/material";
import AspectRatioRoundedIcon from "@mui/icons-material/AspectRatioRounded";

import heaven from "../../../../public/icons/heaven.png";
import community from "../../../../public/icons/community.png";
import globe from "../../../../public/icons/globe.png";
import church from "../../../../public/icons/church.png";
import shield from "../../../../public/icons/shield.png";
import missions from "../../../../public/icons/missions.png";
import Image from "next/image";

export default function RccgMissionAndVision() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const rccgMissionAndVision = [
    { title: "To make heaven.", icon: heaven },
    { title: "To take as many people with us.", icon: community },
    {
      title: "To have a member of RCCG in every family of all nations.",
      icon: globe,
    },
    {
      title: "To accomplish No. 1 above, holiness will be our lifestyle.",
      icon: shield,
    },
    {
      title:
        "To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.",
      icon: church,
    },
    {
      title:
        "We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ.",
      icon: missions,
    },
  ];

  return (
    <Card>
      <CardHeader
        title={
          <Typography>
            Mission and Vision of our parent church - the Redeemed Christian
            Church of God
          </Typography>
        }
      />
      <CardContent>
        <Stack spacing={1}>
          {rccgMissionAndVision.map((item, index) => (
            <Box
              key={index}
              // elevation={2}
              sx={{
                p: 2,
              }}
            >
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Image height={24} width={24} src={item.icon} />

                <Typography>{item.title}</Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
