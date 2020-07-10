# Xinderal, Pruebas técnicas
## Instrucciones para ejecutar el proyecto
### 1) Compilar el frontend

Para compilar el frontend se puede ejecutar a <b>supbuild.bat</b> que se puede encontrar en <i>./chatroom</i>. En caso de no usar Windows entonces el proceso se tendrá que realizar a mano:
	1. Desde una terminal entrar a <i>./chatroom</i>
	1. Ejecutar ```npm run build```
	1. Copiar todos los elementos creados en <i>./chatroom/build</i> a <i>.\chatRoomBack\chatRoom\src\main\resources\static</i>

### 2) Iniciar el aplicativo

Para ejecutar el aplicativo se requiere de un servidor <b>Tomcat</b> que soporte <b>Java8</b>. Las versiones mas recientes de STS contienen un servidor embebido que permitirá ejecutar el aplicativo como si se tratase de una aplicación Java y eso montará un setvidor <b>Tomcat</b> de forma automática.

#### 2.1) Importar el proyecto Maven

Antes de ejecutar el aplicativo, será necesario que se importe el proyecto Maven hacia el IDE (Preferentemente **STS versión 4.5**). En caso de tener **STS** o **Eclipse** se podrán seguir los pasos que a continuación se relatan:
	1. Desde la ventana del IDE ir a *File->Import*
	1. Desde el asistente de importaciones buscar las opciones **General->Existing Projects into Workspace**
Esto importará el proyecto y luego se podrá ejecutar desde el mismo IDE o generar un WAR

#### 2.2) Generación del ejecutable desde el IDE

Para montar el proyecto en un servidor **Tomcat** o similar (**JBoss, IIS**, etc...) será necesario crear un ejecutable *WAR* para lo cual, estando en el IDE STS o SPRING:
	1. Sobre el proyecto **Click derecho->Export**
	1. En el asistente de exportación, seleccionar la opción: **Web->WAR file**

Una vez generado el *WAR* se podrá montar en un servidor de aplicaciones.