<template>
  <div>
    <div class="d-flex" style="align-strech" v-for="(item, i) in items" :key="i">
      <div class="card-container">
        <div class="card" v-if="item.position == 'left'" :style="{boxShadow: item.color + ' 0px 7px 29px 0px'}">
          <div v-if="items.length - 1 == i" class="new">New</div>
          <div class="card-title" :style="{backgroundColor: item.color}">
            <div class="sub">{{ item.date }}</div>
            <h6>{{ item.title }}</h6>
          </div>
          <div class="card-content">
            <p v-for="(content, j) in item.contents" :key="j">{{ content }}</p>
          </div>
        </div>
      </div>
      <div class="stick-container">
        <div class="stick">
          <div class="circle-container">
            <div class="circle" :style="{backgroundColor: item.circleColor || item.color}">
              <v-icon v-if="item['circleIcon']">{{ item.circleIcon }}</v-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card" v-if="item.position == 'right'" :style="{boxShadow: item.color + ' 0px 7px 29px 0px'}">
          <div v-if="items.length - 1 == i" class="new">New</div>
          <div class="card-title" :style="{backgroundColor: item.color}">
            <div class="sub">{{ item.date }}</div>
            <h6>{{ item.title }}</h6>
          </div>
          <div class="card-content">
            <p v-for="(content, j) in item.contents" :key="j">{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style lang="scss" scoped>
.stick-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6%;
  .stick {
    position: relative;
    background-color: rgba(255, 255, 255, 0.12);
    width: 2px;
    min-height: 100px;
    height: 100%;
  }
  .circle-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    .circle {
      border-radius: 50%;
      background-color: rgba(0,0,0);
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
    }
  }
}

.card-container {
  width: 47%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  .card {
    position: relative;
    max-width: 400px;
    margin: auto;
    background-color: #191919;
    border-radius: 8px;
    .card-title {
      border-radius: 8px 8px 0 0;
      padding: 15px 20px;
      background-color: #364d33;
      .sub {
        text-align: left;
        font-size: 11px;
        margin-left: 4px;
      }
      h6 {
        font-size: 18px;
      }
    }

    .card-content {
      padding: 20px 20px;
      p {
        margin: 8px 4px;
        font-size: 14px;
      }
    }

    .new {
      position: absolute;
      right: 10px;
      top: 10px;
      background-color: #9b001970;
      font-size: 11px;
      font-weight: bold;
      text-align: center;
      padding: 5px;
      border-radius: 20px
    }
  }
}

</style>