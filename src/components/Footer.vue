<template>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="container-fluid">
      <img src="../assets/images/footer.png" class="w-100" alt="" />
    </div>
    <div class="container-fluid footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div><img src="../assets/images/logo.png" alt="" /></div>
            <p class="pb-2 pt-2">
              مختصة بتقديم خدمات الحج لحجاج بيت الله الحرام القادمين حصراً من
              الدول الأفريقية غير العربية ، تماشياً مع رؤية المملكة 2030 م
            </p>
            <h5>
              مجموعة الإثراء : <span>https://africa-sa.com/?page_id=9456</span>
            </h5>
          </div>
          <div class="col-md-3">
            <h4 class="pb-3 pt-2">روابط مهمة</h4>
            <ul class="list-unstyled">
              <li>الرئيسية</li>
              <li>فريق العمل</li>
              <li>عن الشركة</li>
              <li>المنجزات والتطوير</li>
              <li>فريق العمل</li>
              <li>عن الشركة</li>
              <li>المنجزات والتطوير</li>
            </ul>
          </div>
          <div class="col-md-2">
            <h4 class="pb-3 pt-2">روابط سريعة</h4>
            <ul class="list-unstyled">
              <li>الرئيسية</li>
              <li>فريق العمل</li>
              <li>عن الشركة</li>
              <li>المنجزات والتطوير</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4 class="pb-3 pt-2">تواصل معنا</h4>
            <div class="d-flex">
              <div class="p-2">
                <img
                  style="width: 32px"
                  src="../assets/images/Frame.png"
                  alt=""
                />
              </div>
              <div>
                <h5>رقم الجوال</h5>
                <h6>565656488</h6>
              </div>
            </div>
            <div class="d-flex">
              <div class="p-2">
                <img
                  style="width: 32px"
                  src="../assets/images/Frame.png"
                  alt=""
                />
              </div>
              <div>
                <h5>البريد الإلكتروني</h5>
                <h6>example41@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  background-color: rgba(255, 247, 237, 1);
}
</style>
