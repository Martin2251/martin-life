import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';




export default component$(() => {
  const name = useSignal('martin')
  return (
    <>


      <div>
      <h1>hiiii , {name.value}</h1>
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
