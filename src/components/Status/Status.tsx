import { useState, useRef } from "react";

import './styles/Status.scss';

type StatusProps = {
    isFixed: boolean,
};

const Status: React.FC<StatusProps> = (props) => {
    const [ videoAlarmID, setAlarmVideoID ] = useState('');
    const [ videoServerNo, setVideoServerNo ] = useState('');
    const [ status1, setStatus1 ] = useState('');
    const [ status2, setStatus2 ] = useState('');
    const [ tagInputVal, setTagInputVal ] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const config = {
        method: 'POST'
    }

    const APICall = () => {
        let url: string;
        if (props.isFixed) {
            url = '/api/status-fixed';
        } else {
            url = '/api/status';
            if (inputRef.current?.value.trim() === '') {
                setStatus1('Please enter a Video Server ID (1 - 10)');
                return;
              }
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                setAlarmVideoID(res?.body?.videoAlarmID);
                if (!props.isFixed && inputRef.current) {
                    setVideoServerNo(inputRef.current.value);
                } else {                                   
                    setVideoServerNo(res?.body?.videoServerNo);
                }
                setStatus1(`The alarm id from Video Server number ${videoServerNo} is ${videoAlarmID}`);
                setStatus2(`Alarm id ${videoAlarmID} has been received from Video Server number ${videoServerNo}.`);
            })
            .catch(err => console.log(err));
    }

    function handleClick() {
        APICall();
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setTagInputVal(e.target?.value?.replace(/^[A-z]*$/ig, ''));
    };

    return (
        <>
            <div className="status__wrapper">
                <p>Status {props.isFixed ? `for Video Server No ${videoServerNo}` : ``}</p>
                <div className="status__pre">
                    <p>{status1}</p>
                    <p>{status2}</p>
                    {status1 !== '' && !status1.includes('Please enter a Video Server ID')
                        ? 
                        videoAlarmID !== 'unknown' && parseInt(videoAlarmID) <= 5 
                            ? <div className="status__video--warning"></div> 
                            : <div className="status__video--healthy"></div>
                        :
                        null
                    }
                </div>
                {!props.isFixed 
                    ? 
                    <>
                        <div>
                            <label htmlFor="status">Status for Video Server No.</label>
                            <input
                                type="text"
                                id="status"
                                className="status__input"
                                ref={inputRef}
                                value={tagInputVal}
                                onChange={(e) => onChangeInput(e)}
                            />
                        </div>
                    </>
                    : ``
                }
                <button onClick={() => handleClick()}>Get status</button>
            </div>
        </>
    )
};

export { Status };