<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'ComIcon',

    props: {
      name: String
    }
  };
</script>
