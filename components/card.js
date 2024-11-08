import Image from "next/image";

const Card = ({ title, image, description, price }) => {
    return (
        <div className="w-full h-full border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:cursor-pointer">
            <div>
                {/* Card Image */}
                <Image
                    src={image || "https://placehold.co/600x400"}
                    alt={title || "Card Image"}
                    width={500}
                    height={500}
                    className="w-full object-cover h-80 rounded-t-lg"
                />
            </div>
            <div className="p-4 space-y-2">

                {/* Card Title */}
                <h1 className="font-semibold">{title}</h1>



                {/* Card Description */}
                <p>{description}</p>

                <div className="flex justify-between items-center">
                    {/* card footer */}
                    <p>{price}</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Buy Now</button>
                </div>
            </div>

        </div>);
}

export default Card;