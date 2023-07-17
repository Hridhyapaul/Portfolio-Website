
const Container = ({ children }) => {
    return (
        <div className='mx-auto xl:px-0 md:px-10 sm:px-2 px-4'>
            {children}
        </div>
    );
};

export default Container;