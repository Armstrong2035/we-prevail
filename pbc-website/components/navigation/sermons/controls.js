import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import {
  Stack,
  IconButton,
  Select,
  FormControl,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
export default function Controls({ playlist }) {
  const [videoToPlay, setVideoToPlay] = useState({});

  const handleChange = (e) => {
    setVideoToPlay(e.target.value);
  };

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack direction={"row"}>
        <IconButton size={"large"}>
          <PlayCircleFilledWhiteOutlinedIcon />
        </IconButton>
        <IconButton size={"large"}>
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </Stack>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select value={videoToPlay} onChange={handleChange} label="Age">
          {playlist.videos.map((video, index) => (
            <MenuItem value={video.title} key={index}>
              <Typography>{video.title.split(":")[1].trim()}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
