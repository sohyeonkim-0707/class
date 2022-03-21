//프리젠터


//import {SubmitButton, WriterInput} from './BoardWrite.styles'
import * as S from './BoardWrite.styles' //s가 뭐야?

export default function BoardWriteUI(props) {
    
  return(
    <div>
      {/* <div>{data}</div> */}
      작성자: <S.WriterInput type="text" onChange={props.onChangeWriter}></S.WriterInput><br/>
      제목: <input type="text" onChange={props.onChangeTitle}></input><br/>
      내용: <input type="text" onChange={props.onChangeContents}></input><br/>
      <S.SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기!!! </S.SubmitButton>
    </div>
  )
}



//</input>

//export default 허페이지에서 한개 
//무조건 디폴트로 나가는 것이기 때문에 {} 필요없음