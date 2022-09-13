<template>
    <div>
        <button
        class="p-2.5 w-40 rounded-md text-white text-sm hover:bg-pink-400 bg-pink-500 font-medium inline-block"
        @click="clickButtonHandle"
        >
        {{buttonText}}
        </button>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            buttonText: 'Sepete Ekle'
        }
    },
    methods: {
        clickButtonHandle() {
        this.$store.commit('ADD_TO_BASKET')
        this.buttonText = "Sepete Eklendi!";
        setTimeout(() => {
            this.buttonText = "Sepete Ekle";
        }, 1000);
        },
  },
}
</script>

<style>

</style>