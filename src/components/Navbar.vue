<template>
  <header>
    <div class="top-nav container" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex align-items-center">
            <div>
              <img
                src="../assets/images/nav-time-logo.png"
                alt=""
                class="w-100"
              />
            </div>
            <p class="my-auto">Current Time : {{ currentTimeValue }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex align-items-center">
            <div>
              <img
                src="../assets/images/nav-time-logo.png"
                alt=""
                class="w-100"
              />
            </div>
            <p class="my-auto">Current Time : {{ currentTimeValue }}</p>
          </div>
        </div>
      </div>
    </div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-white"
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    >
      <div class="container">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-brand d-flex align-items-center"
        >
          <img src="../assets/images/logo.png" alt="" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item me-3">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'Home' }"
              >
                {{ $t("Home") }}
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'About' }"
              >
                {{ $t("About") }}
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link class="nav-link" aria-current="page" to="/services">
                {{ $t("OurServices") }}
              </router-link>
            </li>
            <!-- <li class="nav-item me-3">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'About' }"
              >
                {{ $t("Advancedthumbnails") }}
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'About' }"
              >
                {{ $t("Countries") }}
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'About' }"
              >
                {{ $t("Ourpartners") }}
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'About' }"
              >
                {{ $t("MediaCenter") }}
              </router-link>
            </li>
            <li class="nav-item me-3">
              <router-link
                class="nav-link"
                aria-current="page"
                :to="{ name: 'About' }"
              >
                {{ $t("Contactus") }}
              </router-link>
            </li> -->
          </ul>
          <div class="locale-changer">
            <select v-model="$i18n.locale">
              <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
              >
                {{ locale }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
const currentTime = ref(new Date());

const useCurrentTime = () => {
  const updateTimeInterval = setInterval(function () {
    currentTime.value = new Date();
  }, 1000);
  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
    console.log(currentTime);
  });
  return currentTime;
};
const currentTimeValue = computed(() => {
  return `${currentTime.value.getHours()}-${currentTime.value.getMinutes()}-${currentTime.value.getSeconds()}`;
});

onMounted(() => {
  useCurrentTime();

  console.log(currentTime);
});
</script>

<style lang="scss" scoped>
header {
  height: 129px;
}
.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: black;

  &:hover {
    color: rgba(167, 118, 70, 1);
  }
}
.locale-changer {
  margin: 0 auto;
}

.navbar-brand {
  span {
    font-weight: bold;
    font-size: 32px;
    color: black;
  }
}

.custom_nav-container {
  padding: 0;

  .navbar-nav {
    margin-left: auto;

    .nav-item {
      .nav-link {
        padding: 5px 20px;
        color: black;
        text-align: center;
        text-transform: uppercase;
        border-radius: 5px;
        transition: all 0.3s;

        svg {
          width: 17px;
          height: auto;
          fill: black;
          margin-bottom: 2px;
        }
      }

      &:hover,
      &.active {
        .nav-link {
          color: black;

          svg {
            fill: black;
          }
        }
      }
    }
  }
}

.custom_nav-container .navbar-toggler {
  outline: none;
}

.custom_nav-container .navbar-toggler {
  padding: 0;
  width: 37px;
  height: 42px;
  transition: all 0.3s;

  span {
    display: block;
    width: 35px;
    height: 4px;
    background-color: black;
    margin: 7px 0;
    transition: all 0.3s;
    position: relative;
    border-radius: 5px;
    transition: all 0.3s;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: black;
      top: -10px;
      border-radius: 5px;
      transition: all 0.3s;
    }

    &::after {
      top: 10px;
    }
  }

  &[aria-expanded="true"] {
    transform: rotate(360deg);

    span {
      transform: rotate(45deg);

      &::before,
      &::after {
        transform: rotate(90deg);
        top: 0;
      }
    }
  }
}
.dropdown-menu {
  min-width: 16rem;

  li {
    padding: 0.5rem;
    background-color: white;
    a {
      color: black;

      &:hover {
        color: black;
      }
    }
  }
}
</style>
