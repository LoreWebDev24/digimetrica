<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps(["slug", "report"]);

console.log(props.report[0]);

// FUNZIONE PER GENERARE UN TEMPO DI ESECUZIONE DI UN' IPOTETICA SCANSIONE DELLA RETE:

function generateRandomTime() {
  const randomSeconds = Math.floor(Math.random() * (240 - 60 + 1)) + 60;
  const minutes = Math.floor(randomSeconds / 60);
  const seconds = randomSeconds % 60;

  const result = minutes + ":" + seconds;

  return result;
}

// FUNZIONE PER GENERARE UN OPERATORE RANDOM CHE HA EFFETTUATO LA SCANSIONE DEI RISCHI PER IL CLIENTE:

function generateRandomName() {
  const names = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    "William",
    "Olivia",
    "James",
    "Ava",
    "Benjamin",
    "Isabella",
  ];
  const surnames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];

  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomSurnameIndex = Math.floor(Math.random() * surnames.length);

  const randomName = names[randomNameIndex];
  const randomSurname = surnames[randomSurnameIndex];

  return `${randomName} ${randomSurname}`;
}
</script>

<template>
  <div class="report-detail-section">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <span><strong>Scan Maker </strong> {{ generateRandomName() }}</span>
          <span
            ><strong>Scan Last Edit </strong>
            {{ props.report[0].last_edit }}</span
          >
          <span
            ><strong>Scan Duration </strong>
            {{ generateRandomTime() }} min</span
          >
        </div>
        <div class="col-5">
          <span
            ><strong>Scan Creation: </strong>
            {{ props.report[0].creation_date }}</span
          >
        </div>
        <div class="col-2">
          <div class="risk_level_wrapper">
            <strong class="bg-red" v-if="props.report[0].risk_score > 79"
              ><span>Risk Level</span>CRITICAL</strong
            >
            <strong
              class="bg-yellow"
              v-else-if="
                props.report[0].risk_score < 80 &&
                props.report[0].risk_score > 69
              "
              ><span>Risk Level</span>VULNERABLE</strong
            >
            <strong v-else class="bg-green">
              <span>Risk Level</span>
              PROTECTED
            </strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.risk_level_wrapper {
    height: 100%;
  
}

.risk_level_wrapper strong {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.col-5 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.risk-col {
  align-items: flex-end;
}

.container {
  max-width: 1000px;
  background-color: #1a2032;
  margin: 0 auto;
  border-radius: 1rem;
}

.report-detail-section {
  padding: 50px 20px;
  min-height: 400px;
}

span {
  display: flex;
  gap: 20px;
}

.bg-red {
  background-color: red;
}

.bg-green {
    background-color: green;
}
</style>
