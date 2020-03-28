<template>
  <div class="serie">
    <h2>Créer une série</h2>

    <form v-on:submit.prevent="createSerie">
          <label for="ville-input">Le nom de la ville: </label>
          <input id="ville-input" v-model="ville" placeholder="Entrer le nom de la ville" />
          <label for="latitude-ville-input">La latitude de la ville: </label>
          <input id="latitude-ville-input" v-model="latitude_ville" placeholder="Entrer la latitude de la ville" />
          <label for="longitude-ville-input">La longitude de la ville: </label>
          <input id="longitude-ville-input" v-model="longitude_ville" placeholder="Entrer la longitude de la ville" />
          <label for="dist-ville-input">Distance à laquelle nous pouvons deviner les images sur la carte</label>
          <input id="dist-ville-input" v-model="distance_ville" placeholder="Entrer la distance de la ville" />

          <input class="button  is-rounded" type="submit" value="Créer la série" @click="createSerie">
    </form>
  </div>
</template>

<script>
export default {
  name: "FormAddSerie",
  data() {
    return {
      ville:"",
      latitude_ville:"",
      longitude_ville:"",
      distance_ville:""
    };
  },
  methods: {
    createSerie() {
      let parameters = {
        ville1: this.ville,
        lat_ville: this.latitude_ville,
        long_ville: this.longitude_ville,
        dist_ville: this.distance_ville
        

      };
        axios.post("/serie", parameters).then(response => {
          this.$router.push("serie");
          console.log(response.data);
        });
       
      }
    }
  }

</script>

<style lang="scss" scoped>
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