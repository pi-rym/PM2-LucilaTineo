
//Partir de un enunciado.
//Implementar los tests en un módulo dentro de la carpeta tests.
//Luego, con los tests ya listos, trabajaremos en la implementación de la funcionalidad.
//Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:
//constructor(): Inicializa el carrito como un array vacío.
//agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
//calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
//aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
//Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
let carritoCompra;

beforeEach (() =>{
    carritoCompra = new CarritoCompra
})

describe('sobre el constructor de la clase CarritoCompra', () => {
    it('CarritoCompra debe ser una clase', () => {
        expect (typeof CarritoCompra.prototype.constructor).toBe('function')
    })

    it('carritoCompra debe ser una instancia de la clase CarritoCompra', () => {
        expect (carritoCompra instanceof CarritoCompra).toBe(true)
    })
})
    
describe('Métodos de la clase CarritoCompra', ()=> {
    const producto1 = {
        id: 1,
        name: 'Lapiz',
        price: 500,
        quantity: 2
    }
    
    const producto2= {
        id:2,
        name: 'birome',
        price: 700,
        quantity:3
    }
    it('Debe tener un método llamado agregarProducto', () => {
        expect(typeof carritoCompra.agregarProducto).toBe('function')
    })
    it('Debe tener un método llamado calcularTotal', ()=>{
        expect (typeof carritoCompra.calcularTotal).toBe('function')
    })
    it('Debe tener un método llamado aplicarDescuento', () => {
        expect(typeof carritoCompra.aplicarDescuento).toBe('function')
    })
    it('El método agregarProducto debe poder agregar un producto a la lista', ()=>{
        carritoCompra.agregarProducto(producto1)
        expect(carritoCompra.products).toContain(producto1)
    })
    it('El método calcularTotal debe poder calcular el total de la compra sumando el precio de todos los productos en el carrito', ()=>{
        carritoCompra.agregarProducto(producto1)
        carritoCompra.agregarProducto(producto2)

        const totalExpect = producto1.price * producto1.quantity + producto2.price * producto2.quantity
        
        const total = carritoCompra.calcularTotal()

        expect(total).toBe(totalExpect)
    })
    it('El método aplicarDescuento debe poder aplicar un descuento al total de la compra', () =>{
        carritoCompra.agregarProducto(producto1)
        carritoCompra.agregarProducto(producto2)

        const subtotal = producto1.price * producto1.quantity + producto2.price * producto2.quantity;
        
        const porcentajeDescuento = 20
        
        const totalExpect = (subtotal * (porcentajeDescuento/100))

        expect(totalExpect).toBe(total)
    });

});
})
