import { textStyles } from "@/app/styles";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function QuickGiving() {
  return (
    <Card sx={{ backgroundColor: "#324A5F" }}>
      <CardHeader
        title={
          <Typography sx={{ ...textStyles.secondaryHeading, color: "white" }}>
            Give with SMS
          </Typography>
        }
      />
      <CardContent>
        <Typography sx={{ ...textStyles.tertiaryHeading, color: "white" }}>
          Text GIVE to +1-315-951-4081, and follow the prompts
        </Typography>
      </CardContent>
    </Card>
  );
}
