<template>
<div style="max-width: 100%; overflow-x: hidden;">
<NavbarComp/>

<ContactForm class="mt-5"/>

<FooterComp/>

</div>
</template>

<script>
import NavbarComp from '@/comps/NavbarComp'
import FooterComp from '@/comps/FooterComp'
import ContactForm from '@/comps/ContactForm'

export default {
  name: 'App',

  components: {
    NavbarComp,
    FooterComp,
    ContactForm
  }
}
</script>

<style scoped>
#section1 {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-image: url("../assets/back_light4.jpg");
  background-image: url("../assets/back_dark.jpg"); */
  /* text-shadow: 1px 1px 1px #313338; */
}
.list {
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
}
.my-img {
  max-height: 10rem;
  max-width: 10rem
}
.pointer {
  cursor: pointer
}
</style>
