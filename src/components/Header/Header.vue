<template>
  <div class="header-container">
    <button class="header-today-btn">Today</button>

    <div class="header-mode-container" v-on:click="clickModeContainer">
      <div class="header-mode-text">{{mode.name}}</div>
      <i class="header-mode-icon material-icons">arrow_drop_down</i>

      <ul class="header-mode-select-box" v-if="selected">
        <li v-for="(item, idx) in modeList" class="header-mode-select" :key="idx" v-on:click="changeMode(item)">
          {{item.name}}
        </li>
      </ul>
    </div>

  </div>
</template>


<script type="text/javascript" src="./js/Header.js"></script>
<style type="text/css" src="./css/Header.css"></style>