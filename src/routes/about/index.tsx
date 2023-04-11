// every route needs its own folder and file called index.tsx

import { component$, useSignal, useStyles$, $} from "@builder.io/qwik";
import Modal from "~/components/modal/modal";


// the dollar sign spilts it on chunks its code spiltting on steroids

import AboutStyles from "./about.css?inline"
// need to have the inline part

export default component$(() => {
    // need to useStyles hook 
    useStyles$(AboutStyles)
    // not scoped to any page

    const modalVisible = useSignal(false)

    // turns this into a qrl because we are passing it as a prop into anorther component
    const closeModal = $(() => {
        modalVisible.value=false
    })

    $
    return(
        <article>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dignissimos doloribus dolorem autem praesentium iste explicabo expedita sequi impedit laudantium!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deleniti optio enim, minima ipsum aut natus ut magni fugit similique labore doloribus quas quod voluptatibus obcaecati nihil nostrum vitae quaerat!</p>
            <button onClick$={() =>modalVisible.value= true}>Open Modal</button>

            {modalVisible.value &&(
                <Modal size="sm" frosted={true} close={closeModal}>
                    <div q:slot="content">
                    <h2>hello world</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolorem.</p>
                    </div>
                    <div q:slot="footer">
                        <button>Sign up now</button>
                    </div>
                </Modal>
            )}
        </article>
    )
})