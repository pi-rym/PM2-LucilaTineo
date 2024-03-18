class CarritoCompra{
constructor (){
    this.products= []
}

agregarProducto(product){
    this.products.push(product)
}

caluclarTotal(){
    let total = 0;

    for (const item of this.products){
        total += item.price * item.quantity
    }

    return total
}

aplicarDescuento(porcentaje){
    const subtotal = this.caluclarTotal()
    const descuento = this.caluclarTotal() * (porcentaje / 100)

    return subtotal - descuento
}

}

module.exports= CarritoCompra;

