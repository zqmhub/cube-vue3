<template>
  <div class="home">
    <cube-slide :data="items"/>
    <cube-slide ref="slide" :data="lists" :auto-play="false">
      <cube-slide-item v-for="(item, index) in lists" :key="index">
        <ul>
          <li class="slidelist" v-for="(list, index1) in item" :key="index1">
            <a>
              <img :src="list.image">
              <p>{{list.name}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      items: [],
      lists: []
    };
  },
  created() {
    this.$http.get("/api/navlist").then(res => {
      this.items = res.items;
    });

    this.$http.get("/api/slideList").then(res => {
      this.lists = res.items;
    });
  }
};
</script>
<style >

ul{
  display: flex;
  flex-wrap: wrap

}
.slidelist {
  width: 20%;
  justify-content: center;
  margin-bottom: 10px;
}
.slidelist img{
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>
