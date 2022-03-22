import { useQuery, gql } from "@apollo/client"
import styled from '@emotion/styled'

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

const MyRow = styled.div`
  display:flex;
  flex-direction:row;
`
const MyColumn = styled.div`
  width:25%;
`

export default function MapBoardPage(){
    const { data } = useQuery(FETCH_BOARDS,{
    })

    console.log(data) 

    //fetchboards.writer가 안됨 
    //패치포븓의 넘버수가 들어가야함 
    return(
        <div>
          {data?.fetchBoards.map((el) => (
            //리액트한테 누구누구인지 알려줘야함. key를 가짐. key는 고유한 번호를 가져야헤 el.number
            //number 말고도 쓸 수 있는 것은 index도 가능 0부터 실행된 순서 
            <MyRow key={el.number}>
              <MyColumn><input type="checkbox"/></MyColumn>
              <MyColumn>{el.number}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
            </MyRow> 
          ))}
        </div>
    )
}

 