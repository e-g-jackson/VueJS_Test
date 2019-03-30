const app = new Vue({
    el: "#app",
    data: {
        name: "bobby",
        age: 25
    },
    template: `
    <div>
        <h1>Hi {{name}}!</h1>
        <h2>you are {{age}} years old!</h2>
        <ul>
            <li>one</li>
            <li>two</li>
        </ul>
    </div>
    `
})