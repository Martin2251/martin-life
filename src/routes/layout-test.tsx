import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

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
        <p>This is a test layout</p>
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
