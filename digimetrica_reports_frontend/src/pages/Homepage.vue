<script setup>
import { computed, ref, watch } from "vue";
import { reportSonarArray } from "../../storeManager.js";
import CardReport from "../components/CardReport.vue";
import SearchBar from "../components/SearchBar.vue";
const searchInput = ref("");
// ARRAY DELLO STORE MANAGER CONTENENTE IL JSON CON TUTTI I REPORT DELLA SONDA :
const originalReportSonarArray = reportSonarArray.results;

// SISTEMA DI RICERCA PER NOME DEL SINGOLO REPORT:

function handleSerchBarChange(input) {
  searchInput.value = input.trim().toLowerCase();
  if (!searchInput.value) {
    reportSonarArray.results = originalReportSonarArray;
  } else {
    reportSonarArray.results = originalReportSonarArray.filter((report) =>
      report.domain_name.toLowerCase().includes(searchInput.value)
    );
  }
}
</script>

<template>
  <main>
    <div class="search_bar_and_sort_wrapper d-flex mw-400 m-auto">
      <SearchBar @onSearchChange="handleSerchBarChange" />
      <select name="sorting_select" id="sorting_select">
        <option value="">Sort By</option>
        <option value="Default">Default</option>
        <option value="Default">Newest</option>
      </select>
    </div>
    <section class="sorting_system">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <span>High Risk Domains ( > 80 Score)</span>
          </div>
          <div class="col-3">
            <span>Spoofable Email Domains</span>
          </div>
          <div class="col-3">
            <span>CDN Detected Domains</span>
          </div>
          <div class="col-3">
            <span>CDN With Critical Vulnerabilities</span>
          </div>
        </div>
      </div>
    </section>
    <section class="reports_section">
      <CardReport
        class="report"
        v-for="(report, index) in reportSonarArray.results"
        :key="index"
        :report="report"
      />
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
</style>
