# CoderHogar — E-commerce React + Firestore

Aplicación web tipo e-commerce desarrollada con React y React Router. Consume productos desde Firestore, permite agregarlos a un carrito global mediante Context y generar una orden de compra en la colección `orders`.

## Funcionalidades

- Navegación con rutas: Home, categorías, detalle de producto, carrito y confirmación. 
- Catálogo con carga asíncrona desde Firestore y pantalla de “Cargando productos…”. 
- Filtrado por categoría vía URL `/category/:categoryId`. 
- Detalle de producto con contador (`ItemCount`) y agregado al carrito con render condicional (sin stock / agregado / contador). 
- Carrito global con Context: agregar items, eliminar, vaciar y calcular totales de cantidad y precio. 
- Ícono de carrito con “bubble” mostrando cantidad total de unidades. 
- Checkout con validación de formulario y creación de orden en Firestore (colección `orders`).

### Catálogo
- `ItemListContainer.jsx`: contenedor que obtiene productos (o por categoría) y renderiza `ItemList`. 
- `ItemList.jsx`: presenta el listado (grilla) y delega cada item en una `Card`.
- `Card.jsx`: tarjeta del producto con imagen/nombre/precio y link al detalle.

### Detalle
- `ItemDetailContainer.jsx`: contenedor que obtiene un producto por ID y renderiza `ItemDetail`.
- `ItemDetail.jsx`: muestra imagen/datos, controla el estado `addedToCart` y ejecuta `addItem()` del contexto.
- `ItemCount.jsx`: contador (+/−) que limita por stock y llama `onAdd`.

### Carrito / Checkout
- `Cart.jsx`: pantalla del carrito; renderiza vacío o productos agregados, muestra totales y embebe `CheckoutForm`. 
- `CartItem.jsx`: ítem dentro del carrito con botón eliminar.
- `CheckoutForm.jsx`: valida datos del comprador, crea la orden con `addDoc` en `orders`, guarda `orderId` y vacía el carrito con `clearCart()`. 

## Firestore

- Productos: colección `ecommerce-coder` (carga/consulta desde `ItemListContainer` y contenedores relacionados). 
- Órdenes: colección `orders` (alta desde `CheckoutForm`). 
