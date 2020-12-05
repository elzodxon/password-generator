<template>
  <div>
    <form action="">
      <input id="foo" type="text" readonly value="https://github.com/zenorocha/clipboard.js.git">
      <button data-clipboard-target="#foo" class="btn">Copy</button>
      <button>Generate password</button>
    </form>

    <hr>
  </div>
</template>

<script>
var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);

  e.clearSelection();
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
</script>

<style scoped>

</style>