Desarollo prueba tecnica Despachador de torrefactora

se desarrolloa la aplicacion siguinedo el modelo (MVC)
![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/94d0427d-d6d6-47c1-a4a9-e468cd9ab6c8)

Prueba de controladores. 
se pueden realizar peticiones en postman Get Put Delete y Post se mostrara cada una de la peticiones HTTP y luego se mostraran 
el funcionamiento en el frond. 
ejecutamos la aplicacion spring y hacemos las peticiones http en postman:

1) Post: http://localhost:8080/api/tareas
  ![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/eb66f27f-bdda-47ba-8bb6-9ccd695f877c)

2) Get : http://localhost:8080/api/tareas
   ![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/08f67a2d-e84c-44bf-b433-cfaeac5cc7c8)

3) Put : http://localhost:8080/api/tareas/2
   ![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/4f895bcd-60d1-40b9-a0d2-84374232f80b)

4) Delete: http://localhost:8080/api/tareas/2
   ![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/f0a8d045-ecfe-4add-9a90-9e22267610bf)

Ahora veremos en frond diseñado en React.
ingresaremos varias actividades vamos a ingresar desde postmas para tener cargadas alguas desde el comienzo
las actividades seran A,B,C y D como ejemplos, luego aremos lo mismo desde el frond, borrar, modificar y agregar.

![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/84156127-32ce-4cb7-92bb-4036a1f0218a)

Vista Frond:
![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/55b1f470-3322-4d13-847e-cc102c9bca11)

podemos eliminar desde el frond dando clic en el boton delet:
hemos eliminado la actividad D

![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/8848c31c-dadb-4406-b069-af459f0a1014)

Para modificar solo pulsamo en edict y agregamos el cambio en el panel principal y damos en guardar asi:
en este paso vamos a poner la actividad A terminada y en estado bajo:

![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/5fc0c596-d6ed-4e5b-bc33-b11937426f20)

entonces quedaria asi:

![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/691ade00-1283-4ff2-87b3-dca17097619d)

para agregar llenaos los campos y le damos en guardar:

![image](https://github.com/ArlysJavier/Prueba-t-cnica-almacafe/assets/114090836/36670f72-8d9a-4454-afea-85a4714fd162)

y de esta forma provamos y verificamos las HU

gracias











