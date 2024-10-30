import { buttonStyles, textStyles } from "@/app/styles";
import {
  Box,
  CardMedia,
  Grid2,
  Card,
  CardContent,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function IntegratedCheckoutOptions({ linkedOptions }) {
  return (
    <Paper sx={{ p: 5, backgroundColor: "#324A5F" }}>
      <Stack spacing={3}>
        <Box>
          <Typography sx={{ ...textStyles.secondaryHeading, color: "white" }}>
            Integrated Checkout Options
          </Typography>
          <Typography sx={{ ...textStyles.tertiaryHeading, color: "white" }}>
            Click either of these to give with your card right now:
          </Typography>
        </Box>

        <Grid2 container direction={"row"} spacing={4}>
          {linkedOptions.map((option) => (
            <Grid2 size={{ lg: 6, sm: 12 }}>
              <Link href={""}>
                <Card sx={{ p: 3 }}>
                  <Box
                    sx={{
                      height: "30vh",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={option.image}
                      layout="responsive"
                    />
                  </Box>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Paper>
  );
}
