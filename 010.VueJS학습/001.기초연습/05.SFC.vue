<!-- html 템플릿코드 -->
<template>
    <div class="mytemp">
        <span class="tit">{{ txt }}</span>
    </div>
</template>

<!-- 자바스크립트 코드 -->
<script>
export default(await import("vue").undefinedComponent({
    name:"myTemp",
    data(){
        return{
            txt : "연습이에용~!"
        }
    }
}))
</script>

<!-- 스타일시트 코드 -->
<style scoped> /* scoped 여기에만 적용된다 */
    span.tit {color:red}
</style>