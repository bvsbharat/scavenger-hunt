<template>
  <component
    ref="editorRef"
    v-editor="{ props, emit, cacheData }"
    :is="tagName"
    class="select"
  ></component>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import { init } from "./index";

export default defineComponent({
  directives: {
    editor: {
      mounted(el, { value }) {
        init(el, value);
      },
    },
  },
  props: {
    editor: {
      type: Function,
      default: null,
    },
    modelValue: {
      type: String,
      default: "",
    },
    config: {
      type: Object,
      default: () => ({}),
    },
    tagName: {
      type: String,
      default: "div",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    refKey: {
      type: String,
      default: null,
    },
  },
  setup(props, context) {
    const editorRef = ref<HTMLElement>();
    const cacheData = ref("");

    const bindInstance = () => {
      if (props.refKey) {
        const bind = inject<(el: HTMLElement | undefined) => void>(
          `bind[${props.refKey}]`
        );
        if (bind) {
          bind(editorRef.value);
        }
      }
    };

    onMounted(() => {
      bindInstance();
    });

    return {
      props,
      ...context,
      cacheData,
      editorRef,
    };
  },
});
</script>
