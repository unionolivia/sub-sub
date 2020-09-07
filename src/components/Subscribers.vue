<template>
    <div class="list">
      <div class="container">
      <div class="row">
        <div class="col-sm">
          <h3 class="text-center"></h3>
          </div>
          <div class="col-sm">
          <h3 class="text-center">Subscribers</h3>
          </div>
          <div class="col-sm">
            <router-link to="/addsub" type="button" class="btn btn-primary">Add Subscriber</router-link>
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
                    <th>Email</th>
                    <th>Name</th>
                    <th>State</th>
                     <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="result in results" :key="result.id">
                    <td>{{ result.email_address }}</td>
                    <td>{{ result.name }}</td>
                    <td>{{ result.state }}</td>
                    <td>
                    <router-link :to="'/editsub/'+result.id+'/edit'" type="button" class="btn btn-success">Edit</router-link>
                    <button @click="deleteSub(result.id)" type="button" class="btn btn-danger">Delete</button></td>
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

const url = 'https://mail-lite-superb.herokuapp.com/subs/'

export default {
   name: 'Subscribers',
    props: ['results', 'loading', 'errored'],
      data() {
    return {
    };
  },
  methods: {
    deleteSub(id) {
         axios.delete(url+id)
      .then((response) => {
        // JSON responses are automatically parsed.
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      })
    }
  },
}

</script>

