module.exports = {
  configureWebpack: {
    devServer: {
      //mock接口编写
      //更改后重启生效
      before(app) {
        // app.get('url',(req,res)=>{
        //   res.json({

        //   })
        // })

        //注册接口
        let userpoor = [{
            username: 'zzz',
            password: '1'
          },
          {
            username: 'qqq',
            password: '1'
          },
          {
            username: 'mmm',
            password: '1'
          }
        ]
        app.get("/api/register", (req, res) => {
          const {
            username,
            password
          } = req.query;
          const userLen = userpoor.filter(v => v.username == username).length
          if (userLen > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })

        //登录接口
        let tokenKey = 'tokener'
        app.get('/api/login', (req, res) => {
          const {
            username,
            password
          } = req.query
          if (username == 'zzz' && password == '1' || username == 'qqq' && password == '1' || username == 'mmm' && password == '1') {
            res.json({
              code: 0,
              message: '登录成功',
              token: tokenKey + "-" + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          }else{
            res.json({
              code:1,
              message:'帐号或密码错误'
            })
          }
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}