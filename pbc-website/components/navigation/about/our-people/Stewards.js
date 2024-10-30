import { textStyles } from "@/app/styles";
import { Masonry } from "@mui/lab";
import {
  CardContent,
  CardMedia,
  Grid2,
  Typography,
  Box,
  Card,
} from "@mui/material";
import Image from "next/image";

export default function Stewards({ pbcStewards }) {
  return (
    <Box>
      {/* <Grid2 container direction={"row"} spacing={3}> */}
      <Masonry columns={{ sm: 2, lg: 4 }} spacing={2}>
        {pbcStewards.map((steward) => (
          //   <Grid2 size={{ sm: 6, md: 4, lg: 3 }}>
          <Card sx={{ backgroundColor: "#F1FAEE" }}>
            <CardContent>
              <Image
                height={100}
                width={100}
                layout={"responsive"}
                src={steward.image}
              />
              <Typography sx={{ ...textStyles.secondaryBody }}>
                {steward.name}
              </Typography>
              <Typography sx={textStyles.tertiaryHeading}>
                {steward.title}
              </Typography>
            </CardContent>
          </Card>
          //   </Grid2>
        ))}
      </Masonry>
      {/* </Grid2> */}
    </Box>
  );
}
