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


## Question 3

### (a)




### (b)




## Question 4


## Question 5


