<template>
  <div class="demo">
    <div class="demo__section section section--header">
      <h1 class="demo__title">
        Cart demo app
        <a class="demo__link link link--github"
           href="https://github.com/JessChampion/">View on GitHub</a>
      </h1>
      <div class="demo__section section section--class">
        <h2 class="section__title">
          Class example
          <a class="section__link link link--github"
             href="https://github.com/JessChampion/">View code</a>
        </h2>
        <CartViewComponent :cart="getClassModel()"
                           :possible-items="possibleItems"/>

      </div>
      <div class="demo__section section section--module">
        <h2 class="section__title">
          Funtional module example
          <a class="section__link link link--github"
             href="https://github.com/JessChampion/">View code</a>
        </h2>
        <CartViewComponent :cart="getModuleModel()"
                           :catalog="possibleItems"/>

      </div>
    </div>
  </div>
</template>

<script>
  import Cart from '../src/cartClass';
  import getCart from '../src/cartModule';
  import CartViewComponent from '../src/components/CartViewComponent';

  const initialItems = [{
    id: 1,
    price: 2,
    quantity: 3
  }, {
    id: 2,
    price: 2.5,
    quantity: 4
  }];

  const possibleItems = [{
    id: 1,
    price: 2
  }, {
    id: 2,
    price: 2.5
  }, {
    id: 3,
    price: 5
  }];

  export default {
    name: 'CartDemoApp',
    components: { CartViewComponent },
    data() {
      return {
        initialItems,
        possibleItems
      };
    },
    methods: {
      getClassModel() {
        return new Cart(this.initialItems);
      },
      getModuleModel() {
        return getCart(this.initialItems);
      }
    }
  };
</script>
<style lang="scss">
  .demo {
    &__title {
      margin: 0.75rem 0 1.25rem;
      .link{
        margin-top: 1.1rem;
      }
    }
  }

  .section {
    margin-bottom: 2rem;
    &__title {
      margin: 0.75rem 0 1.25rem;
    }
  }

  .link {
    float: right;
    font-size: 0.6em !important;
    margin-top: 0.7em;
  }
</style>
