---
title: Introdução às Expressões no After Effects
description: Entenda por que usar expressões, como funcionam os valores e evite os erros mais comuns ao começar no After Effects.
---

# Introdução às Expressões no After Effects  

Quando comecei a brincar com expressões no After, eu me sentia quase um programador. Não me julgue haha, mas só de trocar uns valores no `wiggle` e ver a camada se mexendo sozinha, parecia coisa de outro mundo. Ao mesmo tempo, vinha aquela sensação de que esse universo não era pra mim. Eu pensava que expressões eram só pra quem manjava muito de matemática e que eu era burro demais pra aprender. Demorei bastante tempo pra desvincular essa ideia da minha cabeça e perceber que, na real, não precisa ser nenhum gênio.  

:::tip  
Foi aqui que comecei a juntar IA com motion. Uso o ChatGPT pra expressões até hoje, e você provavelmente também vai. Mas não dá pra depender só disso: entender o básico é o que permite guiar a IA e evitar erros simples.  
:::  

Com o tempo, fui entendendo que expressões são só uma forma diferente de conversar com o After. Em vez de empilhar keyframes até perder a paciência, você escreve pequenas instruções e deixa o software fazer o trabalho. É como descobrir um atalho que já tava ali o tempo todo.  

## Por que usar expressões?  

Expressões são aquelas linhas de código que dão vida à animação sem você precisar animar cada detalhe na mão. Elas servem pra quatro coisas que mudaram muito a forma como eu trabalho:  

- **Controle preciso** – quando você quer um movimento calculado no detalhe, sem depender só do arrasta-pra-cá de keyframe.  
- **Interações dinâmicas** – quando um objeto precisa reagir a outro sozinho, sem você ficar copiando keyframe.  
- **Efeitos procedurais** – quando dá pra gerar movimentos complexos com regras simples, tipo ondas, loops ou variações infinitas.  
- **Agilidade no workflow** – quando a repetição cansa e você só quer que o After faça por você.  

Claro, nem sempre é a melhor opção. Se algo pode ser resolvido com dois keyframes bem colocados, não tem por que inventar moda. Mas quando você precisa de eficiência ou de um movimento que se adapta sozinho, a expressão é imbatível.  

## Entendendo valores em expressões  

No After Effects, cada propriedade espera um tipo específico de valor. É como se cada uma falasse um idioma próprio — se você tentar falar outra língua, ela simplesmente não entende.  

- **Position** espera um array `[x, y]` (ou `[x, y, z]` em 3D).  
- **Scale** também espera um array `[x, y]`.  
- **Rotation** e **Opacity** querem apenas um número.  
- **Source Text** trabalha com strings.  

E é aqui que muita gente se frustra. Você vê um exemplo de `time * 100` em um tutorial, copia e cola na **Position**, e o After joga um erro vermelho na sua cara. Isso acontece porque:  

- `time * 100` retorna só um número, mas a Position exige um array.  

É como tentar enfiar uma chave quadrada num buraco redondo: não encaixa.  

A solução é simples: você precisa dar pra cada propriedade o formato que ela espera.  

### Exemplo com `time`  

```js
// errado: dá erro, porque Position quer um array
time * 100
```

```js
// certo: entregando o array [x, y]
x = time * 100;
y = value[1];
[x, y];
```  

## Tipos básicos de valores  

- **Number (número)** → `100`, `3.14`  
- **String (texto)** → `"Olá Mundo"`  
- **Boolean (verdadeiro/falso)** → `true`, `false`  
- **Array (lista de valores)** → `[100, 200]` (útil pra X e Y, por exemplo)  
- **Object (objeto)** → a propriedade inteira, como `thisLayer.transform.position`  

### Debug com `typeof`  

Pra descobrir o tipo de valor que você tem em mãos, dá pra usar o `typeof` num texto (Source Text):  

```js
typeof 63;        // number
typeof "Hello!";  // string
typeof true;      // boolean
typeof [32, 124]; // object (arrays em JS são tratados como objetos)
```  

*(Aqui cabe bem um vídeo mostrando cada um desses casos em ação dentro do After.)*  

---

E pra não ficar só na teoria, vou deixar aqui algumas funções básicas pra você começar a colocar em prática tudo isso. [Clique aqui para seguir para Funções Essenciais](/after-effects/).  
