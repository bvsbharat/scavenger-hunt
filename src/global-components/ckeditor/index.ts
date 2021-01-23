import { watch } from "vue";

type CKEditor = {
  CKEditor: any;
};

interface Props {
  props: {
    editor: {
      create: (el: HTMLElement, editorConfig: Record<string, unknown>) => any;
    };
    modelValue: string;
    config: Record<string, unknown>;
    tagName: string;
    disabled: boolean;
  };
  emit: (event: string, ...args: unknown[]) => void;
  cacheData: string;
}

const init = async (
  el: HTMLElement & CKEditor,
  { props, emit, cacheData }: Props
): Promise<void> => {
  // Initial data
  cacheData = props.modelValue;
  props.config.initialData = props.modelValue;

  // Init CKEditor
  const editor = await props.editor.create(el, props.config);

  // Attach CKEditor instance
  el.CKEditor = editor;

  // Set initial disabled state
  editor.isReadOnly = props.disabled;

  // Set on change event
  editor.model.document.on("change:data", () => {
    const data = editor.getData();
    cacheData = data;
    emit("update:modelValue", data);
  });

  // Set on focus event
  editor.editing.view.document.on("focus", (evt: any) => {
    emit("focus", evt, editor);
  });

  // Set on blur event
  editor.editing.view.document.on("blur", (evt: any) => {
    emit("blur", evt, editor);
  });

  // Set on ready event
  emit("ready", editor);

  // Watch model change
  watch(props, () => {
    if (cacheData !== props.modelValue) {
      el.CKEditor.setData(props.modelValue);
    }
  });
};

export { init };
