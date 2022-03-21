export default function CounterDocumentPage() {
      
      function counter( ) {
            const result = Number(document.getElementById("count").innerText) + 1
            document.getElementById("count").innerText = result
      }

      return(
            <div>
                  <div id="count">0</div>
                  <button onClick={counter}>카운트 올리기!!!</button>
            </div> /*내보낼때 끝에 껍대기 하나 있어야함 <>fragment</> 써도 됨 */
      )


}