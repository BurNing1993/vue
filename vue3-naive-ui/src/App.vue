<template>
  <n-config-provider
    :theme="currentTheme"
    :locale="currentLocale.locale"
    :date-locale="currentLocale.dateLocale"
  >
    <NGlobalStyle />
    <n-space vertical>
      <n-input />
      <n-date-picker />
      <n-button type="primary">Primary</n-button>
      <h2>Theme</h2>
      <n-radio-group
        v-model:value="theme"
        name="radiogroup"
        :onUpdateValue="onThemeUpdate"
      >
        <n-space>
          <n-radio value="light"> Light </n-radio>
          <n-radio value="dark"> Dark </n-radio>
        </n-space>
      </n-radio-group>
      <h2>Lang</h2>
      <n-radio-group
        v-model:value="lang"
        name="radiogroup"
        :onUpdateValue="onLangUpdate"
      >
        <n-space>
          <n-radio value="en"> English </n-radio>
          <n-radio value="zhCN"> 中文 </n-radio>
        </n-space>
      </n-radio-group>
    </n-space>
  </n-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import {
  NConfigProvider,
  NInput,
  NDatePicker,
  NSpace,
  NRadioGroup,
  NRadio,
  NGlobalStyle,
  NButton,
} from "naive-ui";
// theme
import { darkTheme, useOsTheme } from "naive-ui";
// locale & dateLocale
import { zhCN, dateZhCN } from "naive-ui";

const LOCAL_THEME = "local_theme";
const LOCAL_LANG = "local_lang";

type Theme = "light" | "dark";
type Lang = "en" | "zhCN";

export default defineComponent({
  components: {
    NConfigProvider,
    NInput,
    NDatePicker,
    NSpace,
    NRadioGroup,
    NRadio,
    NGlobalStyle,
    NButton,
  },
  setup() {
    const osThemeRef = useOsTheme();
    const theme = ref<Theme>("light");
    const lang = ref<Lang>("en");
    const localTheme = (localStorage[LOCAL_THEME] || osThemeRef.value) as Theme;
    if (localTheme === "dark") {
      theme.value = "dark";
      // document.documentElement.classList.add("dark");
    }
    const localLang = localStorage[LOCAL_LANG] || navigator.language;
    if (/zh/.test(localLang)) {
      lang.value = "zhCN";
      // document.documentElement.lang = "zh-CN";
    }

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
      onThemeUpdate: (val: Theme) => {
        if (val === "dark") {
          localStorage[LOCAL_THEME] = "dark";
          // document.documentElement.classList.add("dark");
        } else {
          localStorage[LOCAL_THEME] = "light";
          // document.documentElement.classList.remove("dark");
        }
      },
      onLangUpdate: (val: Lang) => {
        if (val === "zhCN") {
          localStorage[LOCAL_LANG] = "zhCN";
          // document.documentElement.lang = "zh-CN";
        } else {
          localStorage[LOCAL_LANG] = "en";
          // document.documentElement.lang = "en";
        }
      },
    };
  },
});
</script>

<style>
</style>