<template>
  <div ref="fileUploadRef" v-file-upload="{ props, emit }" class="dropzone">
    <div class="dz-message">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onMounted } from "vue";
import { init } from "./index";

export default defineComponent({
  directives: {
    fileUpload: {
      mounted(el, { value }) {
        init(el, value.props);
      },
    },
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    refKey: {
      type: String,
      default: null,
    },
  },
  setup(props, context) {
    const fileUploadRef = ref<HTMLElement>();
    const bindInstance = () => {
      if (props.refKey) {
        const bind = inject<(el: HTMLElement | undefined) => void>(
          `bind[${props.refKey}]`
        );
        if (bind) {
          bind(fileUploadRef.value);
        }
      }
    };

    onMounted(() => {
      bindInstance();
    });

    return {
      props,
      ...context,
      fileUploadRef,
    };
  },
});
</script>
