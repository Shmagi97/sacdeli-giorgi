


import styled from "styled-components";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share"
import { useCallback, useState } from "react";

const ProductSlider=()=>{

const colors={
    primary: '#f9f9f9',
    secondary: '#FED500',
};
const images = [
    "https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/411243337_857426749724005_3335397979851620690_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=hQBfvozpSZ0AX_wb3kl&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfA5X4S446JFpp8ZIoUI-fLZkfXzOWBKbXqQXwEKt4qNtg&oe=6581647B",
"https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/411246862_857426546390692_1433944648415576941_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Xx61mx77pyoAX9jPdLx&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfBbZKxGjimZ7z1k3xYsKfmJ_KMBck3SkiISzs8mxKwpkw&oe=65814FD1",
"https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/411255031_857426479724032_4270245553475697886_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=nRqA3m2ikaYAX-DCnIR&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfA6Exz-kImXx85azv5DvCJ2fzhgyrvVp1lgZOFZF7i0oQ&oe=65814F34"
];
const [choosenImage, setChoosenImage]=useState(images[0])

const [favorite, setFavorite]=useState(colors.primary);

const handleFavorite= ()=>{
    favorite === colors.primary ? setFavorite(colors.secondary) : setFavorite(colors.primary)
};
const handleImage =(e)=> {
   setChoosenImage(images[e.target.value])
};

console.log(choosenImage)

const Section=styled.div`
position: relative;
    width: 250px;
    height: 300px;
    border:  solid 1px yellow;
`;
const FavoriteShare=styled.div`
        display: flex;
        justify-content: space-between;
        padding: 5px;
`;  
const MainImage=styled.div`
   position: absolute;
   
`;
const Image=styled.img`
    width: 100%;
    height: 50%;
`;
const SliderSection=styled.div`
    display: flex;
    gap: 5px;
    margin-top: 5px;
`;
const SlideImages=styled.img`
        width: 50px;
        height: 50px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
`;
const SliderList=styled.li`
        display: flex;
        flex-direction: column;
        transition: 1s;
        cursor: pointer;
        &:hover  {
           transform: scale(1.2);
           transition: 0.5s ;
           margin: 5px;
    }

`;

    return (

<>
<li onClick={handleImage} value="0">1</li>
<li onClick={handleImage} value="2">2</li>
<li onClick={handleImage} value="1">3</li>

<Section>
    <MainImage>
    <FavoriteShare onClick={handleFavorite} >
        {/* <FavoriteIcon  style={{color: `${favorite}`}}/>
        <ShareIcon style={{color: colors.primary}}/> */}
        
    </FavoriteShare>
    <Image src={choosenImage} alt="image"/>
    <SliderSection>
        {images.map((images, index)=> (
        <SliderList onClick={handleImage} value={index} key={index}>
                    <SlideImages src={images}/>
        </SliderList>
        ))}
    </SliderSection>
        
    </MainImage>

</Section>
</>
    )
}
export default ProductSlider