import Link from "next/link"

const Page = () => {
    return (
        <div>
            <h1
                className={`mt-20 font-bold text-center text-cyan-900 md:text-xl lg:text-4xl`}
            >
                Wishlist
            </h1>

            <div className="grid h-60 place-items-center">
                <div>
                    <p className="my-4 text-2xl font-semibold tracking-wide text-white">
                        Wishlist is Empty.
                    </p>
                    <Link
                        href="/"
                        className="w-full px-5 block py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
                    >
                        Home Page
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page