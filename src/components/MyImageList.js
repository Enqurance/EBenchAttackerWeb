import {Grid, Stack} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./MyImageList.css"


const MyImageList = ({info}) => {
    return (<Stack style={{alignItems: "center"}}>
        <ImageList sx={{width: info.width}} cols={info.col}>
            {info.images.map((item) => (<ImageListItem key={item.img}>
                <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
            </ImageListItem>))}
        </ImageList>
        <Grid className="my-caption">
            {info.caption}
        </Grid>
    </Stack>)
}

export default MyImageList