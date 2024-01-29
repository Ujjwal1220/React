# parcel

DEV BUILD
HOST SERVER
HMR HOST MODULE REPLACEMENT(WHENEVER I WRITE SOMETHING IT WILL REFLECT BACK INSTANTLY IN LOCALHOST SERVER)
CACHING-FASTER BUILDS(.PARCRL-CACHE){IT CATCHES EVERYTHING WHAT WE DO}.
parcel is such is a beast
it also do image optimization for us
minificATION
bundling()
it also compressed files
consistent hashing
code splitting// read these things
differntial bundling//to support older browser// it have differnet bundles for differnet browser
parcel gives bautiful error viewing
Tree shaking-Remove unused code

# jsx

jsx is not react . it have html like syntax

# React Elemnet

# React Component

1.class COMPONENT OLD
2.functional COMPONENT NEW

# Functional component

syntax-const name=()=>(

);

## //react functional component=> normal js fxn which returns some jsx element.

{} => If we use curley bracket inside this component then we can write any js code . 2. we can also functional component inside functional component by using {} beaces
syntax:-{function call} OR {<Function name/>} Eg.//{Title()} OR {<Title />}

# app structure

// food site
//header=>logo,about, contact us,address ,cart
//body
//footer

# There are two types of export

# 1-Default

#SYNTAX-IMPORT->import component from "path";
#Syntax-EXPORT->export default component ;

# 2- Named Import/Export

#Syntax-Import->import{ component } from "path";
#Syntax-Export->export const component;

#### class component

/_ <h2>Count:-{this.obj.count}</h2> _/}
{/_ <button
onClick={() => {
this.setState({
count: this.obj.count++,
});
}} >
count increase
</button> _/

####

/\*\*\*

#### react lifecycle working

- constructor is called(dummy data)
-
- render(dummy)
- -----<HTML DUMMY>
-
- component did mount
- ------ <API> Call
- -------<This.setstate>-> state variable is updated
- \*---- update Cycle start
  render(api data)
     <HTML> with data

  component did update

  \*/

# // I hAve made a custom hook page name is Usestaus

## always try to use the word use during creating hooks.
