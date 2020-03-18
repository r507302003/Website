# Homework #6 Solution

**Student Name**:  Tien-Hui Feng

**NetID**: vd8386


## Question 1 

### (a) 
### (b)
![home page](images/1b.JPG)

### (c)
![Guest](images/1c_guest.JPG)
![Member](images/1c_member.JPG)
![Admin](images/1c_admin.JPG)

### (d)
```javascript
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        role: "guest" 
        };
    }
    
    // Renders component based on current state and props
    render() {
        if(this.state.role == "admin"){
            return (
                <div className="App">
                    <Admin />
                </div> 
            ); 
        }
        else if(this.state.role == "member"){
            return (
                <div className="App">
                    <Member />
                </div> 
            ); 
        }
        else{
            return(
                <div className="App">
                    <Guest />
                </div>
            );
        }
                }
            }
ReactDOM.render(<App />, document.getElementById("root"));


```
## Question 2 

### (b)
![Router](images/2b.JPG)

#### index.js 
```javascript
      return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          <Home />
        </Switch>
    </Router> );
        }
}
```

#### home.js
```javascript
notImplemented(e){
    let bodyText = document.getElementById("bodyText"); 
    bodyText.innerHTML = `<h1> Not Implemented Yet </h1>`; 
    this.setState({
    show: e
    }); 
}
<ul>
    <li className="active"><a href="/home">Home page</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="#" onClick={() => this.notImplemented()}>Activities</a></li>
    <li><a href="#" onClick={() => this.notImplemented()}>Membership</a></li>
    <li><a href="#" onClick={() => this.notImplemented()}>Login</a></li>
</ul>
```

#### about.js 
```javascript 
notImplemented(e){
    let bodyText = document.getElementById("bodyText"); 
    bodyText.innerHTML = `<h1> Not Implemented Yet </h1>`; 
    this.setState({
    show: e
    });  }
<ul>
    <li><a href="/home">Home page</a></li>
    <li className="active"><a href="/about">About</a></li>
    <li><a href="#" onClick={() => this.notImplemented('activities')}>Activities</a></li>
    <li><a href="#" onClick={() => this.notImplemented('membership')}>Membership</a></li>
    <li><a href="#" onClick={() => this.notImplemented('login')}>Login</a></li>
</ul>
```
## Question 3

### (a)
![memberonly](images/3a.JPG)


### (b)
![editAct](images/3b.JPG)

```Javascript
<nav>
    <ul>
    <li className="active"><a href="/home">Home page</a></li>
    <li><a href="/about">About</a></li>
    {this.props.editActive ?
        <li><a href="#" onClick={() => this.notImplemented()}>editActivities</a></li>
        :<li><a href="#" onClick={() => this.notImplemented()}>Activities</a></li> }
    {this.props.memberOnly ?
        <li><a href="#" onClick={() => this.notImplemented()}>MemberOnly</a></li>
        :<li><a href="#" onClick={() => this.notImplemented()}>Membership</a></li> }
    {this.props.memberOnly ? 
        <li><a href="#" onClick={() => this.notImplemented()}>Logout</a></li>
        :<li><a href="#" onClick={() => this.notImplemented()}>Login</a></li>
    }
    </ul>
</nav>
```



## Question 4

### (a)
![login](images/4a.JPG)

## Question 5


