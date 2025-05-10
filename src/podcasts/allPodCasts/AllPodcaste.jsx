import { useContext } from 'react';
import './AllPodcaste.css';
import Discover from './discover/Discover';
import DiscoverCarousel from './discoverCarousel/DiscoverCarousel';
import Trending from './trending/Trending';
import WebbyAwardWinners from './webbyAwardWinners2025/WebbyAwardWinners';
import { AppContext } from '../../contextApi/AppContext';
import GuestCuratorCardFile from '../../reasuableComponent/guestCuratorCard/GuestCuratorCard';
import Under20MinFIle from './under20Min/Under20Min';
import PodcasteStatedKit from './podcastStarted/PodcastStartedKit';


const AllPodcaste = () => {
    const { guestCurator, netWorkHigh } = useContext(AppContext);

    return (
        <div>
            <Discover />
            <DiscoverCarousel />
            <Trending />
            <WebbyAwardWinners />
            <GuestCuratorCardFile data={guestCurator} />
            <Under20MinFIle />
            <GuestCuratorCardFile data={netWorkHigh} />
            <PodcasteStatedKit />
        </div>
    )
}

export default AllPodcaste; 