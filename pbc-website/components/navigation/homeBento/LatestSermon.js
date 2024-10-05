import React, {useState} from "react";
import { Box, Chip, Typography, Stack, Button } from "@mui/material";
export default function LatestSermon({playlists}) {

  const [isHovered, setIsHovered] = useState(false)

  let latestSermon = playlists[0].videos[playlists[0].videos.length - 1]

  //console.log(latestSermon)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave =() => {
    setIsHovered(false)
  }
  

  //console.log(playlists)


  return  (
 
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{ height: "100vh",
      backgroundImage: `url(${latestSermon.thumbnails.maxres.url})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      }}>  



        

        {isHovered ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(211, 211, 211, 0.5)", // semi-transparent overlay
              zIndex: 1,
            }}
          >
            <Stack>
              <Typography>Latest Sermon</Typography>
              <Stack>
                <Button>Watch Sermon</Button>
                <Button>View more Sermons</Button>
              </Stack>
            </Stack>
          </Box>
        ) : (
          <Box sx={{
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}>
             <Stack>
              <Typography>Latest Sermon</Typography>
              <Stack>
                <Button>Watch Sermon</Button>
                <Button>View more Sermons</Button>
              </Stack>
            </Stack>
          </Box>
        )
          }
    </Box>

  );
}
