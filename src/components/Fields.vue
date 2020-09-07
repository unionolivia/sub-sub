<template>
    <div class="list">
      <div class="container">
      <div class="row">
        <div class="col-sm">
          <h3 class="text-center"></h3>
          </div>
          <div class="col-sm">
          <h3 class="text-center">Fields</h3>
          </div>
          <div class="col-sm">
            <router-link to="/addfield" type="button" class="btn btn-primary">Add field</router-link>
          </div>
      </div>
      </div>
    
    <div v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </div>

  <div v-else>
    <div v-if="loading">Loading...</div>
    
    <!--<button @click='addListing()'>Add Listing</button> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm">
          <h3 class="text-center"></h3>
          </div>
         <div class="col-sm">
           <div class="panel panel-default">
             <div class="panel-body">
               <table class="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Type</th>
                     <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="result in results" :key="result.id">
                    <td>{{ result.title }}</td>
                    <td>{{ result.type }}</td>
                    <td>
                    <router-link :to="'/editfield/'+result.id+'/edit'" type="button" class="btn btn-success">Edit</router-link>
                    <button @click="deleteField(result.id)" type="button" class="btn btn-danger">Delete</button></td>
                  </tr>
                </tbody>
              </table>
             </div>
           </div>
         </div>
         <div class="col-sm">
          <h3 class="text-center"></h3>
          </div>
      </div>
    </div>

  </div>
   
   </div>
</template>

<script>
import axios from 'axios'

const url = 'https://mail-lite-superb.herokuapp.com/fields/'

export default {
   name: 'Fields',
    props: ['results', 'loading', 'errored'],
      data() {
    return {
    };
  },
  methods: {
    deleteField(id) {
         axios.delete(url+id)
      .then((response) => {
        // JSON responses are automatically parsed.
        console.log(response)
          window.location.href = '/field';
      })
      .catch((e) => {
        console.log(e)
      })
    }
  },
}

</script>

