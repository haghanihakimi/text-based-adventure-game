<template>
  <div class='home_container'>
    <!--Navigation Tag: Customize it using below attributes-->
    <navigation
    LogoURL="/"
    LogoText="Neon"/>
    <!--Menulist Tag: Customize it using below attributes-->
    <menulist
    :MenuListItems="['Home','Sign In','Join Us']"
    :MenuLinks="['/','/Login','/Signup']"/>
    <!--Hobody Tag (a tag which contains all sections for rest of page): 
    Customize it using below attributes-->
    <homebody
    Section1Visibility="block"
    :CoverImage="require('@/assets/HomeCover.jpg')"
    :Section1BlurIntensity='12'
    Section1ImageAlpha="0.35"
    Section1Ttile="discover latest music"

    Section2Visibility="block"
    Section2Title="Popular Singers"
    :SingerNames="['Eminem','Taylor Swift','Ariana Grande','Adele']" 
    :Followers="[45936012,32848359,31093452,28949552]"
    :Images="['https://bit.ly/3cjiNBy','https://bit.ly/3qxhBiZ','https://bit.ly/3bBmSSp','https://bit.ly/2OKZxEN']"
    :Section2ItemURL="['https://eminem.com','/taylor','/ariana','/adele']"
    Section2ButtonText="Explore more channels"
    Section2ButtonURL="/"

    Section3Visibility="block"
    Section3Text="Join us to connect with popular singers and share your creative musics"
    :Section3BGImage="require('@/assets/JoinUsCover.jpg')"
    Section3ButtonText="Join Us"
    Section3ButtonURL="/signup"

    Section4Visibility="block"
    Section4TitleText="neon pricing plans"
    Section4Tier1Header="Neon Basic"
    :Section4Price1Title="['Free','']"
    Section4Button1Text="sign up for free"
    Section4Button1URL="/signup"
    :Section4Tier1Items="['Up to 5 hours uploads','Lifetime HD storage','Basic listener insights']"
    
    Section4Tier2Header="Neon pro unlimited"
    :Section4Price2Title="['$12.00','/monthly']"
    Section4Button2Text="sign up for pro"
    Section4Button2URL="/signup"
    :Section4Tier2Items="['Unlimited upload time','Get paid for your plays','Advanced listener insights']"

    Section4Tier3Header="Neon Premium"
    :Section4Price3Title="['$14.15','/monthly']"
    Section4Button3Text="sign up for premium"
    Section4Button3URL="/signup"
    :Section4Tier3Items="['Share tracks on other players','Premium help services','Share payments with others']"

    FooterText="NEON"/>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
import menulist from '@/components/menulist.vue'
import homebody from '@/components/home-body.vue'
export default {
  name: 'Home',
  components: {
    navigation,
    menulist,
    homebody
  }
}
</script>
