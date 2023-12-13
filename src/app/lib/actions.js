import axios from "axios";
import { revalidatePath } from "next/cache";

/*Server action - 
Las acciones del servidor se pueden invocar utilizando el atributo action en un elemento <form>:
Los componentes del servidor admiten mejoras progresivas de forma predeterminada, lo que significa que el formulario se enviará incluso 
si JavaScript aún no se ha cargado o está deshabilitado.
En Componentes del Cliente, los formularios que invocan Acciones del Servidor pondrán en cola los envíos si JavaScript aún no está cargado,
priorizando la hidratación del cliente.
Después de la hidratación, el navegador no se actualiza al enviar el formulario.
Las acciones del servidor no se limitan a <form> y se pueden invocar desde controladores de eventos, useEffect, bibliotecas de terceros y otros 
elementos de formulario como <button>.
Server Actions se integra con la arquitectura de revalidación y almacenamiento en caché de Next.js. Cuando se invoca una acción, Next.js puede 
devolver tanto la interfaz de usuario actualizada como los datos nuevos en un solo viaje de ida y vuelta al servidor.
Detrás de escena, las acciones utilizan el método POST y solo este método HTTP puede invocarlas.
Los argumentos y el valor de retorno de las Acciones del Servidor deben ser serializables por React. Consulte los documentos de React para obtener una 
lista de argumentos y valores serializables.
Las acciones del servidor son funciones. Esto significa que se pueden reutilizar en cualquier lugar de su aplicación.
Las acciones del servidor heredan el tiempo de ejecución de la página o el diseño en el que se utilizan.*/

export async function deleteCard(cardId, res) {
  'use server'
  try {
    await axios.delete(`http://localhost:3000/cards/${cardId}`);

    console.log(`Card con ID ${cardId} eliminado correctamente`);

    //location.reload();
    revalidatePath('http://localhost:3001');
  } catch (error) {
    console.error("Error al eliminar el objeto:", error);
  }
}
