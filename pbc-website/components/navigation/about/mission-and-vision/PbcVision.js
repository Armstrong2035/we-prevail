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

export default function PbcVision() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  const pbcVision =
    "To see humanity reconciled with God; and to see the glorious light of the Gospel of Christ cut through borders with prevailing power!";

  return (
    <Card>
      <CardHeader title={<Typography>PBC's Mission</Typography>} />

      <CardContent>
        <Paper
          elevation={2}
          sx={{
            p: 2,
          }}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography>{pbcVision}</Typography>
          </Stack>
        </Paper>
      </CardContent>
    </Card>
  );
}
