<template>
  <div class="footer-content">
    <div class="ul" v-for="(content, i) in contents" :key="i">
      <div class="li content-title">{{ content.title }}</div>
      <div class="li" v-for="(item, j) in content.items" :key="j">
        <a :href="item.href" target="_blank">{{ item.content }}</a>
      </div>
    </div>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.347659811533!2d139.64830211511102!3d35.66844068019725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3078a4992df%3A0xc09fbf5d8c170111!2z5piO5aSn5YmN6aeF!5e0!3m2!1sja!2sjp!4v1656238647879!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

.map {
  width: 300px;
  height: 180px;
  filter: grayscale(1) brightness(1.1);
}

.footer-content {
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
  padding: 0 5%;
}

.content-title {
  font-size: 20px;
  font-family: proxima-nova,sans-serif;
  padding-bottom: 10px;
}

.ul {
  margin: 0 40px;
}

.ul .li a {
  color: white;
}

@media screen and (max-width: 768px) {
  .ul {
    // width: 50%;
    margin: 0px auto 20px;
  }
  .map {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin: auto;
  }
}

@media screen and (max-width: 480px) {
  .footer-content {
    padding: 0;
  }
}

</style>