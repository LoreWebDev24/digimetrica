<script setup>
import { reportSonarArray } from "../../storeManager.js";
const { report } = defineProps(["report"]);

// FUNZIONE PER GENERARE UN TIMESTAMP RANDOM FORMATTATO:

function getRandomTimeStamp() {

  const startDate = new Date('2024-01-01').getTime();
  const endDate = new Date('2024-12-31').getTime();
  const randomTimestamp = startDate + Math.random() * (endDate - startDate);
  const randomDate = new Date(randomTimestamp);

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0'); 
  const day = String(randomDate.getDate()).padStart(2, '0');

  const hours = String(randomDate.getHours()).padStart(2, '0');
  const minutes = String(randomDate.getMinutes()).padStart(2, '0');
  const seconds = String(randomDate.getSeconds()).padStart(2, '0');

  const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedTimestamp
}
</script>

<template>
  <div>
    <ul>
      <li>
        <span>Domain</span
        ><span>
          {{ report.domain_name }}
        </span>
      </li>
      <li>
        <span>Risk Score</span><span>{{ report.risk_score }}</span>
      </li>
      <li>
        <span>Critical Vulnerabilities</span
        ><span>
          {{ report.n_vulns.total.critical }}
        </span>
      </li>
      <li>
        <span>Is Email Spoofable</span
        ><span>
          {{ report.email_security.spoofable === 'Spoofing possible.' ? 'Yes' : 'No' }}
        </span>
      </li>
      <li>
        <span>Potential Data Stealers </span
        ><span>
          {{ report.n_dataleak.total.potential_stealer }}
        </span>
      </li>
      <li>
        <span>Detected WAF </span
        ><span>
          {{ report.waf.count }}
        </span>
      </li>
      <li>
        <span>Similiar Domains Found</span
        ><span>
          {{ report.n_similar_domains}}
        </span>
      </li>
      <li>
        <span>Created</span
        ><span>
          {{ report.creation_date || getRandomTimeStamp() }}
        </span>
      </li>
      <li>
        <span>Updated</span
        ><span>
          {{ report.creation_date  || getRandomTimeStamp() }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  gap: 14px;
  flex-direction: column;
  margin: 0px;
}

li {
  display: flex;
  gap: 20px;
}

li span:first-child {
    color: #00C297
}

.report {
  height: 400px;
  min-width: 300px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  padding: 50px 24px;
  border-radius: 1rem;
  background-color: #1a2032;
}
</style>
