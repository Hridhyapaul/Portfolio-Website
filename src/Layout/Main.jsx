import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='overflow-x-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;