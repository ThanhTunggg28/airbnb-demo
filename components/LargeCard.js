import Image from "next/image";

function LargeCard({img, title, description, buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer ">
            <div className="relative h-96 min-w-[300px]">
                <Image 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h2 className="text-4xl mb-3 w-64">{title}</h2>
                <h3 className="text-lg mb-3">{description}</h3>
                <button className="text-sm bg-black text-white rounded-lg py-2 px-4 mt-3">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
