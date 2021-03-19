<template>
  <div class="signup">
    <div class="bg_layer">&nbsp;</div>
    <div class="circle_left" :style="{display:BublesVisibility}">
      <h2>{{LoginPageHeaderText}}</h2>
    </div>
    <div class="signup_container">
      <div class="SignupForm_container">
        <div class="signupForm_header">
          <div class="signuplinks_container">
              <a :href="LoginLinkURL">
                <div class="loginlink">
                  <svg viewBox="-42 0 512 512.002">
                    <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"/>
                    <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/>
                  </svg>{{LoginLinkText}}</div>
              </a>
          </div>
          <div class="signuplinks_container">
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
        <form :action="SignUpActionPath" :method="SignUpFormMethod" @submit="SignUpForm">
          <div class="signup_fields">
            <div class="email_field">
              <label for="username" id="username" :style="{top: lblUnameTop}">{{UsernameLabel}}</label>
              <input type="text" v-model="username" required :name="UsernameInputName" class="username_input" @focus="UnameFocus" @blur="UnameBlur" :style="{padding: txtUnamePaddings}">
            </div>
            <div class="password_field">
              <label for="password" id="password" :style="{top: lblPassTop}">{{PasswordLabel}}</label>
              <input type="password" v-model="password" required :name="PasswordInputName" class="password_input" @focus="PassFocus" @blur="PassBlur" :style="{padding: txtPassPaddings}">
            </div>
            <div class="verify_password_container">
              <label for="verify_password" id="verify_password" :style="{top: lblVPassTop}">{{PasswordVerifyLabel}}</label>
              <input type="password" v-model="verify_password" required :name="PasswordVerifyName" class="verify_password" @focus="vPassFocus" @blur="vPassBlur" :style="{padding: txtVPassPaddings}">
            </div>
            <div class="signup_submit">
              <input type="submit" :value="SubmitButtonText" :name="SubmitButtonName" class="btnSignup">
            </div>
            <a :href="RecoverLinkURL" class="forgotten_account">{{RecoverLinkText}}</a>
            <p class="other_connects_title" v-if="ExternalSignUps">Or continue with</p>
            <div class="continue_icons_container" v-if="ExternalSignUps">
              <div class="facebook_connect">
                <svg height="512pt" viewBox="0 0 512 512" width="512pt">
                  <path d="m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0" fill="#4267b2"/>
                  <path d="m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0" fill="#fff"/>
                </svg>Facebook
              </div>
              <div class="google_connect">
                <svg enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512">
                  <path d="m120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308h-86.308c-34.255 44.488-52.823 98.707-52.823 155.785s18.568 111.297 52.823 155.785h86.308v-86.308c-12.142-20.347-19.131-44.11-19.131-69.477z" fill="#fbbd00"/>
                  <path d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216c-20.525 12.186-44.388 19.039-69.569 19.039z" fill="#0f9d58"/>
                  <path d="m139.131 325.477-86.308 86.308c6.782 8.808 14.167 17.243 22.158 25.235 48.352 48.351 112.639 74.98 181.019 74.98v-120c-49.624 0-93.117-26.72-116.869-66.523z" fill="#31aa52"/>
                  <path d="m512 256c0-15.575-1.41-31.179-4.192-46.377l-2.251-12.299h-249.557v120h121.452c-11.794 23.461-29.928 42.602-51.884 55.638l86.216 86.216c8.808-6.782 17.243-14.167 25.235-22.158 48.352-48.353 74.981-112.64 74.981-181.02z" fill="#3c79e6"/>
                  <path d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606c-48.352-48.352-112.639-74.981-181.02-74.981l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" fill="#cf2d48"/>
                  <path d="m256 120v-120c-68.38 0-132.667 26.629-181.02 74.98-7.991 7.991-15.376 16.426-22.158 25.235l86.308 86.308c23.753-39.803 67.246-66.523 116.87-66.523z" fill="#eb4132"/>
                </svg>Google
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignUpForm',
  props: {
    BublesVisibility: String,
    LoginPageHeaderText: String,
    LoginLinkText: String,
    LoginLinkURL: String,
    RegisterLinkText: String,
    RegisterLinkURL: String,
    SignUpActionPath: String,
    SignUpFormMethod: String,
    SignUpFormRefreshable: Boolean,
    UsernameLabel: String,
    UsernameInputName: String,
    PasswordLabel: String,
    PasswordInputName: String,
    PasswordVerifyLabel: String,
    PasswordVerifyName: String,
    SubmitButtonText: String,
    SubmitButtonName: String,
    RecoverLinkText: String,
    RecoverLinkURL: String,
    ExternalSignUps: Boolean
  },
  data () {
    return {
      username: '',
      password: '',
      verify_password: '',
      lblUnameTop: '13px',
      txtUnamePaddings: '7px 7px 7px 7px',
      lblPassTop: '13px',
      txtPassPaddings: '7px 7px 7px 7px',
      lblVPassTop: '13px',
      txtVPassPaddings: '7px 7px 7px 7px'
    }
  },
  methods: {
    SignUpForm: function (e) {
      if (!this.SignUpFormRefreshable) {
        e.preventDefault()
      }
    },
    UnameFocus: function () {
      this.lblUnameTop = '0px'
      this.txtUnamePaddings = '20px 7px 7px 7px'
    },
    UnameBlur: function () {
      if (this.username.length === 0) {
        this.lblUnameTop = '13px'
        this.txtUnamePaddings = '7px 7px 7px 7px'
      } else {
        this.lblUnameTop = '0px'
        this.txtUnamePaddings = '20px 7px 7px 7px'
      }
    },
    PassFocus: function () {
      this.lblPassTop = '0px'
      this.txtPassPaddings = '20px 7px 7px 7px'
    },
    PassBlur: function () {
      if (this.password.length === 0) {
        this.lblPassTop = '13px'
        this.txtPassPaddings = '7px 7px 7px 7px'
      } else {
        this.lblPassTop = '0px'
        this.txtPassPaddings = '20px 7px 7px 7px'
      }
    },
    vPassFocus: function () {
      this.lblVPassTop = '0px'
      this.txtVPassPaddings = '20px 7px 7px 7px'
    },
    vPassBlur: function () {
      if (this.verify_password.length === 0) {
        this.lblVPassTop = '13px'
        this.txtVPassPaddings = '7px 7px 7px 7px'
      } else {
        this.lblVPassTop = '0px'
        this.txtVPassPaddings = '20px 7px 7px 7px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/signup-form.scss";
</style>
