async function getProducts() {
    const result = await fetch("/data/produk.json");
    if(!result.ok) return null;
    const json = await result.json();
    return json;
}