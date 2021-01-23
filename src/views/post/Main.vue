<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Add New Post</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <div class="dropdown mr-2">
          <button
            class="dropdown-toggle button box text-gray-700 dark:text-gray-300 flex items-center"
          >
            English <ChevronDownIcon class="w-4 h-4 ml-2" />
          </button>
          <div class="dropdown-box w-40">
            <div class="dropdown-box__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <ActivityIcon class="w-4 h-4 mr-2" />
                <span class="truncate">English</span>
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <ActivityIcon class="w-4 h-4 mr-2" />
                <span class="truncate">Indonesian</span>
              </a>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="button box text-gray-700 dark:text-gray-300 mr-2 flex items-center ml-auto sm:ml-0"
        >
          <EyeIcon class="w-4 h-4 mr-2" /> Preview
        </button>
        <div class="dropdown">
          <button
            class="dropdown-toggle button text-white bg-theme-1 shadow-md flex items-center"
          >
            Save <ChevronDownIcon class="w-4 h-4 ml-2" />
          </button>
          <div class="dropdown-box w-40">
            <div class="dropdown-box__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> As New Post
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> As Draft
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> Export to Word
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pos intro-y grid grid-cols-12 gap-5 mt-5">
      <!-- BEGIN: Post Content -->
      <div class="intro-y col-span-12 lg:col-span-8">
        <input
          type="text"
          class="intro-y input input--lg w-full box pr-10"
          placeholder="Title"
        />
        <div class="post intro-y overflow-hidden box mt-5">
          <div
            class="post__tabs nav-tabs flex flex-col sm:flex-row bg-gray-300 dark:bg-dark-2 text-gray-600"
          >
            <Tippy
              tag="a"
              content="Fill in the article content"
              data-toggle="tab"
              data-target="#content"
              href="javascript:;"
              class="w-full sm:w-40 py-4 text-center flex justify-center items-center active"
            >
              <FileTextIcon class="w-4 h-4 mr-2" /> Content
            </Tippy>
            <Tippy
              tag="a"
              content="Adjust the meta title"
              data-toggle="tab"
              data-target="#meta-title"
              href="javascript:;"
              class="w-full sm:w-40 py-4 text-center flex justify-center items-center"
            >
              <CodeIcon class="w-4 h-4 mr-2" /> Meta Title
            </Tippy>
            <Tippy
              tag="a"
              content="Use search keywords"
              data-toggle="tab"
              data-target="#keywords"
              href="javascript:;"
              class="w-full sm:w-40 py-4 text-center flex justify-center items-center"
            >
              <AlignLeftIcon class="w-4 h-4 mr-2" /> Keywords
            </Tippy>
          </div>
          <div class="post__content tab-content">
            <div id="content" class="tab-content__pane p-5 active">
              <div
                class="border border-gray-200 dark:border-dark-5 rounded-md p-5"
              >
                <div
                  class="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5"
                >
                  <ChevronDownIcon class="w-4 h-4 mr-2" /> Text Content
                </div>
                <div class="mt-5">
                  <CKEditor
                    v-model="editorData"
                    :editor="classicEditor"
                    :config="editorConfig"
                  />
                </div>
              </div>
              <div
                class="border border-gray-200 dark:border-dark-5 rounded-md p-5 mt-5"
              >
                <div
                  class="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5"
                >
                  <ChevronDownIcon class="w-4 h-4 mr-2" />
                  Caption & Images
                </div>
                <div class="mt-5">
                  <div>
                    <label>Caption</label>
                    <input
                      type="text"
                      class="input w-full border mt-2"
                      placeholder="Write caption"
                    />
                  </div>
                  <div class="mt-3">
                    <label>Upload Image</label>
                    <div
                      class="border-2 border-dashed dark:border-dark-5 rounded-md mt-3 pt-4"
                    >
                      <div class="flex flex-wrap px-4">
                        <div
                          v-for="(faker, fakerKey) in $_.take($f(), 4)"
                          :key="fakerKey"
                          class="w-24 h-24 relative image-fit mb-5 mr-5 cursor-pointer zoom-in"
                        >
                          <img
                            class="rounded-md"
                            alt="Midone Tailwind HTML Admin Template"
                            :src="require(`@/assets/images/${faker.images[0]}`)"
                          />
                          <Tippy
                            tag="div"
                            content="Remove this image?"
                            class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                          >
                            <xIcon class="w-4 h-4" />
                          </Tippy>
                        </div>
                      </div>
                      <div
                        class="px-4 pb-4 flex items-center cursor-pointer relative"
                      >
                        <ImageIcon class="w-4 h-4 mr-2" />
                        <span class="text-theme-1 dark:text-theme-10 mr-1"
                          >Upload a file</span
                        >
                        or drag and drop
                        <input
                          type="file"
                          class="w-full h-full top-0 left-0 absolute opacity-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Post Content -->
      <!-- BEGIN: Post Info -->
      <div class="col-span-12 lg:col-span-4">
        <div class="intro-y box p-5">
          <div>
            <label>Written By</label>
            <div class="dropdown mt-2">
              <button
                class="dropdown-toggle button w-full border dark:bg-dark-2 dark:border-dark-4 flex items-center"
              >
                <div class="w-6 h-6 absolute image-fit mr-3">
                  <img
                    class="rounded"
                    alt="Midone Tailwind HTML Admin Template"
                    :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
                  />
                </div>
                <div class="ml-8 pl-1 truncate">
                  {{ $f()[0].users[0].name }}
                </div>
                <ChevronDownIcon class="w-4 h-4 ml-auto" />
              </button>
              <div class="dropdown-box w-full">
                <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                  <a
                    v-for="(faker, fakerKey) in $_.take($f(), 5)"
                    :key="fakerKey"
                    href="javascript:;"
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  >
                    <div class="w-6 h-6 absolute image-fit mr-3">
                      <img
                        class="rounded"
                        alt="Midone Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${faker.photos[0]}`)"
                      />
                    </div>
                    <div class="ml-8 pl-1">{{ faker.users[0].name }}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <label>Post Date</label>
            <Litepicker
              v-model="salesReportFilter"
              :options="{
                autoApply: false,
                showWeekNumbers: true,
                dropdowns: {
                  minYear: 1990,
                  maxYear: null,
                  months: true,
                  years: true,
                },
              }"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Categories</label>
            <div class="mt-2">
              <TailSelect
                v-model="categories"
                :options="{
                  search: false,
                  hideSelected: true,
                  hideDisabled: true,
                  multiLimit: 15,
                  multiShowCount: false,
                  multiContainer: true,
                  classNames: 'w-full',
                }"
                multiple
              >
                <option value="1">Horror</option>
                <option value="2">Sci-fi</option>
                <option value="3">Action</option>
                <option value="4">Drama</option>
                <option value="5">Comedy</option>
              </TailSelect>
            </div>
          </div>
          <div class="mt-3">
            <label>Tags</label>
            <div class="mt-2">
              <TailSelect
                v-model="tags"
                :options="{
                  search: false,
                  hideSelected: true,
                  hideDisabled: true,
                  multiLimit: 15,
                  multiShowCount: false,
                  multiContainer: true,
                  classNames: 'w-full',
                }"
                multiple
              >
                <option value="1" selected>Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3" selected>Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TailSelect>
            </div>
          </div>
          <div class="mt-3">
            <label>Published</label>
            <div class="mt-2">
              <input class="input input--switch border" type="checkbox" />
            </div>
          </div>
          <div class="mt-3">
            <label>Show Author Name</label>
            <div class="mt-2">
              <input class="input input--switch border" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <!-- END: Post Info -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import StrikethroughPlugin from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import CodePlugin from "@ckeditor/ckeditor5-basic-styles/src/code";
import SubscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import SuperscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import HeadingButtonsUI from "@ckeditor/ckeditor5-heading/src/headingbuttonsui";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";

export default defineComponent({
  setup() {
    const categories = ref(["1", "2"]);
    const tags = ref(["1", "2"]);
    const salesReportFilter = ref("");
    const classicEditor = ClassicEditor;
    const editorConfig = {
      cloudServices: {
        tokenUrl: "",
        uploadUrl: "",
      },
      plugins: [
        Font,
        EssentialsPlugin,
        BoldPlugin,
        UnderlinePlugin,
        StrikethroughPlugin,
        ItalicPlugin,
        LinkPlugin,
        ParagraphPlugin,
        CodePlugin,
        SubscriptPlugin,
        SuperscriptPlugin,
        EasyImage,
        Heading,
        HeadingButtonsUI,
        Highlight,
      ],
      toolbar: {
        items: [
          "fontSize",
          "fontFamily",
          "fontColor",
          "fontBackgroundColor",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "code",
          "subscript",
          "superscript",
          "link",
          "undo",
          "redo",
          "imageUpload",
          "highlight",
        ],
      },
    };
    const editorData = ref("<p>Content of the editor.</p>");

    return {
      categories,
      tags,
      salesReportFilter,
      classicEditor,
      editorConfig,
      editorData,
    };
  },
});
</script>
