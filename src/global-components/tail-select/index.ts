import TailSelect from "tail.select";
import _ from "lodash";

interface Props {
  options: any;
  modelValue: string;
}

const setValue = (el: HTMLElement, props: Props): void => {
  if (props.modelValue.length) {
    cash(el).val(props.modelValue);
  }
};

const init = (
  el: HTMLElement,
  props: Props,
  emit: (event: string, ...args: unknown[]) => void
): void => {
  TailSelect(el, props.options).on("change", function (item: any) {
    if (cash(el).attr("multiple") !== undefined) {
      const values = !props.modelValue.includes(item.key)
        ? [...props.modelValue, item.key]
        : _.filter(props.modelValue, (key) => key !== item.key);
      emit("update:modelValue", values);
    } else {
      emit("update:modelValue", item.key);
    }
  });
};

const reInit = (el: HTMLElement, props: Props): void => {
  TailSelect(el, props.options).reload();
};

export { setValue, init, reInit };
