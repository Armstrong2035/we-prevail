import {
  Paper,
  Stack,
  Box,
  Grid2,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { textStyles } from "@/app/styles";

export default function ExternalWallets({ wallets }) {
  return (
    <Paper sx={{ p: 5, backgroundColor: "#324A5F" }}>
      <Stack spacing={3}>
        <Box>
          <Typography sx={{ ...textStyles.secondaryHeading, color: "white" }}>
            External Wallets
          </Typography>
          <Typography sx={{ ...textStyles.tertiaryHeading, color: "white" }}>
            Give by using any of the following apps:
          </Typography>
        </Box>

        <Grid2 container direction={"row"} spacing={4}>
          {wallets.map((wallet) => (
            <Grid2 size={{ lg: 4, sm: 12 }}>
              <Link href={""} style={{ textDecoration: "none" }}>
                <Card sx={{ p: 3 }}>
                  <Box
                    sx={{
                      height: "20vh",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={wallet.image}
                      layout="responsive"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      sx={textStyles.tertiaryHeading}
                    >{`Handle: ${wallet.email}`}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Paper>
  );
}
