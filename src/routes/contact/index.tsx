// every route needs its own folder and file called index.tsx

import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";

// the dollar sign spilts it on chunks its code spiltting on steroids

import ContactStyles from "./contact.css?inline"

export default component$(() => {
    useStylesScoped$(ContactStyles)

    const formVisible = useSignal(false)
    // you have to use .value to access it

    // form because  multiple values 
    const formState = useStore({name: "", message: ""})
   
    return(
        <article>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus!</p>
           <button onClick$={() => formVisible.value = true}>contact me</button>
           {/* conditional render similar to react */}
           {formVisible.value &&(
            // prevent default:submit is needed as form submit conventionally
                <form preventdefault:submit onSubmit$={() => {
                    console.log(formState.name, formState.message)
                    formState.name=""
                    formState.message=""
                }}>
                <label>
                    <span>Your Name</span>
                    <input
                    value={formState.name}
                    type="type"
                    onInput$={(e) =>formState.name = (e.target as HTMLInputElement).value}
                    />
                </label>
                <label>
                    <span> Your Message:</span>
                  <textarea
                    onInput$={(e) =>formState.message = (e.target as HTMLInputElement).value}
                    value={formState.message}
                    ></textarea>
                </label>
                <button>Send</button>

                <p>{formState.name}</p>
                <p>{formState.message}</p>
                </form>)}
        </article>
    )
})