<template>
  <div class="hero_section" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="hero_image">
      <div class="overlay-bk-slider"></div>
      <img src="../assets/images/herosection.png" alt="hero-image" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-lg-6">
          <div class="detail-box">
            <h1>{{ $t("HeroSectionHeading") }}</h1>
            <p>{{ $t("HeroSectionContent") }}</p>
            <div class="btn-box">
              <router-link to="/" class="hero_btn">
                {{ $t("HeroSectionBtn") }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 none-mob">
          <img class="w-75" src="../assets/images/Group.png" alt="" />
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
a {
  text-decoration: none;
}
.hero_section {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  // padding: 90px 0 75px 0;
  height: calc(100vh - 129px);
  .row {
    align-items: center;
  }
  .detail-box {
    h1 {
      font-size: 56px;
      font-weight: 700;
      margin-bottom: 15px;
      color: white;
    }

    p {
      padding-top: 5px;
      font-size: 16px;
      font-weight: 300;
      color: white;
    }

    .hero_btn {
      padding: 10px 45px;
      margin-top: 10px;
      border-radius: 31px;
      font-weight: bold;

      &:hover {
        background-color: white;
        color: rgba(167, 118, 70, 1);
      }
    }

    .img-box {
      img {
        width: 100%;
      }
    }
  }
  .hero_image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    .overlay-bk-slider {
      background-color: black;
      opacity: 0.175;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      // object-position: top right;
    }
  }

  @media (max-width: 767px) {
    //   .hero_image img {
    //     -o-object-position: top center;
    //     object-position: top center;
    //   }
    .none-mob {
      display: none;
    }
    .hero_section .detail-box {
      margin-bottom: 45px;
      h1 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 420px) {
    .hero_section .detail-box h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 376px) {
    .hero_section .detail-box h1 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1170px;
    }
  }
}
</style>
