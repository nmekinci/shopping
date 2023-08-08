
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ImgMediaCard = ({item}) => {
    // console.log(item);
    // const {category, description, id, image, price, rating, title} = item;
  return (
    <>
    {item.map( (i) => (
        <Card key={i.id} sx={{ maxWidth: 345}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={i.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {i.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {i.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {i.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {i.category}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ICON</Button>
        </CardActions>
      </Card>
    ))}
    </>


    
  );
}
export default ImgMediaCard;