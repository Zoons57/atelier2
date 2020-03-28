<template>
  <div class="container">

      <div class="columns is-centered">
        <div class="column  is-4">
          <div class="field">
                    <div class="control has-icons-left has-icons-right" >
                      <input class="input  is-rounded" type="email" placeholder="Email"  v-model="mail">
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
                 <input class="button  is-rounded" type="submit" value="Se connecter"  @click="login">

              </div>
          </div>
        </div>
      </div>
  </div>


</template>

<script>
export default {
  name: "FormLogin",
  data() {
    return {
      mail:"",  
      email: "",
      password1: "",
      password2: "",
    };
  },
  methods: {


    login() {
        this.email = this.mail;
        console.log(this.email);
        axios
          .get("user/"+this.email)
          .then(response => {
            this.$store.commit("login", response.data);
            this.$router.push("/");
          })
          .catch(error => {
            this.setError(
              "Le mot de passe ou l'adresse mail ne sont pas correct"
            );
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  input{
    border-color:salmon;
 

  }
</style>