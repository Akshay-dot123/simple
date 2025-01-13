const { userList, filmList } = require("../fakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    // User Resolvers
    users() {
      return userList;
    },
    user(parent, args) {
      const id = args.id;
      const user = _.find(userList, { id: Number(id) });
      return user;
    },

    // Film Resolvers
    films() {
      return filmList;
    },
    film(parent, args) {
      const name = args.name;
      console.log(name);
      const movie = _.find(filmList, { name: name });
      return movie;
    },
  },
  User: {
    favoriteFilms: () => {
      return _.filter(filmList, (film) => film.year <= 2000);
    },
  },
  Mutation:{
    createUser:(parent, args)=>{
        const user=args.input;
        const lastId=userList[userList.length-1].id;
        user.id=lastId+1;
        userList.push(user)
        return user;
    },
    updateUser:(parent, args)=>{
        const {id,newUser}=args.input;
        let updatedUser;
        userList.forEach((user)=>{
            if(user.id==id){
                user.username=newUser;
                updatedUser=user
            }
        })
        console.log(updatedUser);
        return updatedUser;
    },
    deleteUser:(parent, args)=>{
        const id=args.input.id;
        console.log(id);
        _.remove(userList,(user)=>user.id===Number(id))
        return null;
    }
  }
};
module.exports = resolvers;
