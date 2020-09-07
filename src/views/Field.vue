<template>
  <div class="field">
    <Fields :results="results" :loading="loading" :errored="errored" />
  </div>
</template>

<script>
// @ is an alias to /src
import Fields from "@/components/Fields.vue";
import axios from "axios";

const url = 'https://mail-lite-superb.herokuapp.com/fields'

export default {
  name: "Field",
  components: {
    Fields
  },
  data() {
    return {
      results: [],
      loading: true,
      errored: false
    };
  },
  mounted() {
    axios
      .get(url)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.results = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
