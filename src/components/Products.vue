<template>
  <article class="container">
    <div
      class="
        row row-cols-1 row-cols-md-3
        p-2
        mb-4
        bg-light bg-gradient
        text-start
      "
      v-for="product in products"
      :key="product.id"
    >
      <div class="col-12 col-md-2">
        <img
          class="img img-fluid mb-2"
          src="https://picsum.photos/200/200"
          alt="gear"
        />
      </div>
      <div class="col-12 col-md-8">
        <p class="fs-4 fw-bold">{{ product.title }}</p>
        <p>{{ product.manufacturer }}</p>
        <p>{{ product.description }}</p>
      </div>
      <div class="col-12 col-md-2">
        <p v-text="this.parsePrice(product.netPrice)"></p>
        <p>
          <span v-text="this.parsePrice(product.grossPrice)"></span>
          <span> incl. VAT</span>
        </p>

        <button class="btn btn-sm btn-secondary" @click="addToCart(product)">
          Add to cart
        </button>
        <p v-text="cartQuantity(product)"></p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  methods: {
    loadApi() {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => (this.products = data));
    },
    parsePrice(price) {
      var formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      });
      return formatter.format(price);
    },
    addToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
      localStorage.setItem("cartStorage", JSON.stringify(this.cart));
    },
    cartQuantity(product) {
      let quantity = this.cart.filter((p) => p.id == product.id);
      if (quantity && quantity.length >= 1)
        return quantity.length + "x in cart";
    },
  },

  mounted() {
    this.loadApi();

    let storage = localStorage.getItem("cartStorage");
    if (storage) {
      this.cart = JSON.parse(localStorage.getItem("cartStorage"));
    } else {
      this.cart = [];
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .prodPic {
//   height: 6rem;
//   width: 6rem;
//   background-size: contain;
//   position: absolute;
// }

// .prodDiv {
//   border: 2px solid black;
//   display: grid;
//   grid-template-columns: 1fr 2fr 2fr;
//   grid-template-rows: 5ex 5ex auto;
//   padding: 1.5rem;
//   grid-gap: 0.3rem;
//   justify-content: flex-start;
//   align-items: flex-start;
// }

// .gridItem1 {
//   grid-column-start: 1;
//   grid-column-end: 2;
//   grid-row-start: 1;
//   grid-row-end: 4;
//   justify-content: flex-start;
//   align-self: flex-start;
// }

// .gridItem2 {
//   grid-column-start: 2;
//   grid-column-end: 3;
//   justify-self: left;
// }

// .gridItem3 {
//   grid-column-start: 2;
//   grid-column-end: 3;
//   justify-self: left;
// }

// .gridItem4 {
//   grid-column-start: 2;
//   grid-column-end: 3;
//   grid-row-start: 3;
//   grid-row-end: 5;
//   justify-self: left;
//   text-align: left;
// }

// .gridItem5 {
//   grid-column-start: 3;
//   grid-column-end: 4;
//   grid-row-start: 1;
//   grid-row-end: 2;
//   justify-self: right;
// }

// .gridItem6 {
//   grid-column-start: 3;
//   grid-column-end: 4;
//   grid-row-start: 2;
//   grid-row-end: 3;
//   justify-self: right;
// }

// .cartBtn {
//   height: 1.5rem;
//   width: 5.5rem;
//   grid-column-start: 3;
//   grid-column-end: 4;
//   grid-row-start: 3;
//   grid-row-end: 4;
//   justify-self: flex-end;
//   align-self: flex-end;
// }
// .gridItem7 {
//   grid-column-start: 3;
//   grid-column-end: 4;
//   grid-row-start: 4;
//   grid-row-end: 5;
//   justify-self: flex-end;
//   align-self: flex-end;
// }

// @media (max-width: 670px) {
//   .prodDiv {
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     grid-template-rows: auto 1ex 2ex auto 2ex 2ex 2ex 2ex;
//   }
//   .prodPic {
//     height: 6rem;
//     width: 6rem;
//     background-size: contain;
//     position: relative;
//   }
// }
</style>
