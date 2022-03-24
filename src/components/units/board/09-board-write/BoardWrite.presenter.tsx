//여기는 프리젠터 컴포넌트
import {SubmitButton, WriterInput} from './BoardWrite.styles'
import {IBoardWriteUIProps} from './BoardWrite.types'

//import * as S from './BoardWrite.styles'


export default function BoardWriteUI(props:IBoardWriteUIProps) {
  return(
    <div>
      {/* <div>{data}</div> */}
      <h1>{props.isEdit ? "수정": "등록"}페이지</h1>
      작성자: <WriterInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}></WriterInput><br/>
      제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}></input><br/>
      내용: <input type="text" onChange={props.onChangeContents}  defaultValue={props.data?.fetchBoard.contents}></input><br/>
      <SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}> 
              {props.isEdit ? "수정": "등록"}하기 
      </SubmitButton>
    </div>
  )
}
