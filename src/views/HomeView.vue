<template>
  <div>
    <HeroSection></HeroSection>
    <About></About>
    <Services></Services>
    <TimeOfPray></TimeOfPray>

    <div
      class="container ertha2-section mt-5 pb-5"
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    >
      <div class="row g-5">
        <div class="col-md-6 content my-auto">
          <h2>{{ $t("Ertha2Heading") }}</h2>
          <h5>{{ $t("HeroSectionHeading") }}</h5>
          <p>{{ $t("Ertha2Desc") }}</p>
          <div class="d-flex align-items-center justify-content-between">
            <h6>{{ $t("WebSite") }}</h6>
            <div class="d-flex">
              <!-- <img src="../assets/images/websiteIcon.png" alt="" /> -->
              <p>https://africa-sa.com/?page_id=9456</p>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="text-center">
            <img class="w-100" src="../assets/images/ethra2.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="container mt-5 pb-5"
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    >
      <div class="row g-5">
        <div class="col-md-5">
          <div class="text-center">
            <img class="w-100" src="../assets/images/Frame35.png" alt="" />
          </div>
        </div>
        <div class="col-md-6 content my-auto">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div><img src="../assets/images/Frame (1).png" alt="" /></div>
              <h4>
                +180 ألف <span>{{ $t("Pilgrim") }}</span>
              </h4>
            </div>
            <div>
              <div><img src="../assets/images/Frame (1).png" alt="" /></div>
              <h4>
                26 <span>{{ $t("Country") }}</span>
              </h4>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div><img src="../assets/images/Frame (1).png" alt="" /></div>
              <h4>
                +50 الف <span>{{ $t("Visitors") }}</span>
              </h4>
            </div>
            <div>
              <div><img src="../assets/images/Frame (1).png" alt="" /></div>
              <h4>
                400 <span>{{ $t("Camp") }}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- News Section -->
    <div>
      <div class="container" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
        <div class="d-flex justify-content-between pb-2">
          <h2>أخبارنا</h2>
          <button class="hero_btn px-2 py-1">أقرأ المزيد</button>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card" style="width: 18rem">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <p class="Secondary">23 يوليو، 2019</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 18rem">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <p class="Secondary">23 يوليو، 2019</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 18rem">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <p class="Secondary">23 يوليو، 2019</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Serviced Countries -->
    <div
      class="container serviced-country mt-5 mb-5"
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    >
      <div class="row parent-pos">
        <div class="col-md-3 top-right">
          <img src="../assets/images/Group12021.png" alt="" />
        </div>

        <div class="col-md-4 about-content my-auto">
          <h2>{{ $t("ServicesCountryHeading") }}</h2>
          <p>{{ $t("ServicesCountrryContent") }}</p>
          <div class="btn-box">
            <router-link to="/" class="hero_btn px-2 py-1 text-decoration-none">
              {{ $t("ReadMoreBtn") }}
            </router-link>
          </div>
        </div>

        <div class="col-md-4">
          <div class="bottom-left">
            <img
              class="w-100"
              src="../assets/images/top-view-islamic-new-year-with-quran-book 1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Termitional -->
    <!-- Carousel wrapper -->
    <div class="container">
      <div
        id="carouselMultiItemExample"
        class="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <!-- Controls -->
        <div class="d-flex justify-content-center mb-4">
          <button
            class="carousel-control-prev position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!-- Inner -->
        <div class="carousel-inner py-4">
          <!-- Single item -->
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                  </ul>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="far fa-star fa-sm"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Single item -->
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>UX Designer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                  </ul>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">Alex Rey</h5>
                  <p>Web Developer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="far fa-star fa-sm"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Single item -->
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                  </ul>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-4 d-none d-lg-block">
                  <img
                    class="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                    alt="avatar"
                    style="width: 150px"
                  />
                  <h5 class="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul
                    class="list-unstyled d-flex justify-content-center text-warning mb-0"
                  >
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="fas fa-star fa-sm"></i></li>
                    <li><i class="far fa-star fa-sm"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Inner -->
      </div>
    </div>
    <!-- Carousel wrapper -->
    <!-- slider -->
    <div class="container">
      <div>
        <b-carousel
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="First Slide"
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Fourth Slide"
            img-src="https://picsum.photos/1024/480/?image=23"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import About from "../components/About.vue";
import Services from "../components/Services.vue";
import TimeOfPray from "../components/TimeOfPray.vue";
</script>

<style lang="scss" scoped>
.ertha2-section {
  align-items: center;
  //   height: 647px;
  .content {
    h2 {
      font-family: DIN Next LT Arabic;
      font-weight: 700;
      line-height: 88px;
      font-size: 1.9em;
      padding-bottom: 1.2rem;
      color: rgba(167, 118, 70, 1);
    }
    h5 {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
    }
  }
}
//  serviced-country

.serviced-country {
  background-color: rgba(255, 247, 237, 1);
  border-radius: 20px;
  overflow: hidden;

  .bottom-left {
    position: relative;
    bottom: -22px;
    right: 10px;
  }
  .about-content {
    position: relative;
  }
  .top-right {
    position: relative;
    left: 50px;
  }
}
</style>
