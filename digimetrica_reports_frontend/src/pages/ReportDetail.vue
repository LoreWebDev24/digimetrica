<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { defineProps } from "vue";
import Chart from 'chart.js/auto'; 

let isClickedReport = ref(false);
let isClickedPortsExposure = ref(false);
let isClickedEmailInfos = ref(false);
const chartRef = ref(null);
const chartRefTotalVulns = ref(null);
 


const createChart = () => {
  if (!chartRef.value) return;

  const data = {
    labels: ['Vip', 'Domain Stealer', 'Potential Stealer', 'Other Stealer', 'General Leak'],
    datasets: [{
      label: 'Data Leaks Statistics',
      data: [props.report[0].n_dataleak.total.vip, props.report[0].n_dataleak.total.domain_stealer, props.report[0].n_dataleak.total.potential_stealer, props.report[0].n_dataleak.total.other_stealer, props.report[0].n_dataleak.total.general_leak],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)'
      ],
      hoverOffset: 4
    }]
  };

  const options = {};

  new Chart(chartRef.value, {
    type: 'pie',
    data: data,
    options: options
  });
};

const createChartTotalVulns = () => {
  if (!chartRefTotalVulns.value) return;

  const data = {
    labels: ['Critical Vulns', 'High Vulns', 'Medium Vulns', 'Low Vulns', 'Info'],
    datasets: [{
      label: 'Total Domain Vulnerabilities',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)'
      ],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const options = {};

  new Chart(chartRefTotalVulns.value, {
    type: 'bar',
    data: data,
    options: options
  });
};


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

function showEmailInfo () {
    isClickedEmailInfos.value = !isClickedEmailInfos.value
}

onMounted(() => {
    setTimeout(() => {
    createChart();
    createChartTotalVulns();
  }, 0);
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
          <span
            ><strong>Analyzed Assets </strong>
            {{ props.report[0].n_asset }} </span
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
            ><strong class="id_summary">ID Summary </strong> {{ props.report[0].idsummary }}</span
          >
          <span
            ><strong>Similiar Domains Detected </strong>
            {{ props.report[0].n_similar_domains }} </span
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
        <div class="col-2">
            <span class="span_scores">{{
            props.report[0].cdn["count"]
          }}</span>
          CDN DETECTED
        </div>
      </div>
      <div class="row justify-center">
        <div class="chart-container mb-50 mt-50 col-6">
            Total Data Leaks Statistics
            <canvas ref="chartRef"></canvas>
        </div>
        <div class="chart-container mb-50 mt-50 col-6 pr-30">
            Total Domain Vulnerabilities Statistics
            <canvas ref="chartRefTotalVulns"></canvas>
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
                <h2 @click="showPortsExposure">Show The Number Of Exposures For Each Network Port</h2>
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
      <div class="row show-more-row pt-0">
        <div  class="col-10">
            <div class="summary_wrapper">
                <h2 @click="showEmailInfo">Show Domain Certificates And Email Security Info</h2>
                <img @click="showEmailInfo" class="show-more" src="/show-more.png" alt="">
            </div>
            <p  v-show="isClickedEmailInfos">
               <div class="d-flex mb-20">
                <strong>ACTIVE CERTIFICATIONS:</strong><span>{{ props.report[0].n_cert_attivi }}</span>
                <strong>EXPIRED CERIFICATIONS:</strong><span>{{ props.report[0].n_cert_scaduti }}</span>
               </div>
               <div class="d-flex wrap">
                    <strong>EMAIL SPOOFABILITY:</strong><span>{{ props.report[0].email_security.spoofable }}</span>
                    <strong>DMARC POLICY VALUE:</strong><span>{{ props.report[0].email_security.dmarc_policy }}</span>
                    <strong>BLACKLIST DETECTIONS:</strong><span>{{ props.report[0].email_security.blacklist_detections }}</span>
                    <strong>TOTAL IN BLACKLIST:</strong><span>{{ props.report[0].email_security.blacklist_total_list }}</span>
               </div>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  height: 400px; 
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

canvas {
    width: 50%;
}

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
  justify-content: space-between;
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
.show-more {
    max-width: 40px;
    max-height: 40px;
    height: 40px;
    width: 40px;
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

.id_summary {
    font-size: 16px;
}
</style>
