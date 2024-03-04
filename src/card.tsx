import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MediaCardProps {
  title: string;
  image: string;
  description: string;
}

function MediaCard({ title, image, description }: MediaCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 500,
        marginLeft:150,
        marginTop: 7,
        backgroundColor: "#f0f0f0",
        color: "#1976d2",
        marginBottom: 2,
        display: "inline-block",
      }}
    >
      <CardMedia sx={{ height: 100 }} image={image} title={title} />
      <CardContent sx={{ minHeight: 150 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            backgroundColor: "rgb(15, 82, 186)",
            color: "white",
            "&:hover": { color: "black", backgroundColor: "rgb(64, 181, 173)" },
          }}
        >
          Share
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#00008B",
            color: "white",
            "&:hover": { color: "black", backgroundColor: "rgb(199, 0, 57)" },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default function App() {
  return (
    <div>
      <MediaCard
        title="HEALTHTECH AWARD"
        image="https://www.kandasoft.com/wp-content/uploads/2023/04/Health-Tech-Digital-Award.jpg"
        description="HealthTech Award, celebrating healthtech innovations that make a difference for people's lives, is now open for companies in the Nordics."
      />
      <MediaCard
        title="SAFETY INNOVATION"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBodTlrKUvK9H7rmWUCTZ_TdqdQ4dPt3NN9IDqVsu0wejGPffcP9lyzr9ChWa2OFrCr4&usqp=CAU"
        description="The Comprehensive Transitions of Care (TOC) Pharmacy Program at the Franciscan Health Hammond Hospital received the 2018 Patient Safety."
      />
      <MediaCard
        title="IHF AWARDS 2024"
        image="https://ihf-fih.org/wp-content/uploads/2023/02/2022-Awards-Pub-Cover-340x340.jpg"
        description="On 26 October 2023, we have announced the winners of the a 2023 IHF Awards at the 46th World Hospital of Congress in Lisbon in Japan."
      />
    </div>
  );
}
