import Masonry from "react-masonry-css";
import GalleryItem from "./GalleryItem";
import { GalleryListContainer, breakpointColumnsObj } from './GalleryStyle';

function GalleryList({data}) {
    return (
        <GalleryListContainer>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {data.map( item => (
                    <GalleryItem key={item.id} item={item} />
                ))}
            </Masonry>
        </GalleryListContainer>
    )
}

export default GalleryList;