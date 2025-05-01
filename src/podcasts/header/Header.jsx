import { useState } from "react";
import { useEffect } from "react";
import Image from "../../component/Image";

const Header = () => {
    const [logoData , setLogoData] = useState([]);

    const fetchLogoApi = () => {
        const response = fetch('/data/logo.json');
        const result = response.json();
        setLogoData(result);
    }

    useEffect(() => {

    },[])

    return (
        <div>
            <div>
                {logoData.map((logoItm) => {
                    return (
                        <div>
                            <Image src={logoItm.image}/>
                        </div>
                    )
                })}
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Header;