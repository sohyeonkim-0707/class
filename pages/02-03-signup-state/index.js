import {useState} from 'react'

export default function SignUpStatePage() {
      const [email, setEmail] = useState("")     
      const [password, setPassword] = useState("")     

      function onChangeEmail(event) {
            // event 는 내가 변경한 사항들이 들어오게 됨
            //.event.target               => 태그전체 <input type="text"...>
            //event.target.value         => 우리가 입렵한 값 a@a.com
            setEmail(event.target.value )
            
      }
      function onChangePassword(event) {
            setPassword(event.target.value )
      }

      function onClickSignup(event) {
            //진짜 포장이 잘 됐는지 확인해보기
            console.log(email)
            console.log(password)
            
            //@가 있는지 검증과정
            if(email.includes("@") === false){
                  alert("이메일이 올바르지 않습니다!! @가 없음!!")
            }else{
                  alert("회원가입을 축하합니다!!!")
            }
      }


      return (
            <div>
                  이메일:<input type="text" onChange={onChangeEmail}/><br/>
                  비밀번호:<input type="password"  onChange={onChangePassword}/><br/>
                  <button onClick={onClickSignup}>회원가입</button>
            </div>
      )
}

