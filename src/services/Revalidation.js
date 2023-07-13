export const revalidatePage = async(path) => {
    const res = await fetch(`/api/revalidate?path=${path}`);
    const data = await res.json();
    return data
}