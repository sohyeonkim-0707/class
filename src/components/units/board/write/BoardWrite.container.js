//컨테이너
import { useState } from 'react'
import { useMutation} from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter' //아래 입포트가 연결이 안되면 직접 임포트 해줘라 
import {CREATE_BOARD} from './BoardWrite.queries'



export default function BoardWrite() {
  const [isActive, setIsActive] =useState(false)

  //자바스크립트 위치로 아래 녀석들 붙여왔다
  const [myWriter, setMywriter] =useState("")
  const [myTitle, setMytitle] =useState("")
  const [myContents, setMycontents] =useState("")

  const [data, setData] =useState("")
  const [callApi] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {

      const result = await callApi({
        variables:{writer: myWriter, title: myTitle, contents: myContents}
      }) 
      console.log(result)
      console.log(result.data.createBoard.message)
      setData(result.data.createBoard.message)
  }

  const onChangeWriter = (event) =>{
    setMywriter(event.target.value)

    if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  
  }

  const onChangeTitle = (event) =>{
    setMytitle(event.target.value)

    if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  }

  const onChangeContents = (event) =>{
    
    setMycontents(event.target.value)
  
    if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  }
  //setMyContent는 함수가 끝나면 실행하는 마이컨텐츠는 뒤에 있잖아. 아직 빈값 ... 한단계 늦게 반영 ... 그래서 끝나면 실행하는데 좀 느정. 
  //그래서 해당하는 곳에 event.target.value 를 넣어줘 .. . ..... ....... ... ...


  return(
    <BoardWriteUI onChangeWriter={onChangeWriter} 
                  onChangeTitle={onChangeTitle} 
                  onChangeContents={onChangeContents}
                  callGraphqlApi={callGraphqlApi}
                  isActive={isActive} />
  ) 

}