import { getSortedPostsData } from "@/lib/posts"
import PostItem from "./PostItem"

export default function Posts() {
    const posts=getSortedPostsData()
  return (
<section>
    <h2 className="text-white font-bold">Blogs</h2>
    <ul className=" text-white ">{posts.map(post=>(
        <PostItem key={post.id} post={post}/>
    ))}</ul>

</section>  
)
}
