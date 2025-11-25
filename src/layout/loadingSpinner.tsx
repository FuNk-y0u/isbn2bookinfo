import {SyncLoader} from 'react-spinners';

interface LoadingSpinnerI {
    isLoading: boolean;
};

export default function LoadingSpinner(props: LoadingSpinnerI) {
    if(props.isLoading) {
        return (
            <p className="flex flex-col items-center justify-center gap-5"> Fetching Data <SyncLoader color="#000000" /> </p>
        );
    }
    return "";
};
