import { ref, onMounted, onBeforeUnmount } from "vue"

export function useWindowWidth() {
    const windowWidth = ref(window.innerWidth)

    const updateWindowWidth = () => {
        windowWidth.value = window.innerWidth
    }

    onMounted(() => {
        window.addEventListener("resize", updateWindowWidth)
    })

    onBeforeUnmount(() => {
        window.removeEventListener("resize", updateWindowWidth)
    })

    return { windowWidth }
}
