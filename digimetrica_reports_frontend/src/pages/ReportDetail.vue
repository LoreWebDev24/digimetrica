<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { defineProps } from 'vue';

const  props  = defineProps(["slug","report"]);


onMounted(() => {

})  

</script>

<template>
<div>
<h4>{{ props }}</h4>
</div>
</template>


<style scoped>
div {
    padding: 200px  20px;
}
</style>