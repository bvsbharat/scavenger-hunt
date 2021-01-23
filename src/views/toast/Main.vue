<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Toast</h2>
  </div>
  <div class="intro-y grid grid-cols-12 gap-6 mt-5">
    <!-- BEGIN: Basic Toast -->
    <div class="col-span-12 lg:col-span-6">
      <div class="intro-y box">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">Basic Textual Toast</h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#basic-textual-toast"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="basic-textual-toast" class="p-5">
          <div class="preview">
            <div class="text-center text-sm-left">
              <button
                class="button inline-block bg-theme-1 text-white mr-1"
                @click="textualNonStickyToast"
              >
                Non Sticky Toast
              </button>
              <button
                class="button inline-block bg-theme-1 text-white"
                @click="textualStickyToast"
              >
                Sticky Toast
              </button>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-basic-textual-toast"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-basic-textual-toast" class="source-preview">
                <code
                  class="javascript text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    // Non sticky
                    Toastify({
                      text:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequuntur doloremque eveniet eius eaque dicta repudiandae illo ullam. Minima itaque sint magnam dolorum asperiores repudiandae dignissimos expedita, voluptatum vitae velit.",
                      duration: 3000,
                      newWindow: true,
                      close: true,
                      gravity: "bottom",
                      position: "left",
                      backgroundColor: "#0e2c88",
                      stopOnFocus: true
                    }).showToast();

                    // Sticky
                    Toastify({
                      text:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequuntur doloremque eveniet eius eaque dicta repudiandae illo ullam. Minima itaque sint magnam dolorum asperiores repudiandae dignissimos expedita, voluptatum vitae velit.",
                      duration: -1,
                      newWindow: true,
                      close: true,
                      gravity: "bottom",
                      position: "left",
                      backgroundColor: "#0e2c88",
                      stopOnFocus: true
                    }).showToast();
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Basic Toast -->
    <!-- BEGIN: Basic Toast -->
    <div class="col-span-12 lg:col-span-6">
      <div class="intro-y box">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">
            Toast using HTML as a text
          </h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#html-textual-toast"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="html-textual-toast" class="p-5">
          <div class="preview">
            <div class="text-center text-sm-left">
              <button
                class="button inline-block bg-theme-1 text-white mr-1"
                @click="HTMLNonStickyToast"
              >
                Non Sticky Toast
              </button>
              <button
                class="button inline-block bg-theme-1 text-white"
                @click="HTMLStickyToast"
              >
                Sticky Toast
              </button>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-html-textual-toast"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-html-textual-toast" class="source-preview">
                <code
                  class="javascript text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    // Non sticky
                    Toastify({
                      node: cash(
                        '<span>Let\'s test some HTML stuff... <a class="font-medium" href="#">Github</a></span>'
                      )[0],
                      duration: 3000,
                      newWindow: true,
                      close: true,
                      gravity: "bottom",
                      position: "left",
                      backgroundColor: "#0e2c88",
                      stopOnFocus: true
                    }).showToast();

                    // Sticky
                    Toastify({
                      node: cash(
                        '<span><strong>Remember!</strong> You can <span class="font-medium">always</span> introduce your own × HTML and <span class="font-medium">CSS</span> in the toast.</span>'
                      )[0],
                      duration: -1,
                      newWindow: true,
                      close: true,
                      gravity: "bottom",
                      position: "left",
                      backgroundColor: "#0e2c88",
                      stopOnFocus: true
                    }).showToast();
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Basic Toast -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toastify from "toastify-js";

export default defineComponent({
  setup() {
    const textualNonStickyToast = () => {
      Toastify({
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequuntur doloremque eveniet eius eaque dicta repudiandae illo ullam. Minima itaque sint magnam dolorum asperiores repudiandae dignissimos expedita, voluptatum vitae velit.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "left",
        backgroundColor: "#0e2c88",
        stopOnFocus: true,
      }).showToast();
    };

    const textualStickyToast = () => {
      Toastify({
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequuntur doloremque eveniet eius eaque dicta repudiandae illo ullam. Minima itaque sint magnam dolorum asperiores repudiandae dignissimos expedita, voluptatum vitae velit.",
        duration: -1,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "left",
        backgroundColor: "#0e2c88",
        stopOnFocus: true,
      }).showToast();
    };

    const HTMLNonStickyToast = () => {
      Toastify({
        node: cash(
          '<span>Let\'s test some HTML stuff... <a class="font-medium" href="#">Github</a></span>'
        )[0],
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "left",
        backgroundColor: "#0e2c88",
        stopOnFocus: true,
      }).showToast();
    };

    const HTMLStickyToast = () => {
      Toastify({
        node: cash(
          '<span><strong>Remember!</strong> You can <span class="font-medium">always</span> introduce your own × HTML and <span class="font-medium">CSS</span> in the toast.<span>'
        )[0],
        duration: -1,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "left",
        backgroundColor: "#0e2c88",
        stopOnFocus: true,
      }).showToast();
    };

    return {
      textualNonStickyToast,
      textualStickyToast,
      HTMLNonStickyToast,
      HTMLStickyToast,
    };
  },
});
</script>
