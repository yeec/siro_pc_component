<template>
  <header class="el-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'ComHeader',

    componentName: 'ComHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
