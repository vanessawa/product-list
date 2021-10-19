<template>
  <article>
    <img class="prodPic" src="@/assets/gear.jpeg" alt="gear" />
    <div v-for="product in products" :key="product.id">
      <p>{{ product.title }}</p>
      <p>{{ product.manufacturer }}</p>
      <p>{{ product.description }}</p>
      <p>{{ product.netPrice }}</p>
      <p>{{ product.grossPrice }}</p>
    </div>
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
<style scoped lang="scss">
.prodPic {
  height: 5rem;
  width: 5rem;
  background-size: contain;
}
</style>
