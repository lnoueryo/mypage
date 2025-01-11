<template>
  <div class="hamburger-menu">
    <input type="checkbox" id="menu-btn-check">
    <label for="menu-btn-check" class="menu-btn"><span></span></label>
    <nav class="menu-content">
      <ul>
        <li class="mx-2" v-for="(item, i) in items" :key="i">
          <a @click.prevent="emits('click:item', item)">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps([
  'items'
])
const emits = defineEmits([
  'click:item'
])
</script>

<style scoped>
/* ドロワー */
.menu-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    z-index: 90;
    /* background-color: #3583bb42; */
}
.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
    content: '';
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background-color: #ffffff;
    position: absolute;
    transition: all 1s;
}
.menu-btn span:before {
  bottom: 8px;
}
.menu-btn span:after {
  top: 8px;
}
#menu-btn-check:checked ~ .menu-btn span {
  background-color: #183c56c9;
}
#menu-btn-check:checked ~ .menu-btn span::before {
  bottom: 0;
  transform: rotate(45deg);
  transition: all 1s;
}
#menu-btn-check:checked ~ .menu-btn span::after {
  top: 0;
  transform: rotate(-45deg);
  transition: all 1s;
}

.menu-content {
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  right: -50%;
  z-index: 80;
  background-color: rgb(39 63 55 / 94%);
  transition: all 0.5s;/*アニメーション設定*/

  ul {
    padding: 70px 10px 0;

    li {
      border-bottom: solid 1px #ffffff;
      list-style: none;

      a {
        display: block;
        width: 100%;
        box-sizing: border-box;
        color:#ffffff;
        text-decoration: none;
        padding: 15px 15px 15px 0;
        position: relative;
      }
      a::before {
        content: "";
        width: 7px;
        height: 7px;
        border-top: solid 2px #ffffff;
        border-right: solid 2px #ffffff;
        transform: rotate(45deg);
        position: absolute;
        right: 11px;
        top: 16px;
      }
    }
  }
}

#menu-btn-check:checked ~ .menu-content {
    right: 0;/*メニューを画面内へ*/
}
.hamburger-menu {
  display: none;
}
.hamburger-menu input {
    display: none;
}
@media screen and (max-width: 1225px) {
  .hamburger-menu {
    display: block;
  }
}

@media screen and (max-width: 480px) {
  .menu-content {
    width: 50%;
  }
  #menu-btn-check:checked ~ .menu-content {
    width: 70%;
  }
}
</style>