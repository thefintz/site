<template>
<div style="max-width: 100%; overflow-x: hidden;">
<Navbar/>

<ContactForm class="mt-5"/>

</div>
</template>

<script>
import Navbar from '@/comps/Navbar'
import ContactForm from '@/comps/ContactForm'

export default {
  name: 'App',

  components: {
    Navbar,
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
