import React from 'react'

function Status({status}) {
    if(status==="Alive"){
        return <div>Text</div>
        
    }
    else if(status==="Dead"){
        return <div>Dead</div>

    }
    else if(status==="Unknown"){
        return <div>Unknown</div>
    }

  return (
    <div>Status</div>
  )
}

export default Status