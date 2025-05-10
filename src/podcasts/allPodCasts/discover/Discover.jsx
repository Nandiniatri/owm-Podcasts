import { useContext } from 'react';
import './Discover.css';
import { AppContext } from '../../../contextApi/AppContext';
import Button from '../../../component/Button';

const Discover = () => {
    const { discoverBtn } = useContext(AppContext);

    return (
        <div className='discover-btn-main-container'>
            <div className='discover-btn-div1'>
                <h1>Discover</h1>
            </div>

            <div className='discover-btn-div2'>
                {discoverBtn.map((disBtn) => {
                    return (
                        <div key={disBtn.id}>
                            <Button>{disBtn.title}</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Discover; 