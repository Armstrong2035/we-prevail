import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Paper,
  Box,
  Stack,
} from "@mui/material";
import Image from "next/image";
import heaven from "../../../../public/icons/heaven.png";
import community from "../../../../public/icons/community.png";
import globe from "../../../../public/icons/globe.png";
import church from "../../../../public/icons/church.png";
import shield from "../../../../public/icons/shield.png";
import missions from "../../../../public/icons/missions.png";

export default function RccgMissionAndVision() {
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
    <Card elevation={3} sx={{ maxWidth: 800, mx: "auto", my: 4 }}>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Mission and Vision of Our Parent Church - The Redeemed Christian
            Church of God
          </Typography>
        }
      />
      <CardContent>
        <Stack spacing={2}>
          {rccgMissionAndVision.map((item, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderRadius: 2,
                backgroundColor: "background.default",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <Box sx={{ minWidth: 36 }}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                  style={{ borderRadius: "50%" }}
                />
              </Box>
              <Typography variant="body1" color="text.primary">
                {item.title}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
