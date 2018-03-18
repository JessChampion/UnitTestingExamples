<template>
  <div class="cart">
    <table class="cart__items table">
      <tr class="table__row table__row--header">
        <th class="table__cell table__cell--header">Item number</th>
        <th class="table__cell table__cell--header">Quantity</th>
        <th class="table__cell table__cell--header">Price</th>
        <th class="table__cell table__cell--header">Subtotal</th>
      </tr>
      <tr class="table__row"
          v-for="item in cart.items"
          :key="item.id">
        <td class="table__cell">{{ item.id }}</td>
        <td class="table__cell">{{ item.quantity }}</td>
        <td class="table__cell">{{ formatMoney(item.price) }}</td>
        <td class="table__cell">{{ getItemSubtotal(item) }}</td>
      </tr>
    </table>
    <div class="cart__totals">
      Total
      <span class="cart__total">{{ formatMoney(cart.total) }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartViewComponent',

    props: {
      cart: {
        type: Object,
        required: true
      },
      catalog: {
        type: Array,
        required: true
      }
    },

    methods: {
      formatMoney(value) {
        return `$${value.toFixed(2)}`;
      },
      getItemSubtotal(item) {
        return this.formatMoney(item.price * item.quantity);
      }
    }
  };
</script>

<style lang="scss">
  $light-grey: #dedede;

  $table-border: 0.1rem solid $light-grey;

  .cart {
    &__totals {
      background-color: $light-grey;
      padding: 0.25rem 0.5rem;
    }
    &__total {
      float: right;
    }
  }

  .table {
    border: $table-border;
    border-collapse: collapse;
    width: 100%;
    &__row {
      &--header {
        background-color: $light-grey;
      }
    }

    &__cell {
      padding: 0.25rem 0.5rem;
      border-left: $table-border;
      width: 25%;

      &:first-of-type {
        border-left: none;
      }
    }
  }
</style>
