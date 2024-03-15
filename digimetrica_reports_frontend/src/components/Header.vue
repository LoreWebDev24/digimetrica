<script setup>

</script>

<template>
<div class="page_header">
  <div class="row">
    <div class="col-3">
      <img src="/digimetrica_logo.png" alt="">
    </div>
    <div class="col-6">
      <span>Digimetrica Reports Tool</span>
    </div>
    <div class="col-3">
      <a href="https://github.com/LoreWebDev24"><img class="logo_git" src="/github.png" alt=""></a>
    </div>
  </div>
</div>
</template>

<style scoped>

/* MEDIA QUERIES :  */ 

@media (max-width: 720px) {   
  div.col-6 {
    display: none;
    color: bisque;
  }
  .row {
    justify-content: space-between;
  }
  div.col-3:last-child {
    justify-content: flex-end;
  }
}

/* STILE DELL' HEADER  */

.col-3, .col-6 {
  display: flex;
  align-items: center;
}

.col-3:first-child img {
  max-height: 52px;
  width: auto;
  max-width: 264px;
}

.col-3  {
  justify-content: flex-start ;
}

.col-3:last-child {
  justify-content: center;
}

.col-6 {
  justify-content: center;
}

.page_header .logo_git {
  width: 50px;
}

</style>
