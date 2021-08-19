import React,{Component} from "react"
import "./mainPage.css"

 class First extends Component{
  state = {
    value:"",
    valueData:[]
  }

    handlechange = e => {
      var message = e.target.value
      this.setState({value:message})
    }

  handleSubmit = e => {
        e.preventDefault()
        this.setState({value:""})
        this.setState({valueData:[...this.state.valueData,this.state.value]})
        console.log(this.state.valueData )
    }

    handleDelete=(y) => {
        const newArray = [...this.state.valueData]
        newArray.splice(y,1)
        console.log(y)
        this.setState({valueData:newArray})
    }
    handleEdit= (x,y) => {
        const newArray = [...this.state.valueData]
        newArray.splice(y,1)
        console.log(y)
        this.setState({value:x})
        this.setState({valueData:newArray})

    }

    handleClearAll=() => {
        this.setState({valueData:[]})
    }

    handleDone= (e) => {
        e.target.className="done"
        console.log(e.target.className)
    }
    render() {
    return(
        <div>
            <div>
                <p>You Have {this.state.valueData.length} To Do List</p> 
                <input placeholder="Add Task" value={this.state.value} onChange={this.handlechange} ></input>
                <button onClick={this.handleSubmit}  >Add Item </button>
            </div>
        
            <div>
                {this.state.valueData.map((x,y)=>{
                   return <div key={y}> <li  onClick={this.handleDone} className="one">{x}
                   <button onClick={()=>{ this.handleDelete(y)}}>&#x2613;</button>
                   <button onClick={()=>{this.handleEdit(x,y)}}>&#x270E;</button>
                   </li>  
                   </div>
                })}
            </div>

            <div>
                <button onClick={this.handleClearAll}>CLEAR</button>
            </div>
        </div>
     
      )
    }
 }
 
 export default First