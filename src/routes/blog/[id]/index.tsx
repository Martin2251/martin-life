// /blog/1

import { component$, Resource } from "@builder.io/qwik";
import { routeLoader$} from "@builder.io/qwik-city";


interface BlogData {

    id:string,
    title:string,
    content:string,
  }
  
  //function to run on the server to get the data, this is onGet because its a get if its a post then onPost
  // run on server not the browser
  export const useBlogs = routeLoader$<BlogData>(async({params}) => {
    console.log('fetching data')
    const res = await fetch('http://localhost:3000/blogs/' + params.id)
    const data = await res.json()
    return data
  })

export default component$(() => {
    const blogsData = useBlogs()
    return(
        <div>
       <Resource
        value={blogsData}
        onPending={() => <div>Loading</div>}
        onResolved={(blog) => (
          <div>
            <>
              <div>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            </>
          </div>
        )}
      />

        </div>
    )
})