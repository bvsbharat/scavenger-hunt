<template>
  <div ref="mapRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { MapConfig, initializeMap } from "./index";

export default defineComponent({
  props: {
    init: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const mapRef = ref<HTMLElement>();
    onMounted(() => {
      props.init((mapConfig: MapConfig) => {
        return initializeMap(mapRef.value as HTMLElement, mapConfig);
      });
    });

    return {
      mapRef,
    };
  },
});
</script>
