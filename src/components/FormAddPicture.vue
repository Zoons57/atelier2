<template>
  <div class="cl-upload">
    <h2>Mettre son image son Cloudinary</h2>



    <form v-on:submit.prevent="upload">
      
      <label for="file-input">Upload:</label>
      <input
      
        id="file-input"
        type="file"
        accept="image/png, image/jpeg"
        @change="handleFileChange($event)"
      />
      <label for="latitude">Latitude:</label>
      <input id="latitude-input" v-model="latitude" placeholder="Entrer la latitude du lieu" />
      <label for="longitude">Longitude:</label>
      <input id="longitude-input"  v-model="longitude" placeholder="Entrer la longitude du lieu" />
      <label for="description"> Description de l'image:</label>
      <textarea class="textarea" v-model="description" id="description-input"  placeholder="Exemple: Haut de Nancy"></textarea>
      <label for="zoom">Zoom:</label>
      <input id="zoom-input" v-model="zoom" placeholder="Entrer l'échelle à laquelle nous pouvons trouver l'image sur la carte" />  
        <label class="label">Choisir la série dans laquelle vous allez enregistrer la photo</label>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                     <option>Nancy</option>
                     <option>Metz</option>
                  </select>
                </div>
              </div>
             </div>
          </div>

              
      <button type="submit" :disabled="filesSelected < 1">Upload</button>
      
    </form>
    
    <!-- display uploaded image if successful -->
    <section v-if="results && results.secure_url">
      <img :src="results.secure_url" :alt="results.public_id" />
    </section>
    <section>
      <ul v-if="errors.length > 0">
        <li v-for="(error,index) in errors" :key="index">{{error}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CloudinaryUpload",
  data() {

    
    return {
      latitude:"",
      longitude:"",
      description:"",
      cloudinaryname:"deijlxfqu",
      zoom:"",
      results: null,
      errors: [],
      file: null,
      filesSelected: 0,
      preset: "qh9tiyhy",
      tags: "browser-upload",
      fileContents: null,
      formData: null
    };
  },
  methods: {
    // fonction pour gérer les informations de fichier obtenues à partir du local
    // défini l'état du fichier
    handleFileChange: function(event) {
      console.log("handlefilechange", event.target.files);
      //renvoie un tableau de fichiers 
      this.file = event.target.files[0];
      this.filesSelected = event.target.files.length;
    },
    prepareFormData: function() {
      this.formData = new FormData();
      this.formData.append("upload_preset", this.preset);
      this.formData.append("file", this.fileContents);
    },

    upload: function() {
      if (this.latitude.length < 1 || this.longitude.length < 1  || this.description.length < 1 || this.zoom.length < 1)   {
        this.errors.push("Tu dois mettre toutes les indications");
        return;
      }
      else {
        this.errors = [];
      }
      console.log("upload", this.file.name);
      let reader = new FileReader();
      // attach listener to be called when data from file
      reader.addEventListener(
        "load",
        function() {
          this.fileContents = reader.result;
          this.prepareFormData();
          let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudinaryname}/upload`;
          let requestObj = {
            url: cloudinaryUploadURL,
            method: "POST",
            data: this.formData,

          };
          axios(requestObj)
            .then(response => {
              this.results = response.data;
              console.log(this.results);
              console.log("public_id", this.results.public_id);
              console.log("latitude",this.latitude);
              console.log("longitude",this.longitude);
              console.log("description",this.description);
              console.log("Zoom",this.zoom);
            })
            .catch(error => {
              this.errors.push(error);
              console.log(this.error);
            })
        }.bind(this),
        false
      );
      // call for file read if there is a file
      if (this.file && this.file.name) {
        reader.readAsDataURL(this.file);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  display: grid;
  padding: 1em;
  background: #f9f9f9;
  border: 1px solid #c1c1c1;
  margin: 2rem auto 0 auto;
  max-width: 500px;
  padding: 1em;
}
form input {
  background: #fff;
  border: 1px solid #9c9c9c;
}
form button {
  background-color:gray;
  color: white;
  font-size: 1em;
  font-weight: bold;
  padding: 0.7em;
  width: 100%;
  border: 0;
}
form button:hover {
  background:green;
  color: black;
}

label {
  padding: 0.5em 0.5em 0.5em 0;
}
textarea  {
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
textarea:focus {
  outline: 3px solid green;
}
input  {
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
input:focus {
  outline: 3px solid green;
}

@media (min-width: 400px) {
  form {
    grid-template-columns: 150px 1fr;
    grid-gap: 16px;
  }

  label {
    text-align: right;
    grid-column: 1 / 2;
  }

  input,
  button {
    grid-column: 2 / 3;
  }
}

button {
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
}
button:focus {
  outline: none;
}
form button:disabled,
form button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
section {
  margin: 10px 0;
}
img {
  max-width: 300px;
  height: auto;
}
</style>

