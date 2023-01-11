function Msg(){
    return(
<div id="container" style={{color: "black"}}>
      {/* <h1>
         Message app
      </h1> */}
      <div id="chatSection">
        <div class="chat-window"></div>
        <form class="chat-form">
          <label class="chat-label">
            Enter a message:
            <input type="text" class="chat-input" />
          </label>
          <input type="submit" class="btn btn-dark" id="bt" value="enter" />
        </form>
      </div>
    </div>
    )
}
export default Msg;