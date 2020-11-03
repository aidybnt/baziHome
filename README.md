初始化
element-ui

function refreshRem

````
                <p>
                  <el-input
                      v-model="username"
                      placeholder="请输入您的账号"
                      clearable>
                    <i slot="prefix" class="el-icon-user-solid"></i>
                  </el-input>
                </p>
                <p>
                  <el-input
                      v-model="password"
                      placeholder="请输入登陆密码"
                      clearable>
                    <i slot="prefix" class="el-icon-lock"></i>
                  </el-input>
                </p>
                <p style="clear: both; overflow:hidden">
                  <el-link @click="centerDialogVisible = true" type="info" class="register-info">注册账号</el-link>
                  <el-link style="margin-left: 20px" type="info" class="register-info">忘记密码</el-link>
                  <el-button plain style="float: right" class="login-button">登 陆</el-button>
                </p>
                <hr>
````



打包分析
npm run build -- --report

1 window.localStorage.getItem( key );
2 window.localStorage.setItem( key, value );
3 window.localStorage.removeItem( key );
4 window.localStorage.clear();
5 window.localStorage.length;
6 window.localStorage.key( i );