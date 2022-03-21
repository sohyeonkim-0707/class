import '../styles/globals.css' //모든페이지에전체적으로적용하고싶은css 나중에 emotion으로 바꿀거야
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'



function MyApp({ Component, pageProps }) {

  //모든세팅자리
  const client = new ApolloClient({ //새것을 하나 만들겠다.
    //기능설정내용
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()

  }) 

  return( //아폴로기능을 제공해주겠다
      <ApolloProvider client={client}> 
        <Component {...pageProps} />
      </ApolloProvider>
     )
}

export default MyApp
