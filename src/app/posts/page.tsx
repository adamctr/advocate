import { getPosts } from "@/lib/api/posts"


export default async function PostsView() {
    const posts = await getPosts();

    return (
        <div>
            <h1>Mon Blog</h1>
            {posts.map((post : any) => {
                console.log(post)
                return(
                    <div key={post.id}>
                        post number {post.id}

                        <h2>{post.title.rendered}</h2> {/* Afficher le titre du post */}
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> {/* Afficher le contenu HTML */}
                    </div>
                )
            })}
        </div>
    )
}


