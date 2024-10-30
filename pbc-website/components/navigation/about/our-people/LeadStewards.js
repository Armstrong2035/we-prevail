import { textStyles } from "@/app/styles";
import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function LeadStewards({ pbcLeadStewards }) {
  return (
    <Paper elevation={2} sx={{ p: 5, backgroundColor: "#F1FAEE" }}>
      <Grid2 container spacing={3} direction={"row"} sx={{ width: "100%" }}>
        <Grid2 size={{ sm: 12, lg: 6 }}>
          <Image
            width={100}
            height={100}
            layout={"responsive"}
            src={pbcLeadStewards.image}
          />
        </Grid2>
        <Grid2 size={{ sm: 12, lg: 6 }}>
          <Stack spacing={3}>
            <Box>
              <Typography sx={textStyles.secondaryHeading}>
                {pbcLeadStewards.title}
              </Typography>
              <Typography sx={textStyles.secondaryBody}>
                {pbcLeadStewards.name}
              </Typography>
            </Box>

            <Typography sx={textStyles.tertiaryHeading}>
              {pbcLeadStewards.description}
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
