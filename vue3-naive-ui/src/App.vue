<template>
  <n-config-provider
    :theme="currentTheme"
    :locale="currentLocale.locale"
    :date-locale="currentLocale.dateLocale"
  >
    <n-space vertical>
      <n-input />
      <n-date-picker />
      <h2>Theme</h2>
      <n-radio-group v-model:value="theme" name="radiogroup">
        <n-space>
          <n-radio value=""> Light </n-radio>
          <n-radio value="dark"> dark </n-radio>
        </n-space>
      </n-radio-group>
      <h2>Lang</h2>
      <n-radio-group v-model:value="lang" name="radiogroup">
        <n-space>
          <n-radio value=""> En </n-radio>
          <n-radio value="zhCN"> zhCN </n-radio>
        </n-space>
      </n-radio-group>
    </n-space>
  </n-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";
import {
  NConfigProvider,
  NInput,
  NDatePicker,
  NSpace,
  NRadioGroup,
  NRadio,
} from "naive-ui";
// theme
import { darkTheme } from "naive-ui";
// locale & dateLocale
import { zhCN, dateZhCN } from "naive-ui";

export default defineComponent({
  components: {
    NConfigProvider,
    NInput,
    NDatePicker,
    NSpace,
    NRadioGroup,
    NRadio,
  },
  setup() {
    const theme = ref("");
    const lang = ref("");
    watch(theme, (val) => {
      if (val === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
    return {
      theme,
      lang,
      currentTheme: computed(() => (theme.value === "dark" ? darkTheme : null)),
      currentLocale: computed(() =>
        lang.value === "zhCN"
          ? {
              locale: zhCN,
              dateLocale: dateZhCN,
            }
          : {
              locale: null,
              dateLocale: null,
            }
      ),
    };
  },
});
</script>


<style>
.dark {
  background: black;
}
</style>