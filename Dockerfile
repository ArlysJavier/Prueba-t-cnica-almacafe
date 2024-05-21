

# imagen base de OpenJDK 17 para Java
FROM adoptopenjdk/openjdk17:alpine as builder

#directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo de configuración de dependencias
COPY mvnw .
COPY .mvn .mvn

# Copiamos los archivos de configuración del proyecto
COPY pom.xml .
COPY src ./src

# Construir el proyecto
RUN ./mvnw install -DskipTests

# Crear la imagen final
FROM adoptopenjdk/openjdk17:alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo JAR construido
COPY --from=builder /app/target/torrefactora-backend.jar torrefactora-backend.jar

# Exponer el puerto 8080
EXPOSE 8080

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["java", "-jar", "torrefactora-backend.jar"]
