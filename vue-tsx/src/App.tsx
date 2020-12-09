{
  /* <template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script> */
}

import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld";

const App = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    const slots = {
      default: () => <div>slots-Child</div>,
    };

    return () => (
      <>
        <h1>{count.value}</h1>
        <button onClick={inc}>INC</button>
        <HelloWorld msg="App msg" v-slots={slots}>
          {() => <div>Child</div>}
        </HelloWorld>
      </>
    );
  },
});

export default App;
