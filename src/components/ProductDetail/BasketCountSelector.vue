<template>
  <div class="flex items-center gap-3 text-2xl">
    <button class="font-bold" @click="removeProduct">-</button>
    <p>{{ count }}</p>
    <button class="font-bold" @click="addProduct">+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1
        }
    },   
    methods: {
        addProduct() {         
            this.count++
            this.$emit('basket-product-count', this.count)
            
        },
        removeProduct() {
            if(this.count > 0) {
                this.count--
                this.$emit('basket-product-count', this.count)
            }
           
        }
    }
}
</script>