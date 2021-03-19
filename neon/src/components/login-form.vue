<template>
  <div class="LoginForm">
    <div class="form_background_layer"><img :src="BackgroundImage" :style="{opacity:BackgroundImageAlpha, filter:'blur(' + BackgroundImageBlurIntensity + 'px)'}"></div>
    <div class="loginForm_container">
      <div class="loginFormBox">
        <div class="loginForm_header">
            <div class="loginlink_container">
              <a :href="LoginLinkURL">
                <div class="loginlink">
                  <svg viewBox="-42 0 512 512.002">
                    <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"/>
                    <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/>
                  </svg>{{LoginLinkText}}</div>
              </a>
            </div>
            <div class="signuplink_container">
              <a :href="RegisterLinkURL">
                <div class="signuplink">
                  <svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512">
                    <path d="m19 12c-.553 0-1 .448-1 1v8c0 .551-.448 1-1 1h-14c-.552 0-1-.449-1-1v-14c0-.551.448-1 1-1h8c.553 0 1-.448 1-1s-.447-1-1-1h-8c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-8c0-.553-.447-1-1-1z"/>
                    <path d="m9.376 11.089c-.07.07-.117.159-.137.255l-.707 3.536c-.033.164.019.333.137.452.095.095.223.146.354.146.032 0 .065-.003.098-.01l3.535-.707c.098-.02.187-.067.256-.137l7.912-7.912-3.535-3.535z"/>
                    <path d="m23.268.732c-.975-.975-2.561-.975-3.535 0l-1.384 1.384 3.535 3.535 1.384-1.384c.472-.471.732-1.099.732-1.767s-.26-1.296-.732-1.768z"/>
                  </svg>{{RegisterLinkText}}</div>
              </a>
            </div>
        </div>
        <form :action="FormActionPath" enctype="multipart/form-data" :method="FormMethod" @submit="Login">
          <div class="login_form">
            <div class="username_input">
              <label for="username" id="username" :style="{top: lblUnameTop}">{{UsernameInputLabel}}</label>
              <input type="text" v-model="username" required :name="UsernameInputName" class="username" @focus="UnameFocus" @blur="UnameBlur">
            </div>
            <div class="password_container">
              <label for="password" id="password" :style="{top: lblPassTop}">{{PasswordInputLabel}}</label>
              <input type="password" v-model="password" required :name="PasswordInputName" class="password" @focus="PassFocus" @blur="PassBlur">
            </div>
            <div class="btnLogin_container">
              <input type="submit" :name="LoginButtonName" :value="LoginButtonText" class="login">
            </div>
            <a :href="RecoverLinkURL" class="forgotten_account">{{RecoverLinkText}}</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    BackgroundImage: String,
    BackgroundImageAlpha: String,
    BackgroundImageBlurIntensity: Number,
    LoginLinkURL: String,
    LoginLinkText: String,
    RegisterLinkURL: String,
    RegisterLinkText: String,
    FormActionPath: String,
    FormMethod: String,
    FormRefreshable: Boolean,
    UsernameInputLabel: String,
    UsernameInputName: String,
    PasswordInputLabel: String,
    PasswordInputName: String,
    LoginButtonText: String,
    LoginButtonName: String,
    RecoverLinkURL: String,
    RecoverLinkText: String
  },
  data () {
    return {
      username: '',
      password: '',
      lblUnameTop: '13px',
      lblPassTop: '13px'
    }
  },
  methods: {
    Login: function (e) {
      if (!this.FormRefreshable) {
        e.preventDefault()
      }
    },
    UnameFocus: function () {
      this.lblUnameTop = '0px'
      this.txtUnamePaddings = '20px 7px 7px 7px'
    },
    UnameBlur: function () {
      if (this.username.length === 0) {
        this.lblUnameTop = '12px'
      }
    },
    PassFocus: function () {
      this.lblPassTop = '0px'
      this.txtPassPaddings = '20px 7px 7px 7px'
    },
    PassBlur: function () {
      if (this.password.length === 0) {
        this.lblPassTop = '12px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/login-form.scss";
</style>
