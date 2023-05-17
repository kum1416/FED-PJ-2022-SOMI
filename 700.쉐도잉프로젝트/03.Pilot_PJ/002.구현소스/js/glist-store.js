// 전체 리스트 페이지 뷰엑스 스토어 셋팅 JS  - glist-store.js

// 전체 상품정보 불러오기
import gdata from "./gdsData/glist-items.js";

const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        // 전체상품정보 전역화
        gdata:gdata, // 뒤는 불러온 gdata, 앞에는 state변수
    },
        
    // state 데이터 변경 메서드구역!
    mutations: {
        
    },
});

// 내보내기
export default store;