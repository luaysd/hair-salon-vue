<template>
  <div class="reviews">
    <div class="review-card">
      <div class="review-header">
        <strong>Sarah M.</strong>
        <div class="stars">★★★★★</div>
      </div>
      <p>"Amazing service! My hair has never looked better."</p>
      <div class="date">19 September 2024</div>
    </div>
    <div class="review-card">
      <div class="review-header">
        <strong>Lina K.</strong>
        <div class="stars">★★★★★</div>
      </div>
      <p>"Loved my facial! Will definitely come back again."</p>
      <div class="date">12 January 2025</div>
    </div>

    <template v-if="!props.isHomePage">
      <div class="review-card">
        <div class="review-header">
          <strong>Emma R.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"Absolutely loved my haircut! The staff was so friendly and welcoming. I’ll definitely be back."</p>
        <div class="date">14 January 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Lina M.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"Best balayage I’ve ever had! My hair looks incredible and feels so soft. Thank you!"</p>
        <div class="date">3 February 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Mark T.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"Highly professional and very clean salon. I was impressed with their attention to detail."</p>
        <div class="date">22 March 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Sara D.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"Got my wedding hair done here and it was perfect! They made me feel like a queen!"</p>
        <div class="date">7 April 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Jasmine K.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"It’s rare to find a place that gets curly hair right, but they nailed it. 10/10!"</p>
        <div class="date">19 May 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Noura S.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"My go-to salon for everything—color, cut, and even nails. They never disappoint!"</p>
        <div class="date">1 June 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Rania B.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"The atmosphere is so relaxing, and I always leave feeling refreshed and confident."</p>
        <div class="date">9 July 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Ahmed H.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"Super quick and stylish haircut. Perfect for my busy schedule. Highly recommend!"</p>
        <div class="date">15 August 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Leila M.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"Love how they listened to exactly what I wanted. My new hairstyle is amazing!"</p>
        <div class="date">30 September 2024</div>
      </div>

      <div class="review-card">
        <div class="review-header">
          <strong>Dana J.</strong>
          <div class="stars">★★★★★</div>
        </div>
        <p>"From the moment I walked in, I was treated like royalty. This place is a gem."</p>
        <div class="date">12 October 2024</div>
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isHomePage: Boolean
})
</script>

<style lang="scss" scoped>
.reviews {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .date {
    text-align: end;
    font-style: italic;
  }


  .review-card {
    background: #fff;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;
    width: 100%;
    max-width: max(50vw, 600px);
  }

  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .stars {
    color: #F9B424;
    font-size: 1.1rem;
  }
}
</style>