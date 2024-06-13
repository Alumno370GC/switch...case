class Animal {
      hacerSonido (){
      console.log("El animal hace sonido.");

    }


}

class Perro  extends Animal {
       hacerSonido (){

         console.log("El perro ladra: ¡ Guau!, guau!");

             }

}

class Gato extends Animal{

    hacerSonido(){
        console.log("El gato maulla: ¡ Miau!, Miau!");
           

        
    }



}
//se crean nuestors Objetos
const animal1 = new Perro()
const animal2 = new Gato()

//se manda a llamar nuestras clases
animal1.hacerSonido();
animal2.hacerSonido();