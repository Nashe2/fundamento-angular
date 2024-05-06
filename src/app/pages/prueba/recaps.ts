const suma = (a: number, b: number) => {
  return a + b;
}

suma(1,2);

//Objeto y constructor
class Person {
  constructor(public age: number, public lastName: string){
  }
}

//Instancia
const nashe = new Person(15, 'Osorio');
nashe.age;
