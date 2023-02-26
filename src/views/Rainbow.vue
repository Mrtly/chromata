<template>
  <div>
    <!-- inputs -->
    <div class="border-b-2 border-amber-700 p-5 lg:px-10 lg:py-6">
      <div class="flex items-center justify-between">
        <h1 class="pt-2 text-xl font-medium">Create a rainbow palette with saturation & lightness variance</h1>
        <div class="hidden lg:block underline text-slate-500"><router-link :to="{name: 'Home'}">home</router-link></div>
      </div>
      <div class="my-4 flex flex-wrap items-baseline gap-2">
        <div><CustomInput label="saturation" name="saturation" id="saturation" 
            type="number" :min="0" :max="100" 
            :disabled="state.loading"
            v-model="queries.s"
          /></div>
        <div><CustomInput label="lightness" name="lightness" id="lightness" 
            type="number" :min="0" :max="100"
            :disabled="state.loading"
            v-model="queries.l"
          /></div>
        <div><CustomButton :disabled="state.loading" @click="getColors">
            get new palette
          </CustomButton></div>
      </div>
      <div class="mt-2 text-slate-600 font-thin">
        Using the <code>/id</code> endpoint, results are calculated using hues from every 7th degree across the 360° color circle, and the saturation/lightness values: 
        <code v-if="!state.loading && state.currentSL" class="text-lg whitespace-nowrap">{{ state.currentSL }}</code> 
      </div>
      <div class="mt-2 text-slate-600 font-thin">
        Colors are deduplicated by color name; only one tile per color name is presented.
        <span class="font-thin">
          Unique color names: <code v-if="!state.loading && state.uniqueColors.length" class="text-lg">{{state.uniqueColors.length}}</code>
        </span>
      </div>
    </div>
    <!-- colors -->
    <div>
      <Spinner v-if="state.loading" class="mx-auto mt-10"/>
      <div v-else class="p-10 flex flex-wrap gap-4">
        <div v-for="color in state.uniqueColors" :key="color">
          <ColorSquarie 
            :colorRgb="color.rgb.value"
            :colorName="color.name.value"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, watch, onMounted } from 'vue'
import ColorSquarie from '../components/ColorSquarie.vue';
import Spinner from '../components/Spinner.vue';
import CustomInput from '../components/CustomInput.vue';
import CustomButton from '../components/CustomButton.vue';
import { deDuplicateByName } from '../utils/dedupe';

const state = reactive({ colors: [], uniqueColors: [], currentSL: '', loading: false })
const queries = reactive({ s: 100, l: 50 })

const rainbowHues = computed(() => {
  let arr = [];
  for (let i = 0; i <= 360; i++) {
    arr.push(i);
    i = i+7
  }
  return arr;
})

const getColors = async () => {
  state.loading = true;
  state.colors = []; //clear
  state.uniqueColors = []; //clear
  
  for (let hue in rainbowHues.value) {
    let hueQuery = rainbowHues.value[hue];
    let url = `https://www.thecolorapi.com/id?hsl=${hueQuery},${queries.s}%,${queries.l}%&format=json`
    await fetch(url)
      .then((response) => response.json())
      .then((data) => state.colors.push(data));
  }

  state.uniqueColors = deDuplicateByName(state.colors);

  state.currentSL = `s: ${queries.s}%, l: ${queries.l}%`

  state.loading = false;
}

onMounted(()=> getColors() )

</script>