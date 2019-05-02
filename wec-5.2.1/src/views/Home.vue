<template>
  <div class="home">
    <name></name>
    <about-we></about-we>
    <study></study>
    <apply></apply>
  </div>
</template>

<script>
// @ is an alias to /src
import name from "./home/name"
import aboutWe from "./home/aboutWe"
import study from "./home/study"
import apply from "./home/apply"

export default {
  name: "home",
  components: {
    name,
    aboutWe,
    study,
    apply
  },

};
</script>
