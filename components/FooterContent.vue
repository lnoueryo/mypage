<template>
  <div class="footer-content">
    <div class="ul" v-for="(content, i) in contents" :key="i">
      <div class="li content-title">{{ content.title }}</div>
      <div class="li" v-for="(item, j) in content.items" :key="j">
        <a :href="item.href" target="_blank">{{ item.content }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: Array
  }
}
</script>

<style lang="scss" scoped>

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
  padding: 0 5%;
}

.content-title {
  font-size: 20px;
  font-family: proxima-nova,sans-serif;
  padding-bottom: 10px;
}

.ul .li a {
  color: white;
}

</style>