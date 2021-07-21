# Angular
## Benefits             
- clean structure
- resuable code 
- make the application more testable 

## Architecture
- Front-end  : HTML Templates & Presentation Logic : HTML, CSS, JS, Typescript, Angular 
- Back-end :  store data on the server ( data + APIs)
- API : application programming interface- endpoints that are accesible to the http protocol
- Example: Think about the ship load the data from the port

## App moule
- is the entrance of the application `app.module.ts`
`ng g c second`
ng generate component foldername

`? Angular automatic encapsulate css that's why each component has diff class which hold the style`

## property binding 
- use {{}}
## event binding 
`(click)="toogle"`
`click` is a keyword
## 2 ways binding
`ngModel`
- change the data from an event 
-> send this event back to the .html

### working on logic in name.component.ts -> all the logic of functions in Angular go here 


## ngOnInit 
- `constructor()` will run first 
-> then the component will involce some data from the input 
-> then everything is being used in ngOnInit.
- `ngOnInit()` uses data from `@Input`

- use decorate output to use Emitter @Output 
-> to transfer data from child component to parent component

`parent <= child ( getdatafromChild )`

```
Training Project  
-- click the button then change the color of the main header.
-- notice class binding for the button `[className]="'red'"`
-- create the array of data -> object {
    header:
    des:
    content:
    color:
} --> store this data in the parent
-- use for loop to generate this
-- init value from the child components
```
## Components
- create a component
- register it in a module
- add an element in an HTML markup

## ngFor, @InPut, @Output
- !ngFor TrackBy
- `ng g d` -> generate custom Directive
- can not use too many directly in one element 

## Pipes 
- `{{ date |(<=this is pipe- you can get any data, which is generate by data class, or transfer data step by step) }}`
- `Observer` - async, promise
- `Customerize Pipe` 
- `my-app name shared core components` : shared: is shared the code to the other components
- service - hold logics
- ng g m shared -> create share module to the file you want to 
share ( which is the one you open when you ru this comman)

## Dependency, @Injectable decorator, Service
- inject service to the root
`ng g s core`
- `@Injectable decorator` inject something to the module
- you need to declare all the services inside the `providers`
- help you generate the instances

## Router
## Lazy Loading 
- instances based on the root module 
- lazy module create new instance inside lazymodule
- lazy child will look up the parent to check for the services and injections
- can not use it before it loads
- dependency helps us to create some instances outside the function
- lazycomponent = another instances 

## @self, @optional, @skipself
- `@skipself` share value(behavior) from the base root 
- `@self` only share value(behavior) on itself 

## `ng-content`
- give the entrance from the parent value to the child value 

##  `@HostDecorator`
## `HTTP`
- if you want to get some data from the backend you have to use HTTP
- or can use `Promise`
- recommend use `Rxjs` 
! what is the diff between Observable and 
! Eagle vs Lazy 
! Bind, apply, call
+ bind create new function and wait users to use it 
+ apply and call - run the function immmediatel.y
! Fetch(), new Promise
+ run immeaidtely 
! Observable
+ run  in the lazy way 

## @Observable from Rxjs

## TypeScript
- should use `let` keyword -> catch the issua earlier during the compile time
- 
```
enum Color {
    Red, Green, Blue
}
let backgroundColor = Color.Red
```

- type assertion : `(<string>message).endsWith('c')` OR `(message as string)`

- arrow function: 
`let doLog = (message) => console.log(message)`
