import Link from "next/link"
export default function Header(){
    return(
        <div>
            <header>
              
                <ul>
                    <li>   BLOGGING WEBSITE </li>
                    <Link href={"/"}><li>Home</li></Link>
                    <li>View Blogs</li>
                    <li>Upload Blogs</li>
                </ul>
            </header>
        </div>
    );
}