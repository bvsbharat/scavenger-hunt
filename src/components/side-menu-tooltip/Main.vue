<template>
  <Tippy
    :tag="tag"
    :options="{
      placement: 'left',
    }"
    refKey="sideMenuTooltipRef"
  >
    <slot></slot>
  </Tippy>
</template>

<script lang="ts">
import { defineComponent, provide, ref, onMounted } from "vue";

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: "span",
    },
  },
  setup() {
    const tippyRef = ref<HTMLElement>();

    provide("bind[sideMenuTooltipRef]", (el: HTMLElement) => {
      tippyRef.value = el;
    });

    const toggleTooltip = () => {
      const el: any = tippyRef.value;
      if (cash(window).width() <= 1260) {
        el._tippy.enable();
      } else {
        el._tippy.disable();
      }
    };

    const initTooltipEvent = () => {
      window.addEventListener("resize", () => {
        toggleTooltip();
      });
    };

    onMounted(() => {
      toggleTooltip();
      initTooltipEvent();
    });
  },
});
</script>
