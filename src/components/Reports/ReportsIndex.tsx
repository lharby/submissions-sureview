import { Reports } from "./Reports";

const ReportsIndex = () => {
    return (
        <>
            <Reports query={'1'} queryName={'Get all devices'} />
            <Reports query={'2'} queryName={'Get the camera details of all the cameras on device ID 1986'} />
            <Reports query={'3'} queryName={'Get the device details of all devices which have a camera'}/>
            <Reports query={'4'} queryName={'Get the device details of all devices which have a camera name starting with “Front”'}/>
            <Reports query={'5'} queryName={'Change the name of the 2nd Camera of the device with a DeviceID of 1984 to “Front Door Camera”'} />
        </>
    );
};

export { ReportsIndex };
