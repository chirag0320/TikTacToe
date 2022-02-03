import React,{useState,useEffect} from 'react'
import song from './ck.mp3'


const  Squre=(props)=> {

  return (
    <button  className="squre" onClick={props.onhandle} >
    {props.value}
    </button>
    
  );
}

const  Board=()=> {
  const initial=Array(9).fill(null)
  const [squre,setsqure]=useState(initial)
  const [squre2,setsqure2]=useState(true)
  const [winner,setwinner]=useState(false)
  useEffect(async()=>{
    const audioEl = document.getElementsByClassName("audio-element")[0]
    // const cccc=new Audio(song);
  await  audioEl.play();
const pausea=()=>{
  {console.log("aavyo");}
  audioEl.pause();
}
    const win =[
      [0,1,2],[3,4,5],[6,7,8],
       [0,4,8],[2,4,6],
      [0,3,6],[1,4,7],[2,5,8]
    ]
    win.map(async(e)=>{
      const kk=squre[e[0]]
      const ck=squre[e[1]]
      const z=squre[e[2]]
      
     if ((ck=='x'&& z=='x' && kk =='x')||(ck=='O'&& z=='O' && kk =='O') ) {
      
     
       return(setwinner(!winner),
          pausea()
         

       
        
       )

     } 
      
   return(
     <></>
   )
    })
  },[squre])



  const handle=(i)=> {
 
  if (winner) {
    return;
  }
 
 
        const newArr=[...squre]
        if (!newArr[i]) {
          newArr[i]=squre2?"x":"O";
          setsqure(newArr)
          setsqure2(!squre2)
          
        }
     
     
  }

  
   
  

  const renderSqure =(i)=>{
    return(
      <Squre value={squre[i]} onhandle={()=>handle(i)} />
    )
  }


  return (
    <div style={{ backgroundColor:"blue",
    margin:32,
    padding:20,
  }}>
  {console.log(winner)}
    <h1>{winner?"chilen dinner":`NEXT MOVE ${squre2?"X":"O"}`}</h1>
    <div className="row">
    {renderSqure(0)}{renderSqure(1)}{renderSqure(2)}
    </div><div className="row">
    {renderSqure(3)}{renderSqure(4)}{renderSqure(5)}
    </div><div className="row">
    {renderSqure(6)}{renderSqure(7)}{renderSqure(8)}
    </div>

    </div>
  );
}




const  App=()=> {
  
  return (
    <div className="game">
    game
    <audio className="audio-element">
          <source src={song}></source>
        </audio>
    <Board/>
    </div>
  );
}


export default App;
