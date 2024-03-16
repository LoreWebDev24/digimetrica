<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { defineProps } from "vue";

let isClickedReport = ref(false)
let isClickedPortsExposure = ref(false)

const props = defineProps(["slug", "report"]);

function scrollTop() {
  window.scrollTo(0, 0);
} 

function showPortsExposure() {
    isClickedPortsExposure.value = !isClickedPortsExposure.value 
}

function showSummary () {
    isClickedReport.value = !isClickedReport.value
}

onMounted(() => {
  scrollTop();
});

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

// FUNZIONE PER FORMATTARE IL TESTO DEI  SUMMARYS : 

function formattText(text) {
  text = text.replace(/\*/g, '');
  
  return text;
}
</script>

<template>
  <div class="report-detail-section">
    <div class="container">
      <div class="row report_first_row">
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
            ><strong>Scan Creation </strong>
            {{ props.report[0].creation_date }}</span
          >
          <span class="domain_name"
            ><strong>Domain Name </strong>
            {{ props.report[0].domain_name }}</span
          >
          <span class="text-xs"
            ><strong>ID Summary </strong> {{ props.report[0].idsummary }}</span
          >
        </div>
        <div class="col-2 risk_col">
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
      <div class="row scores_row">
        <div class="vulnerability_wrapper">
          <h3>REPORT SCORES</h3>
        </div>
        <div class="col-2">
          <span class="span_scores">{{
            props.report[0].servizi_esposti_score
          }}</span>
          EXPOSED SERV. SCORE
        </div>
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].dataleak_score
          }}</span>
          LEAKED DATA SCORE
        </div>
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].rapporto_leak_email_score
          }}</span>
          LEAKED EMAIL SCORE
        </div>
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].spoofing_score
          }}</span>
          SPOOFING SCORE
        </div>
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].open_ports_score
          }}</span>
          OPEN PORTS SCORE
        </div>
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].blacklist_score
          }}</span>
          BLACKLIST SCORE
        </div>
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].vulnerability_score_active
          }}</span>
          VULN. SCORE ACTIVE
        </div>
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].vulnerability_score_active
          }}</span>
          VULN. SCORE PASSIVE
        </div>
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].certificate_score
          }}</span>
          CERTIFICATE SCORE
        </div>
      </div>
      <div class="row summary_row">
        <div  class="col-10 summary_col">
            <div class="summary_wrapper">
                <h2 @click="showSummary">See The Report Detailed Summary</h2>
                <img @click="showSummary" class="show-more" src="/show-more.png" alt="">
            </div>
            <p v-show="isClickedReport">
                {{formattText(props.report[0].summary_text_en)}}
            </p>
        </div>
      </div>
      <div class="row show-more-row">
        <div  class="col-10">
            <div class="summary_wrapper">
                <h2 @click="showPortsExposure">Show the number of exposures for each network port</h2>
                <img @click="showPortsExposure" class="show-more" src="/show-more.png" alt="">
            </div>
            <p class="wrapper_port_exposures" v-show="isClickedPortsExposure">
                <div class="port_exposures">
                    <strong>PORT 53:</strong><span>{{ props.report[0].n_port["53"].n }} exposures</span>
                </div>
                <div class="port_exposures">
                    <strong>PORT 80:</strong><span>{{ props.report[0].n_port["80"].n }} exposures</span>
                </div>
                <div class="port_exposures">
                    <strong>PORT 443:</strong><span>{{ props.report[0].n_port["443"].n }} exposures</span>
                </div>
                <div class="port_exposures">
                    <strong>PORT 6667:</strong><span>{{ props.report[0].n_port["6667"].n }} exposures</span>
                </div>
                <div class="port_exposures">
                    <strong>PORT 6697:</strong><span>{{ props.report[0].n_port["6697"].n }} exposures</span>
                </div>
                <div class="port_exposures">
                    <strong>PORT 8080:</strong><span>{{ props.report[0].n_port["8080"].n }} exposures</span>
                </div>
                <div class="port_exposures">
                    <strong>PORT 8800:</strong><span>{{ props.report[0].n_port["8800"].n }} exposures</span>
                </div>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.report_first_row {
  height: 150px;
}

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
  justify-content: center;
}

.col-5:first-child {
  padding-left: 60px;
}

.container {
  max-width: 1000px;
  background-color: #1a2032;
  margin: 0 auto;
  border-radius: 1rem;
  position: relative;
  padding-bottom: 30px;
}

.report-detail-section {
  padding: 50px 20px;

}

span {
  display: flex;
  gap: 20px;
}

.bg-red {
  background-color: #c80817;
}

.bg-green {
  background-color: green;
}

.bg-yellow {
  background-color: gold;
}

.domain_name {
  color: #00c297;
}

.text-xs {
  font-size: 12px;
}

.vulnerability_wrapper {
  display: flex;
  justify-content: center;
  height: 250px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
  position: absolute;
  left: 10px;
  top: 250px;
}

h3 {
  width: 34px;
  height: 200px;
  background-color: #000d17;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scores_row {
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0px 20px;
}

.col-2:not(.risk_col) {
  background-color: #000d17;
  height: 194px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20%;
  color: #00C297;
  font-size: 12px;
}

.span_scores {
  font-size: 60px;
}

.summary_row {
    margin-top: 50px;
    padding: 0px 20px;
    justify-content: center;
}

.summary_wrapper {
    display: flex;
    gap: 30px;
    margin-bottom: 20px;
}

.summary_wrapper:hover {
    cursor: pointer;
}

.show-more:hover {
    cursor: pointer;
}

p {
    background-color: #000D17;
    color: white;
    padding: 20px;
}

.port_exposures {
    display: flex;
    gap: 10px;
}

.wrapper_port_exposures {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>
