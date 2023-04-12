import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';


export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <Slot />
      </main>
     
        <section class="container">
          <footer>
            <p>Copyright 2023</p>
          </footer>
        </section>
   
    </>
  );
});
