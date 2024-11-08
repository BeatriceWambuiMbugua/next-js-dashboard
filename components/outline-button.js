
const OutlineButton = ({ title }) => {

    return (
        <button className="px-4 py-2 border border-violet-950 text-neutral-950 rounded-lg hover:bg-violet-900 hover:text-neutral-50">
            <h1>{title}</h1>
        </button>
    );
}

export default OutlineButton;