import { reactive } from "vue";
import dayjs from "dayjs";
import Litepicker from "litepicker";

interface Props {
  options: any;
  modelValue: string;
}

let litePickerInstance = reactive({}) as Litepicker;

const getDateFormat = (format: string) => {
  return format !== undefined ? format : "D MMM, YYYY";
};

const setValue = (
  props: Props,
  emit: (event: string, ...args: unknown[]) => void
): void => {
  const format = getDateFormat(props.options.format);
  if (!props.modelValue.length) {
    let date = dayjs().format(format);
    date +=
      !props.options.singleMode && props.options.singleMode !== undefined
        ? " - " + dayjs().add(1, "month").format(format)
        : "";
    emit("update:modelValue", date);
  }
};

const init = (
  el: HTMLElement,
  props: Props,
  emit: (event: string, ...args: unknown[]) => void
): void => {
  const format = getDateFormat(props.options.format);
  litePickerInstance = new Litepicker({
    element: el,
    ...props.options,
    format: format,
    onSelect(startDate: string, endDate: string) {
      let date = dayjs(startDate).format(format);
      date +=
        endDate !== undefined ? " - " + dayjs(endDate).format(format) : "";
      emit("update:modelValue", date);
    },
  });
};

const reInit = (
  el: HTMLElement,
  props: Props,
  emit: (event: string, ...args: unknown[]) => void
): void => {
  litePickerInstance.destroy();
  init(el, props, emit);
};

export { setValue, init, reInit };
