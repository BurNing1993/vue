<template>
<!-- Simple header with scrollable tabs. -->
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Title</span>
    </div>
    <!-- Tabs -->
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a href="#scroll-tab-1" class="mdl-layout__tab is-active">Tab 1</a>
      <a href="#scroll-tab-2" class="mdl-layout__tab">Tab 2</a>
      <a href="#scroll-tab-3" class="mdl-layout__tab">Tab 3</a>
      <a href="#scroll-tab-4" class="mdl-layout__tab">Tab 4</a>
      <a href="#scroll-tab-5" class="mdl-layout__tab">Tab 5</a>
      <a href="#scroll-tab-6" class="mdl-layout__tab">Tab 6</a>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
  </div>
  <main class="mdl-layout__content">
    <section class="mdl-layout__tab-panel is-active" id="scroll-tab-1">
      <div class="page-content">
        <ul class="demo-list-control mdl-list">
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
      <i class="material-icons  mdl-list__item-avatar">person</i>
      Bryan Cranston
    </span>
    <span class="mdl-list__item-secondary-action">
      <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
        <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />
      </label>
    </span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
      <i class="material-icons  mdl-list__item-avatar">person</i>
      Aaron Paul
    </span>
    <span class="mdl-list__item-secondary-action">
      <label class="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" for="list-option-1">
        <input type="radio" id="list-option-1" class="mdl-radio__button" name="options" value="1" checked />
      </label>
    </span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
      <i class="material-icons  mdl-list__item-avatar">person</i>
      Bob Odenkirk
    </span>
    <span class="mdl-list__item-secondary-action">
      <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
        <input type="checkbox" id="list-switch-1" class="mdl-switch__input" checked />
      </label>
    </span>
  </li>
</ul>
      </div>
    </section>
    <section class="mdl-layout__tab-panel" id="scroll-tab-2">
      <div class="page-content">
        <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
  <thead>
    <tr>
      <th class="mdl-data-table__cell--non-numeric">Material</th>
      <th>Quantity</th>
      <th>Unit price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
      <td>25</td>
      <td>$2.90</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
      <td>50</td>
      <td>$1.25</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
      <td>10</td>
      <td>$2.35</td>
    </tr>
  </tbody>
</table>
      </div>
    </section>
    <section class="mdl-layout__tab-panel" id="scroll-tab-3">
      <div class="page-content"><!-- Your content goes here --></div>
    </section>
    <section class="mdl-layout__tab-panel" id="scroll-tab-4">
      <div class="page-content"><!-- Your content goes here --></div>
    </section>
    <section class="mdl-layout__tab-panel" id="scroll-tab-5">
      <div class="page-content"><!-- Your content goes here --></div>
    </section>
    <section class="mdl-layout__tab-panel" id="scroll-tab-6">
      <div class="page-content"><!-- Your content goes here --></div>
    </section>
  </main>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-list-control {
  width: 300px;
}

.demo-list-radio {
  display: inline;
}
</style>
