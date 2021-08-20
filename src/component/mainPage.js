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
                <p className="task-length">You Have {this.state.valueData.length} Task</p> 
            </div>
            
            <div className="task-middle">
                <input style={{width:"690px"}} placeholder="Task Name" value={this.state.value} onChange={this.handlechange} ></input>
                <button onClick={this.handleSubmit}  >Add Item </button>
            </div>
        
            <div className="task-name">
                {this.state.valueData.map((x,y)=>{
                   return <div className="task-all" key={y}>
                                <p className="task-data">
                                      <li  onClick={this.handleDone} className="one">
                                            {x}
                                            <button className="task-data-btn" style={{color:"red",backgroundColor:"white",border:"none"}} onClick={()=>{ this.handleDelete(y)}}>&#x2613;</button>
                                            <button className="task-data-btn" style={{color:"blue",backgroundColor:"white",border:"none"}} onClick={()=>{this.handleEdit(x,y)}}>&#x270E;</button>
                                     </li>  
                                </p>
                            </div>
                })}
            </div>

            <div className="task-clear-all">
                <div>
                    <button style={{color:"green",backgroundColor:"white",border:"none"}} onClick={this.handleClearAll}>CLEAR</button>
                </div>
            </div>
        </div>
     
      )
    }
 }
 
 export default First