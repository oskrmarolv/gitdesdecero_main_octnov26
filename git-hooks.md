GIT HOOK'S

Validacion de informacion.

> Client-side

Todos aquellos hooks que trabajan en el entorno local
  commit
  branch
  merge
  rebase
  push
  pull

Caracteristicas:
  * El Hook es simplemente un script que se ejecuta al interceptar el evento
  * El script puede ser de cualquier lenguaje de scripting que pueda ejecutarse en la maquina local (python, bash, nodejs, perl, power-shell)
  * Solo se ejecutan en un runtime local
  * Hooks no se comparten con el repositorio remote
  * Trabajar sobre la salida de error estandar (STDERR): A partir del analisis de su salida se determina si el hook fue exitoso o si el hook aborta todo el proceso
    stderror -> 0       success
    stderror -> *       error


> Server-side

Todos aquellos hooks que trabajan sobre el servidor GIT (GitHub no admite hooks server-side y deben ser tratador mediante su servicio de GitHub Actions. GitLab si permite la modificacion de hooks tipo server-side)
  push
  pull-request
  merge/rebase
