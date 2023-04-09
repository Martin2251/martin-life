// every route needs its own folder and file called index.tsx

import { component$ } from "@builder.io/qwik";

// the dollar sign spilts it on chunks its code spiltting on steroids
export default component$(() => {
    return(
        <article>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus!</p>
           
        </article>
    )
})