import './AllPodcaste.css';
import Discover from './discover/Discover';
import DiscoverCarousel from './discoverCarousel/DiscoverCarousel';
import Trending from './trending/Trending';
import WebbyAwardWinners from './webbyAwardWinners2025/WebbyAwardWinners';

const AllPodcaste = () => {
    return (
        <>
            <Discover />
            <DiscoverCarousel />
            <Trending />
            <WebbyAwardWinners />
        </>
    )
}

export default AllPodcaste; 