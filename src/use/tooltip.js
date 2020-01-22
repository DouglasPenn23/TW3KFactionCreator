import { reactive, toRefs } from "@vue/composition-api";

const state = reactive({
  tooltip: null
});

function createTooltip(type, ref) {
  return {
    mouseenter: () => state.tooltip = [type, ref],
    mousedown: () => console.log(ref.key),     
    mouseleave: () => state.tooltip = null
  };
}

export function useTooltip() {
  return {
    ...toRefs(state),
    createTooltip
  };
}
