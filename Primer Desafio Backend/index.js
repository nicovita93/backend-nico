class ProductManager {
  static idGenerator = 1;
  constructor() {
      this.products = [];
  }
  getProducts() {
      return this.products
  }
  addProduct(title, description, price, stock, thumbnail, code) {
      const newProduct = {
          title,
          description,
          price,
          stock,
          thumbnail,
          code: code,
          id: ProductManager.idGenerator++,
      }
      if (this.products.find(product => product.code === newProduct.code)) {
          console.log("Ese codigo ya existe")
      } else {
          if (
              newProduct.title === (undefined)
              || newProduct.description === (undefined)
              || newProduct.price === (undefined)
              || newProduct.stock === (undefined)
              || newProduct.thumbnail === (undefined)
              || newProduct.code === (undefined)
          ) {
              console.log("Todos los campos son obligarios")
          } else {
              this.products.push(newProduct)
          }
      }


  }
  getProductById(findId) {
      const findProduct = this.products.find(product => product.code === findId)
      findProduct ? console.log(findProduct) : console.log("No hay ningun producto con ese id")
  }
}

const productManager = new ProductManager()
// Agrega dos productos
productManager.addProduct("ñoquis", "los mejores ñoquis de papa", 500, 24, "Foto ñoquis", 1)
productManager.addProduct("fideos", "fideos cinta o tallarines", 400, 25, "Foto fideos", 2)
// Avisa por consola que todos los campos son obligatorios
productManager.addProduct("ravioles", "ravioles de verdura", 15, "foto ravioles", 3)
// Avisa por consola que el code se repitio 
productManager.addProduct("canelones", "canelones de pollo", 800, 10, "Foto canelones", 2)

// Busca el producto de id 2
productManager.getProductById(2)

// Busca el producto de id 10 y avisa que no esta
productManager.getProductById(10)

// Muestra todos los productos 
console.log(productManager.getProducts())