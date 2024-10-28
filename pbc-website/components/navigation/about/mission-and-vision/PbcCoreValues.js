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
} from "@mui/material";
import community from "../../../../public/icons/community.png";
import shield from "../../../../public/icons/shield.png";
import discipleship from "../../../../public/icons/discipleship.png";
import love from "../../../../public/icons/love.png";
import excellence from "../../../../public/icons/excellence.png";
import AspectRatioRoundedIcon from "@mui/icons-material/AspectRatioRounded";

import Image from "next/image";

export default function PbcCoreValues() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const pbcCoreValues = [
    { title: "Love", icon: love },
    { title: "Community", icon: community },
    {
      title: "Consecration",
      icon: shield,
    },
    {
      title: "Excellence",
      icon: excellence,
    },
    {
      title: "Discipleship",
      icon: discipleship,
    },
  ];

  return (
    <Card>
      <CardHeader title={<Typography>Core values</Typography>} />

      <CardContent>
        <Stack spacing={3}>
          {pbcCoreValues.map((item, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                p: 2,
              }}
            >
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Image height={24} width={24} src={item.icon} />

                <Typography>{item.title}</Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
