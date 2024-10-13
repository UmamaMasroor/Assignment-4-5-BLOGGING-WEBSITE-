import Image from "next/image";
import Link from "next/link";
import AI from "../images/AI.jpeg"


export default function Card({ heading = "AI Revolution", text = "This is a brief description for the card about AI and technology.", image = AI ,link = "/blog"}) {
    return (
        <div className="card">
            <Image src={image} alt="Card Image" width={400} height={300} />
            <div className="card-content">
                <h2 className="card-heading">{heading}</h2> 
                <p className="card-text">
                    {text}
                </p>
                <Link href={link}>
                    <button>View Blog</button>
                </Link>
            </div>
        </div>
    );
}
