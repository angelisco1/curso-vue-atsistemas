import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarios: [
      {
        id: 0,
        nombre: 'Charly',
        apellido: 'Falco',
        telefono: 666666666,
        correo: 'cfalco@gmail.com',
        rol: 'admin',
        password: '1234'
      }
    ]
  },
  getters: {
    getUsuarios(state) {
      return state.usuarios;
    },
    getUsuarioById(state) {
      return (id) => {
        return state.usuarios.find(u => u.id == id);
      }
    }
    // getUsuariosByRol(rol) {
    //   return (state) => {
    //       return state.usuarios.filter(u => u.rol === rol);
    //   }
    // }
  },
  mutations: {
    eliminar(state, payload) {
      state.usuarios = state.usuarios.filter(u => u.id != payload);
    },
    guardarUsuario(state, payload) {
      // state.usuarios = [...state.usuarios, payload];
      state.usuarios = [].concat(state.usuarios, [payload]);
    }
  },
  actions: {
    eliminarUsuario(context, payload) {
      return axios.delete('https://ejemplos-dc1c1.firebaseio.com/usuarios/'+payload+'.json')
        .then(resp => {
          context.commit('eliminar', payload);
          if(true) {
            return Promise.reject('Error');
          }
        })
    },
    guardarUsuario(context, payload) {
      return axios.post('https://ejemplos-dc1c1.firebaseio.com/usuarios.json', JSON.stringify(payload))
        .then(resp => {
          console.log(resp);
          const id = resp.data.name;
          payload.id = id;
          context.commit('guardarUsuario', payload);
        })
    }
  }
})