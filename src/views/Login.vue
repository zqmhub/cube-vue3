<template>
  <div>
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              //校验规则
              required: true,
              type: "string",
              min: 3,
              max: 15
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "用户名不能少于3个字符",
              max: "用户名不能大于15个字符"
            }
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false
              }
            },
            rules: {
              //校验规则
              required: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.$http
        .get("/api/login", {
          params: this.model
        })
        .then(res => {
          console.log(res.data.code + "-" + res.data);
          console.log(res.data);
          if (res.data.code == "0") {
            this.$store.commit("setToken", res.data.token);
            localStorage.setItem("token", res.data.token);
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
