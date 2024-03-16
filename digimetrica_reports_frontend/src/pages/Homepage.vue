<script setup>
import { computed, ref, watch } from "vue";
import { reportSonarArray } from "../../storeManager.js";
import CardReport from "../components/CardReport.vue";
import SearchBar from "../components/SearchBar.vue";
let searchInput = ref("");
// VARIABILI REATTIVE PER IL FILTRAGGIO DEI REPORTS NEL DOM 
let highRiskReports = ref(false);
let spoofableEmails = ref(false);
let cdnDetectedReports = ref(false);
let domainsWithCritProblemsReports = ref(false);

// ARRAY DELLO STORE MANAGER CONTENENTE IL JSON CON TUTTI I REPORT DELLA SONDA :
const originalReportSonarArray = reportSonarArray.results;

// SISTEMA DI RICERCA PER NOME DEL SINGOLO REPORT:

function handleSearchBarChange(input) {
  highRiskReports.value = false;
  spoofableEmails.value = false;
  cdnDetectedReports.value = false;
  domainsWithCritProblemsReports.value = false;
  searchInput.value = input.trim().toLowerCase();
  console.log(searchInput.value);
  if (searchInput.value) {
    reportSonarArray.results = originalReportSonarArray.filter((report) =>
      report.domain_name.toLowerCase().includes(searchInput.value)
    );
  }
  else {
    reportSonarArray.results = originalReportSonarArray
  }

}


// SISTEMA DI RICERCA PER CATEGORIA E LOGICA DI RESET QUANDO UNA CATEGORIA E' GIA' SELEZIONATA:

function showHighRiskReports() {
  searchInput.value = '';
  spoofableEmails.value = false;
  cdnDetectedReports.value = false;
  domainsWithCritProblemsReports.value = false;
  highRiskReports.value = !highRiskReports.value;
  console.log(highRiskReports.value);
  if (highRiskReports.value) {
    reportSonarArray.results = originalReportSonarArray.filter(
      (report) => report.risk_score > 79
    );
  }else {
    reportSonarArray.results = originalReportSonarArray;
  }

}

function showSpoofableEmailsReports() {
  searchInput.value = '';
  highRiskReports.value = false;
  cdnDetectedReports.value = false;
  domainsWithCritProblemsReports.value = false;
  spoofableEmails.value = !spoofableEmails.value;
  console.log(spoofableEmails.value);
  if (spoofableEmails.value) {
    reportSonarArray.results = originalReportSonarArray.filter(
      (report) => report.email_security.spoofable === 'Spoofing possible.'
    );
  } else {
    reportSonarArray.results = originalReportSonarArray;
  }
}

function showCdnDetectedReports() {
  searchInput.value = '';
  highRiskReports.value = false;
  spoofableEmails.value = false;
  domainsWithCritProblemsReports.value = false;
  cdnDetectedReports.value = !cdnDetectedReports.value
  console.log(cdnDetectedReports.value);
  if (cdnDetectedReports.value) {
    reportSonarArray.results = originalReportSonarArray.filter(
      (report) => report.cdn.count > 0
    );
  } else {
    reportSonarArray.results = originalReportSonarArray;
  }
}

function showDomainsWithCritProblems() {
  searchInput.value = '';
  highRiskReports.value = false;
  spoofableEmails.value = false;
  cdnDetectedReports.value = false
  domainsWithCritProblemsReports.value = !domainsWithCritProblemsReports.value
  console.log(domainsWithCritProblemsReports.value);
  if (domainsWithCritProblemsReports) {
    reportSonarArray.results = originalReportSonarArray.filter(
      (report) => report.n_vulns.total.critical > 0
    );
  } else {
    reportSonarArray.results = originalReportSonarArray;
  }
}


</script>

<template>
  <main>
    <div class="search_bar_and_sort_wrapper d-flex mw-400 m-auto">
      <SearchBar @on-search-change="handleSearchBarChange" />
      <select name="sorting_select" id="sorting_select">
        <option value="">Sort By</option>
        <option value="Default">Default</option>
        <option value="Default">Newest</option>
      </select>
    </div>
    <section class="sorting_system">
      <div class="container">
        <div class="row">
          <div @click="showHighRiskReports" class="col-3" :class="{ active: highRiskReports }">
            <span>High Risk Domains ( > 80 Score)</span>
          </div>
          <div @click="showSpoofableEmailsReports" class="col-3" :class="{ active: spoofableEmails }">
            <span>Spoofable Email Domains</span>
          </div>
          <div @click="showCdnDetectedReports" class="col-3" :class="{ active: cdnDetectedReports }">
            <span>CDN Detected Domains</span>
          </div>
          <div  @click="showDomainsWithCritProblems" :class="{ active: domainsWithCritProblemsReports }" class="col-3">
            <span>Domains With Critical Problems</span>
          </div>
        </div>
      </div>
    </section>
    <h3 v-if="reportSonarArray.results.length > 0" class="usability_instruction_title">
      Click on the single report to get the Detail Page
    </h3>
    <section class="reports_section">
      <CardReport
        class="report"
        v-for="(report, index) in reportSonarArray.results"
        :key="index"
        :report="report"
      />
      <div v-if="reportSonarArray.results.length === 0" class="alert">
        No Report Found 
      </div>
    </section>
  </main>
</template>

<style scoped>
/* MEDIA QUERIES :  */

@media (max-width: 1100px) {
  .row {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 996px) {
  .col-3 {
    flex-basis: 400px;
  }
}

@media (max-width: 855px) {
  .col-3 {
    flex-basis: 300px;
  }
}

@media (max-width: 536px) {
  .col-3 {
    flex-basis: 250px;
  }
}

@media (max-width: 432px) {
  .search_bar_and_sort_wrapper {
    flex-direction: column;
  }
}

/* STILE SCOPED DELL' HOMEPAGE  */

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.row {
  gap: 40px;
}

.reports_section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.usability_instruction_title {
  text-align: center;
  padding-top: 40px;
}

.sorting_system {
  padding-top: 40px;
}

.col-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00c297;
  border-radius: 1rem;
  padding: 10px 0px;
}

.col-3:hover {
  cursor: pointer;
  background-color: #00fe00;
  color: black;
  font-weight: 700;
}

.active {
  background-color: #00fe00;
  color: black;
  font-weight: 700;
}

.alert {
  color: red;
  font-size: 30px;
  font-weight: bold;
}
</style>
