<template>
  <div>
    <div class="flex flex-row justify-around mb-3">
      <span
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{
          'text-blue-500 font-semibold underline': selectedTab === tab,
        }"
        @click="selectedTab = tab"
      >
        {{ tab }}
      </span>
    </div>

    <div
      class="flex flex-col items-center gap-4 p-3 border-2 border-blue-500 rounded-md"
    >
      <form
        @submit.prevent="onFormSubmit"
        class="flex flex-col items-center gap-3"
        v-if="selectedTab === 'Make a review'"
      >
        <div class="flex flex-col justify-between">
          <p class="flex flex-col">
            <label for="name">Customer Name</label>
            <input
              class="border-2 border-pink-300 rounded-md"
              type="text"
              name="name"
              v-model="name"
            />
          </p>

          <p class="flex flex-col">
            <label for="review">Comment</label>
            <input
              class="border-2 border-pink-300 rounded-md"
              type="text"
              name="review"
              v-model="review"
            />
          </p>

          <p class="flex flex-col">
            <label for="rate">Your Review</label>
            <input
              class="border-2 border-pink-300 rounded-md"
              type="text"
              name="rate"
              v-model="rate"
            />
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <p>Would you recommend this product?</p>
          <div class="flex flex-row justify-around mt-2">
            <div class="flex flex-row gap-2">
              <input
                type="radio"
                id="yes"
                name="recommend"
                value="Yes"
                v-model="recommend"
              />
              <label for="yes">Yes</label>
            </div>
            <div class="flex flex-row gap-2">
              <input
                type="radio"
                id="no"
                name="recommend"
                value="No"
                v-model="recommend"
              />
              <label for="no">No</label>
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Submit Comment"
          class="text-white bg-blue-400 hover:bg-blue-500 p-2 border-2 rounded-md"
        />
      </form>

      <div v-show="selectedTab === 'Reviews'">
        <div v-if="errors.length">
          <p>Errors:</p>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <p v-if="!productReview.length">There are no reviews yet.</p>
        <ul v-if="!errors.length" class="flex flex-col gap-2">
          <li v-for="reviews in productReview" :key="reviews">
            <p>Name: {{ reviews.userName }}</p>
            <p>Review: {{ reviews.userReview }}</p>
            <p>Rate: {{ reviews.userRate }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      review: null,
      rate: null,
      errors: [],
      recommend: null,
      tabs: ["Reviews", "Make a review"],
      selectedTab: "Make a review",
    };
  },
  props: {
    productReview: [],
  },
  methods: {
    onFormSubmit() {
      let lowerCaseReview = this.review.toLowerCase();
      if (lowerCaseReview.includes("great") || this.recommend == "Yes") {
        let productReviewObj = {
          userName: this.name,
          userReview: this.review,
          userRate: this.rate,
        };
        this.$emit("add-review", productReviewObj);
        this.name = null;
        this.review = null;
        this.rate = null;
        this.errors = [];
      } else {
        if (lowerCaseReview.includes("great") != true) {
          this.errors.push(
            "Your review does not include the word great. It cannot be submitted"
          );
        }
        if (this.recommend != "Yes") {
          this.errors.push(
            "We think you mis-clicked the No button, please correct that."
          );
        }
      }
    },
  },
};
</script>
