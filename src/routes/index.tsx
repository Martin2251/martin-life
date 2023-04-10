import { component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';




export default component$(() => {
  const name = useSignal('martin')

  // if you need to update an object use usestore, because when we update it its not going to be reactive with usesignal

  const person = useStore({name: "martin", age: 32})
  return (
    <>


      <div>
      <h1>hiiii , {name.value}</h1>
      <p>hello, {person.name} - {person.age}</p>
      <button onClick$={() =>name.value = 'bowser'}>Click me </button>

      <button onClick$={() =>person.name = 'lugi'}>Click me again</button>
      </div>
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
