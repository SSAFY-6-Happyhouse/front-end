<template>
    <div class="daummap">
        <input type="text" class="addr1" id="addr1" placeholder="서울시 - 마포구 -" v-model="addr1" disabled> 
        <input type="text" class="addr2" id="addr2" placeholder="상세주소를 넣어주세요" v-model="addr2" > 
        <input type="text" class="addr1" id="zip" placeholder="우편번호" v-model="zip" disabled>
        <button @click="showApi">주소API 호출</button> <br/>
    </div>

</template>

<script>
export default {
    name: "KakaoZipCode",
    data() { 
        return { 
            zip: '', 
            addr1: '', 
            addr2: '' 
        } 
        
    },
    methods: { 
        showApi() { 
            new window.daum.Postcode({ 
                oncomplete: (data) => { 
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분. 
                    // 도로명 주소의 노출 규칙에 따라 주소를 조합한다. 
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다. 
                    let fullRoadAddr = data.roadAddress; // 도로명 주소 변수 
                    let extraRoadAddr = ''; // 도로명 조합형 주소 변수 

                    // 법정동명이 있을 경우 추가한다. (법정리는 제외) 
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다. 
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                         extraRoadAddr += data.bname; 
                    }
                    if(data.buildingName !== '' && data.apartment === 'Y'){ 
                        extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName); 
                    } // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다. 
                    if(extraRoadAddr !== ''){ 
                        extraRoadAddr = ' (' + extraRoadAddr + ')'; 
                    } // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다. 
                    if(fullRoadAddr !== ''){ fullRoadAddr += extraRoadAddr; } 
                    // 우편번호와 주소 정보를 해당 필드에 넣는다. 
                    this.zip = data.zonecode; 
                    //5자리 새우편번호 사용 
                    this.addr1 = fullRoadAddr; 
                    } 
            }).open() 
        } 
    }

}
</script>