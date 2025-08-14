/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Declare external libraries
declare global {
  interface Window {
    jQuery: any
    $: any
    AOS: any
  }
}
