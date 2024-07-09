import { useState } from 'react';
import './styles/Reports.scss';

type IRows = {
    DEVICE_ID: string
    IP_ADDRESS: string
    CAMERA_NUMBER: string
    NAME: string
}

type ReportsProps = {
    query: string,
    queryName: string
};

const Reports: React.FC<ReportsProps> = (props) => {
    const [ data, setData ] = useState<IRows[]>([]);

    const config = {
        method: 'POST'
    }

    const APICall = () => {
        const url: string = `/api/query/${props.query}`;
        fetch(url, config)
            .then(res => res.json())
            .then(res => {                        
                console.log(res?.body?.rows);
                return setData(res?.body?.rows);
            })
            .catch(err => console.log(err));
    }

    function handleClick() {
        APICall();
    }

    return (
        <>
            <div className="reports__wrapper">
                <p>{props.queryName}</p>
                <div className="reports__pre">
                    {props.query !== '5' && data && data.map((item: IRows, index: number) =>
                        <div key={index} className="reports__rows">
                            <div>{item.DEVICE_ID}</div>
                            <div>{item.IP_ADDRESS}</div>
                            <div>{item.CAMERA_NUMBER}</div>
                            <div>{item.NAME}</div>
                        </div>
                    )}
                </div>
                <button onClick={handleClick}>Get report</button>
            </div>
        </>
    )
};

export { Reports };