# 1.What are the basic data types in TypeScript?
Basic data types are basically whose stored value type is known to compliler before running the program.
They are of two types:
-Primitive type:Boolean,number,string,null,void.
-User-defined:Array,Enum,Tuples,Functions,Classes,Interfaces,etc.

# 2.What is Generic data type.
Generic is used to create a component which can work with a variety of data type rather than a single one. It allows a way to create reusable components.TypeScript uses generics data type with the type variable <T> that denotes types.

function identity<T>(data: T): T {  
    return name;  
}  
let output1 = identity<string>("myString");  
let output2 = identity<number>( 100 );  

# 3.What is type inferring in TS.
When no type is annotated,the typescript compiler automatically infer it a type in the following conditions:
TypeScript compiler infers the type information when:

Variables and members are initialized
Setting default values for parameters
Determined function return types

# 4.What are the possible ways to define typing for functions.
--Object type literals -for higher order functions
interface RegExpConstructor {
  (pattern: RegExp): RegExp;
  (pattern: string, flags?: string): RegExp;
}
--Method signatures
interface Date {
  toString(): string;
  setTime(time: number): number;
  }
  
--Function type literals
interface Array<T> {
  sort(compareFn?: (a: T, b: T) => number): this;
}



# 5.How to define Generic type for Classes.
class datakeyvalues<T,U>
{ 
    private id: T;
    private data: U;

    setKeyValue(id: T, data: U): void { 
        this.id = id;
        this.data = data;
    }

    display():void { 
        console.log(`Key = ${this.id}, val = ${this.data}`);
    }
}

let kvp1 = new datakeyvalues<number, string>();
kvp1.setKeyValue(1, "pragya");
kvp1.display();

//Output: id = 1, data = Pragya

Define the types in typescript for the given following JavaScript code.Todo:-Define type/interface for a single Todo object.-Define type for each function.-Do not use `any` (TS Data Type) type of typescript.Code: 

interface Todo{
    name:string;
    description:string;
    done:boolean;
}
var todos: Todo[];
function add(name: string, description: string):number 
{
    return todos.push({name: name,description: description,done: false});
}
function remove(index: number):Todo[] 
{
    return todos.splice(index, 1);
}
function list():void 
{
    todos.forEach(function(todo, index)
     {console.log(index + " -" + todo.name);
    }
    );
}
function update(index: number, name: string, description: string):Todo 
{
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
}