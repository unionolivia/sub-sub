<template>
<div class="addsub">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 offset-md-3">
     <form @submit.prevent='onSubmit' action="">
         <h2>Add a subscriber</h2>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email_address">Email</label>
      <input type="email" class="form-control" id="email_address" v-model="sub.email_address" required>
    </div>
    <div class="form-group col-md-6">
      <label for="name">Name</label>
      <input type="name" class="form-control" id="name" v-model="sub.name" required>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Add Subscriber</button>
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
// const emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
import axios from 'axios'

const url = 'https://mail-lite-superb.herokuapp.com/subs'
export default {
  name: 'RegisterSub',
  data: function(){
      return {
          sub: {
              email_address: '',
              name: ''
          },
          errors: []
      }
  },
  methods: {
      onSubmit(){
            axios.post(url, {
        email_address: this.sub.email_address, name: this.sub.name
     }).then(response => {
       this.message = response.data;
     }).catch(e => {
      this.errors.push(e)
    });
      }
  }
};
</script>