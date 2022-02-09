import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <div className='container mx-auto mt-44'>
            <img src={spinner} alt="Loading..." className='block mx-auto w-52 h-12' />
        </div>
    )
}

export default Spinner;