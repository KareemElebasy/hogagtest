<template>
  <div class="container" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <h2>{{ $t("TimeOfPrayHeading") }}</h2>
    <div>
      <p>{{ $t("Choose") }}</p>
      <ul class="">
        <li>مكة</li>
        <li>المدينة</li>
      </ul>
    </div>
    <!-- <TimeOfPrayCard :city="city"></TimeOfPrayCard> -->
  </div>
  <div class="container">
    <div class="row">
      <div class="d-flex align-items-center">
        <div>
          <img src="../assets/images/Frame (1).png" alt="" srcset="" />
        </div>
        <p>الساعة الآن</p>
      </div>
      <div>
        <div><img src="" alt="" srcset="" /></div>
        <p></p>
      </div>
    </div>
    <div class="d-flex justify-content-between flex-wrap">
      <div
        class="col-md-3 col-sm-6 img-wrapper-pray1 d-flex align-items-center justify-content-center"
      >
        <div>
          <h5>صلاة الفجر</h5>
          <h6>{{ data.Fajr }}الساعة</h6>
        </div>
      </div>
      <div
        class="col-md-3 col-sm-6 img-wrapper-pray1 d-flex align-items-center justify-content-center"
      >
        <div>
          <h5>الشروق</h5>
          <h6>{{ data.Sunrise }}الساعة</h6>
        </div>
      </div>
      <div
        class="col-md-3 col-sm-6 img-wrapper-pray1 d-flex align-items-center justify-content-center"
      >
        <div>
          <h5>صلاة الفجر</h5>
          <h6>{{ data.Dhuhr }}الساعة</h6>
        </div>
      </div>
      <div
        class="col-md-3 col-sm-6 img-wrapper-pray1 d-flex align-items-center justify-content-center"
      >
        <div>
          <h5>صلاة الفجر</h5>
          <h6>{{ data.Asr }}الساعة</h6>
        </div>
      </div>
      <div
        class="col-md-3 col-sm-6 img-wrapper-pray1 d-flex align-items-center justify-content-center"
      >
        <div>
          <h5>صلاة الفجر</h5>
          <h6>{{ data.Maghrib }}الساعة</h6>
        </div>
      </div>
      <div
        class="col-md-3 col-sm-6 img-wrapper-pray1 d-flex align-items-center justify-content-center"
      >
        <div>
          <h5>صلاة الفجر</h5>
          <h6>{{ data.Isha }}الساعة</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";

const data = ref({});

const city = ref("");

const getTimePrayer = (city) => {
  axios
    .get(
      `http://api.aladhan.com/v1/timingsByCity/10-09-2023?city=&country=SA&method=8`
    )
    .then((res) => {
      data.value = res.data.data.timings;
      console.log(data);
      console.log("res");
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  getTimePrayer();
});
</script>

<style lang="scss" scoped>
.img-wrapper-pray1 {
  background-image: url(../assets/images/Rectangle.png);
  background-size: cover;
  height: 100px;
  width: 159px;
  border-radius: 20px;
}
</style>
