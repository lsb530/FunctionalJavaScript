function not(v) { return !v; }
function beq(a) {
    return function(b) {
        return a === b;
    }
}
/* Memo
!를 써도 되는데 not이 왜 필요할까? ===로 비교하면 되는데 beq는 왜 필요할까?
굳이 not과 beg을 함수로 만들 필요가 있을까? 코드들을 하나씩 보면서 궁금증을 해결해보자
 */