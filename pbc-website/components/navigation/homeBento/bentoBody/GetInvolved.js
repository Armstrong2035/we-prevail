import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import { textStyles, buttonStyles } from "@/app/styles";

export default function GetInvolved() {
  const waysToGetInvolved = [
    "Volunteer",
    "Give",
    "Pray",
    "Publicize",
    "HOWJ out reach",
  ];

  return (
    <Card sx={{ backgroundColor: "#324A5F", width: "100%" }}>
      <CardHeader
        title={
          <div>
            <Typography
              sx={{ ...textStyles.secondaryHeading, color: "#DFF8F5" }}
            >
              Get Involved
            </Typography>
            <Typography sx={{ color: "#E1E5EA" }}>
              See what God can do through you
            </Typography>
          </div>
        }
      />

      <CardContent sx={{ backgroundColor: "#324A5F" }}>
        {waysToGetInvolved.map((i) => (
          <Button
            size={"large"}
            variant={"text"}
            fullWidth
            sx={{ ...buttonStyles.textButton, color: "#E1E5EA" }}
          >
            {i}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
