### best me app

Neste módulo irei aprender a se comunicar com o processo enquanto ele ainda estiver rodando, além de aprender assincronismo.

#### Stdout

Irá escrever algo de saída, praticamente e `console.log()` debaixo dos panos.

#### Recebendendo dados de entrada e assincronismo com stdin.on

 o `on` no stdin ele vai ficar ouvindo, e passando dois argumentos no caso o `data` que enquanto houver dados ele irá ficar ouvindo e ficará rodando uma função.

 Para "matar" um processo nos utilizamos o seguinte comando: `process.exit()`

 ##### O processo pode ouvir eventos
 Sim e possivel que um processo ouça eventos, podemos aplicar a mesma ideia do `on` para que um processo escute um determinado evento.