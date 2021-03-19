<template>
  <div class="signup_container">
    <!--Navigation Tag: Customize it using below attributes-->
    <navigation
    LogoURL="/"
    LogoText="Neon"/>
    <!--Menulist Tag: Customize it using below attributes-->
    <menulist
    :MenuListItems="['Home','Sign In','Join Us']"
    :MenuLinks="['/','/Login','/Signup']"/>
    <!--Sign up Form Tag contains all related sub-tags : Customize it using below attributes-->
    <SignUp
    BublesVisibility='block'
    LoginPageHeaderText="One account to bring them together!"
    
    LoginLinkText="Sign In"
    LoginLinkURL="/login"

    RegisterLinkText="Register"
    RegisterLinkURL="/signup"

    SignUpActionPath="/signup"
    SignUpFormMethod="post"
    :SignUpFormRefreshable='false'
    
    UsernameLabel="Username"
    UsernameInputName="username"
    
    PasswordLabel="Password"
    PasswordInputName="password"
    
    PasswordVerifyLabel="Verify Password"
    PasswordVerifyName="verify_password"
    
    SubmitButtonText="Join Us"
    SubmitButtonName="signup"

    RecoverLinkText="Forgotten Account"
    RecoverLinkURL="/"
    
    :ExternalSignUps='true'/>
    <!--Footer Tag: Customize it using below attribute-->
    <Footer 
    FooterText="NEON" 
    style='position:fixed;left:0;bottom:0;background-color: hsla(0, 0%, 99%, 0.65);'/>
  </div>
</template>
<script>
import navigation from '@/components/navigation.vue'
import menulist from '@/components/menulist.vue'
import SignUp from '@/components/signup-form.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Login',
  components: {
    navigation,
    menulist,
    SignUp,
    Footer
  }
}
</script>
<style lang="scss" scoped>
@include phone(720px){
  .signup{
    padding: 0 0 100px 0;
  }
  .navigation{
    @include csize(100%,60px);
  }
  .menulist{
    padding: 60px 0 0 0;
  }
}
</style>
