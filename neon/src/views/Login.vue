<template>
  <div class="login_container">
    <!--Navigation Tag: Customize it using below attributes-->
    <navigation
    LogoURL="/"
    LogoText="Neon"/>
    <!--Menulist Tag: Customize it using below attributes-->
    <menulist
    :MenuListItems="['Home','Sign In','Join Us']"
    :MenuLinks="['/','/Login','/Signup']"/>
    <!--Login Form Tag contains all related sub-tags : Customize it using below attributes-->
    <LoginForm
    LoginLinkText="Sign In"
    LoginLinkURL="/login"

    RegisterLinkText="Register"
    RegisterLinkURL="/signup"
    
    FormActionPath="/login"
    FormMethod="POST"
    :FormRefreshable='false'
    
    UsernameInputLabel="Email/Username"
    UsernameInputName="username"
    
    PasswordInputLabel="Password"
    PasswordInputName="password"
    
    LoginButtonText="Sign In"
    LoginButtonName="login"
    
    RecoverLinkText="forgotten account"
    RecoverLinkURL="/"
    
    :BackgroundImage="require('@/assets/concert.jpg')"
    BackgroundImageAlpha="0.7"
    :BackgroundImageBlurIntensity='8'/>
    <!--Footer Tag: Customize it using below attribute-->
    <Footer 
    FooterText="NEON" 
    style='position:fixed;bottom:0;background-color: hsla(0, 0%, 99%, 0.65);'/>
  </div>
</template>
<script>
import navigation from '@/components/navigation.vue'
import menulist from '@/components/menulist.vue'
import LoginForm from '@/components/login-form.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Login',
  components: {
    navigation,
    menulist,
    LoginForm,
    Footer
  }
}
</script>
<style lang="scss" scoped>
@include phone(720px){
  .navigation{
    @include csize(100%,60px);
  }
  .menulist{
    padding: 60px 0 0 0;
  }
}
</style>
