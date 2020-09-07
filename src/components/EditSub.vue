<template>
<div class="editsub">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 offset-md-3">
     <form @submit.prevent='onUpdate' action="">
         <h2>Edit a subscriber</h2>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email_address">Email</label>
      <input type="email" class="form-control" id="email_address" v-model="result.email_address" required>
    </div>
    <div class="form-group col-md-6">
      <label for="name">Name</label>
      <input type="name"  class="form-control" id="name" v-model="result.name" required>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">update</button>
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
const url = 'https://mail-lite-superb.herokuapp.com/subs/'
import axios from 'axios'
export default {
  name: 'EditSub',
  props: ['id'],
  data: function(){
      return {
        result: {
          email_address: '',
          name: ''
        },
        errors: []
      }
  },
  mounted(){
    this.fetchSub();
  },
  methods: {
      fetchSub(){
            axios.get(url+this.id).then(response => {
       this.result = response.data;
             window.location.href = '/';
     }).catch(e => {
      this.errors.push(e)
    });
      },
      onUpdate(){
        axios.patch(url+this.id, {
        email_address: this.result.email_address, name: this.result.name
     }).then(response => {
       this.message = response.data;
     }).catch(e => {
      this.errors.push(e)
    });
      }
  }
};
</script>