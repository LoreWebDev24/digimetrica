<script setup>
import { ref, getCurrentInstance, watch } from "vue";
import { state } from "../../storeManager.js";
const instance = getCurrentInstance();

const inputValue = ref("");

state.inputValue = inputValue.value;

const onChange = () => {
  instance.emit("on-search-change", inputValue);
  state.inputValue = event.target.value;
};

watch(
  () => state.inputValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);
</script>

<template>
  <div class="searchbar_wrapper">
    <input
      placeholder="Search By Domain Name"
      v-model="inputValue"
      @input="onChange"
      class="search_input"
      type="text"
    />
    <img class="lens_image" src="/lens.png" alt="" />
  </div>
</template>

<style>
.searchbar_wrapper {
  margin: 0 auto;
  width: 300px;
  position: relative;
}
.search_input {
  border-radius: 1rem;
  box-shadow: none;
  border: 0px;
  padding: 20px 10px;
  height: 41.6px;
  width: 300px;
}

.lens_image {
  position: absolute;
  width: 20px;
  right: 20px;
  top: 10px;
}

.search_button:hover {
  cursor: pointer;
  background-color: #00fe00;
  font-weight: bold;
  color: black;
}
</style>
