import { createPopper } from "@popperjs/core";

(function (cash) {
  "use strict";

  // Hide dropdown
  function hide() {
    cash(".dropdown-box").each(async function (this: HTMLElement) {
      if (
        cash(this).attr("id") !== undefined &&
        cash(`[data-dropdown-replacer="${cash(this).attr("id")}"]`).length &&
        cash(this).data("dropdown-programmatically") === undefined
      ) {
        const randId = cash(this).attr("id");

        // Animate dropdown
        cash(this).removeClass("show");

        await setTimeout(() => {
          // Move modal element to body
          cash(`[data-dropdown-replacer="${randId}"]`).replaceWith(this);

          // Reset attribute
          cash(this).removeAttr("style");
          cash(this).removeAttr("data-popper-placement");
        }, 200);
      } else if (
        cash(this).attr("id") !== undefined &&
        !cash(`[data-dropdown-replacer="${cash(this).attr("id")}"]`).length &&
        cash(this).hasClass("show") &&
        cash(this).data("dropdown-programmatically") === undefined
      ) {
        cash(this).remove();
      } else if (cash(this).data("dropdown-programmatically") === "initiate") {
        // Set programmatically attribute state
        cash(this).attr("data-dropdown-programmatically", "showed");
      } else if (cash(this).data("dropdown-programmatically") === "showed") {
        // Remove programmatically attribute state
        cash(this).removeAttr("data-dropdown-programmatically");
      }
    });
  }

  // Show dropdown
  function show(dropdown: HTMLElement) {
    const dropdownBox = cash(dropdown).find(".dropdown-box").first();
    const dropdownToggle = cash(dropdown).find(".dropdown-toggle");
    const placement = cash(dropdown).data("placement")
      ? cash(dropdown).data("placement")
      : "bottom-end";
    const randId = `_${Math.random().toString(36).substr(2, 9)}`;

    // Hide dropdown
    hide();

    if (cash(dropdownBox).length) {
      // Set dropdown width
      if (cash(dropdown).css("position") === "static") {
        cash(dropdown).css("position", "relative");
      }
      cash(dropdownBox).css("width", cash(dropdownBox).css("width"));

      // Move modal element to body
      cash(`<div data-dropdown-replacer="${randId}"></div>`).insertAfter(
        dropdownBox
      );
      cash(dropdownBox).attr("id", randId).appendTo("body");

      // Init popper
      createPopper(dropdownToggle[0], dropdownBox[0], {
        placement: placement,
      });

      // Show dropdown
      cash(dropdownBox).addClass("show");
    }
  }

  // Toggle dropdown programmatically
  function toggleProgrammatically(dropdown: HTMLElement) {
    const dropdownBox = cash(dropdown).find(".dropdown-box").first();
    if (cash(dropdownBox).length) {
      showProgrammatically(dropdown);
    } else {
      hide();
    }
  }

  // Show dropdown programmatically
  function showProgrammatically(dropdown: HTMLElement) {
    if (cash(dropdown).find(".dropdown-box").length) {
      cash(dropdown)
        .find(".dropdown-box")
        .attr("data-dropdown-programmatically", "initiate");
    } else {
      const randId = cash("[data-dropdown-replacer]").data("dropdown-replacer");
      cash(`#${randId}`).attr("data-dropdown-programmatically", "initiate");
    }

    show(dropdown);
  }

  // Dropdown event listener
  cash("body").on("click", function (event: { target: HTMLElement }) {
    const dropdown = cash(event.target).closest(".dropdown");
    const dropdownToggle = cash(dropdown).find(".dropdown-toggle");
    const dropdownBox = cash(dropdown).find(".dropdown-box").first();
    const activeDropdownBox = cash(event.target)
      .closest(".dropdown-box")
      .first();
    const dismissButton = cash(event.target).data("dismiss");

    if (
      (!cash(dropdown).length && !cash(activeDropdownBox).length) ||
      (cash(dropdownToggle).length && !cash(dropdownBox).length) ||
      dismissButton === "dropdown"
    ) {
      // Hide dropdown
      hide();
    } else if (!cash(activeDropdownBox).length) {
      // Show dropdown
      show(dropdown);
    }
  });

  cash.fn.dropdown = function (event: string) {
    if (event === "show") {
      showProgrammatically(this);
    } else if (event === "hide") {
      hide();
    } else if (event === "toggle") {
      toggleProgrammatically(this);
    }
  };
})(cash);
