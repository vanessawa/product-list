<template>
  <article>
    <img
      src="https://www.google.de/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F568579521702741676%2F&psig=AOvVaw09uxQBbl2ZfqCZAyEM8Hna&ust=1634727582601000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNicw4up1vMCFQAAAAAdAAAAABAE"
      alt="gear"
    />
    <div></div>
  </article>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    loadApi() {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => (this.products = data));
    },
  },
  mounted() {
    this.loadApi();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
