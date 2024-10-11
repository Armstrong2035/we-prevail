import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { colors, textStyles } from "@/app/styles";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

export default function LgAppBar() {
  const navItems = ["Sermons", "Expressions", "About us", "Online", "Giving"];

  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: colors.primaryBackground, mb: 5 }}
    >
      <Container>
        <Toolbar disableGutters sx={{ overflow: "auto" }}>
          <Stack
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            justifyContent={"space-around"}
            sx={{ width: "100%" }}
          >
            <Link href="/" passHref>
              <Box
                component="a"
                sx={{
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  // border: "1px solid red",
                }}
              >
                <HomeIcon />
              </Box>
            </Link>
            {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              alignContent: "center",
              overflowX: "auto",
            }}
          > */}
            <Stack direction={"row"} spacing={2}>
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      ...textStyles.tertiaryHeading,
                      textDecoration: "none",
                      display: "block",
                      textWrap: "nowrap",
                    }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
            {/* </Box> */}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
