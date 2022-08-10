const vm = new Vue({
    el: "#informacoes",
    created(){
        this.fetchAllInformation();
        this.fetchAllInLanguages();
        this.fetchAllInHabilidades();
    },
    data:{
        title:"Front-end designer",
        informacoes:{},
        languages:{},
        habilidades:{},
    },
    methods:{
        fetchAllInformation(){
            fetch("informacoes.json")
            .then(r => r.json())
            .then(r => { this.informacoes = r });
        },
        fetchAllInLanguages(){
            fetch("idiomas.json")
            .then(r => r.json())
            .then(r => { this.languages = r });
        },
        fetchAllInHabilidades(){
            fetch("habilidades.json")
            .then(r => r.json())
            .then(r => { this.habilidades = r });
        }
    }
});

const vm2 = new Vue({
    el: "#header",
    data:{
        title:"Front-end designer",
    },
});
