import { ChangeEvent } from 'react'



//컨테이너 타입
export interface IBoardWriteProps{
  isEdit:boolean
  data?:any //new페이자도 있으니까 ? 붙여 안전하게 사용 
}



export interface IMyVariables{
  number: number
  writer?: string
  title?: string
  contents?: string
}


//프레젠터 타입
export interface IBoardWriteUIProps{
  onChangeWriter: (event:ChangeEvent<HTMLInputElement>) => void //voide 아무것도 리턴 안하고 있다  
  onChangeTitle: (event:ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event:ChangeEvent<HTMLInputElement>) => void
  callGraphqlApi: () => void
  onClickUpdate: () => void
  isActive: boolean
  isEdit: boolean
  data?: any
}



// 스타일 타입

export interface ISubmitButtonProps{
  isActive:boolean
}
