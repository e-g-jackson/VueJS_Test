const app = new Vue({
    el: "#app",
    data: {
        dog:{
            name: "Bobby",
            type: "Corgi",
            age: 3,
        }
    },
    methods: {
        dogFxn: function(name, type, age){return name + " is a " + type + ", and is " + age + " years old!"}
    },
    // template: `
    // <p>{{ dogFxn() }}</p>
    // `
})