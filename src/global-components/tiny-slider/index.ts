import { tns } from "tiny-slider/src/tiny-slider";

type TinySlider = {
  tns: any;
};

interface Props {
  options: any;
}

const init = (el: HTMLElement & TinySlider, props: Props): void => {
  el.tns = tns({
    container: el,
    slideBy: "page",
    mouseDrag: true,
    autoplay: true,
    controls: false,
    nav: false,
    speed: 500,
    ...props.options,
  });
};

const reInit = (el: HTMLElement & TinySlider): void => {
  el.tns.destroy();
  el.tns.rebuild();
};

export { init, reInit };
