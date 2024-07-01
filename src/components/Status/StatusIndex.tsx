import { Status } from "./Status";

const StatusIndex = () => {
    return (
        <>
            <Status isFixed={true} />
            <Status isFixed={false} />
        </>
    );
};

export { StatusIndex };
