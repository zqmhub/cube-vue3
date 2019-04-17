<template>
  <div class="home">mine</div>
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
ul {
  display: flex;
  flex-wrap: wrap;
}
.slidelist {
  width: 20%;
  justify-content: center;
  margin-bottom: 10px;
}
.slidelist img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>
