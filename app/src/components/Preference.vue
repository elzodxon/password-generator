<template>
  <div>
    <h1>Preferences</h1>
    <label for="length">Length</label>
    <input type="number" required>
    <input type="checkbox">
    <label for="lCase">Lower case alphabets</label>
    <input type="checkbox">
    <label for="uCase">Upper case alphabets</label>
    <input type="checkbox">
    <label for="numbers">Numbers</label>
    <input type="checkbox">
    <label for="symbols">Symbols</label>
  </div>
</template>

<script>

</script>

<style scoped>
    div{
      display: flex;
      align-items: center;
      flex-direction: column;
    }
</style>