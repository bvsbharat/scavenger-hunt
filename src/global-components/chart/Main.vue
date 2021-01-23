<template>
  <canvas ref="chartRef"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { helper as $h } from "@/utils/helper";
import Chart from "chart.js";

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
      default: "line",
      validator: (value: string) => {
        return ["line", "pie", "doughnut", "bar"].indexOf(value) !== -1;
      },
    },
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const chartRef = ref<HTMLCanvasElement>();
    const init = () => {
      const canvas = chartRef.value?.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      const chart = new Chart(canvas, {
        type: props.type,
        data: $h.toRaw(props.data),
        options: props.options,
      });

      watch(props, () => {
        chart.data = $h.toRaw(props.data);
        chart.options = props.options;
        chart.update();
      });
    };

    const setSize = () => {
      if (props.width) {
        cash(chartRef.value).attr({
          width: props.width,
        });
      }

      if (props.height) {
        cash(chartRef.value).attr({
          height: props.height,
        });
      }
    };

    onMounted(() => {
      setSize();
      init();
    });

    return {
      chartRef,
    };
  },
});
</script>
