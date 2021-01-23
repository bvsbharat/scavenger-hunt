<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Form Layout</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Form Layout -->
        <div class="intro-y box p-5">
          <div>
            <label>Product Name</label>
            <input
              type="text"
              class="input w-full border mt-2"
              placeholder="Input text"
            />
          </div>
          <div class="mt-3">
            <label>Category</label>
            <div class="mt-2">
              <TailSelect
                v-model="categories"
                :options="{
                  hideSelected: true,
                  hideDisabled: true,
                  multiLimit: 15,
                  multiShowCount: false,
                  multiContainer: true,
                  classNames: 'w-full',
                }"
                multiple
              >
                <option value="1">Sport & Outdoor</option>
                <option value="2">PC & Laptop</option>
                <option value="3">Smartphone & Tablet</option>
                <option value="4">Photography</option>
              </TailSelect>
            </div>
          </div>
          <div class="mt-3">
            <label>Quantity</label>
            <div class="relative mt-2">
              <input
                type="text"
                class="input pr-12 w-full border col-span-4"
                placeholder="Price"
              />
              <div
                class="absolute top-0 right-0 rounded-r px-4 h-full flex items-center justify-center bg-gray-100 dark:bg-dark-1 dark:border-dark-4 border text-gray-600"
              >
                pcs
              </div>
            </div>
          </div>
          <div class="mt-3">
            <label>Weight</label>
            <div class="relative mt-2">
              <input
                type="text"
                class="input pr-16 w-full border col-span-4"
                placeholder="Price"
              />
              <div
                class="absolute top-0 right-0 rounded-r px-4 h-full flex items-center justify-center bg-gray-100 dark:bg-dark-1 dark:border-dark-4 border text-gray-600"
              >
                grams
              </div>
            </div>
          </div>
          <div class="mt-3">
            <label>Price</label>
            <div class="sm:grid grid-cols-3 gap-2">
              <div class="relative mt-2">
                <div
                  class="absolute top-0 left-0 rounded-l px-4 h-full flex items-center justify-center bg-gray-100 dark:bg-dark-1 dark:border-dark-4 border text-gray-600"
                >
                  Unit
                </div>
                <div class="pl-6">
                  <input
                    type="text"
                    class="input pl-12 w-full border col-span-4"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div class="relative mt-2">
                <div
                  class="absolute top-0 left-0 rounded-l px-4 h-full flex items-center justify-center bg-gray-100 dark:bg-dark-1 dark:border-dark-4 border text-gray-600"
                >
                  Wholesale
                </div>
                <div class="pl-8">
                  <input
                    type="text"
                    class="input pl-20 w-full border col-span-4"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div class="relative mt-2">
                <div
                  class="absolute top-0 left-0 rounded-l px-4 h-full flex items-center justify-center bg-gray-100 dark:bg-dark-1 dark:border-dark-4 border text-gray-600"
                >
                  Bulk
                </div>
                <div class="pl-6">
                  <input
                    type="text"
                    class="input pl-12 w-full border col-span-4"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <label>Active Status</label>
            <div class="mt-2">
              <input type="checkbox" class="input input--switch border" />
            </div>
          </div>
          <div class="mt-3">
            <label>Description</label>
            <div class="mt-2">
              <CKEditor
                v-model="editorData"
                :editor="classicEditor"
                :config="simpleEditorConfig"
              />
            </div>
          </div>
          <div class="text-right mt-5">
            <button
              type="button"
              class="button w-24 border dark:border-dark-5 text-gray-700 dark:text-gray-300 mr-1"
            >
              Cancel
            </button>
            <button type="button" class="button w-24 bg-theme-1 text-white">
              Save
            </button>
          </div>
        </div>
        <!-- END: Form Layout -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";

export default defineComponent({
  setup() {
    const categories = 1;
    const classicEditor = ClassicEditor;
    const simpleEditorConfig = {
      plugins: [
        ParagraphPlugin,
        BoldPlugin,
        UnderlinePlugin,
        ItalicPlugin,
        LinkPlugin,
      ],
      toolbar: {
        items: ["bold", "italic", "underline", "link"],
      },
    };
    const editorData = ref("<p>Content of the editor.</p>");

    return {
      categories,
      classicEditor,
      simpleEditorConfig,
      editorData,
    };
  },
});
</script>
