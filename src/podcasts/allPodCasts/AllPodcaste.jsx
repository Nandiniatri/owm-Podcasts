import './AllPodcaste.css';
import Discover from './discover/Discover';
import DiscoverCarousel from './discoverCarousel/DiscoverCarousel';
import Trending from './trending/Trending';

const AllPodcaste = () => {
    return (
        <>
            <Discover />
            <DiscoverCarousel />
            <Trending />
        </>
    )
}

export default AllPodcaste; 