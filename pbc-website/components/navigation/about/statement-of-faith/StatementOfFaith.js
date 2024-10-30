import {
  Paper,
  Typography,
  Chip,
  Stack,
  Grid2,
  Container,
} from "@mui/material";
import LgAppBar from "../../LgAppBar";
import { textStyles } from "@/app/styles";

export default function StatementOfFaith() {
  const statementOfFaith = [
    {
      title: "God",
      description:
        "We believe in one God existing in three Persons: The Father, Son and Holy Spirit – co-existent, eternal, co-equal in all their attributes, being perfect in holiness, love, righteousness, goodness, wisdom, power, justice and mercy.",
      scriptures: [
        "Deuteronomy 6:4",
        "Matthew 28:19",
        "2 Corinthians 13:14",
        "1 Peter 1:2",
        "1 Peter 1:16",
        "1 John 4:8,16",
        "1 John 5:7",
        "Psalm 145:7,17",
        "Ephesians 3:10",
        "Matthew 19:26",
        "Isaiah 30:18",
        "Luke 6:36",
      ],
      color: "#F5E8D0",
    },
    {
      title: "The Father",
      description:
        "We believe in God the Father, from whom all things come, having life in Himself and giving life to all living things",
      scriptures: ["John 5:26", "1st Corinthians 8:6", "Ephesians 1:3"],
      color: "#D0E8F5",
    },
    {
      title: "Jesus",
      description:
        "We believe in the absolute and essential deity of Jesus Christ, God the Son, in His eternal existence with the Father in pre-incarnate glory, in His virgin birth, true humanity, sinless life, substitutionary death, bodily resurrection, triumphant ascension, mediatorial ministry and personal return in power and glory",
      scriptures: [
        "John 1:1",
        "John 1: 14",
        "John 1:18",
        "Romans 3:21-26",
        "Romans 8:34",
        "1 Corinthians 15:1-20",
        "Acts 1:9-11",
        "Hebrews 1:3",
      ],
      color: "#DFF5D0",
    },
    {
      title: "The Holy Spirit",
      description:
        "We believe in the absolute and essential deity and personality of the Holy Spirit, His illuminating, convicting, regenerating, sanctifying, empowering and comforting work and His abiding presence in the believer",
      scriptures: [
        "2 Corinthians 3:17",
        "John 3:5",
        "John 16:8",
        "John 16:13-14",
        "Acts 1:8",
        "Romans 8:9",
      ],
      color: "#F1FAEE",
    },
    {
      title: "The Bible",
      description:
        "We believe the Bible (“the Scriptures”) to be the written Word of God; that its sixty-six books, as originally written, were inspired by the Spirit of God and are without error in all that they affirm; that it presents us, particularly with the Lord Jesus Christ; and, that it is the final authority in all matters of faith and practice.",
      scriptures: [
        "2 Timothy 3:16-17",
        "2 Peter 1:20-21",
        "John 20:31",
        "Psalm 119:105",
      ],
      color: "#F5E8D0",
    },
    {
      title: "Mankind",
      description:
        "We believe that mankind was created in the image of God, but sinned by disobedience, becoming guilty before God and depraved in all areas of life, thereby incurring physical and spiritual death.",
      scriptures: ["Genesis 1:26-27", "Romans 3:10-23", "Romans 6:23"],
      color: "#D0E8F5",
    },
    {
      title: "Satan",
      description:
        "We believe that Satan is an evil personality, the arch-enemy of God, the great deceiver of mankind, the accuser of the brethren, but also a defeated foe, whose destiny is eternal punishment.",
      scriptures: [
        "Genesis 3:1-7",
        "2 Corinthians 4:4",
        "1 Peter 5:8",
        "Revelation 20:10",
      ],
      color: "#DFF5D0",
    },
    {
      title: "Salvation",
      description:
        "We believe that salvation is a free gift of God, given by His grace and available to those who repent from sin and are justified by faith in the Lord Jesus Christ, being born again by the Holy Spirit, thereby receiving eternal life and becoming children of God who are being transformed to the image of the Lord Jesus Christ.",
      scriptures: [
        "Titus 2:11",
        "Ephesians 2:8-9",
        "John 1:12",
        "John 3:5-6, 16",
        "Romans 8:29",
        "2 Peter 3:9",
      ],
      color: "#F1FAEE",
    },
    {
      title: "Missions / The Great Commission / Social Justice",
      description:
        "We believe that “missions” is the process of planting churches / supporting church planting amongst the peoples of the world and that it is our responsibility to promote and participate in active evangelism, discipling and the establishing of new churches, both locally and internationally. Furthermore, we believe that the church has a crucial role to play in bringing social upliftment and change within communities through the transformational work of the gospel in the hearts and minds of those communities",
      scriptures: ["Matthew 28:19", "Acts 1:8", "Isaiah 61:1", "Psalm 89:14"],
      color: "#F5E8D0",
    },
  ];

  return (
    <div style={{ backgroundColor: "#DFF5D0" }}>
      <LgAppBar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          sx={{ ...textStyles.cardHeading, color: "black" }}
          align="left"
          gutterBottom
        >
          Statement of Faith
        </Typography>
        {statementOfFaith.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 2,
              bgcolor: "#324A5F",
            }}
          >
            <Typography
              sx={{ ...textStyles.secondaryBody, color: "#FFFFFF" }}
              gutterBottom
            >
              {item.title}
            </Typography>
            <Typography
              sx={{ ...textStyles.tertiaryHeading, mb: 2, color: "#E1E5EA" }}
            >
              {item.description}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {item.scriptures.map((scripture, idx) => (
                <Chip
                  key={idx}
                  label={scripture}
                  variant="outlined"
                  sx={{ color: "#E1E5EA" }}
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Container>
    </div>
  );
}
