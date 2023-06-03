export const revalidatePage = (path) => {
    fetch(`/api/revalidate?path=/${path}`)
}