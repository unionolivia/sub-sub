<template>
<div class="editfield">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 offset-md-3">
     <form @submit.prevent='onUpdate' action="">
         <h2>Edit Field</h2>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="title">Title</label>
      <input type="title" class="form-control" id="title" v-model="result.title" required>
    </div>
    <div class="form-group col-md-6">
      <label for="name">Name</label>
      <input type="name"  class="form-control" id="name" v-model="result.type" required>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Update</button>
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

const url = 'https://mail-lite-superb.herokuapp.com/fields/'
export default {
  name: 'EditField',
  props: ['id'],
  data: function(){
      return {
        result: {
          title: '',
          type: ''
        },
        errors: []
      }
  },
  mounted(){
    this.fetchField();
  },
  methods: {
      fetchField(){
            axios.get(url+this.id).then(response => {
       this.result = response.data;
     }).catch(e => {
      this.errors.push(e)
    });
      },
      onUpdate(){
        axios.patch(url+this.id, {
        title: this.result.title, type: this.result.type
     }).then(response => {
       this.message = response.data;
     }).catch(e => {
      this.errors.push(e)
    });
      }
  }
};
</script>