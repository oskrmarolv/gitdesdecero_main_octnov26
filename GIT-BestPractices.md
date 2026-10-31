# GIT: Best Practices

* Definir nomeclaturas claras que todos los desarrolladores deben implementar
  * nombres para las ramas
  * estructura de los commit's
* Siempre definir un archivo README.md (Sugerencia de notacion con Markdown)
* Siempre definir los valores de configuracion locales al repositorio para GIT


# En regresion de cambios

`git-restore` si queremos regresar cambios que aun no pasan al repositorio (staging o work-directory)

`git-revert` si queremos regresar en el tiempo pero manteniendo la estructra del repositorio solamente sumando nuevos commits que indican la regresion. Se recomienda revert solo cambios inmediatos

`git-reset` si queremos regresar en el tiempo pero alterando la estructura del repositorio (eliminando commits). Advertencia: eso rompe la linea del tiempo si se sincroniza con repositorio remoto que ya habia sido actualizado
