import { AppBar, Container, Toolbar, Stack, Typography } from "@mui/material";
import { colors, textStyles } from "@/app/styles";
import Link from "next/link";

export default function LgAppBar() {
  const navItems = ["Sermons", "Expressions", "About us", "Online", "Giving"];

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: colors.primaryBackground, mb: 5 }}
    >
      <Container maxWidth="lg">
        <Stack direction={"row"} justifyContent={"center"}>
          {navItems.map((item) => (
            <Toolbar key={`${item}`}>
              <Link
                href={`/${item.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{ ...textStyles.tertiaryHeading, textDecoration: "none" }}
                >
                  {item}
                </Typography>
              </Link>
            </Toolbar>
          ))}
        </Stack>
      </Container>
    </AppBar>
  );
}
