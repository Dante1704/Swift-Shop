/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtiene la lista de todos los productos.
 *     description: Devuelve una lista de todos los productos guardados en la DB.
 *     tags: 
 *       - Create Product
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   category:
 *                     type: string
 *                   stock:
 *                     type: integer
 *                   price:
 *                     type: number
 *                   image:
 *                     type: string
 *       500:
 *         description: Error interno del servidor al obtener la lista de productos.
 */


/**
*  @swagger
* /shops:
*   get:
*     summary: Obtiene la lista de todos los shops.
*     description: Devuelve una lista de todos los shops guardados en la DB.
*     responses:
*       200:
*         description: Lista de shops obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
*                   id:
*                     type: integer
*                   name:
*                     type: string
*                   location:
*                        type: string
*                   address:
*                       type: string
*
*       500:
*         description: Error interno del servidor al obtener la lista de usuarios.
*/

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crea un nuevo producto.
 *     description: Crea un nuevo producto en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               stock:
 *                 type: integer
 *               price:
 *                 type: number  # Corregir el tipo de dato "number"
 *               image:
 *                 type: string
 *               shops:
 *                 type: string         
 *             required:
 *               - name
 *               - category
 *               - stock
 *               - price
 *               - image
 *           example:  
 *             name: Ejemplo de producto
 *             category: Electrónica
 *             stock: 10
 *             price: 99.99
 *             image: "url_de_la_imagen.jpg"
 *             shops: "105,107"
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 *       400:
 *         description: Datos de productos no válidos.
 *       500:
 *         description: Error interno del servidor al crear el producto.
 */