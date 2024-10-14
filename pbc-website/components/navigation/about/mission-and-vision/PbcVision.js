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
      <CardHeader
        title={
          <IconButton onClick={handleToggle}>
            <Icon>
              <AspectRatioRoundedIcon />
            </Icon>
          </IconButton>
        }
      />

      <CardContent>
        <Typography>PBC's Mission</Typography>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogActions>
            <IconButton onClick={handleToggle}>
              <Icon>
                <AspectRatioRoundedIcon />
              </Icon>
            </IconButton>
          </DialogActions>
          <DialogContent>
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
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
