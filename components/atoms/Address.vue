<template>
  <div class="footer-content">
    <div class="ul" v-for="(content, i) in contents" :key="i">
      <div class="li content-title">{{ content.title }}</div>
      <div class="li" v-for="(item, j) in content.items" :key="j">
        <p target="_blank">{{ item.content }}</p>
      </div>
    </div>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12976.383746025715!2d139.58319686070936!3d35.6007000118099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f6be88f58655%3A0x60b5c419250f9c2d!2z44CSMjEzLTAwMzQg56We5aWI5bed55yM5bed5bSO5biC6auY5rSl5Yy65LiK5L2c5bu2!5e0!3m2!1sja!2sjp!4v1736912046917!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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