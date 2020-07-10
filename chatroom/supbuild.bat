@echo off

call npm run build
call cd ..\chatRoomBack\chatRoom\src\main\resources\static
::Elimina todos los directorios de webapp sin eliminar WEB-INF
for /d %%G in ('dir * /b') do (
	rmdir /s/q %%~G
)
::Elimina los archivos de de webapp sin eliminar WEB-INF
for /f %%G in ('dir * /b') do (
	del /q %%~G
)

call xcopy /S/E ..\..\..\..\..\..\chatroom\build .\
