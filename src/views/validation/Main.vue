<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Form Validation</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-6">
      <!-- BEGIN: Form Validation -->
      <div class="intro-y box">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">Implementation</h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#form-validation"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="form-validation" class="p-5">
          <div class="preview">
            <form class="validate-form" @submit.prevent="save">
              <div>
                <label class="flex flex-col sm:flex-row">
                  Name
                  <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                    >Required, at least 2 characters</span
                  >
                </label>
                <input
                  v-model.trim="validate.name.$model"
                  type="text"
                  class="input w-full border mt-2"
                  :class="{ 'border-theme-6': validate.name.$error }"
                  placeholder="John Legend"
                />
                <template v-if="validate.name.$error">
                  <div
                    v-for="(error, index) in validate.name.$errors"
                    :key="index"
                    class="text-theme-6 mt-2"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="mt-3">
                <label class="flex flex-col sm:flex-row">
                  Email
                  <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                    >Required, email address format</span
                  >
                </label>
                <input
                  v-model.trim="validate.email.$model"
                  type="email"
                  class="input w-full border mt-2"
                  :class="{ 'border-theme-6': validate.email.$error }"
                  placeholder="example@gmail.com"
                />
                <template v-if="validate.email.$error">
                  <div
                    v-for="(error, index) in validate.email.$errors"
                    :key="index"
                    class="text-theme-6 mt-2"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="mt-3">
                <label class="flex flex-col sm:flex-row">
                  Password
                  <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                    >Required, at least 6 characters</span
                  >
                </label>
                <input
                  v-model.trim="validate.password.$model"
                  type="password"
                  class="input w-full border mt-2"
                  :class="{ 'border-theme-6': validate.password.$error }"
                  placeholder="secret"
                />
                <template v-if="validate.password.$error">
                  <div
                    v-for="(error, index) in validate.password.$errors"
                    :key="index"
                    class="text-theme-6 mt-2"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="mt-3">
                <label class="flex flex-col sm:flex-row">
                  Age
                  <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                    >Required, integer only & maximum 3 characters</span
                  >
                </label>
                <input
                  v-model.trim="validate.age.$model"
                  type="number"
                  class="input w-full border mt-2"
                  :class="{ 'border-theme-6': validate.age.$error }"
                  placeholder="21"
                />
                <template v-if="validate.age.$error">
                  <div
                    v-for="(error, index) in validate.age.$errors"
                    :key="index"
                    class="text-theme-6 mt-2"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="mt-3">
                <label class="flex flex-col sm:flex-row">
                  Profile URL
                  <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                    >Optional, URL format</span
                  >
                </label>
                <input
                  v-model.trim="validate.url.$model"
                  type="url"
                  class="input w-full border mt-2"
                  :class="{ 'border-theme-6': validate.url.$error }"
                  placeholder="https://google.com"
                />
                <template v-if="validate.url.$error">
                  <div
                    v-for="(error, index) in validate.url.$errors"
                    :key="index"
                    class="text-theme-6 mt-2"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="mt-3">
                <label class="flex flex-col sm:flex-row">
                  Comment
                  <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                    >Required, at least 10 characters</span
                  >
                </label>
                <textarea
                  v-model.trim="validate.comment.$model"
                  class="input w-full border mt-2"
                  placeholder="Type your comments"
                  :class="{ 'border-theme-6': validate.comment.$error }"
                ></textarea>
                <template v-if="validate.comment.$error">
                  <div
                    v-for="(error, index) in validate.comment.$errors"
                    :key="index"
                    class="text-theme-6 mt-2"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <button type="submit" class="button bg-theme-1 text-white mt-5">
                Register
              </button>
            </form>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-form-validation"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-form-validation" class="source-preview">
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    const formData = reactive({
                      name: '',
                      email: '',
                      password: '',
                      age: '',
                      url: '',
                      comment: ''
                    })
                    const rules = {
                      name: {
                        required,
                        minLength: minLength(2)
                      },
                      email: {
                        required,
                        email
                      },
                      password: {
                        required,
                        minLength: minLength(6)
                      },
                      age: {
                        required,
                        integer,
                        maxLength: maxLength(3)
                      },
                      url: {
                        url
                      },
                      comment: {
                        required,
                        minLength: minLength(10)
                      }
                    }
                    const validate = useVuelidate(rules, toRefs(formData))
                    const save = () => {
                      validate.value.$touch()
                      console.log(validate.value)
                      if (validate.value.$invalid) {
                        Toastify({
                          text: 'Registration failed, please check the fileld form.',
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: 'bottom',
                          position: 'left',
                          backgroundColor: '#D32929',
                          stopOnFocus: true
                        }).showToast()
                      } else {
                        Toastify({
                          text: 'Registration success!',
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: 'bottom',
                          position: 'left',
                          backgroundColor: '#91C714',
                          stopOnFocus: true
                        }).showToast()
                      }
                    }

                    return {
                      validate,
                      formData,
                      save
                    }
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Form Validation -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import {
  required,
  minLength,
  maxLength,
  email,
  url,
  integer,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Toastify from "toastify-js";

export default defineComponent({
  setup() {
    const formData = reactive({
      name: "",
      email: "",
      password: "",
      age: "",
      url: "",
      comment: "",
    });
    const rules = {
      name: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      age: {
        required,
        integer,
        maxLength: maxLength(3),
      },
      url: {
        url,
      },
      comment: {
        required,
        minLength: minLength(10),
      },
    };
    const validate = useVuelidate(rules, toRefs(formData));
    const save = () => {
      validate.value.$touch();
      console.log(validate.value);
      if (validate.value.$invalid) {
        Toastify({
          text: "Registration failed, please check the fileld form.",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "left",
          backgroundColor: "#D32929",
          stopOnFocus: true,
        }).showToast();
      } else {
        Toastify({
          text: "Registration success!",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "left",
          backgroundColor: "#91C714",
          stopOnFocus: true,
        }).showToast();
      }
    };

    return {
      validate,
      formData,
      save,
    };
  },
});
</script>
