// every route needs its own folder and file called index.tsx

import { component$ } from "@builder.io/qwik";

// the dollar sign spilts it on chunks its code spiltting on steroids
export default component$(() => {
    return(
        <article>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dignissimos doloribus dolorem autem praesentium iste explicabo expedita sequi impedit laudantium!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deleniti optio enim, minima ipsum aut natus ut magni fugit similique labore doloribus quas quod voluptatibus obcaecati nihil nostrum vitae quaerat!</p>
        </article>
    )
})