<template>
    <div>

      <!-- Header Website -->
      <app-header></app-header>

      <!-- Router View Home Page -->
      <router-view></router-view>

      <!-- Footer Website -->
      <app-footer></app-footer>

          
    </div>
</template>

<script>
// import all main components in the Main App
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

    export default {
      components: {
        appHeader: Header,
        appFooter: Footer
      }
    };
</script>

<style>
  
  /* Main Css Variables */

    :root{
      /* Color Variables */
      --main-color: #1eaaf1;
      --second-color: #fda638;

      /* Font Variables */
      --main-font: 'Work Sans', sans-serif;
    }

    

</style>
