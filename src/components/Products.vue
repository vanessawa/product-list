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

        <button
          id="add-btn"
          class="btn btn-sm btn-secondary"
          @click="addToCart(product)"
        >
          Add to cart
        </button>
        <p id="quantity" v-text="cartQuantity(product)"></p>
      </div>
    </div>
    <button class="btn btn-sm btn-secondary" @click="deleteCart()">
      Delete
    </button>
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
      localStorage.setItem("cartStorage", JSON.stringify(this.cart));
    },
    cartQuantity(product) {
      let quantity = this.cart.filter((p) => p.id == product.id);
      if (quantity && quantity.length >= 1)
        return quantity.length + "x in cart";
    },
    deleteCart() {
      localStorage.clear();
      this.cart = [];
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

<style scoped lang="scss"></style>
