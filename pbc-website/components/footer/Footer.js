import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Grid2,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

import { socialMediaPages } from "../navigation/homeBento/bentoBody/OurSocialMedia";
import Image from "next/image";
import { textStyles } from "@/app/styles";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F1FAEE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Grid2
        container
        sx={{ width: "100%", mt: 5 }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={5}
      >
        {/* Contact Information */}
        <Grid2
          size={{ sm: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3",
            //justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom sx={textStyles.sermons.heading}>
            Contact Us
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
              <LocationOnIcon fontSize="small" />
              <Typography
                variant="body2"
                sx={{ ...textStyles.sermons.body, color: "black" }}
              >
                146 West 29th Street,
                <br />
                New York, NY 10001
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
              <PhoneIcon fontSize="small" />
              <Typography
                variant="body2"
                sx={{ ...textStyles.sermons.body, color: "black" }}
              >
                +1 (212) 951-1612
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <MailIcon fontSize="small" />
              <Typography
                variant="body2"
                sx={{ ...textStyles.sermons.body, color: "black" }}
              >
                info@weprevail.org
              </Typography>
            </Box>
          </Stack>
        </Grid2>

        {/* Social Media Links */}
        <Grid2
          size={{ sm: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3",
            //justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom sx={textStyles.sermons.heading}>
            Connect With Us
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {socialMediaPages.map((social, index) => (
              <Link href={`${social.url}`} key={index}>
                <Image
                  key={social.platform}
                  component="a"
                  src={social.icon}
                  target="_blank"
                  height={24}
                  width={24}
                />
              </Link>
            ))}
          </Box>
        </Grid2>

        {/* Legal Links */}
        <Grid2
          size={{ sm: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            //justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom sx={textStyles.sermons.heading}>
            Legal
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              style={{ ...textStyles.sermons.body, color: "black" }}
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy-policy"
              color="inherit"
              underline="hover"
              style={{ ...textStyles.sermons.body, color: "black" }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Grid2>
      </Grid2>

      {/* Copyright Bar */}
      <Divider sx={{ my: 4, bgcolor: "rgba(255, 255, 255, 0.1)" }} />
      <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
        © 2024 PBC Global. All Rights Reserved
      </Typography>
    </Box>
  );
}
