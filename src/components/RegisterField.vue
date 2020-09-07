<template>
<div class="addfield">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 offset-md-3">
     <form @submit.prevent='onSubmit' action="">
         <h2>Add a Field</h2>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="title">Title</label>
      <input type="title" class="form-control" id="title" v-model="sub.title" required>
    </div>
    <div class="form-group col-md-6">
      <label for="type">Type</label>
      <input type="type" class="form-control" id="type" v-model="sub.type" required>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
  <ul v-if="errors && errors.length">
    <li v-for="error of errors" :key="error.index">
      {{error.message}}
    </li>
  </ul>
</form>
            </div>
        </div>
    </div>
</div>
</template>
<script>

import axios from 'axios'

const url = 'https://mail-lite-superb.herokuapp.com/fields'
export default {
  name: 'RegisterField',
  data: function(){
      return {
          sub: {
              title: '',
              type: ''
          },
          errors: []
      }
  },
  methods: {
      onSubmit(){
            axios.post(url, {
        title: this.sub.title, type: this.sub.type
     }).then(response => {
       this.message = response.data;
       window.location.href = '/field';
     }).catch(e => {
      this.errors.push(e)
    });
      }
  }
};
</script>