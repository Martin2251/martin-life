// every route needs its own folder and file called index.tsx

import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";

// the dollar sign spilts it on chunks its code spiltting on steroids

import ContactStyles from "./contact.css?inline"

export default component$(() => {
    useStylesScoped$(ContactStyles)

    const formVisible = useSignal(false)
    // you have to use .value to access it
   
    return(
        <article>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus!</p>
           <button onClick$={() => formVisible.value = true}>contact me</button>
           {/* conditional render similar to react */}
           {formVisible.value &&(
                <form>
                <label>
                    <span>Your Name</span>
                    <input
                    type="type"
                    />
                </label>
                <label>
                    <span> Your Message:</span>
                    <textarea></textarea>
                </label>
                <button>Send</button>
                </form>)}
        </article>
    )
})