<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    data() {
        return {};
    },
    components:{
      AppHeader,
      AppMain
    }
};

</script>
<template>

  <div>
    <AppHeader/>
      <AppMain/>
  </div>
  
</template>

<style lang="scss">


@use './styles/partial/variables' as *;
@use './styles/partial/mixins' as *;
@use './styles/general.scss';
@use '../node_modules/bootstrap/scss/bootstrap.scss'


</style>