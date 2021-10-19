<template>
  <article>
    <div
      class="prodDiv gridItem1"
      v-for="product in products"
      :key="product.id"
    >
      <img class="prodPic" :src="`./assets/${product.id}.jpeg`" alt="gear" />
      <p class="gridItem2">{{ product.title }}</p>
      <p class="gridItem3">{{ product.manufacturer }}</p>
      <p class="gridItem4">{{ product.description }}</p>
      <p class="gridItem5">{{ product.netPrice }}</p>
      <p class="gridItem6">{{ product.grossPrice }}</p>
      <button>add to card</button>
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

.prodDiv {
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.gridItem1 {
  grid-column-start: 1;
  grid-column-end: 2;
}

.gridItem2 {
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: left;
}

.gridItem3 {
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: left;
}

.gridItem4 {
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: left;
  text-align: left;
}

.gridItem5 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: right;
}

.gridItem6 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: right;
}
</style>
