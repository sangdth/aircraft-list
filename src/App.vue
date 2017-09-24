<template>
  <div id="app" class="container">
    <span class="icon has-text-success is-large">
      <i class="fa fa-fighter-jet fa-3x"></i>
    </span>
    <ul>

    </ul>
    <div class="tabs is-centered is-boxed">
      <ul>
        <router-link :to="{ name: 'AircraftHome' }" active-class="is-active" tag="li" exact>
          <a>
            <span class="icon is-small"><i class="fa fa-home"></i></span>
            <span>Go to Home</span>
          </a>
        </router-link>

        <router-link :to="{ name: 'AircraftList' }" active-class="is-active" tag="li">
          <a>
            <span class="icon is-small"><i class="fa fa-list"></i></span>
            <span>Go to List</span>
          </a>
        </router-link>

      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
