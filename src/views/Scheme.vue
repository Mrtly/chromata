<template>
  <div>
    <!-- inputs -->
    <div class="border-b-2 border-amber-700 p-5 lg:px-10 lg:py-6">
      <div class="flex items-center justify-between">
        <h1 class="pt-2 text-xl font-medium">Create a palette based on color scheme per HSL values</h1>
        <div class="hidden lg:block underline text-slate-500"><router-link :to="{name: 'Home'}">home</router-link></div>
      </div>
      <div class="my-4 flex flex-wrap items-baseline gap-2">
        <div><CustomInput label="hue" name="hue" id="hue" 
          type="number" :min="0" :max="360"
          :disabled="state.loading"
          v-model="queries.h"
        /></div>
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
        Using the <code>/scheme</code> endpoint, results are calculated for the HSL value. Showing results for: 
        <code v-if="!state.loading && state.currentHsl" class="text-lg whitespace-nowrap">{{ state.currentHsl }}</code> 
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
      <div v-else class="p-10">
        <div class="flex flex-wrap gap-4">
        <ColorSquarie v-for="color in state.uniqueColors" 
          :key="color" 
          :colorName="color.name.value"
          :colorRgb="color.rgb.value"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from 'vue'
import ColorSquarie from '../components/ColorSquarie.vue';
import Spinner from '../components/Spinner.vue';
import CustomInput from '../components/CustomInput.vue';
import CustomButton from '../components/CustomButton.vue';
import { deDuplicateByName } from '../utils/dedupe';

const state = reactive({ allColors: [], uniqueColors: [], currentHsl: '', loading: false })
const queries = reactive({ h: 20, s: 100, l: 50, size: 500 })

const base = "https://www.thecolorapi.com/scheme?"
const format = "format=json"
const count = computed(() => `count=${queries.size}`)

const url = computed(() => {
  return `${base}hsl=${queries.h},${queries.s}%,${queries.l}%&${format}&${count.value}`
})

const getColors = async () => {
  state.loading = true;
  state.colors = []; //clear
  state.uniqueColors = []; //clear
  state.currentHsl = '' //clear
  
  await fetch(url.value)
  .then((response) => response.json())
  .then((data) => state.allColors = data.colors);
  
  state.uniqueColors = deDuplicateByName(state.allColors)

  state.currentHsl = `hsl(${queries.h}, ${queries.s}%, ${queries.l}%)`

  state.loading = false;
}

onMounted(()=> getColors() )

</script>