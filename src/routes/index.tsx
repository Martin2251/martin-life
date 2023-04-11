import { component$, Resource, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city'
interface BlogData {
  id:string,
  title:string,
  content:string,
}

//function to run on the server to get the data, this is onGet because its a get if its a post then onPost
// run on server not the browser
export const onGet: RequestHandler<BlogData[]> = async () => {
  console.log('fetching data')
  const res = await fetch('http://localhost:3000/blogs')
  const data = await res.json()
  return data
}



export default component$(() => {

  // hook for data
  // can be used on server or client on browser
  const blogsData = useEndpoint<BlogData[]>()

  // use signal is fine for 1 value 
  const name = useSignal('martin')

  // if you need to update an object use usestore, because when we update it its not going to be reactive with usesignal

  const person = useStore({name: "martin", age: 32})

  const blogs = useStore([
    {id:1, title:"hi"},
    {id:2, title:"bye"},
    {id:3, title:"cya"},
  ])
  return (
    <>


      <div>
      <h1>hiiii , {name.value}</h1>
      <p>hello, {person.name} - {person.age}</p>
      <button onClick$={() =>name.value = 'bowser'}>Click me </button>

      <button onClick$={() =>person.name = 'lugi'}>Click me again</button>

      {blogs.map(blog => (
        <div key={blog.id}>{blog.title}</div>
      ))}

      <button onClick$={() =>blogs.pop()}>remove a blog</button>
      </div>

      <Resource
        value={blogsData}
        onPending={() => <div>Loading</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs && blogs.map(blog => (
              <div key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.content.slice(0,50)}...</p>
              </div>
            ))}
          </div>
        )}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Martin Life',
  meta: [
    {
      name: 'description',
      content: 'ablog site about everything martin',
    },
  ],
  links:[
    {
      rel: 'stylesheet',
      href: 'somestylesheet.com/styles.css'
    }
  ]
};
