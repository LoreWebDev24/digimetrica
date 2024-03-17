<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { router } from '../router';
import { defineProps } from "vue";
import Chart from 'chart.js/auto'; 

// VARIABILI REATTIVE PER SALVARE LO STATO DI VISUALIZZAZIONE DELLE INFO : 

let isClickedReport = ref(false);
let isClickedPortsExposure = ref(false);
let isClickedEmailInfos = ref(false);
let isClickedWafAndIpAddress = ref(false);

// VARIABILI REATTIVE PER LA CREAZIONE DEI GRAFICI : 

const chartRef = ref(null);
const chartRefTotalVulns = ref(null);

// PRENDO LE PROPS DAL ROUTER OVVERO LO SLUG ED IL SINGOLO REPORT IN QUESTO CASO L'OBJ. DEL REPORT E' CONTENUTO IN UN ARRAY : 
 
const props = defineProps(["slug", "report"]);

// CREO I CANVAS CONTENENTI I GRAFICI CON I DATI DINAMICI DEL SINGOLO REPORT :

const createChart = () => {
  if (!chartRef.value) return;

  const data = {
    labels: ['Vip', 'Domain Stealer', 'Potential Stealer', 'Other Stealer', 'General Leak'],
    datasets: [{
      // label: 'Data Leaks Statistics',
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
      data: [props.report[0].n_vulns.total.critical, props.report[0].n_vulns.total.high, props.report[0].n_vulns.total.medium, props.report[0].n_vulns.total.low, props.report[0].n_vulns.total.info],
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

// FUNZIONE PER TORNARE IN CIMA ALLA PAGINA 

function scrollTop() {
  window.scrollTo(0, 0);
} 

// FUNZIONI PER ATTIVARE O DISATTIVARE I DROPDOWN: 

function showPortsExposure() {
    isClickedPortsExposure.value = !isClickedPortsExposure.value;
}

function showSummary () {
    isClickedReport.value = !isClickedReport.value;
}

function showWafAndIpAddress () {
    isClickedWafAndIpAddress.value = ! isClickedWafAndIpAddress.value;
}

function showEmailInfo () {
    isClickedEmailInfos.value = !isClickedEmailInfos.value;
}

// ON MOUNTED: 

onMounted(() => {
    createChart();
    createChartTotalVulns();
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

// FUNZIONE PER FORMATTARE IL TESTO DEI  SUMMARY : 

function formattText(text) {
  text = text.replace(/\*/g, '');

  if(text.length < 400) {
    return text + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie lobortis ante, sed elementum leo condimentum sit amet. Nulla euismod hendrerit turpis id varius. In hac habitasse platea dictumst. Sed tincidunt leo vitae dapibus dignissim. Donec in dolor eros. Vestibulum vehicula vestibulum est sed aliquet. Aenean vitae rhoncus urna. Quisque magna neque, iaculis ut est ac, laoreet placerat purus. Morbi vel justo auctor, consequat urna ut, euismod diam. Quisque id urna a sem pellentesque egestas vitae id tortor. Maecenas tincidunt magna ut pulvinar faucibus. Duis fringilla tellus et suscipit ornare. Placerat purus. Morbi vel justo auctor, consequat urna ut, euismod diam. Quisque id urna a sem pellentesque egestas vitae id tortor. Maecenas tincidunt magna ut pulvinar faucibus. Duis fringilla tellus et suscipit.'
  }
  
  return text;
}

// FUNZIONE PER ESSER REINDIRIZZATI ALLA HOME 

function backToHome () {
  router.push('/');
}

</script>

<template class="page">
  <div @click="backToHome" class="back-home">
    <img class="back-page-img" src="/show-more.png" alt="back-page-img">
  </div>
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
            ><strong>Domain Name </strong><span>{{ props.report[0].domain_name }}</span>
            </span
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
      <div class="row scores_row mb-30 wrap">
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
                <h2 @click="showSummary">Show The Report Detailed Summary</h2>
                <img @click="showSummary" :class="isClickedReport ? 'turn' : ''" class="show-more" src="/show-more.png" alt="">
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
                <img @click="showPortsExposure" :class="isClickedPortsExposure ? 'turn' : ''" class="show-more" src="/show-more.png" alt="">
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
      <div class="row pt-0 show-more-row">
        <div  class="col-10">
            <div class="summary_wrapper">
                <h2 @click="showWafAndIpAddress">Show  IPv4 And IPv6 Detected And WAF Info</h2>
                <img @click="showWafAndIpAddress" :class="isClickedWafAndIpAddress ? 'turn' : ''" class="show-more" src="/show-more.png" alt="">
            </div>
            <div class="waf_and_ip_infos" v-show="isClickedWafAndIpAddress">
                <div>
                    <div class="flex"><strong>WEB APPLICATION FIREWALL DETECTED:</strong><span>{{ props.report[0].waf.count }}</span></div>
                </div>
                <div v-if="report[0].waf.assets.length > 0" class="assets_wrapper">
                    <h4 class="mt-20">ASSETS:</h4>
                    <div v-for="asset in report[0].waf.assets">
                    {{ asset }}
                    </div>
                </div>
                <div class="flex justify-center mt-30 wrap">
                    <div class="flex align-center"><strong>IPV4 ADDRESS DETECTED:</strong><span>{{ props.report[0].unique_ipv4 }}</span></div>
                    <div class="flex align-center"><strong>IPV6 ADDRESS DETECTED:</strong><span>{{ props.report[0].unique_ipv6 }}</span></div>
                </div>
            </div>
        </div>
      </div>
      <div class="row show-more-row pt-0">
        <div  class="col-10">
            <div class="summary_wrapper">
                <h2 @click="showEmailInfo">Show Domain Certificates And Email Security Info</h2>
                <img @click="showEmailInfo" :class="isClickedEmailInfos ? 'turn' : ''" class="show-more" src="/show-more.png" alt="">
            </div>
            <p  v-show="isClickedEmailInfos">
               <div class="d-flex mb-20 wrap">
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
/* MEDIA QUERIES :  */
@media (max-width: 950px) {
    div.row.report_first_row, strong.id_summary {
        font-size: 12px;
    }
}

@media (max-width: 932px) {
    .row:not(div.row.report_first_row) {
        flex-wrap: wrap;
    }
    .col-6 {
      max-height: 300px;
    }
}

@media (max-width: 915px) {
    .col-2{
        flex-basis: calc((100% / 12) * 3);
    }

    strong.id_summary {
        display: none;
    }
}

@media (max-width: 900px) {
    h2 {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.summary_wrapper {
        justify-content: left;
    }
    div.summary_wrapper img {
        width: 20px;
        height: 20px;
    }
}


@media (max-width: 768px) {
    .col-5:first-child {
        display: none;
    }
    div.container {
      padding-top: 30px;
    }
    span.text-xs{
      display: none;
    }

    div.row.report_first_row {
        justify-content: center;
    }
    strong.risk_level_wrapper strong {
        border-radius: 4px;
    }
}

@media (max-width: 643px) {
    .col-2{
        flex-basis: calc((100% / 12) * 12);
    }
    div h3 {
        display: none;
    }
    canvas {
      max-width: 350px;
    }
    .domain_name span:last-child {
      font-size: 12px;
      margin-left: 10px;
    }
}

@media (max-width: 450px) {
    div.col-6:last-child {
      display: none;
    }
}

@media (max-width: 412px) {
    body {
      overflow-x: auto;
      max-width: 412px;
    }
}

/* END OF THE MEDIA QUERIES :  */

/* STYLE SCOPED OF THE SINGLE REPORT PAGE  */

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
  border-top-right-radius: 1rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
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
  align-items: center;
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
  border-radius: 4px;
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
    align-items: center;
}

.summary_wrapper:hover {
    cursor: pointer;
}
.summary_wrapper img {
    transition: 0.3s linear ;
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

p, .waf_and_ip_infos {
    background-color: #000D17;
    color: white;
    padding: 20px;
    border-radius: 4px;
}

.port_exposures {
    display: flex;
    width: 200px;
    gap: 10px;
}

.wrapper_port_exposures {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    font-size: 15px;
    justify-content: center;
}

.id_summary {
    font-size: 16px;
}


</style>
