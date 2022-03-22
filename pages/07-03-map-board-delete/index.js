//삭제하기 기능
//삭제하기 버튼 만들어줘
import { useQuery, gql, useMutation } from "@apollo/client"
import styled from '@emotion/styled'
//import {Fragment} from 'react' 

//게시글 몇번 보여줘가 아니라 전체 보여주니까 넘버 빼도 됨
const FETCH_BOARDS = gql` 
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }

`
const DELETE_BOARD =gql`
  mutation deleteBoard($number:Int){
    deleteBoard(number:$number){
      message
    }
  }
`



const Row = styled.div`
  display:flex;
  flex-direction:row;
`
const Column = styled.div`
  width:20%;
`




export default function MapBoardPage(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS)

    //n번 게시물을 삭제해줘라고 요청을 보냄
    const onClickDelete = (event) =>{
      deleteBoard({
        variables:{number:Number(event.target.id)},
        //삭제 된 것 다시 리패치 요청
        refetchQueries:[{query:FETCH_BOARDS}]
      })
    }

    console.log(data) 

    return(
        <>
          {data?.fetchBoards.map((el) => (
            //map 에서 index로 key 를 주면 안됨, 완전 고유한 넘버나 아아이디로 줘라 
            <Row key={el.number}>
              <Column><input type="checkbox"/></Column>
              <Column>{el.number}</Column>
              <Column>{el.writer}</Column>
              <Column>{el.title}</Column>
              <Column>
                <button id={el.number} onClick={onClickDelete}>삭제</button>
              </Column>
            </Row> 
          ))}
        </>
    )
}

 