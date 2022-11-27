import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore"

export default function useScroll(elRef) {
  let el = window
  const isScrollcallBack = ref(false);

  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);

  //监听window窗口的滚动
  const scrollLister = throttle(() => {
    if(el == window){
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    }else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了")
      isScrollcallBack.value = true
    }
  },300);

  //加载监听
  onMounted (() => {
    if(elRef){
      el = elRef.value
    }
    el.addEventListener("scroll", scrollLister)
  })

  //移除监听
  onUnmounted (() => {
    el.removeEventListener("scroll", scrollLister)
  })

  return { isScrollcallBack, scrollTop, scrollHeight, clientHeight };
}
