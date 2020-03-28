<template>
  <div class="container">

      <div class="columns is-centered">
        <div class="column  is-4">
          <div class="field">
                    <div class="control has-icons-left has-icons-right" >
                      <input class="input  is-rounded" type="email" placeholder="Email"  v-model="email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column  is-4">
          <div class="field">
              <div class="control has-icons-left">
                 <input class="input is-rounded" type="password" placeholder="Votre mot de passe " v-model="password1">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
              </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column  is-4">
          <div class="field">
              <div class="control">
                 <input class="button  is-rounded" type="submit" value="Créer son compte" @click="signIn">

              </div>
          </div>
        </div>
      </div>
  </div>


</template>

<script>
export default {
  name: "FormSignin",
  data() {
    return {
      email: "",
      password1: "",
    };
  },
  methods: {
    signIn() {
      let parameters = {
        email: this.email,
        motdepasse: this.password1
      };
        axios.post("/user", parameters).then(response => {
          this.$router.push("login");
          console.log(response.data);
        });
       
      }
    }
  }

</script>

<style lang="scss" scoped>
  input{
    border-color:salmon;
 

  }

</style>