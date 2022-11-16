//Untuk Menambahkan Item Ke Keranjang

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

//Untuk Menghapus Item Dari Keranjang
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}