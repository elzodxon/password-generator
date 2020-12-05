<template>
  <div id="app">
    Password Generator
    <Form/>
    <Preference/>
  </div>
</template>

<script>
    import Form from '@/components/Form'
    import Preference from '@/components/Preference'

    export default {
      name: 'App',
      components: {
        Form,
        Preference
      }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
