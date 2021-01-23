import Dropzone from "dropzone";

type DropzoneInstance = {
  dropzone: any;
};

interface Props {
  options: any;
}

const init = (el: HTMLElement & DropzoneInstance, props: Props): void => {
  Dropzone.autoDiscover = false;
  el.dropzone = new Dropzone(el, props.options);
};

export { init };
