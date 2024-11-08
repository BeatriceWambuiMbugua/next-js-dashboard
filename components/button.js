
const Button = ({ title }) => {

    return (
        <button className="px-4 py-2 bg-violet-950 text-white rounded-lg hover:bg-violet-900">
            <h1>{title}</h1>
        </button>
    );
}

export default Button;