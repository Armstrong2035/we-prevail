import { buttonStyles } from "@/app/styles";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BackToAbout() {
  return (
    <Link style={{ textDecoration: "none" }} href={"/about"}>
      <Button startIcon={ArrowForwardIcon} sx={buttonStyles.textButton}>
        Learn more about PBC
      </Button>
    </Link>
  );
}
