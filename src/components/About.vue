<template>
  <div
    class="about-section mt-5 pb-5"
    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
  >
    <div class="container">
      <div class="row g-5">
        <div class="col-md-6">
          <div class="img-wrapper">
            <img class="w-100" src="../assets/images/Frame 16.png" alt="" />
          </div>
        </div>
        <div class="col-md-6 about-content my-auto">
          <h2>{{ $t("HeroSectionHeading") }}</h2>
          <p>{{ $t("Desc") }}</p>
          <div class="btn-box">
            <router-link to="/" class="hero_btn">
              {{ $t("ReadMoreBtn") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about-section {
  align-items: center;
  //   height: 647px;
  .about-content {
    h2 {
      font-weight: 700;
      line-height: 40px;
      color: black;
      font-size: 1.9em;
      padding-bottom: 1.2rem;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
      color: black;
      padding-bottom: 1.5rem;
    }
    .hero_btn {
      text-decoration: none;
      padding: 10px 14px;
    }
  }
}
</style>
