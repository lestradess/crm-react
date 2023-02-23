
//Children todo lo que le pasas al componente es su hijo
const Error = ({ children }) => {
    return (
        <div className='text-center my-4 bg-red-600 text-white font-bold p-3 uppercase'>
            { children }
        </div>
    )
}

export default Error