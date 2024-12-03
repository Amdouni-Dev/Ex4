var utilisateur={
    nom:"maamoun",
    age:"21",
    email:"maamounarfaoui@esen.tn",
    SePresenter:function(){
        return(`le nom de nouveau utilisateur est ${utilisateur.nom},
             son age est ${utilisateur.age}, Contact ${utilisateur.email}`)
    }
}
console.log(utilisateur.SePresenter())
utilisateur.email="maamounarfaoui.esen"
console.log(utilisateur.SePresenter())
delete utilisateur.age
console.log(utilisateur.SePresenter())


