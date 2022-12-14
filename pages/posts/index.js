const PostList=({posts})=>{
  return(
    <>
    <h1>List of Posts</h1>
    {
      posts.map((post, index)=>{
        return(
          <div key={post.id}>
            <h2>{post.id} {post.title}</h2>
          </div>
        )
      })
    }
    </>
  )
}

export async const getStaticProps=()=>{
  const response = await fetch('http://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return {
    props:{
      posts: data.slice(0,3)
    }
  }
}