// 정적라우팅

//게시글 목록 페이지 만들기

//라우터 객체는 next/Router 모듈에서 useRouter 훅을 불러와 사용할 수 있다. 
import {useRouter} from 'next/router'


export default function StaticRoutingPage(){
    // Page 컴포넌트 내에 useRouter를 통해 생생된 router object (라우터객체)를 이용하여 push의 정보를 얻는다 
    const router = useRouter()

    //게시물 등록 버튼을 클릭했을때 실행되는 함수 안에서 라우터 객체 실행
    const onClickMove1 = () => {
        router.push("/05-04-static-routed-board/83011")
    }
    const onClickMove2 = () => {
        router.push("/05-04-static-routed-board/83012")
    }
    const onClickMove3 = () => {
        router.push("/05-04-static-routed-board/83013")
    }

    return(
        <div>
            <button onClick={onClickMove1}>83011번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>83012번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>83013번 게시글로 이동하기</button>
        </div>
    )

}