<template>
    <div>
        <button
        class="p-2.5 w-40 rounded-md text-white text-sm hover:bg-pink-400 bg-pink-500 font-medium inline-block"
        @click="clickButtonHandle"
        >
        {{button.text}}
        </button>
    </div>  
</template>

<script>
import { mapState } from 'vuex'
export default {
    methods: {
        clickButtonHandle() {
            this.$store.commit('ADD_TO_BASKET')
            this.$store.commit('CHANGE_CARD_BUTTON_TEXT')
        },
  },
  computed: {
    ...mapState(['button'])
  }
}
</script>