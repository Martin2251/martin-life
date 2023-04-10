import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header>
      <nav>
        <img src="/mario_block.jpeg" alt="logo"  />
        <h1>Martin Life</h1>
      </nav>
    </header>
  );
});
