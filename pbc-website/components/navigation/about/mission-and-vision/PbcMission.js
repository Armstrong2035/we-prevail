import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Icon,
  Typography,
  Stack,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import AspectRatioRoundedIcon from "@mui/icons-material/AspectRatioRounded";

export default function PbcMission() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  const pbcMission =
    "To raise true witnesses and disciples of Jesus Christ across the nations of the earth.";

  return (
    <Card>
      <CardHeader title={<Typography>PBC's Mission</Typography>} />
      <CardContent>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography>{pbcMission}</Typography>
        </Paper>
      </CardContent>
    </Card>
  );
}
