import { useContext } from 'react';
import { AppContext } from '../../contextApi/AppContext';
import Image from '../../component/Image';

const SearchResults = () => {
    const { searchingData } = useContext(AppContext);
    console.log(searchingData);


    return (
        <div className="search-results-container" style={{ padding: '20px', color: 'white' }}>
            {searchingData.map((item) => {
                return (
                    <div>
                        <Image src={item.image} />
                        <h2>{item.title}</h2>
                    </div>
                )
            })}
        </div>
    );
};

export default SearchResults;
