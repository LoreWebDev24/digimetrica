<script setup></script>

<template>
  <footer>
    <div class="page_footer">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <h4>CONTATTI</h4>
            <ul>
              <li><strong>Digimetrica srl</strong></li>
              <li>Piazza Ettore Troilo, 18</li>
              <li>65127 Pescara</li>
              <li>T:+39 08592103</li>
            </ul>
          </div>
          <div class="col-4">
            <img src="/digimetrica_logo.png" alt="logo_digimetrica" />
          </div>
          <div class="col-4">
            <a href="https://www.linkedin.com/company/digimetrica/"
              ><h4>LINKEDIN</h4></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="copyright_footer">
      <span class="copy_span"
        >Copyright 2001 - 2024 Digimetrica | All Rights Reserved | P.IVA
        IT01610670687</span
      >
    </div>
  </footer>
</template>

<style scoped>
/* MEDIA QUERIES :  */

@media (max-width: 788px) {
  .row {
    flex-direction: column;
    gap: 50px;
  }
  span.copy_span {
    display: none;
  }
}

/* STILE SCOPED DEL FOOTER  */

.page_footer {
  background-color: #1a2032;
  height: 308px;
  padding: 30px 20px;
}

.copyright_footer {
  height: 50px;
  background-color: #1a2032;
  font-size: 12px;
  display: flex;
  justify-content: center;
}

.copy_span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
}

.row {
  height: 100%;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  text-align: center;
}

.col-4 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

a {
  text-decoration: none;
  color: currentColor;
}
</style>
