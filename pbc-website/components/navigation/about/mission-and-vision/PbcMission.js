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
                <Typography>{pbcMission}</Typography>
              </Stack>
            </Paper>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
