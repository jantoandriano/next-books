import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
    id: string
    title: string
    description: string
    image: string
    publishedDate: string
    authors?: string []
}

export const Card: FunctionComponent<Props> = ({id, title, description, image, publishedDate, authors}) => {
    return (
        <Link href={`/book/${id}`}>
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
            <img src={image} alt={title} className="rounded-xl p-2 bg-cover h-2/6"/>
            <div className="card-body">
                <h2 className="card-title truncate">
                    {title}
                </h2>
                <div className="flex flex-row gap-2">
                    {authors?.map(val => (
                        <div className="p-1 rounded-md bg-blue-100 truncate">{val}</div>
                    ))}
                    <div className="p-1 rounded-md bg-yellow-100">{publishedDate}</div>
                </div>
                <div className="h-2/5 truncate">
                    {description}
                </div>

                <button className="btn btn-primary">Simpan</button>
            </div>
        </div>
        </Link>

    )
}