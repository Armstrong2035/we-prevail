import { Box, Typography, Stack, Card, CardContent } from "@mui/material";
import Image from "next/image";

export default function MoreInThisSeries({ sermonData, setHeadlineSermon }) {
  if (!sermonData || !sermonData.videos || !Array.isArray(sermonData.videos)) {
    return (
      <Box>
        <Typography>No additional sermons available in this series.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        More sermons in this series
      </Typography>
      <Stack direction="row" spacing={2} sx={{ overflowX: "auto", pb: 2 }}>
        {sermonData.videos.map((sermon, index) => (
          <Card
            key={sermon.id}
            sx={{ minWidth: 200, cursor: "pointer", borderRadius: "10px" }}
            onClick={() => setHeadlineSermon(sermon)}
          >
            <Image
              src={sermon.thumbnails.maxres.url}
              alt={sermon.title}
              width={sermon.thumbnails.maxres.width}
              height={sermon.thumbnails.maxres.height}
              layout="responsive"
            />
            <CardContent>
              <Typography variant="subtitle2" noWrap>
                {`Part ${index + 1}`}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
