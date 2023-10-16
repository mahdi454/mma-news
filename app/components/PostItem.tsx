import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"

type Props = {
    post:BlogPost
}

function PostItem({post}: Props) {
    const {id,title, date}=post
    const formattedDate=getFormattedDate(date)
  return (
    <li className="pb-5">
        <Link className="text-lg hover:underline" href={`/posts/${id}`}>{title}</Link>
        <p className="text-sm">{formattedDate}</p>
    </li>
  )
}

export default PostItem