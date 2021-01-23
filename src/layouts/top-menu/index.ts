import { ref } from "vue";

// Toggle search dropdown
const searchDropdown = ref(false);
const showSearchDropdown = (): void => {
  searchDropdown.value = true;
};
const hideSearchDropdown = (): void => {
  searchDropdown.value = false;
};

export { searchDropdown, showSearchDropdown, hideSearchDropdown };
